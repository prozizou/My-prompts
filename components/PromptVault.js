"use client";

import { useEffect, useMemo, useState } from "react";
import {
  GoogleAuthProvider,
  getRedirectResult,
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
  signOut
} from "firebase/auth";
import { onValue, push, ref, remove, set, update } from "firebase/database";
import { auth, db, OWNER_UID } from "../lib/firebase";
import { SEED_PROMPTS } from "../lib/seedPrompts";

const provider = new GoogleAuthProvider();

function normalizePrompt(id, data = {}) {
  return {
    id,
    title: data.title || "Sans titre",
    content: data.content || "",
    category: data.category || "Autres",
    tags: Array.isArray(data.tags) ? data.tags : [],
    favorite: Boolean(data.favorite),
    createdAt: Number(data.createdAt || 0),
    updatedAt: Number(data.updatedAt || 0)
  };
}

function formatDate(timestamp) {
  if (!timestamp) return "";
  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(new Date(timestamp));
}

export default function PromptVault() {
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);
  const [prompts, setPrompts] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("updated-desc");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingPrompt, setEditingPrompt] = useState(null);
  const [toast, setToast] = useState("");

  const notify = (message) => {
    setToast(message);
    window.clearTimeout(notify.timer);
    notify.timer = window.setTimeout(() => setToast(""), 2300);
  };

  useEffect(() => {
    getRedirectResult(auth).catch((error) => notify(`Connexion : ${error.message}`));
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser && currentUser.uid !== OWNER_UID) {
        notify("Ce compte n'est pas autorisé.");
        await signOut(auth);
        setUser(null);
      } else {
        setUser(currentUser);
      }
      setAuthReady(true);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!user) {
      setPrompts([]);
      return undefined;
    }
    const promptsRef = ref(db, `users/${user.uid}/prompts`);
    return onValue(
      promptsRef,
      (snapshot) => {
        const data = snapshot.val() || {};
        setPrompts(Object.entries(data).map(([id, value]) => normalizePrompt(id, value)));
      },
      (error) => notify(`Erreur Firebase : ${error.message}`)
    );
  }, [user]);

  const categories = useMemo(() => {
    const counts = {};
    prompts.forEach((prompt) => {
      const category = prompt.category || "Autres";
      counts[category] = (counts[category] || 0) + 1;
    });
    return Object.entries(counts).sort(([a], [b]) => a.localeCompare(b, "fr"));
  }, [prompts]);

  const visiblePrompts = useMemo(() => {
    const query = search.trim().toLowerCase();
    const list = prompts.filter((prompt) => {
      if (activeFilter === "favorites" && !prompt.favorite) return false;
      if (activeFilter.startsWith("category:") && prompt.category !== activeFilter.slice(9)) return false;
      if (!query) return true;
      return [prompt.title, prompt.content, prompt.category, ...prompt.tags]
        .join(" ")
        .toLowerCase()
        .includes(query);
    });

    if (sort === "title-asc") list.sort((a, b) => a.title.localeCompare(b.title, "fr"));
    else if (sort === "created-desc") list.sort((a, b) => b.createdAt - a.createdAt);
    else list.sort((a, b) => b.updatedAt - a.updatedAt);
    return list;
  }, [prompts, activeFilter, search, sort]);

  const missingSeedPrompts = useMemo(() => {
    const existingIds = new Set(prompts.map((prompt) => prompt.id));
    return SEED_PROMPTS.filter((seed) => !existingIds.has(seed.id));
  }, [prompts]);

  const favoritesCount = prompts.filter((prompt) => prompt.favorite).length;
  const viewTitle = activeFilter === "favorites"
    ? "Favoris"
    : activeFilter.startsWith("category:")
      ? activeFilter.slice(9)
      : "Tous les prompts";

  async function login() {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      if (["auth/popup-blocked", "auth/cancelled-popup-request", "auth/operation-not-supported-in-this-environment"].includes(error.code)) {
        await signInWithRedirect(auth, provider);
      } else {
        notify(`Connexion impossible : ${error.message}`);
      }
    }
  }

  function openCreate() {
    setEditingPrompt(null);
    setModalOpen(true);
  }

  async function savePrompt(formData) {
    if (!user || user.uid !== OWNER_UID) return;
    const now = Date.now();
    const payload = {
      title: formData.title.trim(),
      content: formData.content.trim(),
      category: formData.category.trim() || "Autres",
      tags: [...new Set(formData.tags.split(",").map((tag) => tag.trim().replace(/^#/, "")).filter(Boolean))],
      favorite: formData.favorite,
      updatedAt: now
    };

    try {
      if (editingPrompt) {
        await update(ref(db, `users/${user.uid}/prompts/${editingPrompt.id}`), payload);
        notify("Prompt modifié.");
      } else {
        await set(push(ref(db, `users/${user.uid}/prompts`)), { ...payload, createdAt: now });
        notify("Prompt enregistré.");
      }
      setModalOpen(false);
      setEditingPrompt(null);
    } catch (error) {
      notify(`Enregistrement impossible : ${error.message}`);
    }
  }

  async function importSeedPrompts() {
    if (!user || user.uid !== OWNER_UID || missingSeedPrompts.length === 0) return;
    const now = Date.now();
    const updates = {};
    missingSeedPrompts.forEach((seed) => {
      updates[`users/${user.uid}/prompts/${seed.id}`] = {
        title: seed.title,
        content: seed.content,
        category: seed.category,
        tags: seed.tags,
        favorite: false,
        createdAt: now,
        updatedAt: now
      };
    });

    try {
      await update(ref(db), updates);
      notify(`${missingSeedPrompts.length} prompt(s) importé(s).`);
    } catch (error) {
      notify(`Import impossible : ${error.message}`);
    }
  }

  async function toggleFavorite(prompt) {
    await update(ref(db, `users/${user.uid}/prompts/${prompt.id}`), {
      favorite: !prompt.favorite,
      updatedAt: Date.now()
    }).catch(() => notify("Impossible de modifier le favori."));
  }

  async function deletePrompt(prompt) {
    if (!window.confirm(`Supprimer « ${prompt.title} » ?`)) return;
    await remove(ref(db, `users/${user.uid}/prompts/${prompt.id}`))
      .then(() => notify("Prompt supprimé."))
      .catch((error) => notify(`Suppression impossible : ${error.message}`));
  }

  async function copyText(text, message) {
    try {
      await navigator.clipboard.writeText(text);
      notify(message);
    } catch {
      notify("Copie impossible sur ce navigateur.");
    }
  }

  function copyTitle(title) {
    return copyText(`/${title}`, "Titre copié.");
  }

  function copyPrompt(content) {
    return copyText(content, "Description copiée.");
  }

  if (!authReady) {
    return (
      <div className="loading-screen">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/icon-96.png" alt="" className="loading-mark" width={60} height={60} />
        <p className="loading-text">Ouverture de votre coffre…</p>
      </div>
    );
  }

  if (!user) {
    return (
      <section className="login-view">
        <div className="login-card">
          <div className="brand-mark">P</div>
          <p className="eyebrow">Bibliothèque personnelle</p>
          <h1>Prompt Vault</h1>
          <p className="muted">Stockez, classez et retrouvez vos prompts IA depuis Firebase Realtime Database.</p>
          <button className="btn btn-primary btn-block" onClick={login}>
            <span className="google-dot">G</span> Se connecter avec Google
          </button>
          <p className="security-note">L'accès est limité à votre compte Firebase.</p>
        </div>
        {toast && <div className="toast show">{toast}</div>}
      </section>
    );
  }

  return (
    <div className="app">
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-top">
          <div className="brand">
            <div className="brand-mark small">P</div>
            <div><strong>Prompt Vault</strong><span>Ma bibliothèque IA</span></div>
          </div>
          <button className="btn btn-primary btn-block" onClick={openCreate}>+ Nouveau prompt</button>
          {missingSeedPrompts.length > 0 && (
            <button className="btn btn-secondary btn-block" onClick={importSeedPrompts}>
              Importer {missingSeedPrompts.length} prompt{missingSeedPrompts.length > 1 ? "s" : ""} prédéfini{missingSeedPrompts.length > 1 ? "s" : ""}
            </button>
          )}

          <nav className="nav">
            <button className={`nav-item ${activeFilter === "all" ? "active" : ""}`} onClick={() => { setActiveFilter("all"); setSidebarOpen(false); }}>
              <span>▦</span><span>Tous les prompts</span><b>{prompts.length}</b>
            </button>
            <button className={`nav-item ${activeFilter === "favorites" ? "active" : ""}`} onClick={() => { setActiveFilter("favorites"); setSidebarOpen(false); }}>
              <span>★</span><span>Favoris</span><b>{favoritesCount}</b>
            </button>
          </nav>

          <div className="sidebar-section">
            <div className="section-title">Catégories</div>
            <div className="category-nav">
              {categories.map(([category, count]) => (
                <button key={category} className={`category-item ${activeFilter === `category:${category}` ? "active" : ""}`} onClick={() => { setActiveFilter(`category:${category}`); setSidebarOpen(false); }}>
                  <span>•</span><span>{category}</span><b>{count}</b>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="profile">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={user.photoURL || "/avatar.svg"} alt="Avatar" />
          <div className="profile-text"><strong>{user.displayName || "Propriétaire"}</strong><span>{user.email}</span></div>
          <button className="icon-btn" title="Déconnexion" onClick={() => signOut(auth)}>↪</button>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <button className="icon-btn mobile-only" onClick={() => setSidebarOpen((value) => !value)}>☰</button>
          <div><p className="eyebrow">Bibliothèque</p><h2>{viewTitle}</h2></div>
          <button className="btn btn-primary mobile-only" onClick={openCreate}>+ Ajouter</button>
        </header>

        <section className="toolbar">
          <label className="search-box"><span>⌕</span><input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Rechercher un prompt, tag, catégorie..." /></label>
          <select className="select" value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="updated-desc">Plus récents</option>
            <option value="created-desc">Date de création</option>
            <option value="title-asc">Titre A → Z</option>
          </select>
        </section>

        <section className="stats">
          <article><span>Prompts</span><strong>{prompts.length}</strong></article>
          <article><span>Favoris</span><strong>{favoritesCount}</strong></article>
          <article><span>Catégories</span><strong>{categories.length}</strong></article>
        </section>

        {visiblePrompts.length ? (
          <section className="prompt-grid">
            {visiblePrompts.map((prompt) => (
              <article className="prompt-card" key={prompt.id}>
                <div className="card-top">
                  <div><h3 className="card-title">{prompt.title}</h3><span className="category-pill">{prompt.category}</span></div>
                  <button className={`favorite-btn ${prompt.favorite ? "active" : ""}`} onClick={() => toggleFavorite(prompt)}>{prompt.favorite ? "★" : "☆"}</button>
                </div>
                <div className="prompt-content">{prompt.content}</div>
                <div className="tags">{prompt.tags.map((tag) => <span className="tag" key={tag}>#{tag}</span>)}</div>
                <div className="card-footer">
                  <span className="card-date">{formatDate(prompt.updatedAt || prompt.createdAt)}</span>
                  <div className="card-actions">
                    <button onClick={() => copyTitle(prompt.title)}>Copier /titre</button>
                    <button onClick={() => copyPrompt(prompt.content)}>Copier description</button>
                    <button onClick={() => { setEditingPrompt(prompt); setModalOpen(true); }}>Modifier</button>
                    <button className="delete" onClick={() => deletePrompt(prompt)}>Supprimer</button>
                  </div>
                </div>
              </article>
            ))}
          </section>
        ) : (
          <section className="empty-state">
            <div className="empty-icon">✦</div><h3>Aucun prompt trouvé</h3><p>Ajoutez votre premier prompt ou modifiez votre recherche.</p>
            <button className="btn btn-primary" onClick={openCreate}>Ajouter un prompt</button>
          </section>
        )}
      </main>

      {modalOpen && <PromptModal prompt={editingPrompt} categories={categories.map(([name]) => name)} onClose={() => setModalOpen(false)} onSave={savePrompt} />}
      {toast && <div className="toast show">{toast}</div>}
    </div>
  );
}

function PromptModal({ prompt, categories, onClose, onSave }) {
  const [form, setForm] = useState({
    title: prompt?.title || "",
    category: prompt?.category || "Autres",
    tags: prompt?.tags?.join(", ") || "",
    content: prompt?.content || "",
    favorite: prompt?.favorite || false
  });
  const [saving, setSaving] = useState(false);

  async function submit(event) {
    event.preventDefault();
    if (!form.title.trim() || !form.content.trim()) return;
    setSaving(true);
    await onSave(form);
    setSaving(false);
  }

  return (
    <div className="modal-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <section className="modal" role="dialog" aria-modal="true">
        <div className="modal-header"><div><p className="eyebrow">Édition</p><h2>{prompt ? "Modifier le prompt" : "Nouveau prompt"}</h2></div><button className="icon-btn" onClick={onClose}>✕</button></div>
        <form onSubmit={submit}>
          <label><span>Titre *</span><input required maxLength={120} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Ex. Publicité produit premium" /></label>
          <div className="form-row">
            <label><span>Catégorie</span><input list="categories" maxLength={50} value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} placeholder="Ex. Image" /><datalist id="categories">{categories.map((category) => <option key={category} value={category} />)}</datalist></label>
            <label><span>Tags</span><input maxLength={200} value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })} placeholder="image, pub, produit" /></label>
          </div>
          <label><span>Prompt *</span><textarea required rows={12} value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} placeholder="Écrivez votre prompt ici..." /></label>
          <label className="check-row"><input type="checkbox" checked={form.favorite} onChange={(e) => setForm({ ...form, favorite: e.target.checked })} /><span>Ajouter aux favoris</span></label>
          <div className="modal-actions"><button type="button" className="btn btn-secondary" onClick={onClose}>Annuler</button><button type="submit" className="btn btn-primary" disabled={saving}>{saving ? "Enregistrement…" : "Enregistrer"}</button></div>
        </form>
      </section>
    </div>
  );
}
