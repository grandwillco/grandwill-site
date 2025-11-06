import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grand Will Co.",
  description: "Design • Development • Commercialization",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black text-white">
      <body className="min-h-screen flex flex-col">
        {/* Site Header */}
        <header className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            {/* Brand / Logo (internal link uses <Link/>) */}
            <div className="flex items-center gap-3">
              <Link href="/" className="font-extrabold tracking-[0.14em] uppercase">
                GRAND WILL CO.
              </Link>
            </div>

            {/* Nav */}
            <nav className="flex items-center gap-6 text-sm uppercase tracking-[0.12em]">
              <Link href="/" className="hover:text-blue-400">Home</Link>
              <Link href="/services" className="hover:text-blue-400">Services</Link>
              <Link href="/process" className="hover:text-blue-400">Process</Link>
              <a href="#contact" className="hover:text-blue-400">Contact</a>
            </nav>
          </div>
        </header>

        {/* Page */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="border-t border-white/10 py-8 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Grand Will Co. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
