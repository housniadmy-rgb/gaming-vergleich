"use client";

import { useState, useMemo } from "react";
import { Gamepad2, Mouse, Keyboard, Headphones, Monitor, SlidersHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProduktCard } from "@/components/ProduktCard";
import { gamingProdukte } from "@/data/produkte";
import type { GamingProdukt } from "@/data/produkte";

type Kategorie = GamingProdukt["kategorie"] | "Alle";
type SortOption = "bewertung" | "preis-asc" | "preis-desc";

const kategorieConfig: { key: Kategorie; label: string; icon: React.ElementType }[] = [
  { key: "Alle", label: "Alle", icon: SlidersHorizontal },
  { key: "Konsole", label: "Konsolen", icon: Gamepad2 },
  { key: "Gaming-Maus", label: "Mäuse", icon: Mouse },
  { key: "Tastatur", label: "Tastaturen", icon: Keyboard },
  { key: "Headset", label: "Headsets", icon: Headphones },
  { key: "Monitor", label: "Monitore", icon: Monitor },
];

const sortOptions = [
  { value: "bewertung" as SortOption, label: "Beste Bewertung" },
  { value: "preis-asc" as SortOption, label: "Preis: günstig zuerst" },
  { value: "preis-desc" as SortOption, label: "Preis: teuer zuerst" },
];

export default function KategorieGamingPage() {
  const [aktiveKategorie, setAktiveKategorie] = useState<Kategorie>("Alle");
  const [sortBy, setSortBy] = useState<SortOption>("bewertung");

  const gefilterteProdukte = useMemo(() => {
    let liste = [...gamingProdukte];
    if (aktiveKategorie !== "Alle") {
      liste = liste.filter((p) => p.kategorie === aktiveKategorie);
    }
    if (sortBy === "bewertung") liste.sort((a, b) => b.bewertung - a.bewertung);
    if (sortBy === "preis-asc") liste.sort((a, b) => a.preis - b.preis);
    if (sortBy === "preis-desc") liste.sort((a, b) => b.preis - a.preis);
    return liste;
  }, [aktiveKategorie, sortBy]);

  return (
    <div className="container py-10">
      {/* Header */}
      <div className="mb-10">
        <Badge className="mb-3 bg-primary/15 text-primary border-primary/30">
          Alle Gaming-Produkte
        </Badge>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
          Gaming-Produkte im Vergleich
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          {gamingProdukte.length} Produkte in 5 Kategorien – getestet und bewertet von unseren Experten.
        </p>
      </div>

      {/* Filter + Sort */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex flex-wrap gap-2 flex-1">
          {kategorieConfig.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setAktiveKategorie(key)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-all ${
                aktiveKategorie === key
                  ? "bg-primary text-white border-primary shadow-sm shadow-primary/30"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              {label}
            </button>
          ))}
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortOption)}
          className="px-3 py-1.5 rounded-md border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 shrink-0"
        >
          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Ergebnis-Info */}
      <div className="text-sm text-muted-foreground mb-6">
        {gefilterteProdukte.length} Produkt{gefilterteProdukte.length !== 1 ? "e" : ""} gefunden
        {aktiveKategorie !== "Alle" && (
          <span>
            {" "}in der Kategorie{" "}
            <span className="text-foreground font-medium">{aktiveKategorie}</span>
          </span>
        )}
      </div>

      {/* Produkte Grid */}
      {gefilterteProdukte.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {gefilterteProdukte.map((produkt, i) => (
            <ProduktCard key={produkt.id} produkt={produkt} rank={i + 1} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-muted-foreground">
          Keine Produkte in dieser Kategorie gefunden.
        </div>
      )}

      {/* Info-Box */}
      <div className="mt-16 p-6 rounded-lg border border-border bg-card/50">
        <h2 className="font-bold text-lg mb-2">Wie wir testen</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Alle Produkte auf GamingVergleich.de werden von unserem Expertenteam über mehrere Wochen
          intensiv getestet. Wir bewerten Leistung, Haltbarkeit, Preis-Leistungs-Verhältnis und
          Gaming-spezifische Features. Unsere Bewertungen sind unabhängig von Herstellern –
          wir werden nicht für positive Bewertungen bezahlt. Affiliate-Links helfen uns, den
          Betrieb dieser Website zu finanzieren.
        </p>
      </div>
    </div>
  );
}
