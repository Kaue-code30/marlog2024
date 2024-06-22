import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const poppins = Poppins({ subsets: ["latin"], weight:["100","200","300","400","500","600","700","800","900"] });


export const metadata: Metadata = {
  title: "Marlog Transportes",
  description: "CONECTANDO DESTINOS COM EFICIÊNCIA E SEGURANÇA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
