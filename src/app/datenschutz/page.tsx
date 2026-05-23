import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von GamingVergleich.de gemäß DSGVO",
  robots: "noindex",
};

export default function DatenschutzPage() {
  return (
    <div className="container py-12 max-w-3xl">
      <h1 className="text-3xl font-extrabold mb-8">Datenschutzerklärung</h1>

      <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">
            1. Datenschutz auf einen Blick
          </h2>
          <h3 className="font-medium text-foreground mb-2">Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
            deinen personenbezogenen Daten passiert, wenn du diese Website besuchst.
            Personenbezogene Daten sind alle Daten, mit denen du persönlich
            identifiziert werden kannst. Ausführliche Informationen findest du unten.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">
            2. Verantwortlicher
          </h2>
          <p>
            Gaming-Vergleich.de
            <br />
            Berlinstr. 37
            <br />
            55411 Bingen am Rhein
            <br />
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
            3. Datenerfassung auf dieser Website
          </h2>
          <h3 className="font-medium text-foreground mb-2">Server-Log-Dateien</h3>
          <p className="mb-4">
            Der Provider der Seiten erhebt und speichert automatisch Informationen in
            so genannten Server-Log-Dateien, die dein Browser automatisch übermittelt.
            Dies sind:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4 ml-2">
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p>
            Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
            vorgenommen. Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6
            Abs. 1 lit. f DSGVO.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">
            4. Cookies
          </h2>
          <p>
            Diese Website verwendet technisch notwendige Cookies, die für den Betrieb
            der Website erforderlich sind (z.B. Theme-Einstellungen). Diese Cookies
            speichern keine personenbezogenen Daten. Du kannst deinen Browser so
            einstellen, dass du über das Setzen von Cookies informiert wirst.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">
            5. Externe Links und Affiliate-Links
          </h2>
          <p>
            Diese Website enthält Links zu Amazon.de und anderen externen Websites
            (Affiliate-Links). Wenn du über diese Links klickst, wird deine IP-Adresse
            an die entsprechenden Anbieter übertragen. Wir empfehlen, die
            Datenschutzerklärungen der verlinkten Websites zu lesen. Für Amazon.de
            gilt die Datenschutzerklärung von Amazon Europe S.à r.l.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">
            6. Google Fonts
          </h2>
          <p>
            Diese Website nutzt zur einheitlichen Darstellung von Schriftarten Google
            Fonts (Anbieter: Google Ireland Limited). Beim Aufruf einer Seite lädt dein
            Browser die benötigten Fonts in seinen Browser-Cache, um Texte und
            Schriftarten korrekt anzuzeigen. Dazu muss der von dir verwendete Browser
            Verbindung zu den Servern von Google aufnehmen. Die Nutzung von Google
            Fonts erfolgt im Interesse einer einheitlichen und ansprechenden Darstellung.
            Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f
            DSGVO dar.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">
            7. Deine Rechte
          </h2>
          <p className="mb-3">
            Du hast gegenüber uns folgende Rechte hinsichtlich der dich betreffenden
            personenbezogenen Daten:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
            <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
            <li>Recht auf Löschung (Art. 17 DSGVO)</li>
            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
          </ul>
          <p className="mt-3">
            Um diese Rechte auszuüben, wende dich an:{" "}
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
            8. Beschwerderecht bei der Aufsichtsbehörde
          </h2>
          <p>
            Du hast das Recht, dich bei einer Datenschutz-Aufsichtsbehörde über die
            Verarbeitung deiner personenbezogenen Daten durch uns zu beschweren. Die
            zuständige Aufsichtsbehörde für Rheinland-Pfalz ist der Landesbeauftragte
            für Datenschutz und Informationsfreiheit Rheinland-Pfalz.
          </p>
        </section>

        <p className="text-xs pt-4 border-t border-border">
          Stand: Mai 2024 | Diese Datenschutzerklärung gilt für gaming-vergleich.de
        </p>
      </div>
    </div>
  );
}
