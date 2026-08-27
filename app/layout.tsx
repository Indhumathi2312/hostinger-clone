import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Managed AI Automations: Switch Tools Anytime, One Plan | Hostinger",
  description:
    "Launch pre-configured AI automation apps with zero setup. Switch tools anytime under a single plan with Hostinger.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className="dark">
      <body className="antialiased bg-[#0c0d0d] text-white">
        {children}
      </body>
    </html>
  );
}
