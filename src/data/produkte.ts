export interface GamingProdukt {
  id: string;
  slug: string;
  name: string;
  hersteller: string;
  kategorie: "Konsole" | "Gaming-Maus" | "Tastatur" | "Headset" | "Monitor";
  preis: number;
  bewertung: number;
  bestePick: boolean;
  beschreibung: string;
  kurzBeschreibung: string;
  features: string[];
  pros: string[];
  cons: string[];
  technischeDaten: Record<string, string>;
  faq: Array<{ frage: string; antwort: string }>;
  affiliateUrl: string;
  verfuegbar: boolean;
  garantieMonate: number;
}

export const gamingProdukte: GamingProdukt[] = [
  {
    id: "1",
    slug: "playstation-5",
    name: "PlayStation 5",
    hersteller: "Sony",
    kategorie: "Konsole",
    preis: 549,
    bewertung: 4.8,
    bestePick: true,
    kurzBeschreibung:
      "Sonys Flaggschiff-Konsole mit ultraschnellem SSD, DualSense-Controller und exklusiven Titeln. Das beste Gesamtpaket für 2024.",
    beschreibung:
      "Die PlayStation 5 ist Sonys neueste Heimkonsole und setzt neue Maßstäbe im Gaming. Mit dem ultraschnellen Custom-SSD, Ray Tracing und dem innovativen DualSense Controller mit haptischem Feedback und adaptiven Triggern bietet sie ein einzigartiges Spielerlebnis. Exklusive Titel wie God of War, Spider-Man und Horizon runden das Paket ab.",
    features: [
      "4K Gaming bis 120fps mit HDMI 2.1",
      "Custom SSD mit 5.5 GB/s Lesegeschwindigkeit",
      "Ray Tracing für realistische Grafik",
      "DualSense: Haptisches Feedback & Adaptive Trigger",
      "3D Audio mit Tempest Engine",
      "PS5 & PS4 Abwärtskompatibilität",
      "PlayStation Plus Premium kompatibel",
      "4K Blu-ray Laufwerk (Standard Edition)",
    ],
    pros: [
      "Exklusive AAA-Titel (God of War, Spider-Man, Horizon)",
      "Innovativer DualSense Controller",
      "Extrem schnelle Ladezeiten dank Custom SSD",
      "Hervorragende Grafikleistung",
      "Starkes PlayStation-Ökosystem",
    ],
    cons: [
      "Großes, schweres Gehäuse",
      "Teuerste Konsole im Vergleich",
      "Limitierter interner Speicher (667 GB nutzbar)",
      "Wenige Launch-Titel im ersten Jahr",
    ],
    technischeDaten: {
      CPU: "AMD Zen 2, 8-Kerne, 3.5 GHz",
      GPU: "AMD RDNA 2, 10.3 TFLOPS",
      RAM: "16 GB GDDR6",
      SSD: "825 GB Custom (667 GB nutzbar)",
      Auflösung: "bis 4K (8K unterstützt)",
      Framerate: "bis 120fps",
      HDR: "HDR10, Dolby Vision",
      "Optisches Laufwerk": "4K Blu-ray (Standard Edition)",
      Abmessungen: "390 × 104 × 260 mm",
      Gewicht: "4.5 kg",
      Anschlüsse: "HDMI 2.1, 2× USB-A, 1× USB-C, LAN",
    },
    faq: [
      {
        frage: "Kann die PS5 PS4-Spiele abspielen?",
        antwort:
          "Ja, die PlayStation 5 unterstützt nahezu alle PS4-Spiele dank Abwärtskompatibilität, teilweise mit verbesserter Leistung.",
      },
      {
        frage: "Welche Auflösung unterstützt die PS5?",
        antwort:
          "Die PS5 unterstützt bis zu 4K bei 60fps oder 120fps (spielabhängig). 8K wird offiziell unterstützt, aber kaum genutzt.",
      },
      {
        frage: "Wie groß ist der interne Speicher?",
        antwort:
          "Die PS5 hat 825 GB SSD, wovon ca. 667 GB für Spiele nutzbar sind. Erweiterbar mit M.2 NVMe SSD.",
      },
      {
        frage: "Was kostet PlayStation Plus?",
        antwort:
          "PlayStation Plus gibt es ab 8,99€/Monat (Essential) bis 16,99€/Monat (Premium) mit Cloud-Streaming und Klassikern.",
      },
      {
        frage: "Gibt es eine PS5 ohne Disc-Laufwerk?",
        antwort:
          "Ja, die PS5 Digital Edition hat kein Laufwerk und ist günstiger. Seit 2023 gibt es auch das neue schmalere Modell.",
      },
    ],
    affiliateUrl:
      "https://www.amazon.de/s?k=PlayStation+5+Konsole&tag=bestvpnvergle-21",
    verfuegbar: true,
    garantieMonate: 24,
  },
  {
    id: "2",
    slug: "xbox-series-x",
    name: "Xbox Series X",
    hersteller: "Microsoft",
    kategorie: "Konsole",
    preis: 499,
    bewertung: 4.7,
    bestePick: false,
    kurzBeschreibung:
      "Microsofts leistungsstärkste Konsole mit 12 TFLOPS, Quick Resume und unschlagbarem Game Pass-Angebot.",
    beschreibung:
      "Der Xbox Series X ist Microsofts bisher leistungsstärkste Konsole. Mit 12 TFLOPS GPU-Leistung, der Quick-Resume-Funktion für sofortigen Spielwechsel und der hervorragenden Rückwärtskompatibilität zu Xbox One, 360 und Original Xbox bietet sie ein außergewöhnliches Preis-Leistungs-Verhältnis – besonders in Kombination mit Xbox Game Pass.",
    features: [
      "4K Gaming bis 120fps mit HDMI 2.1",
      "12 TFLOPS GPU-Leistung",
      "Custom 1 TB NVMe SSD",
      "Quick Resume: Mehrere Spiele gleichzeitig pausieren",
      "Xbox/PC Game Pass kompatibel",
      "Smart Delivery für beste Spielversion",
      "Ray Tracing & DirectX 12 Ultimate",
      "Dolby Vision & Dolby Atmos",
    ],
    pros: [
      "Xbox Game Pass bietet enormen Spielekatalog",
      "Beste Rückwärtskompatibilität aller Konsolen",
      "Quick Resume: Sofortiger Spielwechsel",
      "Kompaktes Turm-Design mit leiser Kühlung",
      "Großer 1 TB interner Speicher",
    ],
    cons: [
      "Weniger exklusive Konsolen-Titel als PS5",
      "Design polarisiert (Quader-Form)",
      "Game Pass-Preise steigen kontinuierlich",
      "Teuer ohne Game Pass Abonnement",
    ],
    technischeDaten: {
      CPU: "AMD Zen 2, 8-Kerne, 3.8 GHz",
      GPU: "AMD RDNA 2, 12 TFLOPS",
      RAM: "16 GB GDDR6",
      SSD: "1 TB Custom NVMe (802 GB nutzbar)",
      Auflösung: "bis 4K (8K unterstützt)",
      Framerate: "bis 120fps",
      HDR: "Dolby Vision, HDR10, HLG",
      "Optisches Laufwerk": "4K UHD Blu-ray",
      Abmessungen: "301 × 151 × 151 mm",
      Gewicht: "4.45 kg",
      Anschlüsse: "HDMI 2.1, 3× USB-A, LAN, Speicherkarten-Slot",
    },
    faq: [
      {
        frage: "Was ist Quick Resume?",
        antwort:
          "Quick Resume ermöglicht es, mehrere Spiele gleichzeitig im Standby zu halten und innerhalb von Sekunden dorthin zurückzukehren, wo man aufgehört hat.",
      },
      {
        frage: "Laufen alte Xbox-Spiele auf der Series X?",
        antwort:
          "Ja, die Xbox Series X ist mit Tausenden Spielen von Xbox One, Xbox 360 und Original Xbox kompatibel – oft mit verbesserten FPS und Auflösung.",
      },
      {
        frage: "Was kostet Xbox Game Pass?",
        antwort:
          "Xbox Game Pass Ultimate (Konsole + PC + Cloud) kostet ab 14,99€/Monat mit über 100 Spielen im Abo.",
      },
      {
        frage: "Kann ich den Speicher erweitern?",
        antwort:
          "Ja, mit einer offiziellen Seagate Erweiterungskarte (1 TB für ca. 220€) oder günstigen externen USB-Laufwerken für ältere Titel.",
      },
      {
        frage: "Ist die Xbox Series X oder S besser?",
        antwort:
          "Series X für maximale 4K-Leistung, Series S als günstigere 1440p-Alternative ohne Disc-Laufwerk ab ca. 299€.",
      },
    ],
    affiliateUrl:
      "https://www.amazon.de/s?k=Xbox+Series+X+Konsole&tag=bestvpnvergle-21",
    verfuegbar: true,
    garantieMonate: 24,
  },
  {
    id: "3",
    slug: "nintendo-switch-oled",
    name: "Nintendo Switch OLED",
    hersteller: "Nintendo",
    kategorie: "Konsole",
    preis: 349,
    bewertung: 4.6,
    bestePick: false,
    kurzBeschreibung:
      "Das beste Hybrid-Gaming-Erlebnis: Zuhause und unterwegs spielen mit leuchtendem 7-Zoll OLED-Display.",
    beschreibung:
      "Die Nintendo Switch OLED ist die Premium-Version von Nintendos revolutionärer Hybrid-Konsole. Das neue 7-Zoll OLED-Display bietet leuchtende Farben und tiefe Schwarztöne für unterwegs. Mit 64 GB internem Speicher, dem breiten Ständer und verbessertem Audio ist sie die beste Switch-Version – ideal für exklusive Nintendo-Titel wie Zelda, Mario und Pokémon.",
    features: [
      "7-Zoll OLED-Display mit 1280×720",
      "TV-Modus bis 1080p Full HD",
      "64 GB interner Speicher (erweiterbar)",
      "Breiter Standfuß für jeden Winkel",
      "Verbessertes Dock mit LAN-Port",
      "Verbesserte Lautsprecher",
      "Joy-Con Controller (abnehm- und kombinierbar)",
      "Kompatibel mit allen Switch-Spielen",
    ],
    pros: [
      "Einzigartiger Hybrid: Zuhause und unterwegs",
      "Schönes OLED-Display mit kräftigen Farben",
      "Exklusive Nintendo-Spiele (Zelda, Mario, Pokémon)",
      "Günstigster Einstiegspreis der drei Konsolen",
      "Riesen Bibliothek an Familien- und Indie-Spielen",
    ],
    cons: [
      "Kein 4K-Ausgang – nur 1080p im TV-Modus",
      "Joy-Con Drift bekanntes Problem",
      "Kürzere Akkulaufzeit als Handheld",
      "Schwächere Hardware als PS5 / Xbox",
    ],
    technischeDaten: {
      "CPU/GPU": "NVIDIA Custom Tegra Prozessor",
      Display: "7 Zoll OLED, 1280×720",
      "TV-Modus": "bis 1080p 60fps",
      RAM: "4 GB LPDDR4",
      Speicher: "64 GB (microSD erweiterbar)",
      Akku: "4310 mAh (4,5–9h je Spiel)",
      Abmessungen: "242 × 102 × 13,9 mm",
      Gewicht: "420 g (mit Joy-Cons)",
      Anschlüsse: "USB-C, microSD-Slot, 3,5mm Klinke",
      "Wireless": "Wi-Fi 5, Bluetooth 4.1",
    },
    faq: [
      {
        frage: "Was ist der Unterschied zur normalen Switch?",
        antwort:
          "Die OLED-Version hat ein größeres 7″-OLED-Display (statt 6,2″ LCD), 64 statt 32 GB Speicher und einen verbesserten Standfuß sowie bessere Lautsprecher.",
      },
      {
        frage: "Kann die Switch OLED 4K ausgeben?",
        antwort:
          "Nein, maximum ist 1080p im TV-Modus. Eine 4K-Switch wurde noch nicht offiziell angekündigt.",
      },
      {
        frage: "Sind alle Switch-Spiele kompatibel?",
        antwort:
          "Ja, alle Nintendo Switch Spiele laufen auf der Switch OLED – inklusive älterer Titel.",
      },
      {
        frage: "Wie lange hält der Akku?",
        antwort:
          "Je nach Spiel 4,5 bis 9 Stunden im Handheld-Modus. Grafisch intensive Spiele verkürzen die Laufzeit.",
      },
      {
        frage: "Lohnt sich das Upgrade von der normalen Switch?",
        antwort:
          "Für Handheld-Spieler definitiv, da das OLED-Display deutlich besser ist. Wer primär am TV spielt, merkt kaum einen Unterschied.",
      },
    ],
    affiliateUrl:
      "https://www.amazon.de/s?k=Nintendo+Switch+OLED&tag=bestvpnvergle-21",
    verfuegbar: true,
    garantieMonate: 24,
  },
  {
    id: "4",
    slug: "logitech-g-pro-x-superlight",
    name: "Logitech G Pro X Superlight",
    hersteller: "Logitech",
    kategorie: "Gaming-Maus",
    preis: 149,
    bewertung: 4.8,
    bestePick: true,
    kurzBeschreibung:
      "Die ultraleichte Esports-Maus mit HERO 25K Sensor und nur 61g – von Profi-Gamern weltweit gewählt.",
    beschreibung:
      "Die Logitech G Pro X Superlight ist die ultimative kabellose Gaming-Maus für Esports-Profis und ambitionierte Spieler. Mit nur 61 Gramm und dem präzisen HERO 25K Sensor bietet sie maximale Kontrolle ohne jedes Gewichtsnachteile. Die LIGHTSPEED-Wireless-Technologie liefert eine Reaktionszeit unter 1ms – schneller als viele kabelgebundene Konkurrenten.",
    features: [
      "HERO 25K optischer Sensor (100–25.600 DPI)",
      "61 g Ultraleicht-Design",
      "LIGHTSPEED Wireless unter 1ms Latenz",
      "70 Stunden Akkulaufzeit",
      "5 programmierbare Tasten",
      "PTFE-Mausfüße für reibungslosen Gleiteinsatz",
      "Kein RGB (Gewichtsersparnis)",
      "Kompatibel mit Logitech G HUB Software",
    ],
    pros: [
      "Extrem leicht mit nur 61 g",
      "Präzisester HERO 25K Sensor",
      "Zuverlässige kabellose Verbindung (< 1ms)",
      "Von vielen Esports-Profis genutzt",
      "Lange Akkulaufzeit von 70 Stunden",
    ],
    cons: [
      "Kein RGB-Beleuchtung",
      "Hochpreisig für eine Maus",
      "Nur für Rechtshänder geeignet",
      "Kein internen Profilspeicher",
    ],
    technischeDaten: {
      Sensor: "HERO 25K optisch",
      "DPI-Bereich": "100–25.600 DPI",
      Abtastrate: "bis 1000 Hz",
      Tasten: "5 programmierbare",
      Verbindung: "LIGHTSPEED USB-A Dongle",
      Akkulaufzeit: "bis 70 Stunden",
      Gewicht: "61 g",
      Abmessungen: "125,9 × 63,5 × 40,0 mm",
      Kabel: "USB-C Ladekabel (kein Betriebskabel)",
      Kompatibilität: "Windows 7+, macOS 10.11+",
    },
    faq: [
      {
        frage: "Ist die Maus für Linkshänder geeignet?",
        antwort:
          "Nein, die G Pro X Superlight ist für Rechtshänder konzipiert. Für Linkshänder gibt es keine offizielle Version.",
      },
      {
        frage: "Wie gut ist die kabellose Verbindung?",
        antwort:
          "LIGHTSPEED bietet unter 1ms Reaktionszeit und ist damit gleichwertig oder schneller als kabelgebundene Verbindungen.",
      },
      {
        frage: "Wie lange hält der Akku?",
        antwort:
          "Bis zu 70 Stunden bei ausgeschalteter Beleuchtung. Die Maus kann während des Ladens per USB-C-Kabel weiter genutzt werden.",
      },
      {
        frage: "Kann ich die DPI anpassen?",
        antwort:
          "Ja, über die Logitech G HUB Software lässt sich die DPI von 100 bis 25.600 stufenlos einstellen.",
      },
      {
        frage: "Gibt es eine Version 2 (Superlight 2)?",
        antwort:
          "Ja, die G Pro X Superlight 2 ist erhältlich und bietet einen verbesserten HERO 2 Sensor sowie noch geringeres Gewicht (60 g).",
      },
    ],
    affiliateUrl:
      "https://www.amazon.de/s?k=Logitech+G+Pro+X+Superlight&tag=bestvpnvergle-21",
    verfuegbar: true,
    garantieMonate: 24,
  },
  {
    id: "5",
    slug: "razer-deathadder-v3",
    name: "Razer DeathAdder V3",
    hersteller: "Razer",
    kategorie: "Gaming-Maus",
    preis: 79,
    bewertung: 4.6,
    bestePick: false,
    kurzBeschreibung:
      "Ergonomische Gaming-Legende neu aufgelegt: 63g, Focus Pro 30K Sensor, perfekt für lange Sessions.",
    beschreibung:
      "Die Razer DeathAdder V3 ist die Evolution einer Gaming-Maus-Ikone. Mit einem radikal schlankeren Profil, 63g Gewicht und dem Focus Pro 30K Sensor bietet sie top Performance zu einem fairen Preis. Das ergonomische Design ist ideal für lange Gaming-Sessions und alle Griffstile.",
    features: [
      "Focus Pro 30K optischer Sensor (100–30.000 DPI)",
      "63 g schlankes, ergonomisches Gehäuse",
      "Razer HyperSpeed kabellos (optional)",
      "6 programmierbare Tasten",
      "Speedflex geflochtenes Kabel",
      "Razer Chroma RGB Beleuchtung",
      "Gen-3 optische Schalter (90M Klicks)",
      "Kompatibel mit Razer Synapse 3",
    ],
    pros: [
      "Exzellenter Focus Pro 30K Sensor",
      "Ergonomisches Design für lange Sessions",
      "Günstiger Einstiegspreis",
      "Leichtes 63g Gehäuse",
      "Hochwertiges Speedflex Kabel",
    ],
    cons: [
      "Nur für Rechtshänder",
      "Razer Synapse Software kann überfordern",
      "RGB erhöht das Gewicht minimal",
      "Kein eigener Onboard-Profilspeicher",
    ],
    technischeDaten: {
      Sensor: "Focus Pro 30K optisch",
      "DPI-Bereich": "100–30.000 DPI",
      Abtastrate: "bis 1000 Hz",
      Tasten: "6 programmierbare",
      Verbindung: "USB-C (kabelgebunden)",
      Gewicht: "63 g",
      Abmessungen: "128,0 × 68,0 × 44,0 mm",
      Kabel: "2,1 m Speedflex",
      Schalter: "Gen-3 optisch, 90M Klicks",
      Kompatibilität: "Windows 7+, macOS 10.14+",
    },
    faq: [
      {
        frage: "Gibt es eine kabellose Version?",
        antwort:
          "Ja, die DeathAdder V3 HyperSpeed bietet kabellose Verbindung mit bis zu 90 Stunden Akkulaufzeit.",
      },
      {
        frage: "Welchen Sensor hat die DeathAdder V3?",
        antwort:
          "Den Focus Pro 30K optischen Sensor mit bis zu 30.000 DPI und verbesserter Präzision auf allen Oberflächen.",
      },
      {
        frage: "Ist die Maus für Claw-Grip geeignet?",
        antwort:
          "Ja, das schlanke Design ist für Palm-, Claw- und Fingertip-Grip optimiert.",
      },
      {
        frage: "Funktioniert Chroma RGB mit anderen Razer-Geräten?",
        antwort:
          "Ja, Chroma RGB synchronisiert sich mit allen Razer-Chroma-kompatiblen Geräten über Razer Synapse 3.",
      },
      {
        frage: "Brauche ich Razer Synapse?",
        antwort:
          "Für Basisfunktionen nicht, aber für DPI-Einstellungen, Makros und RGB-Anpassung wird Razer Synapse 3 benötigt.",
      },
    ],
    affiliateUrl:
      "https://www.amazon.de/s?k=Razer+DeathAdder+V3&tag=bestvpnvergle-21",
    verfuegbar: true,
    garantieMonate: 24,
  },
  {
    id: "6",
    slug: "corsair-k70-rgb",
    name: "Corsair K70 RGB",
    hersteller: "Corsair",
    kategorie: "Tastatur",
    preis: 169,
    bewertung: 4.7,
    bestePick: true,
    kurzBeschreibung:
      "Premium mechanische Gaming-Tastatur mit Cherry MX Switches, per-Taste RGB und robustem Aluminiumrahmen.",
    beschreibung:
      "Die Corsair K70 RGB MK.2 ist die Premium-Wahl für anspruchsvolle Gamer. Mit Cherry MX Switches, einem soliden Aluminiumrahmen und brillanter per-Taste RGB-Beleuchtung bietet sie das ideale Gleichgewicht aus Leistung, Haltbarkeit und Optik. Der dedizierte Multimedia-Roller und USB-Passthrough machen sie zur Allround-Tastatur.",
    features: [
      "Cherry MX Switches (Rot, Braun oder Blau wählbar)",
      "Per-Taste RGB mit 16,8 Mio. Farben",
      "Flugzeugaluminium-Rahmen",
      "Dedizierter Multimedia-Roller",
      "Textured WASD & 1–6 Keycaps inklusive",
      "USB-A Passthrough-Port",
      "8 MB Onboard-Speicher (3 Profile)",
      "1000 Hz Polling Rate, 100% Anti-Ghosting",
    ],
    pros: [
      "Hochwertige Cherry MX Switches",
      "Stabiler und langlebiger Aluminiumrahmen",
      "Exzellente per-Taste RGB-Beleuchtung",
      "Dedizierte Multimedia-Steuerung",
      "Guter Onboard-Speicher für Makros",
    ],
    cons: [
      "Kein Bluetooth oder kabellos",
      "Kein Tenkeyless/Kompaktlayout verfügbar",
      "Kabel nicht abnehmbar",
      "iCUE Software ressourcenintensiv",
    ],
    technischeDaten: {
      Switches: "Cherry MX Red / Brown / Blue",
      Layout: "DE / QWERTZ Vollformat",
      Beleuchtung: "Per-Taste RGB, 16,8 Mio. Farben",
      Schnittstelle: "USB-A (vergoldet)",
      "Onboard-Speicher": "8 MB (3 Profile)",
      "Polling Rate": "1000 Hz",
      Rollover: "100% Anti-Ghosting",
      Abmessungen: "443 × 170 × 36 mm",
      Gewicht: "1,22 kg",
      Kabel: "1,8 m geflochtenes USB-Kabel",
    },
    faq: [
      {
        frage: "Welche Switch-Varianten gibt es?",
        antwort:
          "Cherry MX Red (linear, leise), Brown (taktil, leise), Blue (taktil, klickend) und Speed (linear, sehr schnell).",
      },
      {
        frage: "Kann ich RGB-Profile speichern?",
        antwort:
          "Ja, der 8 MB Onboard-Speicher erlaubt bis zu 3 vollständige Profile mit Makros und RGB – auch ohne Software auf dem PC nutzbar.",
      },
      {
        frage: "Ist die Tastatur spritzwassergeschützt?",
        antwort:
          "Die K70 RGB hat keine offizielle IP-Zertifizierung für Wasserschutz. Kleinere Spritzer werden aber meist toleriert.",
      },
      {
        frage: "Funktioniert die Tastatur ohne iCUE?",
        antwort:
          "Ja, alle Grundfunktionen inklusive gespeicherter RGB-Profile funktionieren ohne iCUE-Software.",
      },
      {
        frage: "Sind die Keycaps austauschbar?",
        antwort:
          "Ja, die K70 nutzt Standard-MX-Keycaps (Cherry-kompatibel), sodass individuelle Keycap-Sets installiert werden können.",
      },
    ],
    affiliateUrl:
      "https://www.amazon.de/s?k=Corsair+K70+RGB+MK.2&tag=bestvpnvergle-21",
    verfuegbar: true,
    garantieMonate: 24,
  },
  {
    id: "7",
    slug: "steelseries-arctis-nova-pro",
    name: "SteelSeries Arctis Nova Pro",
    hersteller: "SteelSeries",
    kategorie: "Headset",
    preis: 249,
    bewertung: 4.7,
    bestePick: true,
    kurzBeschreibung:
      "Das beste Gaming-Headset 2024: Hi-Res Audio, Active Noise Cancellation und Hot-Swap-Dual-Batterie.",
    beschreibung:
      "Das SteelSeries Arctis Nova Pro ist das absolute Flaggschiff unter den Gaming-Headsets. Mit Hi-Res Audio-Zertifizierung, effektiver Active Noise Cancellation und dem einzigartigen Dual-Battery-System für theoretisch unbegrenzte Spielzeit setzt es Maßstäbe. Der GameDAC Gen 2 bietet audiophile Qualität über alle Plattformen.",
    features: [
      "Hi-Res Audio zertifiziert (10–40.000 Hz)",
      "Active Noise Cancellation (ANC)",
      "Dual-Battery Hot-Swap (nie leer)",
      "Ausfahrbares Mikrofon mit Rauschunterdrückung",
      "GameDAC Gen 2 USB-Soundkarte",
      "Sonar Software mit 7.1 Surround",
      "Kompatibel mit PC, PS5, PS4, Xbox, Mobile",
      "Stahlrahmenkonstruktion mit Premiumpolsterung",
    ],
    pros: [
      "Hervorragende Hi-Res Audioqualität",
      "Effektive Active Noise Cancellation",
      "Dual-Battery für unbegrenzte Spielzeit",
      "Breite Plattformkompatibilität",
      "Premium-Verarbeitungsqualität",
    ],
    cons: [
      "Sehr teuer",
      "GameDAC für vollen Funktionsumfang nötig",
      "Etwas schwerer als andere Headsets (338 g)",
      "Kabelsetup komplex",
    ],
    technischeDaten: {
      Treiber: "40 mm Neodym-Hochleistungstreiber",
      Frequenzbereich: "10–40.000 Hz (Hi-Res)",
      Mikrofon: "Ausfahrbar, omnidirektional, mit ANC",
      Verbindung: "USB-C (GameDAC Gen 2)",
      Akku: "Dual-Batterie System (je 18h = 36h+)",
      ANC: "Ja, aktiv",
      Gewicht: "338 g",
      Kompatibilität: "PC / PS5 / PS4 / Xbox / Mobile",
      "7.1 Surround": "Ja (über Sonar Software)",
      Kabel: "USB-C auf USB-A, 3,5mm Klinke",
    },
    faq: [
      {
        frage: "Funktioniert das Headset ohne den GameDAC?",
        antwort:
          "Eingeschränkt ja (3,5mm), aber für ANC, Dual-Battery und volle Audiokontrolle ist der GameDAC Gen 2 erforderlich.",
      },
      {
        frage: "Wie lange hält der Akku?",
        antwort:
          "Mit dem Dual-Battery-System kannst du die zweite Batterie tauschen, während die erste lädt – theoretisch unbegrenzte Spielzeit.",
      },
      {
        frage: "Unterstützt das Headset 7.1 Surround Sound?",
        antwort:
          "Ja, über die Sonar Software für Windows mit präzisen Soundpositionen für kompetitives Gaming.",
      },
      {
        frage: "Ist das Mikrofon gut für Streaming?",
        antwort:
          "Ja, das retractable Mikrofon mit ClearCast AI-Rauschunterdrückung liefert klare Sprachwiedergabe.",
      },
      {
        frage: "Funktioniert es mit PS5 und Xbox?",
        antwort:
          "Ja, das Arctis Nova Pro ist eine der wenigen Headsets, die native Multi-Plattform-Verbindung auf PS5, Xbox und PC bieten.",
      },
    ],
    affiliateUrl:
      "https://www.amazon.de/s?k=SteelSeries+Arctis+Nova+Pro&tag=bestvpnvergle-21",
    verfuegbar: true,
    garantieMonate: 24,
  },
  {
    id: "8",
    slug: "samsung-odyssey-g7",
    name: "Samsung Odyssey G7",
    hersteller: "Samsung",
    kategorie: "Monitor",
    preis: 599,
    bewertung: 4.5,
    bestePick: false,
    kurzBeschreibung:
      "32 Zoll QLED Curved Gaming-Monitor mit 240Hz und 1ms – perfekt für immersives High-FPS Gaming.",
    beschreibung:
      "Der Samsung Odyssey G7 vereint schnelles Gaming mit hoher Bildqualität. Das 32-Zoll QLED-Panel mit 1000R Curved Design und 240Hz Bildwiederholrate sorgt für immersives, schnelles Gameplay. Mit WQHD-Auflösung, HDR600 und voller G-Sync / FreeSync-Kompatibilität ist er die erste Wahl für anspruchsvolle PC-Gamer.",
    features: [
      "32 Zoll VA QLED Panel, 1000R Kurve",
      "2560×1440 WQHD Auflösung",
      "240 Hz Bildwiederholrate",
      "1 ms MPRT Reaktionszeit",
      "HDR600 für kräftige Farben",
      "AMD FreeSync Premium Pro",
      "NVIDIA G-Sync kompatibel",
      "2× HDMI 2.1, 1× DisplayPort 1.4",
    ],
    pros: [
      "Exzellente QLED-Bildqualität",
      "Sehr schnelle 240Hz für kompetitives Gaming",
      "Immersives 1000R Curved Design",
      "Tiefer Kontrast dank VA-Panel",
      "Gute HDR-Performance (HDR600)",
    ],
    cons: [
      "Kein 4K – nur 1440p Auflösung",
      "1000R Kurve nicht für jeden Einsatz ideal",
      "Eingeschränkte Ergonomie-Einstellungen",
      "Teuer verglichen mit Flat-Monitoren",
    ],
    technischeDaten: {
      Panel: "32 Zoll VA QLED",
      Auflösung: "2560×1440 (WQHD)",
      Wiederholrate: "240 Hz",
      Reaktionszeit: "1 ms MPRT",
      HDR: "HDR600 (VESA)",
      Helligkeit: "600 cd/m² (HDR Peak)",
      Kontrast: "2500:1 (statisch)",
      Farbabdeckung: "95% DCI-P3",
      Anschlüsse: "2× HDMI 2.1, 1× DisplayPort 1.4, 2× USB-A",
      Abmessungen: "714 × 527 × 330 mm (mit Standfuß)",
      Gewicht: "9,7 kg",
      Kurve: "1000R",
    },
    faq: [
      {
        frage: "Unterstützt der Monitor 4K?",
        antwort:
          "Nein, der Odyssey G7 (32 Zoll) läuft mit WQHD (2560×1440) bei bis zu 240Hz. Es gibt kein 4K-Modell dieser Serie.",
      },
      {
        frage: "Ist der Monitor G-Sync kompatibel?",
        antwort:
          "Ja, der Monitor ist NVIDIA G-Sync kompatibel (zertifiziert) und unterstützt AMD FreeSync Premium Pro nativ.",
      },
      {
        frage: "Welche Anschlüsse hat der Monitor?",
        antwort:
          "2× HDMI 2.1 (für PS5/Xbox Series X bei 120Hz), 1× DisplayPort 1.4 und 2× USB-A Hub.",
      },
      {
        frage: "Ist die 1000R-Kurve für normale PC-Arbeit geeignet?",
        antwort:
          "Für reine Gaming-Nutzung ideal, für Bildbearbeitung oder Office-Arbeit ist ein flacher Monitor besser geeignet.",
      },
      {
        frage: "Kann ich den Monitor mit PS5 oder Xbox nutzen?",
        antwort:
          "Ja, dank HDMI 2.1 kann PS5/Xbox Series X mit 1440p/120fps angeschlossen werden (je nach Konsolenunterstützung).",
      },
    ],
    affiliateUrl:
      "https://www.amazon.de/s?k=Samsung+Odyssey+G7+32&tag=bestvpnvergle-21",
    verfuegbar: true,
    garantieMonate: 24,
  },
];

export function getProduktBySlug(slug: string): GamingProdukt | undefined {
  return gamingProdukte.find((p) => p.slug === slug);
}

export function getProduktsByKategorie(
  kategorie: GamingProdukt["kategorie"]
): GamingProdukt[] {
  return gamingProdukte.filter((p) => p.kategorie === kategorie);
}

export function getBestePicks(): GamingProdukt[] {
  return gamingProdukte.filter((p) => p.bestePick);
}
