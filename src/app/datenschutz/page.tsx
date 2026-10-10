import React from 'react';
import type { Metadata } from 'next';
import PageHeroBanner from '@/components/common/PageHeroBanner';
import { COMPANY_INFO } from '@/data/companyData';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | Goldy Solar GmbH Heidelberg',
  description: 'Datenschutzerklärung und Informationen zur DSGVO-konformen Datenverarbeitung der Goldy Solar GmbH.',
  alternates: {
    canonical: 'https://goldysolar.de/datenschutz',
  },
};

export default function DatenschutzPage() {
  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>
      <PageHeroBanner
        category="RECHTLICHES"
        title="Datenschutzerklärung"
        subtitle="Informationen zur Erhebung und Verarbeitung Ihrer personenbezogenen Daten."
        trustTags={[]}
        show3DIcons={false}
      />

      <div className="container" style={{ paddingTop: '50px', paddingBottom: '90px', maxWidth: '900px' }}>
        <div 
          className="legal-html-content"
          style={{ background: '#FFFFFF', padding: '50px', borderRadius: '16px', boxShadow: '0 4px 14px rgba(15, 71, 97, 0.04)' }}
        >
          <h2>1. Datenschutz auf einen Blick</h2>

          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
          </p>

          <h3>Datenerfassung auf dieser Website</h3>
          <h4>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.
          </p>

          <h4>Wie erfassen wir Ihre Daten?</h4>
          <p>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben oder im Rahmen von Projekt- und Angebotsanfragen übermitteln.
          </p>
          <p>
            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
          </p>

          <h4>Wofür nutzen wir Ihre Daten?</h4>
          <p>
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über die Website Verträge geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen verarbeitet.
          </p>

          <h4>Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
          <p>
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
          </p>
          <p>
            Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
          </p>

          <h3>Analyse-Tools und Tools von Drittanbietern</h3>
          <p>
            Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen. Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.
          </p>

          <h2>2. Hosting</h2>
          <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>

          <h3>Externes Hosting</h3>
          <p>
            Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
          </p>
          <p>
            Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.
          </p>
          <p>
            Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.
          </p>
          <p>
            <strong>Wir setzen folgende(n) Hoster ein:</strong><br />
            Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA
          </p>
          <p>
            Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework“ (DPF). Der DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten.
          </p>

          <h3>Auftragsverarbeitung</h3>
          <p>
            Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.
          </p>

          <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>

          <h3>Datenschutz</h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
          <p>
            Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
          </p>
          <p>
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
          </p>

          <h3>Hinweis zur verantwortlichen Stelle</h3>
          <p>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p>
            <strong>{COMPANY_INFO.name}</strong><br />
            {COMPANY_INFO.address.street}<br />
            {COMPANY_INFO.address.zip} {COMPANY_INFO.address.city}<br />
            {COMPANY_INFO.address.country}
          </p>
          <p>
            <strong>Vertreten durch den Geschäftsführer:</strong> {COMPANY_INFO.ceo}<br />
            <strong>Telefon:</strong> {COMPANY_INFO.contact.phone}<br />
            <strong>E-Mail:</strong> {COMPANY_INFO.contact.email}<br />
            <strong>Registergericht:</strong> {COMPANY_INFO.legal.register}
          </p>
          <p>
            Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
          </p>

          <h3>Speicherdauer</h3>
          <p>
            Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
          </p>

          <h3>Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h3>
          <p>
            Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind, auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.
          </p>

          <h3>Empfänger von personenbezogenen Daten</h3>
          <p>
            Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung geschlossen.
          </p>

          <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
          <p>
            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
          </p>

          <h3>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>
          <p>
            <strong>
              WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
            </strong>
          </p>
          <p>
            <strong>
              WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
            </strong>
          </p>

          <h3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
          <p>
            Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
          </p>
          <p>
            <strong>Die für uns zuständige federführende Aufsichtsbehörde ist:</strong><br />
            Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg<br />
            Lautenschlagerstraße 20, 70173 Stuttgart<br />
            Postfach 10 29 32, 70025 Stuttgart<br />
            Website: <a href="https://www.baden-wuerttemberg.datenschutz.de" target="_blank" rel="noopener noreferrer">https://www.baden-wuerttemberg.datenschutz.de</a>
          </p>

          <h3>Recht auf Datenübertragbarkeit</h3>
          <p>
            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
          </p>

          <h3>Auskunft, Berichtigung und Löschung</h3>
          <p>
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
          </p>

          <h3>Recht auf Einschränkung der Verarbeitung</h3>
          <p>
            Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:
          </p>
          <ul>
            <li>
              Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            </li>
            <li>
              Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.
            </li>
            <li>
              Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            </li>
            <li>
              Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            </li>
          </ul>
          <p>
            Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
          </p>

          <h3>SSL- bzw. TLS-Verschlüsselung</h3>
          <p>
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
          </p>
          <p>
            Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
          </p>

          <h3>Widerspruch gegen Werbe-E-Mails</h3>
          <p>
            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
          </p>

          <h2>4. Datenerfassung auf dieser Website</h2>

          <h3>Cookies</h3>
          <p>
            Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
          </p>
          <p>
            Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog. Third-Party-Cookies). Third-Party-Cookies ermöglichen die Einbindung bestimmter Dienstleistungen von Drittunternehmen innerhalb von Webseiten (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
          </p>
          <p>
            Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Webseitenfunktionen ohne diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies können zur Auswertung des Nutzerverhaltens oder zu Werbezwecken verwendet werden.
          </p>
          <p>
            Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur Optimierung der Website (z. B. Cookies zur Messung des Webpublikums) erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von notwendigen Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur Speicherung von Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG); die Einwilligung ist jederzeit widerrufbar.
          </p>
          <p>
            Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
          </p>
          <p>
            Sofern weitere Cookies und Dienste auf dieser Website eingesetzt werden, können Sie dies dieser Datenschutzerklärung entnehmen.
          </p>

          <h3>Einwilligungsverwaltung mit LocalStorage (goldysolar_cookie_consent)</h3>
          <p>
            Unsere Website nutzt den lokalen Speicher Ihres Browsers (LocalStorage), um Ihre Einstellungen bezüglich der Einwilligung zur Nutzung externer Medien und Skripte (wie z. B. Google Maps) zu speichern. Hierbei wird ein Eintrag unter der Bezeichnung <code>goldysolar_cookie_consent</code> auf Ihrem Endgerät hinterlegt. Diese Speicherung ist technisch erforderlich, damit die Website bei künftigen Seitenaufrufen oder Wiederbesuchen erkennt, welche Einwilligungen Sie erteilt oder verweigert haben.
          </p>
          <p>
            Die Rechtsgrundlage für den Zugriff und die Speicherung dieser Informationen auf Ihrem Endgerät ist § 25 Abs. 2 Nr. 2 TDDDG. Die anschließende Datenverarbeitung erfolgt auf Grundlage unseres berechtigten Interesses an einer nutzerfreundlichen, rechtskonformen und nachweisbaren Dokumentation von Einwilligungen gemäß Art. 6 Abs. 1 lit. f DSGVO.
          </p>

          <h3>Server-Log-Dateien</h3>
          <p>
            Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
          </p>
          <ul>
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p>
            Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
          </p>
          <p>
            Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
          </p>

          <h3>Kontaktformular</h3>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
          <p>
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
          </p>
          <p>
            Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
          </p>

          <h3>Verarbeitung von Kunden-, Anfrage- und Projektdaten (Solar-Rechner / Lead-Formular)</h3>
          <p>
            Wenn Sie über unsere Website konkrete Anfragen zu Photovoltaikanlagen, Speichersystemen oder Beratungsterminen einreichen (insbesondere über unseren Solar-Rechner und das Schnell-Anfrageformular auf /anfrage), erheben und verarbeiten wir die von Ihnen eingegebenen personenbezogenen Daten (wie Anrede, Vor- und Nachname, E-Mail-Adresse, Telefonnummer, Postleitzahl, Ort, Eigentumsverhältnis) sowie die technischen Angaben zu Ihrer Immobilie (z. B. Haustyp, Dachform, Dacheindeckung, geschätzte Dachfläche und ergänzende Freitext-Bemerkungen).
          </p>
          <p>
            Die Erhebung und Verarbeitung dieser Daten erfolgt ausschließlich zweckgebunden zur Prüfung der technischen Machbarkeit, zur Kontaktaufnahme zwecks fachlicher Beratung sowie zur Erstellung eines maßgeschneiderten Angebots. Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher Maßnahmen). Kommt es zu einem Vertragsschluss, verarbeiten wir die Daten zur Erfüllung des Vertragsverhältnisses. Die Daten werden gelöscht, sobald der Zweck ihrer Erhebung entfällt, es sei denn, es bestehen gesetzliche Aufbewahrungsfristen (z. B. handels- oder steuerrechtliche Pflichten nach HGB/AO).
          </p>

          <h3>Interaktiver Chat-Assistent (Goldy Chat)</h3>
          <p>
            Auf unserer Website bieten wir einen interaktiven Chat-Assistenten („Goldy Chat“) an, um Nutzern eine schnelle und barrierefreie Kontaktaufnahme sowie die strukturierte Übermittlung von Projektanfragen zu ermöglichen. Die von Ihnen im Chatfenster eingegebenen Angaben (z. B. Kontaktdaten und Anfragedaten zu Ihrem Bauvorhaben) werden verarbeitet, um Ihr konkretes Anliegen zu beantworten und das gewünschte Angebot vorzubereiten.
          </p>
          <p>
            Die Rechtsgrundlage für diese Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO (unser berechtigtes Interesse an einer zeitgemäßen, kundenorientierten Kommunikation). Die eingegebenen Daten werden verschlüsselt an unsere Systeme übermittelt und nicht für eigenständige automatisierte Profilerstellungen genutzt.
          </p>

          <h3>Technischer E-Mail-Versand und Formularverarbeitung über Resend API</h3>
          <p>
            Für die zuverlässige technische Übermittlung und Zustellung von Anfragen, die über unsere Webformulare und den Chat-Assistenten abgesendet werden, setzen wir den Transaktions-E-Mail-Dienst Resend ein. Anbieter ist die Resend, Inc., 2261 Market Street #5039, San Francisco, CA 94114, USA.
          </p>
          <p>
            Wenn Sie ein Anfrageformular absenden, werden die von Ihnen eingegebenen Daten über eine verschlüsselte Programmierschnittstelle (REST-API per TLS) an die Server von Resend übertragen, verarbeitet und von dort als Benachrichtigungs-E-Mail an unsere Kundenbetreuung weitergeleitet. Die Nutzung dieses Dienstes dient der sicheren, unterbrechungsfreien und schnellen Bearbeitung von Kundenanfragen. Rechtsgrundlage ist unser berechtigtes Interesse an einer effizienten IT-Infrastruktur gemäß Art. 6 Abs. 1 lit. f DSGVO sowie Art. 6 Abs. 1 lit. b DSGVO (Bearbeitung vorvertraglicher Anfragen).
          </p>
          <p>
            Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission (Standard Contractual Clauses – SCC) sowie die Zertifizierung der Resend, Inc. nach dem EU-US Data Privacy Framework (DPF) gestützt. Zudem besteht eine vertragliche Vereinbarung zur Auftragsverarbeitung (Data Processing Addendum – DPA) gemäß Art. 28 DSGVO, die gewährleistet, dass der Dienstleister Daten nur nach unseren Weisungen verarbeitet.
          </p>

          <h3>Anfrage per E-Mail, Telefon oder Telefax</h3>
          <p>
            Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
          <p>
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
          </p>
          <p>
            Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
          </p>

          <h3>Kommunikation via WhatsApp (Click-to-Chat)</h3>
          <p>
            Auf unserer Website bieten wir die Möglichkeit, über den Instant-Messaging-Dienst WhatsApp mit uns in Kontakt zu treten (sog. Click-to-Chat-Verlinkung). Anbieter dieses Dienstes für Nutzer innerhalb des Europäischen Wirtschaftsraums ist die WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland (Mutterkonzern: Meta Platforms Inc., 1 Hacker Way, Menlo Park, CA 94025, USA).
          </p>
          <p>
            Auf unserer Website ist kein aktives WhatsApp-Skript eingebunden, das bereits beim Betreten der Seite Daten überträgt. Eine Datenübertragung erfolgt erst, wenn Sie aktiv auf die WhatsApp-Schaltfläche bzw. den Link klicken. Hierbei werden Sie auf die Server bzw. die Anwendung von WhatsApp weitergeleitet. Dabei verarbeitet WhatsApp Ihre IP-Adresse sowie gerätebezogene Daten. Wenn Sie mit uns über WhatsApp chatten, erhalten wir Ihre Telefonnummer und Ihren bei WhatsApp hinterlegten Profilnamen sowie den Inhalt der übermittelten Nachricht.
          </p>
          <p>
            Die Datenverarbeitung erfolgt zum Zwecke der Beantwortung Ihrer Anfrage und zur Durchführung vorvertraglicher Maßnahmen auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO sowie auf Grundlage unseres berechtigten Interesses an einer schnellen und zeitgemäßen Kommunikation gemäß Art. 6 Abs. 1 lit. f DSGVO. Meta Platforms Inc. verfügt über eine Zertifizierung nach dem EU-US Data Privacy Framework (DPF). Details zur Datenerhebung und -verarbeitung durch WhatsApp finden Sie in der Datenschutzerklärung von WhatsApp unter: <a href="https://www.whatsapp.com/legal/privacy-policy-eea" target="_blank" rel="noopener noreferrer">https://www.whatsapp.com/legal/privacy-policy-eea</a>.
          </p>

          <h2>5. Plugins und Tools</h2>

          <h3>Google Maps</h3>
          <p>
            Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland. Mit Hilfe dieses Dienstes können wir Kartenmaterial auf unserer Website einbinden.
          </p>
          <p>
            Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung. Wenn Google Maps aktiviert ist, kann Google zum Zwecke der einheitlichen Darstellung der Schriftarten Google Fonts verwenden. Beim Aufruf von Google Maps lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
          </p>
          <p>
            Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.
          </p>
          <p>
            Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: <a href="https://privacy.google.com/businesses/gdprcontrollerterms/" target="_blank" rel="noopener noreferrer">https://privacy.google.com/businesses/gdprcontrollerterms/</a> und <a href="https://privacy.google.com/businesses/gdprcontrollerterms/sccs/" target="_blank" rel="noopener noreferrer">https://privacy.google.com/businesses/gdprcontrollerterms/sccs/</a>.
          </p>
          <p>
            Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=de</a>.
          </p>
          <p>
            Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework“ (DPF). Der DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link: <a href="https://www.dataprivacyframework.gov/participant/5780" target="_blank" rel="noopener noreferrer">https://www.dataprivacyframework.gov/participant/5780</a>.
          </p>

          <h3>Lokale Schriften und Symbole (System Fonts & Lucide Icons)</h3>
          <p>
            Diese Website verwendet zur Darstellung von Texten ausschließlich sogenannte Systemschnittstellen (lokale System-Fonts Ihres Betriebssystems bzw. Browsers). Es werden keine Schriftarten von externen Servern (wie etwa fonts.googleapis.com) nachgeladen. Ebenso werden Icons und Grafiken (Lucide React) direkt als lokale SVG-Vektoren aus dem Programmpaket unserer eigenen Serverinfrastruktur geladen. Dadurch wird sichergestellt, dass beim bloßen Aufrufen der Seiten keine Verbindungen zu externen Schrift- oder Icon-Bibliotheken aufgebaut und somit keine IP-Adressen an Drittanbieter übertragen werden.
          </p>

          <hr style={{ margin: '40px 0', borderColor: '#E2E8F0' }} />
          <p style={{ fontSize: '13px', color: '#64748B', fontStyle: 'italic' }}>
            Teile dieser Datenschutzerklärung wurden mit dem Generator der eRecht24 (<a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer">https://www.e-recht24.de</a>) erstellt und durch unternehmensspezifische Klauseln für Goldy Solar GmbH rechtskonform ergänzt.
          </p>
        </div>
      </div>
    </div>
  );
}
