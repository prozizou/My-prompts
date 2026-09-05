"use client";

import { useEffect, useState } from "react";

export default function PwaInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [visible, setVisible] = useState(false);
  const [installed, setInstalled] = useState(false);
  const [iosHint, setIosHint] = useState(false);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    }

    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone === true;
    if (isStandalone) {
      setInstalled(true);
      return;
    }

    if (localStorage.getItem("pv-install-dismissed") === "1") return;

    const handleBeforeInstall = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setVisible(true);
    };
    window.addEventListener("beforeinstallprompt", handleBeforeInstall);

    const handleInstalled = () => {
      setInstalled(true);
      setVisible(false);
    };
    window.addEventListener("appinstalled", handleInstalled);

    // iOS Safari has no beforeinstallprompt: show a manual hint instead.
    const ua = window.navigator.userAgent;
    const isIos = /iphone|ipad|ipod/i.test(ua);
    const isSafari = /safari/i.test(ua) && !/crios|fxios|edgios/i.test(ua);
    if (isIos && isSafari && !isStandalone) {
      setIosHint(true);
      setVisible(true);
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
      window.removeEventListener("appinstalled", handleInstalled);
    };
  }, []);

  async function handleInstallClick() {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    setVisible(false);
  }

  function dismiss() {
    setVisible(false);
    localStorage.setItem("pv-install-dismissed", "1");
  }

  if (installed || !visible) return null;

  return (
    <div className="pv-install-banner" role="dialog" aria-label="Installer l'application">
      <div className="pv-install-icon">
        <img src="/icons/icon-96.png" alt="" width={40} height={40} />
      </div>
      <div className="pv-install-text">
        <strong>Installer Prompt Vault</strong>
        <span>
          {iosHint
            ? "Appuyez sur Partager, puis « Sur l'écran d'accueil »"
            : "Accès rapide depuis votre écran d'accueil, hors ligne inclus"}
        </span>
      </div>
      <div className="pv-install-actions">
        {!iosHint && (
          <button className="pv-install-btn" onClick={handleInstallClick}>
            Installer
          </button>
        )}
        <button className="pv-install-close" onClick={dismiss} aria-label="Fermer">
          ✕
        </button>
      </div>
    </div>
  );
}
