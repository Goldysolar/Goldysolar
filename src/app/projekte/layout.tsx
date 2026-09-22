import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unsere Referenzen & Solar-Projekte | Goldy Solar GmbH",
  description: "Entdecken Sie unsere erfolgreich realisierten Photovoltaik-Projekte für Einfamilienhäuser, Gewerbebetriebe und Solarparks in ganz Deutschland.",
  alternates: { canonical: "https://goldysolar.de/projekte" },
};

export default function ProjekteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
