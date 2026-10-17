import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Inkwell | A Next.js Blog",
  description:
    "A demonstration blog for SSG, ISR, SSR, and React Server Components.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
