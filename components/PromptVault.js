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
import { ALLOWED_EMAILS, auth, db, OWNER_UID } from "../lib/firebase";
import { SEED_PROMPTS } from "../lib/seedPrompts";

const provider = new GoogleAuthProvider();
const VISIBLE_CATEGORY_LIMIT = 8;
const CONTENT_PREVIEW_THRESHOLD = 160;

function normalizePrompt(id, data = {}) {
  return {
    id,
    title: data.title || "Sans titre",
    content: data.content || "",
    category: data.category || "Autres",
    tags: Array.isArray(data.tags) ? data.tags : [],
    favorite: Boolean(data.favorite),
    createdAt: Number(data.createdAt || 0),
    updatedAt: Number(data.updatedAt || 0),
    usageCount: Number(data.usageCount || 0),
    lastUsedAt: Number(data.lastUsedAt || 0)
  };
}

function isAllowed(currentUser) {
  const email = (currentUser?.email || "").toLowerCase();
  return ALLOWED_EMAILS.map((e) => e.toLowerCase()).includes(email);
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
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("updated-desc");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [categorySearch, setCategorySearch] = useState("");
  const [categoriesExpanded, setCategoriesExpanded] = useState(false);
  const [expandedIds, setExpandedIds] = useState(() => new Set());
  const [openMenuId, setOpenMenuId] = useState(null);
  const [pulsingId, setPulsingId] = useState(null);
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
      if (currentUser && !isAllowed(currentUser)) {
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
    const promptsRef = ref(db, `users/${OWNER_UID}/prompts`);
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

  const filteredCategories = useMemo(() => {
    const query = categorySearch.trim().toLowerCase();
    if (!query) return categories;
    return categories.filter(([name]) => name.toLowerCase().includes(query));
  }, [categories, categorySearch]);

  const categorySearchActive = categorySearch.trim().length > 0;
  const categoriesToShow = categorySearchActive || categoriesExpanded
    ? filteredCategories
    : filteredCategories.slice(0, VISIBLE_CATEGORY_LIMIT);
  const hiddenCategoryCount = filteredCategories.length - categoriesToShow.length;

  const visiblePrompts = useMemo(() => {
    const query = search.trim().toLowerCase();
    const list = prompts.filter((prompt) => {
      if (favoritesOnly && !prompt.favorite) return false;
      if (selectedCategory && prompt.category !== selectedCategory) return false;
      if (!query) return true;
      return [prompt.title, prompt.content, prompt.category, ...prompt.tags]
        .join(" ")
        .toLowerCase()
        .includes(query);
    });

    if (sort === "title-asc") list.sort((a, b) => a.title.localeCompare(b.title, "fr"));
    else if (sort === "created-desc") list.sort((a, b) => b.createdAt - a.createdAt);
    else if (sort === "usage-desc") list.sort((a, b) => b.usageCount - a.usageCount);
    else list.sort((a, b) => b.updatedAt - a.updatedAt);
    return list;
  }, [prompts, selectedCategory, favoritesOnly, search, sort]);

  const missingSeedPrompts = useMemo(() => {
    const existingIds = new Set(prompts.map((prompt) => prompt.id));
    return SEED_PROMPTS.filter((seed) => !existingIds.has(seed.id));
  }, [prompts]);

  const favoritesCount = prompts.filter((prompt) => prompt.favorite).length;
  const viewTitle = selectedCategory || (favoritesOnly ? "Favoris" : "Tous les prompts");
  const activeFilterCount = (selectedCategory ? 1 : 0) + (favoritesOnly ? 1 : 0) + (sort !== "updated-desc" ? 1 : 0);

  function selectAll() {
    setSelectedCategory(null);
    setFavoritesOnly(false);
    setSidebarOpen(false);
  }

  function selectFavorites() {
    setFavoritesOnly(true);
    setSelectedCategory(null);
    setSidebarOpen(false);
  }

  function selectCategory(category) {
    setSelectedCategory(category);
    setFavoritesOnly(false);
    setSidebarOpen(false);
  }

  function resetFilters() {
    setSelectedCategory(null);
    setFavoritesOnly(false);
    setSort("updated-desc");
  }

  function toggleExpanded(id) {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

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

  function openEdit(prompt) {
    setEditingPrompt(prompt);
    setModalOpen(true);
    setOpenMenuId(null);
  }

  async function savePrompt(formData) {
    if (!user || !isAllowed(user)) return;
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
        await update(ref(db, `users/${OWNER_UID}/prompts/${editingPrompt.id}`), payload);
        notify("Prompt modifié.");
      } else {
        await set(push(ref(db, `users/${OWNER_UID}/prompts`)), { ...payload, createdAt: now, usageCount: 0, lastUsedAt: 0 });
        notify("Prompt enregistré.");
      }
      setModalOpen(false);
      setEditingPrompt(null);
    } catch (error) {
      notify(`Enregistrement impossible : ${error.message}`);
    }
  }

  async function importSeedPrompts() {
    if (!user || !isAllowed(user) || missingSeedPrompts.length === 0) return;
    const now = Date.now();
    const updates = {};
    missingSeedPrompts.forEach((seed) => {
      updates[`users/${OWNER_UID}/prompts/${seed.id}`] = {
        title: seed.title,
        content: seed.content,
        category: seed.category,
        tags: seed.tags,
        favorite: false,
        createdAt: now,
        updatedAt: now,
        usageCount: 0,
        lastUsedAt: 0
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
    setPulsingId(prompt.id);
    window.setTimeout(() => setPulsingId((current) => (current === prompt.id ? null : current)), 400);
    await update(ref(db, `users/${OWNER_UID}/prompts/${prompt.id}`), {
      favorite: !prompt.favorite,
      updatedAt: Date.now()
    })
      .then(() => notify(prompt.favorite ? "Retiré des favoris." : "Ajouté aux favoris."))
      .catch(() => notify("Impossible de modifier le favori."));
  }

  async function deletePrompt(prompt) {
    setOpenMenuId(null);
    if (!window.confirm(`Supprimer « ${prompt.title} » ? Cette action est irréversible.`)) return;
    await remove(ref(db, `users/${OWNER_UID}/prompts/${prompt.id}`))
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

  function copyTitle(prompt) {
    setOpenMenuId(null);
    return copyText(`/${prompt.title}`, "Titre copié.");
  }

  function copyPrompt(prompt) {
    return copyText(prompt.content, "Prompt copié.");
  }

  async function usePrompt(prompt) {
    await copyText(prompt.content, "Prompt copié et marqué comme utilisé.");
    update(ref(db, `users/${OWNER_UID}/prompts/${prompt.id}`), {
      usageCount: (prompt.usageCount || 0) + 1,
      lastUsedAt: Date.now()
    }).catch(() => {});
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
          <p className="security-note">L'accès est limité aux comptes autorisés.</p>
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
          {missingSeedPrompts.length > 0 && (
            <button className="btn btn-secondary btn-block" onClick={importSeedPrompts}>
              Importer {missingSeedPrompts.length} prompt{missingSeedPrompts.length > 1 ? "s" : ""} prédéfini{missingSeedPrompts.length > 1 ? "s" : ""}
            </button>
          )}

          <nav className="nav">
            <button className={`nav-item ${!selectedCategory && !favoritesOnly ? "active" : ""}`} onClick={selectAll}>
              <span>▦</span><span>Tous les prompts</span><b>{prompts.length}</b>
            </button>
            <button className={`nav-item ${favoritesOnly ? "active" : ""}`} onClick={selectFavorites}>
              <span>★</span><span>Favoris</span><b>{favoritesCount}</b>
            </button>
          </nav>

          <div className="sidebar-section">
            <div className="section-title">Catégories</div>
            {categories.length > 6 && (
              <input
                className="category-search"
                type="search"
                value={categorySearch}
                onChange={(e) => setCategorySearch(e.target.value)}
                placeholder="Filtrer les catégories..."
              />
            )}
            <div className="category-nav">
              {categoriesToShow.map(([category, count]) => (
                <button
                  key={category}
                  title={category}
                  className={`category-item ${selectedCategory === category ? "active" : ""}`}
                  onClick={() => selectCategory(category)}
                >
                  <span>•</span><span>{category}</span><b>{count}</b>
                </button>
              ))}
              {categoriesToShow.length === 0 && <p className="muted category-empty">Aucune catégorie.</p>}
            </div>
            {!categorySearchActive && hiddenCategoryCount > 0 && (
              <button className="category-toggle" onClick={() => setCategoriesExpanded(true)}>
                Voir les {hiddenCategoryCount} autres catégories
              </button>
            )}
            {!categorySearchActive && categoriesExpanded && filteredCategories.length > VISIBLE_CATEGORY_LIMIT && (
              <button className="category-toggle" onClick={() => setCategoriesExpanded(false)}>Réduire</button>
            )}
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
          <div className="topbar-heading">
            <p className="eyebrow">Bibliothèque</p>
            <h2>{viewTitle}</h2>
            <p className="kpi-inline">
              {prompts.length} prompt{prompts.length !== 1 ? "s" : ""} · {favoritesCount} favori{favoritesCount !== 1 ? "s" : ""} · {categories.length} catégorie{categories.length !== 1 ? "s" : ""}
            </p>
          </div>
          <button className="btn btn-primary" onClick={openCreate}>
            <span>+ Nouveau</span><span className="hide-narrow"> prompt</span>
          </button>
        </header>

        <section className="toolbar">
          <label className="search-box">
            <span>⌕</span>
            <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Rechercher un prompt, tag, catégorie..." />
          </label>
          <button className={`btn btn-secondary filters-toggle ${filtersOpen ? "active" : ""}`} onClick={() => setFiltersOpen((v) => !v)}>
            Filtres{activeFilterCount > 0 && <span className="filter-badge">{activeFilterCount}</span>}
          </button>
        </section>

        {filtersOpen && (
          <section className="filters-panel">
            <label className="filter-field">
              <span>Catégorie</span>
              <select className="select" value={selectedCategory || ""} onChange={(e) => setSelectedCategory(e.target.value || null)}>
                <option value="">Toutes les catégories</option>
                {categories.map(([name]) => <option key={name} value={name}>{name}</option>)}
              </select>
            </label>
            <label className="filter-field filter-checkbox">
              <input type="checkbox" checked={favoritesOnly} onChange={(e) => setFavoritesOnly(e.target.checked)} />
              <span>Favoris uniquement</span>
            </label>
            <label className="filter-field">
              <span>Trier par</span>
              <select className="select" value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="updated-desc">Plus récents</option>
                <option value="created-desc">Date de création</option>
                <option value="title-asc">Titre A → Z</option>
                <option value="usage-desc">Plus utilisé</option>
              </select>
            </label>
            {activeFilterCount > 0 && (
              <button className="filter-reset" onClick={resetFilters}>Réinitialiser</button>
            )}
          </section>
        )}

        {visiblePrompts.length ? (
          <section className="prompt-grid">
            {visiblePrompts.map((prompt) => {
              const expanded = expandedIds.has(prompt.id);
              const canExpand = prompt.content.length > CONTENT_PREVIEW_THRESHOLD;
              return (
                <article
                  className={`prompt-card ${openMenuId === prompt.id ? "menu-open" : ""}`}
                  key={prompt.id}
                  onClick={() => toggleExpanded(prompt.id)}
                >
                  <div className="card-top">
                    <h3 className="card-title">{prompt.title}</h3>
                    <button
                      className={`favorite-btn ${prompt.favorite ? "active" : ""} ${pulsingId === prompt.id ? "pulse" : ""}`}
                      onClick={(e) => { e.stopPropagation(); toggleFavorite(prompt); }}
                      title={prompt.favorite ? "Retirer des favoris" : "Ajouter aux favoris"}
                    >
                      {prompt.favorite ? "★" : "☆"}
                    </button>
                  </div>
                  <span className="category-pill">{prompt.category}</span>
                  <div className={`prompt-content ${expanded ? "expanded" : ""}`}>{prompt.content}</div>
                  {canExpand && (
                    <button type="button" className="see-more" onClick={(e) => { e.stopPropagation(); toggleExpanded(prompt.id); }}>
                      {expanded ? "Voir moins" : "Voir plus"}
                    </button>
                  )}
                  <div className="card-meta">
                    <div className="tags">{prompt.tags.map((tag) => <span className="tag" key={tag}>#{tag}</span>)}</div>
                    <span className="card-date">Modifié le {formatDate(prompt.updatedAt || prompt.createdAt)}</span>
                  </div>
                  <div className="card-actions" onClick={(e) => e.stopPropagation()}>
                    <button className="btn-copy" onClick={() => copyPrompt(prompt)}>Copier</button>
                    <button className="btn-use" onClick={() => usePrompt(prompt)}>Utiliser</button>
                    <div className="menu-wrap">
                      <button className="menu-trigger" onClick={() => setOpenMenuId((id) => (id === prompt.id ? null : prompt.id))}>⋯</button>
                      {openMenuId === prompt.id && (
                        <div className="dropdown-menu">
                          <button onClick={() => copyTitle(prompt)}>Copier /titre</button>
                          <button onClick={() => openEdit(prompt)}>Modifier</button>
                          <button className="delete" onClick={() => deletePrompt(prompt)}>Supprimer</button>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </section>
        ) : (
          <section className="empty-state">
            <div className="empty-icon">✦</div><h3>Aucun prompt trouvé</h3><p>Ajoutez votre premier prompt ou modifiez votre recherche.</p>
            <button className="btn btn-primary" onClick={openCreate}>Ajouter un prompt</button>
          </section>
        )}
      </main>

      {openMenuId && <div className="menu-backdrop" onClick={() => setOpenMenuId(null)} />}
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
