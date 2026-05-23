import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung von GamingVergleich.de",
  robots: "noindex",
};

export default function ImpressumPage() {
  return (
    <div className="container py-12 max-w-3xl">
      <h1 className="text-3xl font-extrabold mb-8">Impressum</h1>

      <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">
            Angaben gemäß § 5 TMG
          </h2>
          <p>
            Gaming-Vergleich.de
            <br />
            Berlinstr. 37
            <br />
            55411 Bingen am Rhein
            <br />
            Deutschland
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">Kontakt</h2>
          <p>
            E-Mail:{" "}
            <a
              href="mailto:housniadmy@yahoo.de"
              className="text-primary hover:underline"
            >
              housniadmy@yahoo.de
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p>
            Gaming-Vergleich.de
            <br />
            Berlinstr. 37
            <br />
            55411 Bingen am Rhein
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">
            Haftungsausschluss
          </h2>
          <h3 className="font-medium text-foreground mb-1">Haftung für Inhalte</h3>
          <p className="mb-4">
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf
            diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis
            10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte
            oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
            forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <h3 className="font-medium text-foreground mb-1">Haftung für Links</h3>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte
            wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte
            auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist
            stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">
            Urheberrecht
          </h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
            Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
            Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
            des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
            Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den
            privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">
            Affiliate-Hinweis
          </h2>
          <p>
            Diese Website enthält Affiliate-Links. Wenn du über diese Links einkaufst,
            erhalten wir eine kleine Provision von Amazon.de – ohne Mehrkosten für dich.
            Dies hilft uns, die Website zu betreiben und kostenlose Inhalte
            bereitzustellen. Unsere Bewertungen und Empfehlungen sind davon unabhängig
            und basieren auf eigenen Tests.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">
            Amazon-Partnerprogramm
          </h2>
          <p>
            Gaming-Vergleich.de ist Teilnehmer des Partnerprogramms von Amazon Europe
            S.à r.l., ein Affiliate-Werbeprogramm, das für Websites konzipiert wurde,
            mittels dessen durch die Platzierung von Werbeanzeigen und Links zu
            Amazon.de Werbekosten verdient werden können. Als Amazon-Partner verdiene
            ich an qualifizierten Verkäufen.
          </p>
        </section>
      </div>
    </div>
  );
}
