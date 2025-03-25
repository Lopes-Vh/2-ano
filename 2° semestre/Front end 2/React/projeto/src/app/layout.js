import localFont from "next/font/local";
import "./globals.css";
import Header from "@/Componentes/Header";

export const metadata = {
  title: "Nuh uh",
  description: "Never dogfigth with a Sukhoi",
  charset: 'UTF-8',
  author: 'Lopes',
  keywords: 'War Thunder',
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