import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Allgemeine Geschäftsbedingungen | Goldy Solar GmbH',
  description: 'Allgemeine Geschäftsbedingungen (AGB) der Goldy Solar GmbH',
};

export default function AGBPage() {
  return (
    <div className="container" style={{ paddingTop: '80px', paddingBottom: '100px', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '36px', fontWeight: 900, marginBottom: '40px', color: '#0F4761' }}>Allgemeine Geschäftsbedingungen (AGB)</h1>
      
      <div style={{ fontSize: '16px', lineHeight: 1.8, color: '#404040' }}>
        <h2 style={{ fontSize: '22px', fontWeight: 800, marginTop: '40px', marginBottom: '16px', color: '#0E2841' }}>
          § 1 Geltungsbereich & Vertragsgegenstand
        </h2>
        <p style={{ marginBottom: '16px' }}>
          Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, Lieferungen und sonstigen Leistungen der Goldy Solar GmbH (nachfolgend „Auftragnehmer“) gegenüber ihren Kunden (nachfolgend „Kunde“). Vertragsgegenstand ist in der Regel die Planung, die Lieferung, die Montage sowie die Netzanschlussunterstützung von Photovoltaikanlagen und Batteriespeichern. Abweichende oder ergänzende Bedingungen des Kunden werden nicht Vertragsbestandteil, es sei denn, ihrer Geltung wird ausdrücklich schriftlich zugestimmt.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 800, marginTop: '40px', marginBottom: '16px', color: '#0E2841' }}>
          § 2 Vertragsschluss (Aufforderung zur Abgabe eines Angebots)
        </h2>
        <p style={{ marginBottom: '16px' }}>
          Die auf der Website der Goldy Solar GmbH bereitgestellten Informationen und interaktiven Fragebögen (Lead-Funnel) zur Erfassung von Dach- und Verbrauchsdaten stellen kein verbindliches Angebot zum Abschluss eines Vertrages dar. Vielmehr handelt es sich um eine unverbindliche Aufforderung zur Abgabe eines Angebots gemäß § 145 ff. BGB (invitatio ad offerendum). 
        </p>
        <p style={{ marginBottom: '16px' }}>
          Nach Eingabe der Daten und technischer Prüfung durch den Auftragnehmer erhält der Kunde ein gesondertes, individuelles und verbindliches schriftliches Angebot. Ein rechtsgültiger Vertrag kommt erst durch die schriftliche Annahme dieses Angebots durch den Kunden zustande.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 800, marginTop: '40px', marginBottom: '16px', color: '#0E2841' }}>
          § 3 Mitwirkungspflichten des Kunden
        </h2>
        <p style={{ marginBottom: '16px' }}>
          Der Kunde ist verpflichtet, alle zur Ausführung der Leistungen erforderlichen Voraussetzungen auf eigene Kosten zu schaffen. Dies betrifft insbesondere:
        </p>
        <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
          <li style={{ marginBottom: '8px' }}>Die Gewährleistung der <strong>statischen Eignung</strong> des Daches und des Gebäudes für die Installation der Anlage. Der Kunde haftet für eventuelle Mängel an der Baustatik.</li>
          <li style={{ marginBottom: '8px' }}>Die Sicherstellung des ordnungsgemäßen Zustands des <strong>Zählerschranks</strong> und der gesamten Hauselektrik gemäß den geltenden technischen Anschlussbedingungen (TAB).</li>
          <li style={{ marginBottom: '8px' }}>Die Gewährung eines <strong>freien, ungehinderten und sicheren Zugangs</strong> zum Gebäude, zum Montageort (insb. Dach) sowie zum Stromanschluss für die Mitarbeiter des Auftragnehmers und dessen Subunternehmer.</li>
        </ul>

        <h2 style={{ fontSize: '22px', fontWeight: 800, marginTop: '40px', marginBottom: '16px', color: '#0E2841' }}>
          § 4 Netzanschluss und Genehmigungen
        </h2>
        <p style={{ marginBottom: '16px' }}>
          Der Auftragnehmer unterstützt den Kunden bei den notwendigen Formalitäten und Anträgen gegenüber dem zuständigen Verteilnetzbetreiber (VNB). Die endgültige Freigabe, Genehmigung und der physische Netzanschluss liegen jedoch im Verantwortungsbereich des VNB. Etwaige anfallende Kosten oder Gebühren des VNB sowie bauliche Anpassungen, die vom VNB gefordert werden, sind vollumfänglich vom Kunden zu tragen.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 800, marginTop: '40px', marginBottom: '16px', color: '#0E2841' }}>
          § 5 Zahlungsbedingungen & Meilensteine
        </h2>
        <p style={{ marginBottom: '16px' }}>
          Sofern im individuellen Angebot nicht anders vereinbart, erfolgt die Zahlung nach folgender Ratenzahlungsstruktur:
        </p>
        <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
          <li style={{ marginBottom: '8px' }}><strong>20 % Anzahlung</strong> nach Vertragsschluss (Auftragsbestätigung) und Festlegung des Liefertermins.</li>
          <li style={{ marginBottom: '8px' }}><strong>60 % Abschlagszahlung</strong> nach vollständiger Materialanlieferung am Installationsort.</li>
          <li style={{ marginBottom: '8px' }}><strong>20 % Restzahlung</strong> nach erfolgreicher Montage und technischer Inbetriebnahme.</li>
        </ul>
        <p style={{ marginBottom: '16px' }}>
          Rechnungen sind innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zur Zahlung fällig.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 800, marginTop: '40px', marginBottom: '16px', color: '#0E2841' }}>
          § 6 Eigentumsvorbehalt
        </h2>
        <p style={{ marginBottom: '16px' }}>
          Bis zur vollständigen Begleichung sämtlicher Forderungen aus dem Vertragsverhältnis bleiben alle gelieferten Materialien, Komponenten und Anlagen (Photovoltaikmodule, Wechselrichter, Speicher, Unterkonstruktionen etc.) gemäß § 449 BGB Eigentum der Goldy Solar GmbH. Eine Veräußerung, Verpfändung, Sicherungsübereignung oder anderweitige Überlassung dieser Vorbehaltsware an Dritte ist dem Kunden vor vollständiger Bezahlung untersagt.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 800, marginTop: '40px', marginBottom: '16px', color: '#0E2841' }}>
          § 7 Gewährleistung & Haftung
        </h2>
        <p style={{ marginBottom: '16px' }}>
          Es gilt die gesetzliche Mängelhaftung (Gewährleistung). Hiervon strikt zu trennen sind etwaige separate, über die gesetzliche Gewährleistung hinausgehende Herstellergarantien (z. B. Leistungs- oder Produktgarantien für Solarmodule und Wechselrichter). Ansprüche aus Herstellergarantien begründen kein eigenes Rechtsverhältnis mit der Goldy Solar GmbH und müssen direkt gegenüber dem jeweiligen Hersteller geltend gemacht werden.
        </p>
        <p style={{ marginBottom: '16px' }}>
          Gemäß § 309 BGB ist die Haftung der Goldy Solar GmbH für leichte Fahrlässigkeit ausgeschlossen, sofern keine wesentlichen Vertragspflichten (Kardinalpflichten), Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit oder Garantien betroffen sind. Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten ist die Haftung auf den vorhersehbaren, vertragstypischen Schaden begrenzt.
        </p>

        <h2 style={{ fontSize: '22px', fontWeight: 800, marginTop: '40px', marginBottom: '16px', color: '#0E2841' }}>
          § 8 Widerrufsrecht für Verbraucher
        </h2>
        <p style={{ marginBottom: '16px' }}>
          Ist der Kunde Verbraucher im Sinne des § 13 BGB und wurde der Vertrag als Fernabsatzvertrag oder außerhalb von Geschäftsräumen geschlossen, steht ihm ein gesetzliches Widerrufsrecht gemäß § 312g BGB zu.
        </p>
        <div style={{ background: '#F8FAFC', padding: '24px', borderRadius: '12px', marginBottom: '24px', border: '1px solid #E2E8F0' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '12px' }}>Widerrufsbelehrung</h3>
          <p style={{ marginBottom: '12px' }}><strong>Widerrufsrecht:</strong> Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses bzw. ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter die letzte Ware in Besitz genommen haben.</p>
          <p style={{ marginBottom: '12px' }}>Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Goldy Solar GmbH, Rudolf-Diesel-Straße 11, 69115 Heidelberg, E-Mail: info@goldysolar.de, Telefon: +49 6221 502 6666) mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.</p>
          <p style={{ marginBottom: '16px' }}><strong>Folgen des Widerrufs:</strong> Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf bei uns eingegangen ist.</p>
          
          <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px' }}>Muster-Widerrufsformular</h3>
          <p style={{ fontStyle: 'italic', fontSize: '14px' }}>
            (Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück.)<br /><br />
            An: Goldy Solar GmbH, Rudolf-Diesel-Straße 11, 69115 Heidelberg, E-Mail: info@goldysolar.de<br /><br />
            Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*)/die Erbringung der folgenden Dienstleistung (*)<br />
            Bestellt am (*)/erhalten am (*)<br />
            Name des/der Verbraucher(s)<br />
            Anschrift des/der Verbraucher(s)<br />
            Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)<br />
            Datum<br />
            (*) Unzutreffendes streichen.
          </p>
        </div>

        <h2 style={{ fontSize: '22px', fontWeight: 800, marginTop: '40px', marginBottom: '16px', color: '#0E2841' }}>
          § 9 Streitbeilegung & Gerichtsstand
        </h2>
        <p style={{ marginBottom: '16px' }}>
          <strong>Verbraucherschlichtung:</strong> Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle gemäß § 36 VSBG teilzunehmen.
        </p>
        <p style={{ marginBottom: '16px' }}>
          <strong>Gerichtsstand:</strong> Ist der Kunde Kaufmann, eine juristische Person des öffentlichen Rechts oder ein öffentlich-rechtliches Sondervermögen, ist der ausschließliche Gerichtsstand für alle Streitigkeiten aus diesem Vertrag der Geschäftssitz der Goldy Solar GmbH (Heidelberg). Dasselbe gilt, wenn der Kunde keinen allgemeinen Gerichtsstand in Deutschland hat.
        </p>
      </div>
    </div>
  );
}
