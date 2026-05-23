import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/StarRating";
import { gamingProdukte } from "@/data/produkte";

export const metadata: Metadata = {
  title: "Gaming-Produkte Vergleichstabelle 2024",
  description:
    "Alle 8 Gaming-Produkte im direkten Vergleich: Preis, Bewertung, Features und mehr auf einen Blick.",
};

export default function VergleichPage() {
  return (
    <div className="container py-10">
      <div className="mb-10">
        <Badge className="mb-3 bg-primary/15 text-primary border-primary/30">
          Produktvergleich
        </Badge>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
          Gaming-Produkte Vergleich 2024
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Alle {gamingProdukte.length} Produkte auf einen Blick – sortiert nach Bewertung.
        </p>
      </div>

      {/* Vergleichstabelle */}
      <div className="rounded-lg border border-border overflow-hidden mb-12">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/60">
                <th className="text-left p-4 font-semibold min-w-[200px]">Produkt</th>
                <th className="text-center p-4 font-semibold min-w-[120px]">Bewertung</th>
                <th className="text-center p-4 font-semibold min-w-[100px]">Preis</th>
                <th className="text-center p-4 font-semibold min-w-[120px]">Kategorie</th>
                <th className="text-center p-4 font-semibold min-w-[120px]">Hersteller</th>
                <th className="text-center p-4 font-semibold min-w-[100px]">Garantie</th>
                <th className="text-center p-4 font-semibold min-w-[110px]">Beste Wahl</th>
                <th className="p-4 min-w-[130px]"></th>
              </tr>
            </thead>
            <tbody>
              {[...gamingProdukte]
                .sort((a, b) => b.bewertung - a.bewertung)
                .map((p, i) => (
                  <tr
                    key={p.id}
                    className={`border-b border-border last:border-0 transition-colors hover:bg-muted/30 ${
                      p.bestePick ? "bg-primary/5" : ""
                    }`}
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-muted-foreground w-5">
                          #{i + 1}
                        </span>
                        <div>
                          <Link
                            href={`/gaming/${p.slug}`}
                            className="font-semibold hover:text-primary transition-colors"
                          >
                            {p.name}
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex justify-center">
                        <StarRating rating={p.bewertung} size="sm" className="justify-center" />
                      </div>
                    </td>
                    <td className="p-4 text-center font-bold text-primary">
                      {p.preis}€
                    </td>
                    <td className="p-4 text-center">
                      <Badge variant="secondary" className="text-xs">
                        {p.kategorie}
                      </Badge>
                    </td>
                    <td className="p-4 text-center text-muted-foreground">
                      {p.hersteller}
                    </td>
                    <td className="p-4 text-center text-muted-foreground">
                      {p.garantieMonate} Mo.
                    </td>
                    <td className="p-4 text-center">
                      {p.bestePick ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground/40 mx-auto" />
                      )}
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2 justify-end">
                        <Button asChild variant="outline" size="sm" className="text-xs h-8">
                          <Link href={`/gaming/${p.slug}`}>Details</Link>
                        </Button>
                        <Button
                          asChild
                          size="sm"
                          className="bg-primary hover:bg-primary/90 text-xs h-8"
                        >
                          <a
                            href={p.affiliateUrl}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                          >
                            <ExternalLink className="h-3.5 w-3.5 mr-1" />
                            Kaufen
                          </a>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Kategorie-Vergleich */}
      <h2 className="text-2xl font-bold mb-6">Vergleich nach Kategorie</h2>

      {(["Konsole", "Gaming-Maus", "Tastatur", "Headset", "Monitor"] as const).map((kat) => {
        const produkte = gamingProdukte.filter((p) => p.kategorie === kat);
        if (produkte.length === 0) return null;
        return (
          <div key={kat} className="mb-8">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="h-1 w-6 bg-primary rounded-full inline-block" />
              {kat}
            </h3>
            <div className="rounded-lg border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/40">
                      <th className="text-left p-3 font-medium text-muted-foreground">Name</th>
                      <th className="text-center p-3 font-medium text-muted-foreground">Bewertung</th>
                      <th className="text-center p-3 font-medium text-muted-foreground">Preis</th>
                      {produkte[0]?.features.slice(0, 2).map((_, fi) => (
                        <th key={fi} className="text-center p-3 font-medium text-muted-foreground hidden md:table-cell">
                          Feature {fi + 1}
                        </th>
                      ))}
                      <th className="p-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {produkte
                      .sort((a, b) => b.bewertung - a.bewertung)
                      .map((p) => (
                        <tr key={p.id} className={`border-b border-border last:border-0 hover:bg-muted/20 ${p.bestePick ? "bg-primary/5" : ""}`}>
                          <td className="p-3">
                            <div className="flex items-center gap-2">
                              <Link href={`/gaming/${p.slug}`} className="font-medium hover:text-primary transition-colors">
                                {p.name}
                              </Link>
                              {p.bestePick && (
                                <Badge className="bg-primary text-white text-xs">Top</Badge>
                              )}
                            </div>
                          </td>
                          <td className="p-3 text-center">
                            <StarRating rating={p.bewertung} size="sm" className="justify-center" />
                          </td>
                          <td className="p-3 text-center font-bold text-primary">{p.preis}€</td>
                          {p.features.slice(0, 2).map((f, fi) => (
                            <td key={fi} className="p-3 text-center text-xs text-muted-foreground hidden md:table-cell max-w-[160px]">
                              {f}
                            </td>
                          ))}
                          <td className="p-3 text-right">
                            <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-xs h-8">
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
          </div>
        );
      })}

      <p className="text-xs text-muted-foreground mt-8">
        * Affiliate-Hinweis: Alle Kauf-Links führen zu Amazon.de. Wir erhalten
        bei einem Kauf eine kleine Provision ohne Mehrkosten für dich.
      </p>
    </div>
  );
}
