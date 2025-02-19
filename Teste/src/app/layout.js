import localFont from "next/font/local";
import "./globals.css";
import header from "@/components/header";

export const metadata = {
  title: "X",
  description: "Lopes",
  charset: 'UTF-8',
  author: 'Lopes',
  keywords: 'Lopes'
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <header/>
        {children}
      </body>
    </html>
  );
}
