import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Gaming-Vergleich | Die besten Gaming-Produkte 2024",
    template: "%s | Gaming-Vergleich",
  },
  description:
    "Vergleiche die besten Gaming-Produkte 2024: Konsolen, Mäuse, Tastaturen, Headsets und Monitore. Unabhängige Tests, Bewertungen und Empfehlungen.",
  keywords:
    "Gaming, Konsolen, Gaming-Maus, Gaming-Tastatur, Gaming-Headset, Gaming-Monitor, PS5, Xbox, Nintendo Switch, Vergleich, Test",
  authors: [{ name: "GamingVergleich.de" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
