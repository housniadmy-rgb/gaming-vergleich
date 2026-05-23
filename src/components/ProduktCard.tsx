import Link from "next/link";
import { ExternalLink, Check, X, Award } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/StarRating";
import type { GamingProdukt } from "@/data/produkte";

interface ProduktCardProps {
  produkt: GamingProdukt;
  rank?: number;
}

export function ProduktCard({ produkt, rank }: ProduktCardProps) {
  return (
    <Card
      className={`relative overflow-hidden flex flex-col transition-all duration-200 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 ${
        produkt.bestePick ? "border-primary/40" : "border-border"
      }`}
    >
      {produkt.bestePick && (
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary" />
      )}

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            {rank && (
              <span className="text-xs font-bold text-muted-foreground block mb-1">
                #{rank}
              </span>
            )}
            <div className="flex flex-wrap gap-1.5 mb-2">
              <Badge variant="secondary" className="text-xs">
                {produkt.kategorie}
              </Badge>
              {produkt.bestePick && (
                <Badge className="bg-primary text-white text-xs gap-1">
                  <Award className="h-3 w-3" />
                  Beste Wahl
                </Badge>
              )}
            </div>
            <h3 className="font-bold text-base leading-snug">{produkt.name}</h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              {produkt.hersteller}
            </p>
          </div>
          <div className="text-right shrink-0">
            <div className="text-xl font-bold text-primary">
              {produkt.preis}€
            </div>
            <StarRating rating={produkt.bewertung} size="sm" className="justify-end mt-1" />
          </div>
        </div>
      </CardHeader>

      <CardContent className="pb-4 flex-1">
        <p className="text-xs text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
          {produkt.kurzBeschreibung}
        </p>

        <div className="space-y-1">
          {produkt.pros.slice(0, 2).map((pro, i) => (
            <div key={i} className="flex items-start gap-1.5 text-xs">
              <Check className="h-3.5 w-3.5 text-green-500 mt-0.5 shrink-0" />
              <span className="text-foreground/80">{pro}</span>
            </div>
          ))}
          {produkt.cons.slice(0, 1).map((con, i) => (
            <div
              key={i}
              className="flex items-start gap-1.5 text-xs text-muted-foreground"
            >
              <X className="h-3.5 w-3.5 text-red-500/70 mt-0.5 shrink-0" />
              <span>{con}</span>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="gap-2 pt-0">
        <Button
          asChild
          className="flex-1 bg-primary hover:bg-primary/90 text-xs h-9"
        >
          <a
            href={produkt.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
            Zum Angebot
          </a>
        </Button>
        <Button asChild variant="outline" size="sm" className="h-9 text-xs">
          <Link href={`/gaming/${produkt.slug}`}>Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
