import "./globals.css";

export const metadata = {
  title: "Prompt Vault",
  description: "Bibliothèque personnelle de prompts IA avec Firebase RTDB"
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
