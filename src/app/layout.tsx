import type { Metadata } from "next";
import "@/style/_module.scss"

export const metadata: Metadata = {
  title: "Find job",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
