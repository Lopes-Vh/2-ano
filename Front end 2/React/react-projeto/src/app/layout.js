//import localFont from "next/font/local";
import "./globals.css";


export const metadata = {
  title: "Projeto",
  description: "teste de aplicação simples",
  charset: 'UTF-8',
  author: 'Lopes',
  keywords: 'HTML, CSS, JavaScript, React, Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
