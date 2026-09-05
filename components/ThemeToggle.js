"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(document.documentElement.getAttribute("data-theme") || "light");
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("pv-theme", next);
    } catch {}
    setTheme(next);
  }

  if (!theme) return <span className="theme-toggle-fab theme-toggle-placeholder" aria-hidden="true" />;

  return (
    <button
      className="theme-toggle-fab"
      onClick={toggle}
      aria-label={theme === "dark" ? "Activer le thème clair" : "Activer le thème sombre"}
      title={theme === "dark" ? "Thème clair" : "Thème sombre"}
    >
      <svg className={`theme-icon sun ${theme === "dark" ? "hidden-icon" : ""}`} viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="4.2" />
        <path d="M12 2.5v2.4M12 19.1v2.4M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7" />
      </svg>
      <svg className={`theme-icon moon ${theme === "dark" ? "" : "hidden-icon"}`} viewBox="0 0 24 24" width="19" height="19" fill="currentColor">
        <path d="M20.6 15.3a8.7 8.7 0 0 1-11-11 .75.75 0 0 0-.96-.96A9.7 9.7 0 1 0 21.56 16.3a.75.75 0 0 0-.96-1Z" />
      </svg>
    </button>
  );
}
