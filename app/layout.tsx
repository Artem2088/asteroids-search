import "./globals.css";
import type { Metadata } from "next";
import { Header } from "./components";
import { GlobalContextProvider } from "./context/context";

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
        <GlobalContextProvider>
          <Header />
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  );
}
