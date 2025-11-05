import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Grand Will Co.",
  description: "Engineering • Design • Commercialization",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Accent color switched to BLUE */}
      <body className="min-h-screen bg-black text-white selection:bg-blue-600 selection:text-white">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-black/80 backdrop-blur border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo.svg" // change to /logo.png if needed
                alt="Grand Will logo"
                width={44}
                height={44}
                className="h-11 w-11 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                priority
              />
              <span className="font-bold tracking-[0.18em] text-xs md:text-sm uppercase">
                GRAND&nbsp;WILL
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              {[
                { href: "/", label: "HOME" },
                { href: "/#vision", label: "VISION", isAnchor: true },
                { href: "/services", label: "SERVICES" },
                { href: "/process", label: "PROCESS" },
                { href: "/#brands", label: "BRANDS", isAnchor: true },
                { href: "/#about", label: "ABOUT", isAnchor: true },
                { href: "/#contact", label: "CONTACT", isAnchor: true },
              ].map((item) =>
                item.isAnchor ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-xs tracking-[0.2em] hover:text-blue-500 transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-xs tracking-[0.2em] hover:text-blue-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            <div className="hidden md:block">
              <Link
                href="/#contact"
                className="inline-flex items-center h-9 px-4 rounded-none border border-white/40 text-xs tracking-[0.18em] uppercase hover:bg-white hover:text-black transition-colors"
              >
                START A PROJECT
              </Link>
            </div>
          </div>
        </header>

        {/* Big typographic statement under header (plain text) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-6">
          <p className="text-center font-extrabold leading-[1.05] tracking-[-0.02em] uppercase text-3xl md:text-6xl">
            We design, develop and sell products <span className="text-blue-500">FOR YOU!</span>
          </p>
        </div>

        {/* Page content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="mt-24 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-4 gap-8 text-sm">
            <div className="flex items-start gap-3">
              <Image src="/logo.svg" alt="Grand Will logo" width={40} height={40} className="h-10 w-10 opacity-90" />
              <p className="text-white/70">
                Engineering & product development for future-forward manufacturing.
              </p>
            </div>
            <div>
              <p className="font-semibold tracking-[0.18em] text-xs uppercase text-white/90">Company</p>
              <ul className="mt-3 space-y-2 text-white/70">
                <li><a href="/#about" className="hover:text-blue-500">About</a></li>
                <li><a href="/#brands" className="hover:text-blue-500">Brands</a></li>
                <li><Link href="/process" className="hover:text-blue-500">Process</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-[0.18em] text-xs uppercase text-white/90">Services</p>
              <ul className="mt-3 space-y-2 text-white/70">
                <li><Link href="/services" className="hover:text-blue-500">Product Innovation & Development</Link></li>
                <li><Link href="/services" className="hover:text-blue-500">Prototyping & Testing</Link></li>
                <li><Link href="/services" className="hover:text-blue-500">Contract Manufacturing</Link></li>
                <li><Link href="/services" className="hover:text-blue-500">Quality & Compliance</Link></li>
                <li><Link href="/services" className="hover:text-blue-500">Logistics & Fulfillment</Link></li>
                <li><Link href="/services" className="hover:text-blue-500">Retail Sales</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-[0.18em] text-xs uppercase text-white/90">Get in touch</p>
              <ul className="mt-3 space-y-2 text-white/70">
                <li><a href="mailto:hello@grandwillco.com" className="hover:text-blue-500">hello@grandwillco.com</a></li>
                <li>America/New_York</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
            © {new Date().getFullYear()} Grand Will Co. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
