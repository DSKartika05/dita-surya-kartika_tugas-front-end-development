import Link from "next/link";

const columns = [
  {
    title: "Menu",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/services", label: "Services" },
      { href: "/profile", label: "Profile" },
    ],
  },
  {
    title: "Explore",
    links: [
      { href: "/users", label: "Users" },
      { href: "/favorites", label: "Favorites" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">

          {/* Brand */}
          <div className="max-w-xs">
            <p className="text-lg font-bold tracking-[0.08em] text-primary">
              USERLY
            </p>

            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              User Directory &amp; Favorites — a Front-End Development
              assignment created for the <b>Perempuan Inovasi 2026</b> program.
            </p>

            <p className="mt-4 text-xs text-muted-foreground">
              Developed by{" "}
              <span className="font-medium text-foreground">
                Dita Surya Kartika
              </span>
            </p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-10 sm:flex sm:gap-16">
            {columns.map((column) => (
              <div key={column.title}>
                <p className="text-xs font-semibold uppercase tracking-wide text-foreground/80">
                  {column.title}
                </p>

                <ul className="mt-3 space-y-2">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Userly. All rights reserved.</p>

          <p>
            Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}