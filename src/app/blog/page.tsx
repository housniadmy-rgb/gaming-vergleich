import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Gaming Blog – Tipps, Tests & News 2024",
  description:
    "Der Gaming-Vergleich Blog: Aktuelle Artikel zu Konsolen, Peripherie, Esports und Gaming-Setups.",
};

const artikel = [
  {
    id: 1,
    titel: "Die besten Gaming-Konsolen 2024 im Vergleich: PS5 vs. Xbox Series X vs. Switch OLED",
    auszug:
      "Drei Generationen, drei Philosophien: Wir vergleichen PlayStation 5, Xbox Series X und Nintendo Switch OLED im großen Test. Welche Konsole passt zu welchem Spielertyp?",
    kategorie: "Konsolen",
    datum: "20. Mai 2024",
    lesezeit: "8 min",
    slug: "beste-gaming-konsolen-2024",
  },
  {
    id: 2,
    titel: "Gaming-Mäuse 2024: Was wirklich wichtig ist – DPI, Sensor und Gewicht erklärt",
    auszug:
      "Die perfekte Gaming-Maus hängt nicht allein von DPI ab. Wir erklären, worauf es bei Sensor-Qualität, Gewicht und Ergonomie wirklich ankommt – und welche Maus für welchen Grip-Stil geeignet ist.",
    kategorie: "Peripherie",
    datum: "15. Mai 2024",
    lesezeit: "6 min",
    slug: "gaming-maeuse-dpi-sensor-gewicht",
  },
  {
    id: 3,
    titel: "Mechanische Gaming-Tastaturen: Cherry MX, Kailh oder Razer – welche Switches sind die besten?",
    auszug:
      "Linear, taktil oder klickend? Wir erklären alle gängigen Switch-Typen, vergleichen Cherry MX mit Kailh und Razer-eigenen Switches – und helfen dir, den richtigen für dein Gaming zu finden.",
    kategorie: "Peripherie",
    datum: "10. Mai 2024",
    lesezeit: "7 min",
    slug: "mechanische-gaming-tastaturen-switches",
  },
  {
    id: 4,
    titel: "Gaming-Headsets 2024: Surround Sound, ANC und Mikrofon-Qualität im Test",
    auszug:
      "Von 50€ bis 300€: Wir haben die beliebtesten Gaming-Headsets getestet. Lohnt sich Active Noise Cancellation? Wie wichtig ist 7.1-Surround wirklich? Alle Antworten in unserem großen Test.",
    kategorie: "Audio",
    datum: "5. Mai 2024",
    lesezeit: "9 min",
    slug: "gaming-headsets-surround-anc-mikrofon",
  },
  {
    id: 5,
    titel: "240Hz vs. 144Hz vs. 60Hz Gaming-Monitor: Welche Bildwiederholrate brauchst du wirklich?",
    auszug:
      "Lohnt sich der Aufpreis für 240Hz wirklich? Wir erklären den Unterschied zwischen 60Hz, 144Hz und 240Hz in der Praxis – und für welche Spiele und Spielertypen sich das Upgrade lohnt.",
    kategorie: "Monitore",
    datum: "30. April 2024",
    lesezeit: "6 min",
    slug: "240hz-vs-144hz-gaming-monitor",
  },
  {
    id: 6,
    titel: "Das perfekte Esports-Setup 2024: Maus, Tastatur, Headset und Monitor für unter 600€",
    auszug:
      "Profi-Gaming muss nicht teuer sein. Wir zeigen, wie du ein konkurrenzfähiges Esports-Setup für unter 600€ aufbaust – mit den besten Preis-Leistungs-Empfehlungen aus unserem Test.",
    kategorie: "Setup-Guide",
    datum: "25. April 2024",
    lesezeit: "10 min",
    slug: "esports-setup-guide-600-euro",
  },
];

const kategorien = ["Alle", "Konsolen", "Peripherie", "Audio", "Monitore", "Setup-Guide"];

export default function BlogPage() {
  return (
    <div className="container py-10">
      <div className="mb-10">
        <Badge className="mb-3 bg-primary/15 text-primary border-primary/30">
          Gaming Blog
        </Badge>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
          Gaming-Wissen, Tests & Guides
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Aktuelle Artikel zu Konsolen, Peripherie, Esports und Gaming-Setups – von unseren Experten geschrieben.
        </p>
      </div>

      {/* Kategorie-Filter (statisch, ohne JS-Interaktivität für Server Component) */}
      <div className="flex flex-wrap gap-2 mb-10">
        {kategorien.map((k) => (
          <span
            key={k}
            className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors cursor-pointer ${
              k === "Alle"
                ? "bg-primary text-white border-primary"
                : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
            }`}
          >
            {k}
          </span>
        ))}
      </div>

      {/* Haupt-Artikel (Featured) */}
      <div className="mb-8">
        <Card className="overflow-hidden border-border hover:border-primary/40 transition-colors">
          <CardHeader className="pb-3">
            <div className="flex flex-wrap gap-2 mb-3">
              <Badge variant="secondary">{artikel[0].kategorie}</Badge>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                {artikel[0].datum}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                {artikel[0].lesezeit} Lesezeit
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold leading-snug hover:text-primary transition-colors cursor-pointer">
              {artikel[0].titel}
            </h2>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {artikel[0].auszug}
            </p>
            <Button variant="outline" size="sm" className="gap-1">
              Weiterlesen <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Artikel Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {artikel.slice(1).map((a) => (
          <Card
            key={a.id}
            className="overflow-hidden border-border hover:border-primary/40 transition-colors flex flex-col"
          >
            <CardHeader className="pb-3">
              <div className="flex flex-wrap gap-2 mb-2">
                <Badge variant="secondary" className="text-xs">
                  {a.kategorie}
                </Badge>
              </div>
              <h2 className="font-bold leading-snug text-base hover:text-primary transition-colors cursor-pointer line-clamp-3">
                {a.titel}
              </h2>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-3">
                {a.auszug}
              </p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {a.datum}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {a.lesezeit}
                  </span>
                </div>
                <Button variant="ghost" size="sm" className="text-xs gap-1 h-7 text-primary hover:text-primary/80">
                  Lesen <ArrowRight className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Newsletter CTA */}
      <div className="mt-16 rounded-lg border border-primary/30 bg-primary/5 p-8 text-center">
        <h2 className="text-xl font-bold mb-2">Verpasse keine Gaming-News</h2>
        <p className="text-muted-foreground mb-6 text-sm">
          Neue Testberichte, Vergleiche und Deals direkt in dein Postfach –
          kostenlos und ohne Spam.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="deine@email.de"
            className="flex-1 px-4 py-2 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <Button className="bg-primary hover:bg-primary/90">Anmelden</Button>
        </div>
        <p className="text-xs text-muted-foreground mt-3">
          Kein Spam. Jederzeit abmeldbar. Datenschutz beachten.
        </p>
      </div>
    </div>
  );
}
