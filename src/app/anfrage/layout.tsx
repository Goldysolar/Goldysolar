import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "1-Minute Solar Anfrage | Goldy Solar GmbH",
  description: "Erhalten Sie in nur 1 Minute ein unverbindliches Angebot für Ihre Photovoltaikanlage. Einfach Dachform und Verbrauch angeben.",
  alternates: { canonical: "https://goldysolar.de/anfrage" },
};

export default function AnfrageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
