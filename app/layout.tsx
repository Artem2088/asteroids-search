import "./globals.css";
import { Header } from "./components";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Armagedon",
  description: "Поиск и уничтожение всех опасных астероидов",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ru'>
      <body>
          <Header />
          {children}
      </body>
    </html>
  );
}
