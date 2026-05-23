import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink, Check, X, ChevronRight, Award } from "lucide-react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StarRating } from "@/components/StarRating";
import { ProduktCard } from "@/components/ProduktCard";
import { gamingProdukte, getProduktBySlug } from "@/data/produkte";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return gamingProdukte.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const produkt = getProduktBySlug(params.slug);
  if (!produkt) return { title: "Produkt nicht gefunden" };
  return {
    title: `${produkt.name} Test & Vergleich 2024`,
    description: produkt.kurzBeschreibung,
  };
}

export default function ProduktDetailPage({ params }: Props) {
  const produkt = getProduktBySlug(params.slug);
  if (!produkt) notFound();

  const verwandteProdukte = gamingProdukte
    .filter((p) => p.slug !== produkt.slug && p.kategorie === produkt.kategorie)
    .slice(0, 3);

  const alleAndere = gamingProdukte
    .filter((p) => p.slug !== produkt.slug && p.kategorie !== produkt.kategorie)
    .slice(0, 3);

  const empfehlungen = verwandteProdukte.length > 0 ? verwandteProdukte : alleAndere;

  return (
    <div className="container py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground transition-colors">
          Startseite
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/kategorie/gaming" className="hover:text-foreground transition-colors">
          Alle Produkte
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground font-medium">{produkt.name}</span>
      </nav>

      {/* Produkt Header */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary">{produkt.kategorie}</Badge>
            {produkt.bestePick && (
              <Badge className="bg-primary text-white gap-1">
                <Award className="h-3.5 w-3.5" />
                Beste Wahl
              </Badge>
            )}
            <Badge variant="outline" className="text-green-500 border-green-500/30">
              Verfügbar
            </Badge>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold mb-3 leading-tight">
            {produkt.name}
          </h1>
          <p className="text-muted-foreground text-base mb-5 leading-relaxed">
            {produkt.hersteller} · {produkt.garantieMonate} Monate Garantie
          </p>

          <div className="flex items-center gap-6 mb-6">
            <StarRating rating={produkt.bewertung} size="lg" />
            <span className="text-sm text-muted-foreground">
              Unser Testurteil
            </span>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            {produkt.beschreibung}
          </p>
        </div>

        {/* Kauf-Box */}
        <div className="lg:col-span-1">
          <div className="sticky top-20 rounded-lg border border-border bg-card p-6">
            {produkt.bestePick && (
              <div className="mb-4 p-3 rounded-md bg-primary/10 border border-primary/20 text-center">
                <span className="text-sm font-semibold text-primary">
                  ⭐ Beste Wahl in {produkt.kategorie}
                </span>
              </div>
            )}
            <div className="text-4xl font-extrabold text-primary mb-1">
              {produkt.preis}€
            </div>
            <p className="text-xs text-muted-foreground mb-6">
              Preis auf Amazon.de (inkl. MwSt.)
            </p>

            <Button
              asChild
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 mb-3"
            >
              <a
                href={produkt.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Jetzt kaufen auf Amazon
              </a>
            </Button>

            <p className="text-xs text-muted-foreground text-center leading-relaxed">
              * Affiliate-Link: Wir erhalten eine kleine Provision ohne
              Mehrkosten für dich.
            </p>

            <div className="mt-4 pt-4 border-t border-border space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Hersteller</span>
                <span className="font-medium">{produkt.hersteller}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Garantie</span>
                <span className="font-medium">{produkt.garantieMonate} Monate</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Bewertung</span>
                <span className="font-medium">{produkt.bewertung}/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="uebersicht" className="mb-12">
        <TabsList className="flex flex-wrap h-auto gap-1 mb-6 bg-muted w-full sm:w-auto">
          <TabsTrigger value="uebersicht">Übersicht</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="technik">Technische Daten</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
        </TabsList>

        {/* Übersicht */}
        <TabsContent value="uebersicht">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg border border-border p-6 bg-card">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                Vorteile
              </h3>
              <ul className="space-y-3">
                {produkt.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-border p-6 bg-card">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <X className="h-5 w-5 text-red-500" />
                Nachteile
              </h3>
              <ul className="space-y-3">
                {produkt.cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <X className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </TabsContent>

        {/* Features */}
        <TabsContent value="features">
          <div className="rounded-lg border border-border p-6 bg-card">
            <h3 className="font-bold text-lg mb-6">Alle Features im Überblick</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {produkt.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm">
                  <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Technische Daten */}
        <TabsContent value="technik">
          <div className="rounded-lg border border-border overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {Object.entries(produkt.technischeDaten).map(
                  ([key, value], i) => (
                    <tr
                      key={key}
                      className={`border-b border-border last:border-0 ${
                        i % 2 === 0 ? "bg-muted/30" : "bg-card"
                      }`}
                    >
                      <td className="p-4 font-medium text-muted-foreground w-1/3">
                        {key}
                      </td>
                      <td className="p-4">{value}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </TabsContent>

        {/* FAQ */}
        <TabsContent value="faq">
          <div className="space-y-4">
            {produkt.faq.map((item, i) => (
              <div
                key={i}
                className="rounded-lg border border-border p-5 bg-card hover:border-primary/30 transition-colors"
              >
                <h3 className="font-semibold mb-2">{item.frage}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.antwort}
                </p>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Ähnliche Produkte */}
      {empfehlungen.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              {verwandteProdukte.length > 0
                ? `Weitere ${produkt.kategorie}`
                : "Weitere Produkte"}
            </h2>
            <Button asChild variant="outline" size="sm">
              <Link href="/kategorie/gaming">Alle ansehen</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {empfehlungen.map((p) => (
              <ProduktCard key={p.id} produkt={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
