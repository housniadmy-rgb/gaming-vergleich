import Link from "next/link";
import { Gamepad2 } from "lucide-react";

const footerLinks = [
  {
    title: "Kategorien",
    items: [
      { name: "Alle Gaming-Produkte", href: "/kategorie/gaming" },
      { name: "Vergleichstabelle", href: "/vergleich" },
      { name: "Gaming Blog", href: "/blog" },
    ],
  },
  {
    title: "Rechtliches",
    items: [
      { name: "Impressum", href: "/impressum" },
      { name: "Datenschutz", href: "/datenschutz" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border mt-20 bg-card/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Gamepad2 className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">
                Gaming<span className="text-primary">Vergleich</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Unabhängige Gaming-Produkt-Vergleiche und Tests. Wir helfen dir,
              die beste Gaming-Ausrüstung zu finden – ohne Kompromisse.
            </p>
            <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
              * Affiliate-Hinweis: Bei einem Kauf über unsere Links erhalten wir
              eine kleine Provision – für dich entstehen keine Mehrkosten.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} GamingVergleich.de – Alle Rechte
            vorbehalten
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <Link href="/impressum" className="hover:text-foreground transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-foreground transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
