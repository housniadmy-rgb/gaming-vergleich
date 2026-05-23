import Link from "next/link";
import { ArrowRight, Gamepad2, Mouse, Keyboard, Headphones, Monitor, Trophy, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProduktCard } from "@/components/ProduktCard";
import { StarRating } from "@/components/StarRating";
import { gamingProdukte, getBestePicks } from "@/data/produkte";

const kategorien = [
  { name: "Konsolen", slug: "Konsole", icon: Gamepad2, count: 3, desc: "PS5, Xbox, Switch" },
  { name: "Gaming-Mäuse", slug: "Gaming-Maus", icon: Mouse, count: 2, desc: "Logitech, Razer" },
  { name: "Tastaturen", slug: "Tastatur", icon: Keyboard, count: 1, desc: "Corsair K70" },
  { name: "Headsets", slug: "Headset", icon: Headphones, count: 1, desc: "SteelSeries Arctis" },
  { name: "Monitore", slug: "Monitor", icon: Monitor, count: 1, desc: "Samsung Odyssey" },
];

const features = [
  {
    icon: Trophy,
    title: "Unabhängige Tests",
    desc: "Alle Produkte werden von unserem Experten-Team ausgiebig getestet und bewertet.",
  },
  {
    icon: Shield,
    title: "Faire Bewertungen",
    desc: "Unsere Bewertungen basieren auf echten Erfahrungen, nicht auf Herstellervorgaben.",
  },
  {
    icon: Zap,
    title: "Immer aktuell",
    desc: "Wir aktualisieren unsere Vergleiche regelmäßig mit neuen Produkten und Preisen.",
  },
];

const homeFaqs = [
  {
    frage: "Welche Gaming-Konsole ist 2024 die beste?",
    antwort:
      "Die PlayStation 5 bietet das beste Gesamtpaket mit exklusiven Titeln, DualSense-Innovation und schnellen Ladezeiten. Die Xbox Series X punktet mit Game Pass und Rückwärtskompatibilität. Für unterwegs ist die Nintendo Switch OLED unschlagbar.",
  },
  {
    frage: "Welche Gaming-Maus ist für Esports am besten?",
    antwort:
      "Die Logitech G Pro X Superlight ist mit 61 g und dem HERO 25K Sensor die erste Wahl für Esports-Profis. Für ein günstigeres Einsteigermodell empfehlen wir die Razer DeathAdder V3.",
  },
  {
    frage: "Was kostet ein gutes Gaming-Setup?",
    antwort:
      "Ein solides Setup (Konsole + Headset + Maus) ist ab ca. 700–900€ möglich. Unser Beste-Wahl-Bundle aus PS5, Arctis Nova Pro und Logitech G Pro X liegt bei ca. 950€.",
  },
  {
    frage: "Sind die Produkte auf Amazon verfügbar?",
    antwort:
      "Ja, alle 8 Produkte sind über unsere Affiliate-Links auf Amazon.de verfügbar. Wir erhalten bei einem Kauf eine kleine Provision – ohne Mehrkosten für dich.",
  },
  {
    frage: "Wie oft werden die Bewertungen aktualisiert?",
    antwort:
      "Unsere Vergleiche werden mindestens monatlich aktualisiert. Bei wichtigen Änderungen (neue Modelle, Preissenkungen) reagieren wir innerhalb von 24 Stunden.",
  },
];

export default function HomePage() {
  const bestePicks = getBestePicks();
  const topProdukte = gamingProdukte.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(225,29,72,0.15),rgba(255,255,255,0))]" />
        <div className="container relative">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-primary/15 text-primary border-primary/30 hover:bg-primary/20">
              Gaming 2024 – Top Produkte im Test
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Die besten{" "}
              <span className="text-primary">Gaming-Produkte</span>
              {" "}im Vergleich
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              Konsolen, Mäuse, Tastaturen, Headsets und Monitore – wir testen
              und vergleichen die Top-Gaming-Ausrüstung. Unabhängig, ehrlich,
              aktuell.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25"
              >
                <Link href="/kategorie/gaming">
                  Alle Produkte entdecken{" "}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/vergleich">Vergleichstabelle</Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-primary inline-block" />
                8 getestete Produkte
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-primary inline-block" />
                5 Kategorien
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-primary inline-block" />
                Unabhängige Bewertungen
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Beste Wahl */}
      <section className="container py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Beste Wahl 2024
            </h2>
            <p className="text-muted-foreground mt-1">
              Unsere Top-Empfehlungen in jeder Kategorie
            </p>
          </div>
          <Button asChild variant="outline" className="hidden sm:flex">
            <Link href="/kategorie/gaming">
              Alle ansehen <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {bestePicks.map((produkt, i) => (
            <ProduktCard key={produkt.id} produkt={produkt} rank={i + 1} />
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Button asChild variant="outline" className="w-full">
            <Link href="/kategorie/gaming">
              Alle 8 Produkte ansehen <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Kategorien */}
      <section className="container py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Kategorien</h2>
        <p className="text-muted-foreground mb-8">
          Finde das perfekte Produkt für dein Gaming-Setup
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {kategorien.map((kat) => (
            <Link
              key={kat.slug}
              href={`/kategorie/gaming?kategorie=${encodeURIComponent(kat.slug)}`}
              className="group flex flex-col items-center p-5 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-center"
            >
              <div className="p-3 rounded-full bg-primary/10 mb-3 group-hover:bg-primary/20 transition-colors">
                <kat.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="font-semibold text-sm">{kat.name}</span>
              <span className="text-xs text-muted-foreground mt-1">
                {kat.desc}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Top 3 Tabelle */}
      <section className="container py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Top 3 Übersicht</h2>
          <Button asChild variant="outline">
            <Link href="/vergleich">
              Vollständiger Vergleich <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="rounded-lg border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="text-left p-4 font-medium text-muted-foreground">Produkt</th>
                  <th className="text-center p-4 font-medium text-muted-foreground">Bewertung</th>
                  <th className="text-center p-4 font-medium text-muted-foreground">Preis</th>
                  <th className="text-center p-4 font-medium text-muted-foreground">Kategorie</th>
                  <th className="p-4"></th>
                </tr>
              </thead>
              <tbody>
                {topProdukte.map((p, i) => (
                  <tr key={p.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-muted-foreground w-4">#{i + 1}</span>
                        <div>
                          <div className="font-medium">{p.name}</div>
                          <div className="text-xs text-muted-foreground">{p.hersteller}</div>
                        </div>
                        {p.bestePick && (
                          <Badge className="bg-primary text-white text-xs ml-2">Beste Wahl</Badge>
                        )}
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <StarRating rating={p.bewertung} size="sm" className="justify-center" />
                    </td>
                    <td className="p-4 text-center font-bold text-primary">{p.preis}€</td>
                    <td className="p-4 text-center">
                      <Badge variant="secondary">{p.kategorie}</Badge>
                    </td>
                    <td className="p-4 text-right">
                      <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-xs">
                        <a href={p.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow">
                          Kaufen
                        </a>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="flex gap-4">
              <div className="p-2.5 h-fit rounded-lg bg-primary/10 shrink-0">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Häufige Fragen
          </h2>
          <div className="space-y-4">
            {homeFaqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-lg border border-border p-6 hover:border-primary/30 transition-colors"
              >
                <h3 className="font-semibold mb-2 text-base">{faq.frage}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {faq.antwort}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
