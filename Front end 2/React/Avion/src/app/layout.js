import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/header";

export const metadata = {
  title: "Minha primeira aplicação",
  description: "Uma descrição bem legal",
  charset: 'UTF-8',
  author: 'Lopes',
  keywords: 'Seila fi',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}