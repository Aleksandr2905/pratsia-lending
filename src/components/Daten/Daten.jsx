import React, { useState } from "react";
import {
  BtnListDaten,
  DatenList,
  DatenText,
  DatenWrapper,
  ListWrapper,
  TextDaten,
} from "./Daten.styled";
import { ListItem } from "@mui/material";
import { Svg } from "../Header/Header.styled";
import sprite from "../../assets/sprite.svg";
import { BtnImpress, BtnTextImpress } from "../Impressum/Impressum.styled";

const Daten = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <DatenWrapper>
      <BtnImpress>
        <Svg>
          <use href={`${sprite}#icon-arrow-left-short`}></use>
        </Svg>
        <BtnTextImpress>Weiterlesen</BtnTextImpress>
      </BtnImpress>

      <h2>Datenschutzerklärung</h2>
      <DatenList>
        <ListItem>
          <BtnListDaten onClick={() => toggleContent(0)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText> Präambel </DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 0 && (
            <div>
              <TextDaten>
                Mit der folgenden Datenschutzerklärung möchten wir Sie darüber
                aufklären, welche Arten Ihrer personenbezogenen Daten
                (nachfolgend auch kurz als `Daten` bezeichnet) wir zu welchen
                Zwecken und in welchem Umfang verarbeiten. Die
                Datenschutzerklärung gilt für alle von uns durchgeführten
                Verarbeitungen personenbezogener Daten, sowohl im Rahmen der
                Erbringung unserer Leistungen als auch insbesondere auf unseren
                Webseiten, in mobilen Applikationen sowie innerhalb externer
                Onlinepräsenzen, wie z. B. unserer Social-Media-Profile
                (nachfolgend zusammenfassend bezeichnet als `Onlineangebot`).
                Die verwendeten Begriffe sind nicht geschlechtsspezifisch.
              </TextDaten>
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten onClick={() => toggleContent(1)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText> Inhaltsübersicht </DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 1 && (
            <div>
              <TextDaten>
                Präambel Verantwortlicher Übersicht der Verarbeitungen
                Maßgebliche Rechtsgrundlagen Sicherheitsmaßnahmen Aufbewahrung
                und Löschung von Daten Rechte der betroffenen Personen
                Geschäftliche Leistungen Einsatz von Cookies Kontakt- und
                Anfrageverwaltung Werbliche Kommunikation via E-Mail, Post, Fax
                oder Telefon Präsenzen in sozialen Netzwerken (Social Media)
                Plug-ins und eingebettete Funktionen sowie Inhalte Änderung und
                Aktualisierung der Datenschutzerklärung Begriffsdefinitionen
              </TextDaten>
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten onClick={() => toggleContent(2)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText> Verantwortlicher </DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 2 && (
            <div>
              <TextDaten>
                Pratsia UG (haftungsbeschränkt) Garnstraße 12 47798 Krefeld
                E-Mail-Adresse: info@pratsia.de mechatronik
              </TextDaten>
            </div>
          )}
        </ListItem>
        <ListItem>
          <BtnListDaten onClick={() => toggleContent(3)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText> Übersicht der Verarbeitungen</DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 3 && (
            <div>
              <TextDaten>
                Die nachfolgende Übersicht fasst die Arten der verarbeiteten
                Daten und die Zwecke ihrer Verarbeitung zusammen und verweist
                auf die betroffenen Personen.
              </TextDaten>
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten onClick={() => toggleContent(4)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText> Arten der verarbeiteten Daten</DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 4 && (
            <div>
              <TextDaten>
                Bestandsdaten Zahlungsdaten Kontaktdaten Inhaltsdaten
                Vertragsdaten Nutzungsdaten Meta-, Kommunikations- und
                Verfahrensdaten Event-Daten (Facebook)
              </TextDaten>
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten onClick={() => toggleContent(5)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText> Kategorien betroffener Personen </DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 5 && (
            <div>
              <TextDaten>
                Kunden Interessenten Kommunikationspartner Nutzer Geschäfts- und
                Vertragspartner
              </TextDaten>
            </div>
          )}
        </ListItem>
        <ListItem>
          <BtnListDaten onClick={() => toggleContent(6)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText> Zwecke der Verarbeitung </DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 6 && (
            <div>
              <TextDaten>
                Erbringung vertraglicher Leistungen und Erfüllung vertraglicher
                Pflichten Kontaktanfragen und Kommunikation Direktmarketing
                Büro- und Organisationsverfahren Konversionsmessung Verwaltung
                und Beantwortung von Anfragen Feedback Marketing Profile mit
                nutzerbezogenen Informationen Bereitstellung unseres
                Onlineangebotes und Nutzerfreundlichkeit
              </TextDaten>
            </div>
          )}
        </ListItem>
        <ListItem>
          <BtnListDaten onClick={() => toggleContent(7)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText> Maßgebliche Rechtsgrundlagen </DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 7 && (
            <div>
              <TextDaten>
                Maßgebliche Rechtsgrundlagen nach der DSGVO: Im Folgenden
                erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf
                deren Basis wir personenbezogene Daten verarbeiten. Bitte nehmen
                Sie zur Kenntnis, dass neben den Regelungen der DSGVO nationale
                Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland
                gelten können. Sollten ferner im Einzelfall speziellere
                Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese in der
                Datenschutzerklärung mit.
              </TextDaten>
              <ul>
                <li>
                  <p>
                    Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO) - Die
                    betroffene Person hat ihre Einwilligung in die Verarbeitung
                    der sie betreffenden personenbezogenen Daten für einen
                    spezifischen Zweck oder mehrere bestimmte Zwecke gegeben.
                  </p>
                </li>
                <li>
                  <p>
                    Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs.
                    1 S. 1 lit. b) DSGVO) - Die Verarbeitung ist für die
                    Erfüllung eines Vertrags, dessen Vertragspartei die
                    betroffene Person ist, oder zur Durchführung
                    vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der
                    betroffenen Person erfolgen.
                  </p>
                </li>
                <li>
                  <p>
                    Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c) DSGVO)
                    - Die Verarbeitung ist zur Erfüllung einer rechtlichen
                    Verpflichtung erforderlich, der der Verantwortliche
                    unterliegt.
                  </p>
                </li>
                <li>
                  <p>
                    Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO) -
                    die Verarbeitung ist zur Wahrung der berechtigten Interessen
                    des Verantwortlichen oder eines Dritten notwendig,
                    vorausgesetzt, dass die Interessen, Grundrechte und
                    Grundfreiheiten der betroffenen Person, die den Schutz
                    personenbezogener Daten verlangen, nicht überwiegen.
                  </p>
                </li>
              </ul>

              <p>
                Nationale Datenschutzregelungen in Deutschland: Zusätzlich zu
                den Datenschutzregelungen der DSGVO gelten nationale Regelungen
                zum Datenschutz in Deutschland. Hierzu gehört insbesondere das
                Gesetz zum Schutz vor Missbrauch personenbezogener Daten bei der
                Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG
                enthält insbesondere Spezialregelungen zum Recht auf Auskunft,
                zum Recht auf Löschung, zum Widerspruchsrecht, zur Verarbeitung
                besonderer Kategorien personenbezogener Daten, zur Verarbeitung
                für andere Zwecke und zur Übermittlung sowie automatisierten
                Entscheidungsfindung im Einzelfall einschließlich Profiling.
                Ferner können Landesdatenschutzgesetze der einzelnen
                Bundesländer zur Anwendung gelangen.
              </p>
              <p>
                Hinweis auf Geltung DSGVO und Schweizer DSG: Diese
                Datenschutzhinweise dienen sowohl der Informationserteilung nach
                dem schweizerischen Bundesgesetz über den Datenschutz (Schweizer
                DSG) als auch nach der Datenschutzgrundverordnung (DSGVO). Aus
                diesem Grund bitten wir Sie zu beachten, dass aufgrund der
                breiteren räumlichen Anwendung und Verständlichkeit die Begriffe
                der DSGVO verwendet werden. Insbesondere statt der im Schweizer
                DSG verwendeten Begriffe `Bearbeitung` von `Personendaten`,
                `überwiegendes Interesse` und `besonders schützenswerte
                Personendaten` werden die in der DSGVO verwendeten Begriffe
                `Verarbeitung` von `personenbezogenen Daten` sowie `berechtigtes
                Interesse` und `besondere Kategorien von Daten`` verwendet. Die
                gesetzliche Bedeutung der Begriffe wird jedoch im Rahmen der
                Geltung des Schweizer DSG weiterhin nach dem Schweizer DSG
                bestimmt.
              </p>
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten onClick={() => toggleContent(8)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText> Sicherheitsmaßnahmen</DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 8 && (
            <div>
              <TextDaten>
                Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter
                Berücksichtigung des Stands der Technik, der
                Implementierungskosten und der Art, des Umfangs, der Umstände
                und der Zwecke der Verarbeitung sowie der unterschiedlichen
                Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der
                Rechte und Freiheiten natürlicher Personen geeignete technische
                und organisatorische Maßnahmen, um ein dem Risiko angemessenes
                Schutzniveau zu gewährleisten.
              </TextDaten>
              <TextDaten>
                Zu den Maßnahmen gehören insbesondere die Sicherung der
                Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch
                Kontrolle des physischen und elektronischen Zugangs zu den Daten
                als auch des sie betreffenden Zugriffs, der Eingabe, der
                Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung.
                Des Weiteren haben wir Verfahren eingerichtet, die eine
                Wahrnehmung von Betroffenenrechten, die Löschung von Daten und
                Reaktionen auf die Gefährdung der Daten gewährleisten. Ferner
                berücksichtigen wir den Schutz personenbezogener Daten bereits
                bei der Entwicklung bzw. Auswahl von Hardware, Software sowie
                Verfahren entsprechend dem Prinzip des Datenschutzes, durch
                Technikgestaltung und durch datenschutzfreundliche
                Voreinstellungen.
              </TextDaten>
              <TextDaten>
                Kürzung der IP-Adresse: Sofern IP-Adressen von uns oder von den
                eingesetzten Dienstleistern und Technologien verarbeitet werden
                und die Verarbeitung einer vollständigen IP-Adresse nicht
                erforderlich ist, wird die IP-Adresse gekürzt (auch als
                `IP-Masking` bezeichnet). Hierbei werden die letzten beiden
                Ziffern, bzw. der letzte Teil der IP-Adresse nach einem Punkt
                entfernt, bzw. durch Platzhalter ersetzt. Mit der Kürzung der
                IP-Adresse soll die Identifizierung einer Person anhand ihrer
                IP-Adresse verhindert oder wesentlich erschwert werden.
              </TextDaten>
              <TextDaten>
                Sicherung von Online-Verbindungen durch
                TLS-/SSL-Verschlüsselungstechnologie (HTTPS): Um die Daten der
                Nutzer, die über unsere Online-Dienste übertragen werden, vor
                unerlaubten Zugriffen zu schützen, setzen wir auf die
                TLS-/SSL-Verschlüsselungstechnologie. Secure Sockets Layer (SSL)
                und Transport Layer Security (TLS) sind die Eckpfeiler der
                sicheren Datenübertragung im Internet. Diese Technologien
                verschlüsseln die Informationen, die zwischen der Website oder
                App und dem Browser des Nutzers (oder zwischen zwei Servern)
                übertragen werden, wodurch die Daten vor unbefugtem Zugriff
                geschützt sind. TLS, als die weiterentwickelte und sicherere
                Version von SSL, gewährleistet, dass alle Datenübertragungen den
                höchsten Sicherheitsstandards entsprechen. Wenn eine Website
                durch ein SSL-/TLS-Zertifikat gesichert ist, wird dies durch die
                Anzeige von HTTPS in der URL signalisiert. Dies dient als ein
                Indikator für die Nutzer, dass ihre Daten sicher und
                verschlüsselt übertragen werden.
              </TextDaten>
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten onClick={() => toggleContent(9)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText> Aufbewahrung und Löschung von Daten</DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 9 && (
            <div>
              <TextDaten>Aufbewahrung und Löschung von Daten</TextDaten>
              <TextDaten>
                Zu den Maßnahmen gehören insbesondere die Sicherung der
                Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch
                Kontrolle des physischen und elektronischen Zugangs zu den Daten
                als auch des sie betreffenden Zugriffs, der Eingabe, der
                Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung.
                Des Weiteren haben wir Verfahren eingerichtet, die eine
                Wahrnehmung von Betroffenenrechten, die Löschung von Daten und
                Reaktionen auf die Gefährdung der Daten gewährleisten. Ferner
                berücksichtigen wir den Schutz personenbezogener Daten bereits
                bei der Entwicklung bzw. Auswahl von Hardware, Software sowie
                Verfahren entsprechend dem Prinzip des Datenschutzes, durch
                Technikgestaltung und durch datenschutzfreundliche
                Voreinstellungen.
              </TextDaten>
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten onClick={() => toggleContent(10)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText>Rechte der betroffenen Personen</DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 10 && (
            <div>
              <TextDaten>
                Rechte der betroffenen Personen aus der DSGVO: Ihnen stehen als
                Betroffene nach der DSGVO verschiedene Rechte zu, die sich
                insbesondere aus Art. 15 bis 21 DSGVO ergeben:
              </TextDaten>
              <ul>
                <li>
                  <p>
                    Widerspruchsrecht: Sie haben das Recht, aus Gründen, die
                    sich aus Ihrer besonderen Situation ergeben, jederzeit gegen
                    die Verarbeitung der Sie betreffenden personenbezogenen
                    Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO
                    erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf
                    diese Bestimmungen gestütztes Profiling. Werden die Sie
                    betreffenden personenbezogenen Daten verarbeitet, um
                    Direktwerbung zu betreiben, haben Sie das Recht, jederzeit
                    Widerspruch gegen die Verarbeitung der Sie betreffenden
                    personenbezogenen Daten zum Zwecke derartiger Werbung
                    einzulegen; dies gilt auch für das Profiling, soweit es mit
                    solcher Direktwerbung in Verbindung steht.
                  </p>
                </li>
                <li>
                  <p>
                    Widerrufsrecht bei Einwilligungen: Sie haben das Recht,
                    erteilte Einwilligungen jederzeit zu widerrufen.
                  </p>
                </li>
                <li>
                  <p>
                    Auskunftsrecht: Sie haben das Recht, eine Bestätigung
                    darüber zu verlangen, ob betreffende Daten verarbeitet
                    werden und auf Auskunft über diese Daten sowie auf weitere
                    Informationen und Kopie der Daten entsprechend den
                    gesetzlichen Vorgaben.
                  </p>
                </li>
                <li>
                  <p>
                    Recht auf Berichtigung: Sie haben entsprechend den
                    gesetzlichen Vorgaben das Recht, die Vervollständigung der
                    Sie betreffenden Daten oder die Berichtigung der Sie
                    betreffenden unrichtigen Daten zu verlangen.
                  </p>
                </li>
                <li>
                  <p>
                    Recht auf Löschung und Einschränkung der Verarbeitung: Sie
                    haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu
                    verlangen, dass Sie betreffende Daten unverzüglich gelöscht
                    werden, bzw. alternativ nach Maßgabe der gesetzlichen
                    Vorgaben eine Einschränkung der Verarbeitung der Daten zu
                    verlangen.
                  </p>
                </li>
                <li>
                  <p>
                    Recht auf Datenübertragbarkeit: Sie haben das Recht, Sie
                    betreffende Daten, die Sie uns bereitgestellt haben, nach
                    Maßgabe der gesetzlichen Vorgaben in einem strukturierten,
                    gängigen und maschinenlesbaren Format zu erhalten oder deren
                    Übermittlung an einen anderen Verantwortlichen zu fordern.
                  </p>
                </li>
                <li>
                  <p>
                    Beschwerde bei Aufsichtsbehörde: Sie haben unbeschadet eines
                    anderweitigen verwaltungsrechtlichen oder gerichtlichen
                    Rechtsbehelfs das Recht auf Beschwerde bei einer
                    Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres
                    gewöhnlichen Aufenthaltsorts, ihres Arbeitsplatzes oder des
                    Orts des mutmaßlichen Verstoßes, wenn Sie der Ansicht sind,
                    dass die Verarbeitung der Sie betreffenden personenbezogenen
                    Daten gegen die Vorgaben der DSGVO verstößt.
                  </p>
                </li>
              </ul>
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten onClick={() => toggleContent(11)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText>Geschäftliche Leistungen</DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 11 && (
            <div>
              <TextDaten>
                Wir verarbeiten Daten unserer Vertrags- und Geschäftspartner, z.
                B. Kunden und Interessenten (zusammenfassend als
                `Vertragspartner` bezeichnet), im Rahmen von vertraglichen und
                vergleichbaren Rechtsverhältnissen sowie damit verbundenen
                Maßnahmen und im Hinblick auf die Kommunikation mit den
                Vertragspartnern (oder vorvertraglich), etwa zur Beantwortung
                von Anfragen.
              </TextDaten>
              <TextDaten>
                Wir verwenden diese Daten, um unsere vertraglichen
                Verpflichtungen zu erfüllen. Dazu gehören insbesondere die
                Pflichten zur Erbringung der vereinbarten Leistungen, etwaige
                Aktualisierungspflichten und Abhilfe bei Gewährleistungs- und
                sonstigen Leistungsstörungen. Darüber hinaus verwenden wir die
                Daten zur Wahrung unserer Rechte und zum Zwecke der mit diesen
                Pflichten verbundenen Verwaltungsaufgaben sowie der
                Unternehmensorganisation. Zudem verarbeiten wir die Daten auf
                Grundlage unserer berechtigten Interessen sowohl an einer
                ordnungsgemäßen und betriebswirtschaftlichen Geschäftsführung
                als auch an Sicherheitsmaßnahmen zum Schutz unserer
                Vertragspartner und unseres Geschäftsbetriebs vor Missbrauch,
                Gefährdung ihrer Daten, Geheimnisse, Informationen und Rechte
                (z. B. zur Beteiligung von Telekommunikations-, Transport- und
                sonstigen Hilfsdiensten sowie Subunternehmern, Banken, Steuer-
                und Rechtsberatern, Zahlungsdienstleistern oder Finanzbehörden).
                Im Rahmen des geltenden Rechts geben wir die Daten von
                Vertragspartnern nur insoweit an Dritte weiter, als dies für die
                vorgenannten Zwecke oder zur Erfüllung gesetzlicher Pflichten
                erforderlich ist. Über weitere Formen der Verarbeitung, etwa zu
                Marketingzwecken, werden die Vertragspartner im Rahmen dieser
                Datenschutzerklärung informiert.
              </TextDaten>
              <TextDaten>
                Welche Daten für die vorgenannten Zwecke erforderlich sind,
                teilen wir den Vertragspartnern vor oder im Rahmen der
                Datenerhebung, z. B. in Onlineformularen, durch besondere
                Kennzeichnung (z. B. Farben) bzw. Symbole (z. B. Sternchen o.
                Ä.), oder persönlich mit.
              </TextDaten>
              <TextDaten>
                Wir löschen die Daten nach Ablauf gesetzlicher Gewährleistungs-
                und vergleichbarer Pflichten, d. h. grundsätzlich nach vier
                Jahren, es sei denn, dass die Daten in einem Kundenkonto
                gespeichert werden, z. B., solange sie aus gesetzlichen Gründen
                der Archivierung aufbewahrt werden müssen (etwa für Steuerzwecke
                im Regelfall zehn Jahre). Daten, die uns im Rahmen eines
                Auftrags durch den Vertragspartner offengelegt wurden, löschen
                wir entsprechend den Vorgaben und grundsätzlich nach Ende des
                Auftrags.
              </TextDaten>
              <ul>
                <li>
                  <p>
                    Verarbeitete Datenarten: Bestandsdaten (z. B. der
                    vollständige Name, Wohnadresse, Kontaktinformationen,
                    Kundennummer, etc.); Zahlungsdaten (z. B. Bankverbindungen,
                    Rechnungen, Zahlungshistorie); Kontaktdaten (z. B. Post- und
                    E-Mail-Adressen oder Telefonnummern); Vertragsdaten (z. B.
                    Vertragsgegenstand, Laufzeit, Kundenkategorie);
                    Nutzungsdaten (z. B. Seitenaufrufe und Verweildauer,
                    Klickpfade, Nutzungsintensität und -frequenz, verwendete
                    Gerätetypen und Betriebssysteme, Interaktionen mit Inhalten
                    und Funktionen). Meta-, Kommunikations- und Verfahrensdaten
                    (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern,
                    beteiligte Personen).
                  </p>
                </li>
                <li>
                  <p>
                    Betroffene Personen: Interessenten; Geschäfts- und
                    Vertragspartner. Kunden.
                  </p>
                </li>
                <li>
                  <p>
                    Zwecke der Verarbeitung Erbringung vertraglicher Leistungen
                    und Erfüllung vertraglicher Pflichten; Kontaktanfragen und
                    Kommunikation; Büro- und Organisationsverfahren; Verwaltung
                    und Beantwortung von Anfragen; Konversionsmessung (Messung
                    der Effektivität von Marketingmaßnahmen). Profile mit
                    nutzerbezogenen Informationen (Erstellen von
                    Nutzerprofilen).
                  </p>
                </li>
                <li>
                  <p>
                    Rechtsgrundlagen: Vertragserfüllung und vorvertragliche
                    Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO); Rechtliche
                    Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c) DSGVO).
                    Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
                  </p>
                </li>
              </ul>
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten onClick={() => toggleContent(9)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText>
                Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und
                Diensten:
              </DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 9 && (
            <div>
              <TextDaten>
                Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und
                Diensten:
              </TextDaten>
              <TextDaten>
                Wirtschaftliche Analysen und Marktforschung: Aus
                betriebswirtschaftlichen Gründen und um Markttendenzen, Wünsche
                der Vertragspartner und Nutzer erkennen zu können, analysieren
                wir die uns vorliegenden Daten zu Geschäftsvorgängen, Verträgen,
                Anfragen, etc., wobei in die Gruppe der betroffenen Personen
                Vertragspartner, Interessenten, Kunden, Besucher und Nutzer
                unseres Onlineangebotes fallen können. Die Analysen erfolgen zum
                Zweck betriebswirtschaftlicher Auswertungen, des Marketings und
                der Marktforschung (z. B. zur Bestimmung von Kundengruppen mit
                unterschiedlichen Eigenschaften). Dabei können wir, sofern
                vorhanden, die Profile von registrierten Nutzern samt ihrer
                Angaben, z. B. zu in Anspruch genommenen Leistungen,
                berücksichtigen. Die Analysen dienen alleine uns und werden
                nicht extern offenbart, sofern es sich nicht um anonyme Analysen
                mit zusammengefassten, also anonymisierten Werten handelt.
                Ferner nehmen wir Rücksicht auf die Privatsphäre der Nutzer und
                verarbeiten die Daten zu den Analysezwecken möglichst pseudonym
                und, sofern machbar, anonym (z. B. als zusammengefasste Daten);
                Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1
                lit. f) DSGVO).
              </TextDaten>
              <TextDaten>
                Agenturdienstleistungen: Wir verarbeiten die Daten unserer
                Kunden im Rahmen unserer vertraglichen Leistungen, zu denen z.
                B. konzeptionelle und strategische Beratung, Kampagnenplanung,
                Software- und Designentwicklung/-beratung oder -pflege,
                Umsetzung von Kampagnen und Prozessen, Handling,
                Serveradministration, Datenanalyse/ Beratungsleistungen und
                Schulungsleistungen gehören können; Rechtsgrundlagen:
                Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S.
                1 lit. b) DSGVO).
              </TextDaten>
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten onClick={() => toggleContent(9)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText>Einsatz von Cookies:</DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 9 && (
            <div>
              <TextDaten>Einsatz von Cookies:</TextDaten>
              <TextDaten>
                Cookies sind kleine Textdateien bzw. sonstige Speichervermerke,
                die Informationen auf Endgeräten speichern und aus ihnen
                auslesen. Zum Beispiel, um den Log-in-Status in einem
                Nutzerkonto, einen Warenkorbinhalt in einem E-Shop, die
                aufgerufenen Inhalte oder verwendete Funktionen eines
                Onlineangebots zu speichern. Cookies können ferner in Bezug auf
                unterschiedliche Anliegen Einsatz finden, etwa zu Zwecken der
                Funktionsfähigkeit, der Sicherheit und des Komforts von
                Onlineangeboten sowie der Erstellung von Analysen der
                Besucherströme.
              </TextDaten>
              <TextDaten>
                Hinweise zur Einwilligung: Wir setzen Cookies im Einklang mit
                den gesetzlichen Vorschriften ein. Daher holen wir von den
                Nutzern eine vorhergehende Einwilligung ein, es sei denn, sie
                ist laut Gesetzeslage nicht gefordert. Eine Erlaubnis ist
                insbesondere nicht notwendig, wenn das Speichern und das
                Auslesen der Informationen, also auch von Cookies, unbedingt
                erforderlich sind, um den Nutzern einen von ihnen ausdrücklich
                gewünschten Telemediendienst (also unser Onlineangebot) zur
                Verfügung zu stellen. Die widerrufliche Einwilligung wird ihnen
                gegenüber deutlich kommuniziert und enthält die Informationen
                zur jeweiligen Cookie-Nutzung.
              </TextDaten>
              <TextDaten>
                Hinweise zu datenschutzrechtlichen Rechtsgrundlagen: Auf welcher
                datenschutzrechtlichen Grundlage wir die personenbezogenen Daten
                der Nutzer mithilfe von Cookies verarbeiten, hängt davon ab, ob
                wir sie um eine Einwilligung bitten. Falls die Nutzer
                akzeptieren, ist die Rechtsgrundlage der Verwertung ihrer Daten
                die erklärte Einwilligung. Andernfalls werden die mithilfe von
                Cookies verwerteten Daten auf Grundlage unserer berechtigten
                Interessen (z. B. an einem betriebswirtschaftlichen Betrieb
                unseres Onlineangebots und der Verbesserung seiner Nutzbarkeit)
                verarbeitet oder, falls dies im Rahmen der Erfüllung unserer
                vertraglichen Pflichten erfolgt, wenn der Einsatz von Cookies
                erforderlich ist, um unseren vertraglichen Verpflichtungen
                nachzukommen. Zu welchen Zwecken die Cookies von uns verwertet
                werden, darüber klären wir im Laufe dieser Datenschutzerklärung
                oder im Rahmen von unseren Einwilligungs- und
                Verarbeitungsprozessen auf.
              </TextDaten>
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten onClick={() => toggleContent(11)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 11 && (
            <div>
              <TextDaten>
                Welche Daten für die vorgenannten Zwecke erforderlich sind,
                teilen wir den Vertragspartnern vor oder im Rahmen der
                Datenerhebung, z. B. in Onlineformularen, durch besondere
                Kennzeichnung (z. B. Farben) bzw. Symbole (z. B. Sternchen o.
                Ä.), oder persönlich mit.
              </TextDaten>

              <ul>
                <li>
                  <p>
                    Temporäre Cookies (auch: Session- oder Sitzungscookies):
                    Temporäre Cookies werden spätestens gelöscht, nachdem ein
                    Nutzer ein Onlineangebot verlassen und sein Endgerät (z. B.
                    Browser oder mobile Applikation) geschlossen hat.
                  </p>
                </li>
                <li>
                  <p>
                    Permanente Cookies: Permanente Cookies bleiben auch nach dem
                    Schließen des Endgeräts gespeichert. So können
                    beispielsweise der Log-in-Status gespeichert und bevorzugte
                    Inhalte direkt angezeigt werden, wenn der Nutzer eine
                    Website erneut besucht. Ebenso können die mithilfe von
                    Cookies erhobenen Nutzerdaten zur Reichweitenmessung
                    Verwendung finden. Sofern wir Nutzern keine expliziten
                    Angaben zur Art und Speicherdauer von Cookies mitteilen (z.
                    B. im Rahmen der Einholung der Einwilligung), sollten sie
                    davon ausgehen, dass diese permanent sind und die
                    Speicherdauer bis zu zwei Jahre betragen kann.
                  </p>
                </li>
              </ul>

              <DatenText>
                Allgemeine Hinweise zum Widerruf und Widerspruch (Opt-out):
                Nutzer können die von ihnen abgegebenen Einwilligungen jederzeit
                widerrufen und zudem einen Widerspruch gegen die Verarbeitung
                entsprechend den gesetzlichen Vorgaben, auch mittels der
                Privatsphäre-Einstellungen ihres Browsers, erklären.
              </DatenText>
              <DatenText>
                Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1
                lit. f) DSGVO). Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO).
              </DatenText>
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten onClick={() => toggleContent(4)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText>
                Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und
                Diensten:
              </DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 4 && (
            <div>
              <TextDaten>
                Verarbeitung von Cookie-Daten auf Grundlage einer Einwilligung:
                Wir setzen eine Einwilligungs-Management-Lösung ein, bei der die
                Einwilligung der Nutzer zur Verwendung von Cookies oder zu den
                im Rahmen der Einwilligungs-Management-Lösung genannten
                Verfahren und Anbietern eingeholt wird. Dieses Verfahren dient
                der Einholung, Protokollierung, Verwaltung und dem Widerruf von
                Einwilligungen, insbesondere bezogen auf den Einsatz von Cookies
                und vergleichbaren Technologien, die zur Speicherung, zum
                Auslesen und zur Verarbeitung von Informationen auf den
                Endgeräten der Nutzer eingesetzt werden. Im Rahmen dieses
                Verfahrens werden die Einwilligungen der Nutzer für die Nutzung
                von Cookies und die damit verbundenen Verarbeitungen von
                Informationen, einschließlich der im
                Einwilligungs-Management-Verfahren genannten spezifischen
                Verarbeitungen und Anbieter, eingeholt. Die Nutzer haben zudem
                die Möglichkeit, ihre Einwilligungen zu verwalten und zu
                widerrufen. Die Einwilligungserklärungen werden gespeichert, um
                eine erneute Abfrage zu vermeiden und den Nachweis der
                Einwilligung gemäß der gesetzlichen Anforderungen führen zu
                können. Die Speicherung erfolgt serverseitig und/oder in einem
                Cookie (sogenanntes Opt-In-Cookie) oder mittels vergleichbarer
                Technologien, um die Einwilligung einem spezifischen Nutzer oder
                dessen Gerät zuordnen zu können. Sofern keine spezifischen
                Angaben zu den Anbietern von Einwilligungs-Management-Diensten
                vorliegen, gelten folgende allgemeine Hinweise: Die Dauer der
                Speicherung der Einwilligung beträgt bis zu zwei Jahre. Dabei
                wird ein pseudonymer Nutzer-Identifikator erstellt, der zusammen
                mit dem Zeitpunkt der Einwilligung, den Angaben zum Umfang der
                Einwilligung (z. B. betreffende Kategorien von Cookies und/oder
                Diensteanbieter) sowie Informationen über den Browser, das
                System und das verwendete Endgerät gespeichert wird;
                Rechtsgrundlagen: Einwilligung (Art. 6 Abs. 1 S. 1 lit. a)
                DSGVO).
              </TextDaten>
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten onClick={() => toggleContent(4)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText>Kontakt - und Anfrageverwaltung</DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 4 && (
            <div>
              <TextDaten>
                Bei der Kontaktaufnahme mit uns (z. B. per Post,
                Kontaktformular, E-Mail, Telefon oder via soziale Medien) sowie
                im Rahmen bestehender Nutzer- und Geschäftsbeziehungen werden
                die Angaben der anfragenden Personen verarbeitet soweit dies zur
                Beantwortung der Kontaktanfragen und etwaiger angefragter
                Maßnahmen erforderlich ist.
              </TextDaten>

              <ul>
                <li>
                  <p>
                    Verarbeitete Datenarten: Kontaktdaten (z. B. Post- und
                    E-Mail-Adressen oder Telefonnummern); Inhaltsdaten (z. B.
                    textliche oder bildliche Nachrichten und Beiträge sowie die
                    sie betreffenden Informationen, wie z. B. Angaben zur
                    Autorenschaft oder Zeitpunkt der Erstellung); Nutzungsdaten
                    (z. B. Seitenaufrufe und Verweildauer, Klickpfade,
                    Nutzungsintensität und -frequenz, verwendete Gerätetypen und
                    Betriebssysteme, Interaktionen mit Inhalten und Funktionen).
                    Meta-, Kommunikations- und Verfahrensdaten (z. B.
                    IP-Adressen, Zeitangaben, Identifikationsnummern, beteiligte
                    Personen).
                  </p>
                </li>
                <li>
                  <p>Betroffene Personen: Kommunikationspartner.</p>
                </li>
                <li>
                  <p>
                    Zwecke der Verarbeitung: Kontaktanfragen und Kommunikation;
                    Verwaltung und Beantwortung von Anfragen; Feedback (z. B.
                    Sammeln von Feedback via Online-Formular). Bereitstellung
                    unseres Onlineangebotes und Nutzerfreundlichkeit.
                  </p>
                </li>
                <li>
                  <p>
                    Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1
                    lit. f) DSGVO). Vertragserfüllung und vorvertragliche
                    Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).
                  </p>
                </li>
              </ul>
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten onClick={() => toggleContent(1)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText>
                Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und
                Diensten:
              </DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 1 && (
            <div>
              <TextDaten>
                Kontaktformular: Wenn Nutzer über unser Kontaktformular, E-Mail
                oder andere Kommunikationswege mit uns in Kontakt treten,
                verarbeiten wir die uns in diesem Zusammenhang mitgeteilten
                Daten zur Bearbeitung des mitgeteilten Anliegens;
                Rechtsgrundlagen: Vertragserfüllung und vorvertragliche Anfragen
                (Art. 6 Abs. 1 S. 1 lit. b) DSGVO), Berechtigte Interessen (Art.
                6 Abs. 1 S. 1 lit. f) DSGVO).
              </TextDaten>
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten onClick={() => toggleContent(4)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText>
                Werbliche Kommunikation via E-Mail, Post, Fax oder Telefon
              </DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 4 && (
            <div>
              <TextDaten>
                Wir verarbeiten personenbezogene Daten zu Zwecken der werblichen
                Kommunikation, die über diverse Kanäle, wie z. B. E-Mail,
                Telefon, Post oder Fax, entsprechend den gesetzlichen Vorgaben
                erfolgen kann.
              </TextDaten>
              <TextDaten>
                Die Empfänger haben das Recht, erteilte Einwilligungen jederzeit
                zu widerrufen oder der werblichen Kommunikation jederzeit zu
                widersprechen.
              </TextDaten>
              <TextDaten>
                Nach Widerruf oder Widerspruch speichern wir die zum Nachweis
                der bisherigen Berechtigung erforderlichen Daten zur
                Kontaktaufnahme oder Zusendung bis zu drei Jahre nach Ablauf des
                Jahres des Widerrufs oder Widerspruchs auf der Grundlage unserer
                berechtigten Interessen. Die Verarbeitung dieser Daten ist auf
                den Zweck einer möglichen Abwehr von Ansprüchen beschränkt. Auf
                der Grundlage des berechtigten Interesses, den Widerruf bzw.
                Widerspruch der Nutzer dauerhaft zu beachten, speichern wir
                ferner die zur Vermeidung einer erneuten Kontaktaufnahme
                erforderlichen Daten (z. B. je nach Kommunikationskanal die
                E-Mail-Adresse, Telefonnummer, Name).
              </TextDaten>

              <ul>
                <li>
                  <p>
                    Verarbeitete Datenarten: Bestandsdaten (z. B. der
                    vollständige Name, Wohnadresse, Kontaktinformationen,
                    Kundennummer, etc.). Kontaktdaten (z. B. Post- und
                    E-Mail-Adressen oder Telefonnummern).
                  </p>
                </li>
                <li>
                  <p>Betroffene Personen: Kommunikationspartner.</p>
                </li>
                <li>
                  <p>
                    Zwecke der Verarbeitung: Direktmarketing (z. B. per E-Mail
                    oder postalisch).
                  </p>
                </li>
                <li>
                  <p>
                    Rechtsgrundlagen: Einwilligung (Art. 6 Abs. 1 S. 1 lit. a)
                    DSGVO). Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
                    DSGVO).
                  </p>
                </li>
              </ul>
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten onClick={() => toggleContent(4)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText>
                Präsenzen in sozialen Netzwerken (Social Media)
              </DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 4 && (
            <div>
              <TextDaten>
                Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und
                verarbeiten in diesem Rahmen Nutzerdaten, um mit den dort
                aktiven Nutzern zu kommunizieren oder Informationen über uns
                anzubieten.
              </TextDaten>
              <TextDaten>
                Wir weisen darauf hin, dass dabei Nutzerdaten außerhalb des
                Raumes der Europäischen Union verarbeitet werden können.
                Hierdurch können sich für die Nutzer Risiken ergeben, weil so
                zum Beispiel die Durchsetzung der Nutzerrechte erschwert werden
                könnte.
              </TextDaten>
              <TextDaten>
                Ferner werden die Daten der Nutzer innerhalb sozialer Netzwerke
                im Regelfall für Marktforschungs- und Werbezwecke verarbeitet.
                So können beispielsweise anhand des Nutzungsverhaltens und sich
                daraus ergebender Interessen der Nutzer Nutzungsprofile erstellt
                werden. Letztere finden möglicherweise wiederum Verwendung, um
                etwa Werbeanzeigen innerhalb und außerhalb der Netzwerke zu
                schalten, die mutmaßlich den Interessen der Nutzer entsprechen.
                Daher werden im Regelfall Cookies auf den Rechnern der Nutzer
                gespeichert, in denen das Nutzungsverhalten und die Interessen
                der Nutzer gespeichert werden. Zudem können in den
                Nutzungsprofilen auch Daten unabhängig der von den Nutzern
                verwendeten Geräten gespeichert werden (insbesondere, wenn sie
                Mitglieder der jeweiligen Plattformen und dort eingeloggt sind).
              </TextDaten>
              <TextDaten>
                Für eine detaillierte Darstellung der jeweiligen
                Verarbeitungsformen und der Widerspruchsmöglichkeiten (Opt-out)
                verweisen wir auf die Datenschutzerklärungen und Angaben der
                Betreiber der jeweiligen Netzwerke.
              </TextDaten>
              <TextDaten>
                Auch im Fall von Auskunftsanfragen und der Geltendmachung von
                Betroffenenrechten weisen wir darauf hin, dass diese am
                effektivsten bei den Anbietern geltend gemacht werden können.
                Nur Letztere haben jeweils Zugriff auf die Nutzerdaten und
                können direkt entsprechende Maßnahmen ergreifen und Auskünfte
                geben. Sollten Sie dennoch Hilfe benötigen, dann können Sie sich
                an uns wenden.
              </TextDaten>

              <ul>
                <li>
                  <p>
                    Verarbeitete Datenarten: Kontaktdaten (z. B. Post- und
                    E-Mail-Adressen oder Telefonnummern); Inhaltsdaten (z. B.
                    textliche oder bildliche Nachrichten und Beiträge sowie die
                    sie betreffenden Informationen, wie z. B. Angaben zur
                    Autorenschaft oder Zeitpunkt der Erstellung); Nutzungsdaten
                    (z. B. Seitenaufrufe und Verweildauer, Klickpfade,
                    Nutzungsintensität und -frequenz, verwendete Gerätetypen und
                    Betriebssysteme, Interaktionen mit Inhalten und Funktionen).
                    Meta-, Kommunikations- und Verfahrensdaten (z. B.
                    IP-Adressen, Zeitangaben, Identifikationsnummern, beteiligte
                    Personen).
                  </p>
                </li>
                <li>
                  <p>
                    Betroffene Personen: Nutzer (z. B. Webseitenbesucher, Nutzer
                    von Onlinediensten).
                  </p>
                </li>
                <li>
                  <p>
                    Zwecke der Verarbeitung: Kontaktanfragen und Kommunikation;
                    Feedback (z. B. Sammeln von Feedback via Online-Formular).
                    Marketing.
                  </p>
                </li>
                <li>
                  <p>
                    Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1
                    lit. f) DSGVO).
                  </p>
                </li>
              </ul>
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten onClick={() => toggleContent(1)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText>
                Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und
                Diensten:
              </DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 1 && (
            <div>
              <TextDaten>
                Instagram: Soziales Netzwerk; Dienstanbieter: Meta Platforms
                Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Irland;
                Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1
                lit. f) DSGVO); Website:https://www.instagram.com;
                Datenschutzerklärung: https://instagram.com/about/legal/privacy.
                Grundlage Drittlandtransfers: Data Privacy Framework (DPF).
              </TextDaten>
              <TextDaten>
                Facebook-Seiten: Profile innerhalb des sozialen Netzwerks
                Facebook; Dienstanbieter: Meta Platforms Ireland Limited,
                Merrion Road, Dublin 4, D04 X2K5, Irland; Rechtsgrundlagen:
                Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO);
                Website: https://www.facebook.com; Datenschutzerklärung:
                https://www.facebook.com/about/privacy; Grundlage
                Drittlandtransfers: Data Privacy Framework (DPF); Weitere
                Informationen: Wir sind gemeinsam mit Meta Platforms Ireland
                Limited für die Erhebung (jedoch nicht die weitere Verarbeitung)
                von Daten der Besucher unserer Facebook-Seite (sog. `Fanpage``)
                verantwortlich. Zu diesen Daten gehören Informationen zu den
                Arten von Inhalten, die Nutzer sich ansehen oder mit denen sie
                interagieren, oder die von ihnen vorgenommenen Handlungen (siehe
                unter „Von dir und anderen getätigte und bereitgestellte Dinge``
                in der Facebook-Datenrichtlinie:
                https://www.facebook.com/policy), sowie Informationen über die
                von den Nutzern genutzten Geräte (z. B. IP-Adressen,
                Betriebssystem, Browsertyp, Spracheinstellungen, Cookie-Daten;
                siehe unter „Geräteinformationen` in der
                Facebook-Datenrichtlinie: https://www.facebook.com/policy). Wie
                in der Facebook-Datenrichtlinie unter „Wie verwenden wir diese
                Informationen?` erläutert, erhebt und verwendet Facebook
                Informationen auch, um Analysedienste, so genannte
                `Seiten-Insights`, für Seitenbetreiber bereitzustellen, damit
                diese Erkenntnisse darüber erhalten, wie Personen mit ihren
                Seiten und mit den mit ihnen verbundenen Inhalten interagieren.
                Wir haben mit Facebook eine spezielle Vereinbarung abgeschlossen
                (`Informationen zu Seiten-Insights`,
                https://www.facebook.com/legal/terms/page_controller_addendum),
                in der insbesondere geregelt wird, welche Sicherheitsmaßnahmen
                Facebook beachten muss und in der Facebook sich bereit erklärt
                hat die Betroffenenrechte zu erfüllen (d. .h. Nutzer können z.
                B. Auskünfte oder Löschungsanfragen direkt an Facebook richten).
                Die Rechte der Nutzer (insbesondere auf Auskunft, Löschung,
                Widerspruch und Beschwerde bei zuständiger Aufsichtsbehörde),
                werden durch die Vereinbarungen mit Facebook nicht
                eingeschränkt. Weitere Hinweise finden sich in den
                `Informationen zu Seiten-Insights`
                (https://www.facebook.com/legal/terms/information_about_page_insights_data).
                Die gemeinsame Verantwortlichkeit beschränkt sich auf die
                Erhebung durch und Übermittlung von Daten an Meta Platforms
                Ireland Limited, ein Unternehmen mit Sitz in der EU. Die weitere
                Verarbeitung der Daten liegt in der alleinigen Verantwortung von
                Meta Platforms Ireland Limited, was insbesondere die
                Übermittlung der Daten an die Muttergesellschaft Meta Platforms,
                Inc. in den USA betrifft.
              </TextDaten>
              <TextDaten>
                TikTok: Soziales Netzwerk / Video-Plattform; Dienstanbieter:
                TikTok Technology Limited, 10 Earlsfort Terrace, Dublin, D02
                T380, Irland und TikTok Information Technologies UK Limited,
                Kaleidoscope, 4 Lindsey Street, London, United Kingdom, EC1A
                9HP; Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S.
                1 lit. f) DSGVO); Website: https://www.tiktok.com.
                Datenschutzerklärung: https://www.tiktok.com/de/privacy-policy.
              </TextDaten>
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten onClick={() => toggleContent(4)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText>
                Plug-ins und eingebettete Funktionen sowie Inhalte
              </DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 4 && (
            <div>
              <TextDaten>
                Wir binden Funktions- und Inhaltselemente in unser Onlineangebot
                ein, die von den Servern ihrer jeweiligen Anbieter (nachfolgend
                als `Drittanbieter`` bezeichnet) bezogen werden. Dabei kann es
                sich zum Beispiel um Grafiken, Videos oder Stadtpläne handeln
                (nachfolgend einheitlich als `Inhalte`` bezeichnet).
              </TextDaten>
              <TextDaten>
                Die Einbindung setzt immer voraus, dass die Drittanbieter dieser
                Inhalte die IP-Adresse der Nutzer verarbeiten, da sie ohne
                IP-Adresse die Inhalte nicht an deren Browser senden könnten.
                Die IP-Adresse ist damit für die Darstellung dieser Inhalte oder
                Funktionen erforderlich. Wir bemühen uns, nur solche Inhalte zu
                verwenden, deren jeweilige Anbieter die IP-Adresse lediglich zur
                Auslieferung der Inhalte anzuwenden. Drittanbieter können ferner
                sogenannte Pixel-Tags (unsichtbare Grafiken, auch als `Web
                Beacons` bezeichnet) für statistische oder Marketingzwecke
                einsetzen. Durch die `Pixel-Tags` können Informationen, wie etwa
                der Besucherverkehr auf den Seiten dieser Website, ausgewertet
                werden. Die pseudonymen Informationen können darüber hinaus in
                Cookies auf dem Gerät der Nutzer gespeichert werden und unter
                anderem technische Auskünfte zum Browser und zum Betriebssystem,
                zu verweisenden Websites, zur Besuchszeit sowie weitere Angaben
                zur Nutzung unseres Onlineangebots enthalten, aber auch mit
                solchen Informationen aus anderen Quellen verbunden werden.
              </TextDaten>
              <TextDaten>
                Hinweise zu Rechtsgrundlagen: Sofern wir die Nutzer um ihre
                Einwilligung in den Einsatz der Drittanbieter bitten, stellt die
                Rechtsgrundlage der Datenverarbeitung die Erlaubnis dar.
                Ansonsten werden die Nutzerdaten auf Grundlage unserer
                berechtigten Interessen (d. h. Interesse an effizienten,
                wirtschaftlichen und empfängerfreundlichen Leistungen)
                verarbeitet. In diesem Zusammenhang möchten wir Sie auch auf die
                Informationen zur Verwendung von Cookies in dieser
                Datenschutzerklärung hinweisen.
              </TextDaten>

              <ul>
                <li>
                  <p>
                    Verarbeitete Datenarten: Nutzungsdaten (z. B. Seitenaufrufe
                    und Verweildauer, Klickpfade, Nutzungsintensität und
                    -frequenz, verwendete Gerätetypen und Betriebssysteme,
                    Interaktionen mit Inhalten und Funktionen); Meta-,
                    Kommunikations- und Verfahrensdaten (z. B. IP-Adressen,
                    Zeitangaben, Identifikationsnummern, beteiligte Personen);
                    Event-Daten (Facebook) (`Event-Daten`` sind Daten, die z. B.
                    via Facebook-Pixel (via Apps oder auf anderen Wegen) von uns
                    an Facebook übermittelt werden können und sich auf Personen
                    oder deren Handlungen beziehen; Zu den Daten gehören z. B.
                    Angaben über Besuche auf Websites, Interaktionen mit
                    Inhalten, Funktionen, Installationen von Apps, Käufe von
                    Produkten, etc.; die Event-Daten werden zwecks Bildung von
                    Zielgruppen für Inhalte und Werbeinformationen (Custom
                    Audiences) verarbeitet. Event Daten beinhalten nicht die
                    eigentlichen Inhalte (wie z. B. verfasste Kommentare), keine
                    Login-Informationen und keine Kontaktinformationen (also
                    keine Namen, E-Mail-Adressen und Telefonnummern). Event
                    Daten werden durch Facebook nach maximal zwei Jahren
                    gelöscht, die aus ihnen gebildeten Zielgruppen mit der
                    Löschung unseres Facebook-Kontos).
                  </p>
                </li>
                <li>
                  <p>
                    Betroffene Personen: Nutzer (z. B. Webseitenbesucher, Nutzer
                    von Onlinediensten).
                  </p>
                </li>
                <li>
                  <p>
                    Zwecke der Verarbeitung: Bereitstellung unseres
                    Onlineangebotes und Nutzerfreundlichkeit; Marketing. Profile
                    mit nutzerbezogenen Informationen (Erstellen von
                    Nutzerprofilen).
                  </p>
                </li>
                <li>
                  <p>
                    Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1
                    lit. f) DSGVO). Einwilligung (Art. 6 Abs. 1 S. 1 lit. a)
                    DSGVO).
                  </p>
                </li>
              </ul>
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten onClick={() => toggleContent(4)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText>
                Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und
                Diensten:
              </DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 4 && (
            <div>
              <TextDaten>
                Facebook-Plugins und -Inhalte: Facebook Social Plugins und
                Inhalte - Hierzu können z. B. Inhalte wie Bilder, Videos oder
                Texte und Schaltflächen gehören, mit denen Nutzer Inhalte dieses
                Onlineangebotes innerhalb von Facebook teilen können. Die Liste
                und das Aussehen der Facebook Social Plugins können hier
                eingesehen werden: https://developers.facebook.com/docs/plugins/
                - Wir sind gemeinsam mit Meta Platforms Ireland Limited für die
                Erhebung oder den Erhalt im Rahmen einer Übermittlung (jedoch
                nicht die weitere Verarbeitung) von `Event-Daten`, die Facebook
                mittels der Facebook-Social-Plugins (und Einbettungsfunktionen
                für Inhalte), die auf unserem Onlineangebot ausgeführt werden,
                erhebt oder im Rahmen einer Übermittlung zu folgenden Zwecken
                erhält, gemeinsam verantwortlich: a) Anzeige von Inhalten sowie
                Werbeinformationen, die den mutmaßlichen Interessen der Nutzer
                entsprechen; b) Zustellung kommerzieller und
                transaktionsbezogener Nachrichten (z. B. Ansprache von Nutzern
                via Facebook-Messenger); c) Verbesserung der
                Anzeigenauslieferung und Personalisierung von Funktionen und
                Inhalten (z. B. Verbesserung der Erkennung, welche Inhalte oder
                Werbeinformationen mutmaßlich den Interessen der Nutzer
                entsprechen). Wir haben mit Facebook eine spezielle Vereinbarung
                abgeschlossen (`Zusatz für Verantwortliche`,
                https://www.facebook.com/legal/controller_addendum), in der
                insbesondere geregelt wird, welche Sicherheitsmaßnahmen Facebook
                beachten muss
                (https://www.facebook.com/legal/terms/data_security_terms) und
                in der Facebook sich bereit erklärt hat die Betroffenenrechte zu
                erfüllen (d. h. Nutzer können z. B. Auskünfte oder
                Löschungsanfragen direkt an Facebook richten). Hinweis: Wenn
                Facebook uns Messwerte, Analysen und Berichte bereitstellt (die
                aggregiert sind, d. h. keine Angaben zu einzelnen Nutzern
                erhalten und für uns anonym sind), dann erfolgt diese
                Verarbeitung nicht im Rahmen der gemeinsamen Verantwortlichkeit,
                sondern auf Grundlage eines Auftragsverarbeitungsvertrages
                (`Datenverarbeitungsbedingungen`,
                https://www.facebook.com/legal/terms/dataprocessing) , der
                `Datensicherheitsbedingungen`
                (https://www.facebook.com/legal/terms/data_security_terms) sowie
                im Hinblick auf die Verarbeitung in den USA auf Grundlage von
                Standardvertragsklauseln (`Facebook-EU-Datenübermittlungszusatz,
                https://www.facebook.com/legal/EU_data_transfer_addendum). Die
                Rechte der Nutzer (insbesondere auf Auskunft, Löschung,
                Widerspruch und Beschwerde bei zuständiger Aufsichtsbehörde),
                werden durch die Vereinbarungen mit Facebook nicht
                eingeschränkt; Dienstanbieter: Meta Platforms Ireland Limited,
                Merrion Road, Dublin 4, D04 X2K5, Irland; Rechtsgrundlagen:
                Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO); Website:
                https://www.facebook.com; Datenschutzerklärung:
                https://www.facebook.com/privacy/policy/. Grundlage
                Drittlandtransfers: Data Privacy Framework (DPF).
              </TextDaten>
              <TextDaten>
                Google Fonts (Bezug vom Google Server): Bezug von Schriften (und
                Symbolen) zum Zwecke einer technisch sicheren, wartungsfreien
                und effizienten Nutzung von Schriften und Symbolen im Hinblick
                auf Aktualität und Ladezeiten, deren einheitliche Darstellung
                und Berücksichtigung möglicher lizenzrechtlicher Beschränkungen.
                Dem Anbieter der Schriftarten wird die IP-Adresse des Nutzers
                mitgeteilt, damit die Schriftarten im Browser des Nutzers zur
                Verfügung gestellt werden können. Darüber hinaus werden
                technische Daten (Spracheinstellungen, Bildschirmauflösung,
                Betriebssystem, verwendete Hardware) übermittelt, die für die
                Bereitstellung der Schriften in Abhängigkeit von den verwendeten
                Geräten und der technischen Umgebung notwendig sind. Diese Daten
                können auf einem Server des Anbieters der Schriftarten in den
                USA verarbeitet werden - Beim Besuch unseres Onlineangebotes
                senden die Browser der Nutzer ihre Browser HTTP-Anfragen an die
                Google Fonts Web API (d. h. eine Softwareschnittstelle für den
                Abruf der Schriftarten). Die Google Fonts Web API stellt den
                Nutzern die Cascading Style Sheets (CSS) von Google Fonts und
                danach die in der CCS angegebenen Schriftarten zur Verfügung. Zu
                diesen HTTP-Anfragen gehören (1) die vom jeweiligen Nutzer für
                den Zugriff auf das Internet verwendete IP-Adresse, (2) die
                angeforderte URL auf dem Google-Server und (3) die HTTP-Header,
                einschließlich des User-Agents, der die Browser- und
                Betriebssystemversionen der Websitebesucher beschreibt, sowie
                die Verweis-URL (d. h. die Webseite, auf der die
                Google-Schriftart angezeigt werden soll). IP-Adressen werden
                weder auf Google-Servern protokolliert noch gespeichert und sie
                werden nicht analysiert. Die Google Fonts Web API protokolliert
                Details der HTTP-Anfragen (angeforderte URL, User-Agent und
                Verweis-URL). Der Zugriff auf diese Daten ist eingeschränkt und
                streng kontrolliert. Die angeforderte URL identifiziert die
                Schriftfamilien, für die der Nutzer Schriftarten laden möchte.
                Diese Daten werden protokolliert, damit Google bestimmen kann,
                wie oft eine bestimmte Schriftfamilie angefordert wird. Bei der
                Google Fonts Web API muss der User-Agent die Schriftart
                anpassen, die für den jeweiligen Browsertyp generiert wird. Der
                User-Agent wird in erster Linie zum Debugging protokolliert und
                verwendet, um aggregierte Nutzungsstatistiken zu generieren, mit
                denen die Beliebtheit von Schriftfamilien gemessen wird. Diese
                zusammengefassten Nutzungsstatistiken werden auf der Seite
                „Analysen`` von Google Fonts veröffentlicht. Schließlich wird
                die Verweis-URL protokolliert, sodass die Daten für die Wartung
                der Produktion verwendet und ein aggregierter Bericht zu den
                Top-Integrationen basierend auf der Anzahl der
                Schriftartenanfragen generiert werden kann. Google verwendet
                laut eigener Auskunft keine der von Google Fonts erfassten
                Informationen, um Profile von Endnutzern zu erstellen oder
                zielgerichtete Anzeigen zu schalten; Dienstanbieter: Google
                Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland;
                Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S. 1
                lit. f) DSGVO); Website: https://fonts.google.com/;
                Datenschutzerklärung: https://policies.google.com/privacy;
                Grundlage Drittlandtransfers: Data Privacy Framework (DPF).
                Weitere Informationen:
                https://developers.google.com/fonts/faq/privacy?hl=de.
              </TextDaten>
              <TextDaten>
                Instagram-Plugins und -Inhalte: Instagram Plugins und -Inhalte -
                Hierzu können z. B. Inhalte wie Bilder, Videos oder Texte und
                Schaltflächen gehören, mit denen Nutzer Inhalte dieses
                Onlineangebotes innerhalb von Instagram teilen können. - Wir
                sind gemeinsam mit Meta Platforms Ireland Limited für die
                Erhebung oder den Erhalt im Rahmen einer Übermittlung (jedoch
                nicht die weitere Verarbeitung) von `Event-Daten``, die Facebook
                mittels Funktionen von Instagram (z. B. Einbettungsfunktionen
                für Inhalte), die auf unserem Onlineangebot ausgeführt werden,
                erhebt oder im Rahmen einer Übermittlung zu folgenden Zwecken
                erhält, gemeinsam verantwortlich: a) Anzeige von Inhalten sowie
                Werbeinformationen, die den mutmaßlichen Interessen der Nutzer
                entsprechen; b) Zustellung kommerzieller und
                transaktionsbezogener Nachrichten (z. B. Ansprache von Nutzern
                via Facebook-Messenger); c) Verbesserung der
                Anzeigenauslieferung und Personalisierung von Funktionen und
                Inhalten (z. B. Verbesserung der Erkennung, welche Inhalte oder
                Werbeinformationen mutmaßlich den Interessen der Nutzer
                entsprechen). Wir haben mit Facebook eine spezielle Vereinbarung
                abgeschlossen (`Zusatz für Verantwortliche`,
                https://www.facebook.com/legal/controller_addendum), in der
                insbesondere geregelt wird, welche Sicherheitsmaßnahmen Facebook
                beachten muss
                (https://www.facebook.com/legal/terms/data_security_terms) und
                in der Facebook sich bereit erklärt hat die Betroffenenrechte zu
                erfüllen (d. h. Nutzer können z. B. Auskünfte oder
                Löschungsanfragen direkt an Facebook richten). Hinweis: Wenn
                Facebook uns Messwerte, Analysen und Berichte bereitstellt (die
                aggregiert sind, d. h. keine Angaben zu einzelnen Nutzern
                erhalten und für uns anonym sind), dann erfolgt diese
                Verarbeitung nicht im Rahmen der gemeinsamen Verantwortlichkeit,
                sondern auf Grundlage eines Auftragsverarbeitungsvertrages
                (`Datenverarbeitungsbedingungen `,
                https://www.facebook.com/legal/terms/dataprocessing) , der
                `Datensicherheitsbedingungen``
                (https://www.facebook.com/legal/terms/data_security_terms) sowie
                im Hinblick auf die Verarbeitung in den USA auf Grundlage von
                Standardvertragsklauseln (`Facebook-EU-Datenübermittlungszusatz,
                https://www.facebook.com/legal/EU_data_transfer_addendum). Die
                Rechte der Nutzer (insbesondere auf Auskunft, Löschung,
                Widerspruch und Beschwerde bei zuständiger Aufsichtsbehörde),
                werden durch die Vereinbarungen mit Facebook nicht
                eingeschränkt; Dienstanbieter: Meta Platforms Ireland Limited,
                Merrion Road, Dublin 4, D04 X2K5, Irland; Rechtsgrundlagen:
                Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO);
                Website: https://www.instagram.com. Datenschutzerklärung:
                https://instagram.com/about/legal/privacy/.
              </TextDaten>
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten onClick={() => toggleContent(4)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText>
                Änderung und Aktualisierung der Datenschutzerklärung
              </DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 4 && (
            <div>
              <TextDaten>
                Wir bitten Sie, sich regelmäßig über den Inhalt unserer
                Datenschutzerklärung zu informieren. Wir passen die
                Datenschutzerklärung an, sobald die Änderungen der von uns
                durchgeführten Datenverarbeitungen dies erforderlich machen. Wir
                informieren Sie, sobald durch die Änderungen eine
                Mitwirkungshandlung Ihrerseits (z. B. Einwilligung) oder eine
                sonstige individuelle Benachrichtigung erforderlich wird. Sofern
                wir in dieser Datenschutzerklärung Adressen und
                Kontaktinformationen von Unternehmen und Organisationen angeben,
                bitten wir zu beachten, dass die Adressen sich über die Zeit
                ändern können und bitten die Angaben vor Kontaktaufnahme zu
                prüfen.
              </TextDaten>
            </div>
          )}
        </ListItem>

        <ListItem>
          <BtnListDaten onClick={() => toggleContent(4)}>
            <ListWrapper>
              <Svg>
                <use href={`${sprite}#icon-chevron-bar`}></use>
              </Svg>
              <DatenText>
                Plug-ins und eingebettete Funktionen sowie Inhalte
              </DatenText>
            </ListWrapper>
          </BtnListDaten>
          {isOpen === 4 && (
            <div>
              <TextDaten>
                In diesem Abschnitt erhalten Sie eine Übersicht über die in
                dieser Datenschutzerklärung verwendeten Begrifflichkeiten.
                Soweit die Begrifflichkeiten gesetzlich definiert sind, gelten
                deren gesetzliche Definitionen. Die nachfolgenden Erläuterungen
                sollen dagegen vor allem dem Verständnis dienen.
              </TextDaten>

              <ul>
                <li>
                  <p>
                    Bestandsdaten: Bestandsdaten umfassen wesentliche
                    Informationen, die für die Identifikation und Verwaltung von
                    Vertragspartnern, Benutzerkonten, Profilen und ähnlichen
                    Zuordnungen notwendig sind. Diese Daten können u.a.
                    persönliche und demografische Angaben wie Namen,
                    Kontaktinformationen (Adressen, Telefonnummern,
                    E-Mail-Adressen), Geburtsdaten und spezifische
                    Identifikatoren (Benutzer-IDs) beinhalten. Bestandsdaten
                    bilden die Grundlage für jegliche formelle Interaktion
                    zwischen Personen und Diensten, Einrichtungen oder Systemen,
                    indem sie eine eindeutige Zuordnung und Kommunikation
                    ermöglichen.
                  </p>
                </li>
                <li>
                  <p>
                    Inhaltsdaten: Inhaltsdaten umfassen Informationen, die im
                    Zuge der Erstellung, Bearbeitung und Veröffentlichung von
                    Inhalten aller Art generiert werden. Diese Kategorie von
                    Daten kann Texte, Bilder, Videos, Audiodateien und andere
                    multimediale Inhalte einschließen, die auf verschiedenen
                    Plattformen und Medien veröffentlicht werden. Inhaltsdaten
                    sind nicht nur auf den eigentlichen Inhalt beschränkt,
                    sondern beinhalten auch Metadaten, die Informationen über
                    den Inhalt selbst liefern, wie Tags, Beschreibungen,
                    Autoreninformationen und Veröffentlichungsdaten
                  </p>
                </li>
                <li>
                  <p>
                    Kontaktdaten: Kontaktdaten sind essentielle Informationen,
                    die die Kommunikation mit Personen oder Organisationen
                    ermöglichen. Sie umfassen u.a. Telefonnummern, postalische
                    Adressen und E-Mail-Adressen, sowie Kommunikationsmittel wie
                    soziale Medien-Handles und
                    Instant-Messaging-Identifikatoren.
                  </p>
                </li>
                <li>
                  <p>
                    Konversionsmessung: Die Konversionsmessung (auch als
                    `Besuchsaktionsauswertung`` bezeichnet) ist ein Verfahren,
                    mit dem die Wirksamkeit von Marketingmaßnahmen festgestellt
                    werden kann. Dazu wird im Regelfall ein Cookie auf den
                    Geräten der Nutzer innerhalb der Webseiten, auf denen die
                    Marketingmaßnahmen erfolgen, gespeichert und dann erneut auf
                    der Zielwebseite abgerufen. Beispielsweise können wir so
                    nachvollziehen, ob die von uns auf anderen Webseiten
                    geschalteten Anzeigen erfolgreich waren.
                  </p>
                </li>
                <li>
                  <p>
                    Meta-, Kommunikations- und Verfahrensdaten: Meta-,
                    Kommunikations- und Verfahrensdaten sind Kategorien, die
                    Informationen über die Art und Weise enthalten, wie Daten
                    verarbeitet, übermittelt und verwaltet werden. Meta-Daten,
                    auch bekannt als Daten über Daten, umfassen Informationen,
                    die den Kontext, die Herkunft und die Struktur anderer Daten
                    beschreiben. Sie können Angaben zur Dateigröße, dem
                    Erstellungsdatum, dem Autor eines Dokuments und den
                    Änderungshistorien beinhalten. Kommunikationsdaten erfassen
                    den Austausch von Informationen zwischen Nutzern über
                    verschiedene Kanäle, wie E-Mail-Verkehr, Anrufprotokolle,
                    Nachrichten in sozialen Netzwerken und Chat-Verläufe,
                    inklusive der beteiligten Personen, Zeitstempel und
                    Übertragungswege. Verfahrensdaten beschreiben die Prozesse
                    und Abläufe innerhalb von Systemen oder Organisationen,
                    einschließlich Workflow-Dokumentationen, Protokolle von
                    Transaktionen und Aktivitäten, sowie Audit-Logs, die zur
                    Nachverfolgung und Überprüfung von Vorgängen verwendet
                    werden.
                  </p>
                </li>
                <li>
                  <p>
                    Nutzungsdaten: Nutzungsdaten beziehen sich auf
                    Informationen, die erfassen, wie Nutzer mit digitalen
                    Produkten, Dienstleistungen oder Plattformen interagieren.
                    Diese Daten umfassen eine breite Palette von Informationen,
                    die aufzeigen, wie Nutzer Anwendungen nutzen, welche
                    Funktionen sie bevorzugen, wie lange sie auf bestimmten
                    Seiten verweilen und über welche Pfade sie durch eine
                    Anwendung navigieren. Nutzungsdaten können auch die
                    Häufigkeit der Nutzung, Zeitstempel von Aktivitäten,
                    IP-Adressen, Geräteinformationen und Standortdaten
                    einschließen. Sie sind besonders wertvoll für die Analyse
                    des Nutzerverhaltens, die Optimierung von
                    Benutzererfahrungen, das Personalisieren von Inhalten und
                    das Verbessern von Produkten oder Dienstleistungen. Darüber
                    hinaus spielen Nutzungsdaten eine entscheidende Rolle beim
                    Erkennen von Trends, Vorlieben und möglichen
                    Problembereichen innerhalb digitaler Angebote
                  </p>
                </li>
                <li>
                  <p>
                    Personenbezogene Daten: `Personenbezogene Daten` sind alle
                    Informationen, die sich auf eine identifizierte oder
                    identifizierbare natürliche Person (im Folgenden `betroffene
                    Person`) beziehen; als identifizierbar wird eine natürliche
                    Person angesehen, die direkt oder indirekt, insbesondere
                    mittels Zuordnung zu einer Kennung wie einem Namen, zu einer
                    Kennnummer, zu Standortdaten, zu einer Online-Kennung (z. B.
                    Cookie) oder zu einem oder mehreren besonderen Merkmalen
                    identifiziert werden kann, die Ausdruck der physischen,
                    physiologischen, genetischen, psychischen, wirtschaftlichen,
                    kulturellen oder sozialen Identität dieser natürlichen
                    Person sind.
                  </p>
                </li>
                <li>
                  <p>
                    Profile mit nutzerbezogenen Informationen: Die Verarbeitung
                    von `Profilen mit nutzerbezogenen Informationen`, bzw. kurz
                    `Profilen` umfasst jede Art der automatisierten Verarbeitung
                    personenbezogener Daten, die darin besteht, dass diese
                    personenbezogenen Daten verwendet werden, um bestimmte
                    persönliche Aspekte, die sich auf eine natürliche Person
                    beziehen (je nach Art der Profilbildung können dazu
                    unterschiedliche Informationen betreffend die Demographie,
                    Verhalten und Interessen, wie z. B. die Interaktion mit
                    Webseiten und deren Inhalten, etc.) zu analysieren, zu
                    bewerten oder, um sie vorherzusagen (z. B. die Interessen an
                    bestimmten Inhalten oder Produkten, das Klickverhalten auf
                    einer Webseite oder den Aufenthaltsort). Zu Zwecken des
                    Profilings werden häufig Cookies und Web-Beacons eingesetzt.
                  </p>
                </li>
                <li>
                  <p>
                    Verantwortlicher: Als `Verantwortlicher` wird die natürliche
                    oder juristische Person, Behörde, Einrichtung oder andere
                    Stelle, die allein oder gemeinsam mit anderen über die
                    Zwecke und Mittel der Verarbeitung von personenbezogenen
                    Daten entscheidet, bezeichnet.
                  </p>
                </li>
                <li>
                  <p>
                    Verarbeitung:`Verarbeitung` ist jeder mit oder ohne Hilfe
                    automatisierter Verfahren ausgeführte Vorgang oder jede
                    solche Vorgangsreihe im Zusammenhang mit personenbezogenen
                    Daten. Der Begriff reicht weit und umfasst praktisch jeden
                    Umgang mit Daten, sei es das Erheben, das Auswerten, das
                    Speichern, das Übermitteln oder das Löschen.
                  </p>
                </li>
                <li>
                  <p>
                    Vertragsdaten: Vertragsdaten sind spezifische Informationen,
                    die sich auf die Formalisierung einer Vereinbarung zwischen
                    zwei oder mehr Parteien beziehen. Sie dokumentieren die
                    Bedingungen, unter denen Dienstleistungen oder Produkte
                    bereitgestellt, getauscht oder verkauft werden. Diese
                    Datenkategorie ist wesentlich für die Verwaltung und
                    Erfüllung vertraglicher Verpflichtungen und umfasst sowohl
                    die Identifikation der Vertragsparteien als auch die
                    spezifischen Bedingungen und Konditionen der Vereinbarung.
                    Vertragsdaten können Start- und Enddaten des Vertrages, die
                    Art der vereinbarten Leistungen oder Produkte,
                    Preisvereinbarungen, Zahlungsbedingungen, Kündigungsrechte,
                    Verlängerungsoptionen und spezielle Bedingungen oder
                    Klauseln umfassen. Sie dienen als rechtliche Grundlage für
                    die Beziehung zwischen den Parteien und sind entscheidend
                    für die Klärung von Rechten und Pflichten, die Durchsetzung
                    von Ansprüchen und die Lösung von Streitigkeiten.
                  </p>
                </li>
                <li>
                  <p>
                    Zahlungsdaten: Zahlungsdaten umfassen sämtliche
                    Informationen, die zur Abwicklung von Zahlungstransaktionen
                    zwischen Käufern und Verkäufern benötigt werden. Diese Daten
                    sind von entscheidender Bedeutung für den elektronischen
                    Handel, das Online-Banking und jede andere Form der
                    finanziellen Transaktion. Sie beinhalten Details wie
                    Kreditkartennummern, Bankverbindungen, Zahlungsbeträge,
                    Transaktionsdaten, Verifizierungsnummern und
                    Rechnungsinformationen. Zahlungsdaten können auch
                    Informationen über den Zahlungsstatus, Rückbuchungen,
                    Autorisierungen und Gebühren enthalten.
                  </p>
                </li>
              </ul>
            </div>
          )}
        </ListItem>
      </DatenList>
    </DatenWrapper>
  );
};

export default Daten;
