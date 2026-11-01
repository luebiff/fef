import "../styles/risk.css";

function Risk() {
  return (
    <main className="risk-page">
      <div className="risk-content">
        <header className="risk-hero">
          <p className="risk-eyebrow">Viktig information</p>
          <h1>Riskinformation</h1>
          <p className="risk-intro">
            Historisk avkastning är ingen garanti för framtida avkastning. En
            investering i fonder kan både öka och minska i värde och det är inte
            säkert att du får tillbaka det investerade kapitalet.
          </p>
        </header>

        <div className="risk-sections">
          <section aria-labelledby="risk-supervision">
            <h2 id="risk-supervision">Tillsyn och licens</h2>
            <p>
              FE Fonder AB förvaltar FE Småbolag Sverige och FE Select. Bolaget
              är ett värdepappersbolag under Finansinspektionens tillsyn med ett
              tillstånd – diskretionär portföljförvaltning. Kontaktuppgifter
              till Finansinspektionen:{" "}
              <a href="https://www.fi.se/" target="_blank" rel="noreferrer">
                www.fi.se
              </a>
              , e-post{" "}
              <a href="mailto:finansinspektionen@fi.se">
                finansinspektionen@fi.se
              </a>{" "}
              och telefon <a href="tel:+46840898000">08-408 980 00</a>.
            </p>
          </section>

          <section aria-labelledby="risk-business">
            <h2 id="risk-business">Bolagets verksamhet</h2>
            <p>
              FE Fonder AB uppfyller villkoren för att vara ett litet och icke
              sammanlänkat värdepappersbolag (klass 3-bolag). Verksamheten i
              Fonder AB är fokuserad på förvaltning och har samarbeten med
              Advisense AB (risk &amp; compliance), FCG Fonder (fondbolag) och
              Avanza Fonder.
            </p>
          </section>

          <section aria-labelledby="risk-complaints">
            <h2 id="risk-complaints">Klagomålsansvarig</h2>
            <p>
              Ansvarig för hantering av klagomål är VD för FE Fonder AB. Vid
              eventuella klagomål är du välkommen att kontakta{" "}
              <a href="mailto:kontakt@fefonder.se">kontakt@fefonder.se</a>.
            </p>
          </section>

          <section aria-labelledby="risk-conflicts">
            <h2 id="risk-conflicts">Intressekonfliktspolicy</h2>
            <p>
              FE Fonder AB har rutiner för att aktivt och löpande identifiera,
              dokumentera, följa upp, förhindra och hantera de potentiella och
              faktiska intressekonflikter som kan uppkomma i verksamheten. För
              ytterligare information, kontakta VD.
            </p>
          </section>

          <section aria-labelledby="risk-position">
            <h2 id="risk-position">Ställningstagande</h2>
            <p>
              Den 1 juli 2004 infördes lagen (2003:862) om finansiell rådgivning
              till konsumenter. Mot bakgrund av denna lag vill FE Fonder AB
              klargöra sin hållning.
            </p>
            <p>
              FE Fonder AB:s huvuduppgift är att bedriva professionell
              förvaltning. Fonder riktar sig till privatpersoner, företag och
              institutioner. Ekonomisk rådgivning till enskilda sparare ligger
              dock inte inom ramen för vår verksamhet. Det innebär att vi inte
              dokumenterar kundmöten eller spelar in kundsamtal, vilket är ett
              krav för verksamheter som bedriver finansiell rådgivning.
              Informationen från FE Fonder AB ska därför betraktas som generell
              och av marknadsföringskaraktär, inte som individuell rådgivning.
            </p>
          </section>

          <section aria-labelledby="risk-fund-company">
            <h2 id="risk-fund-company">Ansvarigt fondbolag</h2>
            <p>
              Ansvarigt fondbolag för fonderna FE Småbolag Sverige och FE Select
              är FCG Fonder AB (556939-1671). Fondbolaget står under tillsyn av
              Finansinspektionen och ansvarar för registret över samtliga
              andelsägare och deras innehav.
            </p>
            <p>
              FCG Fonder AB har uppdragit åt FE Fonder (559271-5436) AB att
              ansvara för fondernas portföljförvaltning, marknadsföring och
              distribution.
            </p>
          </section>

          <section aria-labelledby="risk-management">
            <h2 id="risk-management">
              Förvaltning, marknadsföring och distribution
            </h2>
            <p>
              FE Fonder AB (559271-5436) är ett värdepappersbolag med verksamhet
              inom portföljförvaltning. FE Fonder AB förvaltar fonderna FE
              Småbolag Sverige enligt lagen (2004:46) om värdepappersfonder
              (LVF) och FE Select enligt lagen (2013:561) om förvaltare av
              alternativa investeringsfonder (LAIF). FE Fonder ansvarar även för
              fondernas marknadsföring och distribution.
            </p>
          </section>
        </div>

        <section
          className="risk-documents-card"
          aria-labelledby="risk-documents-title"
        >
          <h2 id="risk-documents-title">Dokument</h2>
          <ul className="risk-documents" aria-label="Riskdokument">
            <li>Integritetspolicy Hemladd (PDF)</li>
            <li>Intressekonfliktspolicy FE Fonder 2025 (PDF)</li>
            <li>Policy för bästa orderutförande FE Fonder 2025 (PDF)</li>
            <li>Policy för klagomålshantering FE Fonder 2025</li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Risk;
