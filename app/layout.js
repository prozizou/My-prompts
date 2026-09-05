import Script from "next/script";
import "./globals.css";
import PwaInstall from "../components/PwaInstall";
import ThemeToggle from "../components/ThemeToggle";

const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem("pv-theme");
    var theme = stored || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {}
})();
`;

export const metadata = {
  title: "Prompt Vault",
  description: "Bibliothèque personnelle de prompts IA avec Firebase RTDB",
  manifest: "/manifest.json",
  applicationName: "Prompt Vault",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Prompt Vault"
  },
  formatDetection: {
    telephone: false
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  }
};

export const viewport = {
  themeColor: "#111827",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover"
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {THEME_INIT_SCRIPT}
        </Script>
      </head>
      <body>
        <ThemeToggle />
        {children}
        <PwaInstall />
      </body>
    </html>
  );
}
