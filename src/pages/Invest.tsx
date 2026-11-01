import "../styles/invest.css";

const avanzaUrl = "https://www.avanza.se/";
const nordnetUrl = "https://www.nordnet.se/";

function Invest() {
  return (
    <section className="invest-page" aria-labelledby="invest-title">
      <div className="invest-content">
        <header className="invest-hero">
          <p className="invest-eyebrow">Kom igång med ditt sparande</p>
          <h1 className="invest-title" id="invest-title">
            Investera i våra fonder
          </h1>
          <p className="invest-intro">
            Välj en plattform nedan för att hitta FE Select eller FE Småbolag
            Sverige. Utbudet skiljer sig mellan plattformarna.
          </p>
        </header>

        <section
          className="invest-platforms"
          aria-labelledby="invest-platforms-title"
        >
          <div className="invest-section-heading">
            <p className="invest-eyebrow">Våra samarbetspartners</p>
            <h2 className="invest-section-title" id="invest-platforms-title">
              Välj fondplattform
            </h2>
          </div>

          <div className="invest-platform-grid">
            <section
              className="invest-platform-card"
              aria-labelledby="avanza-title"
            >
              <a
                className="invest-platform-logo avanza-logo"
                href={avanzaUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Besök Avanza"
              >
                <span>AVANZA</span>
                <span className="avanza-bars" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
              </a>
              <h3 id="avanza-title" className="visually-hidden">
                Avanza
              </h3>
              <p>Hitta våra fonder hos Avanza.</p>
              <div className="invest-platform-links">
                <a href={avanzaUrl} target="_blank" rel="noreferrer">
                  FE Select
                  <span className="visually-hidden"> hos Avanza</span>
                </a>
                <a href={avanzaUrl} target="_blank" rel="noreferrer">
                  FE Småbolag Sverige
                  <span className="visually-hidden"> hos Avanza</span>
                </a>
              </div>
            </section>

            <section
              className="invest-platform-card"
              aria-labelledby="nordnet-title"
            >
              <a
                className="invest-platform-logo nordnet-logo"
                href={nordnetUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Besök Nordnet"
              >
                <span className="nordnet-mark" aria-hidden="true">
                  <i />
                  <i />
                </span>
                <span>Nordnet</span>
              </a>
              <h3 id="nordnet-title" className="visually-hidden">
                Nordnet
              </h3>
              <p>Hitta FE Select hos Nordnet.</p>
              <div className="invest-platform-links">
                <a href={nordnetUrl} target="_blank" rel="noreferrer">
                  FE Select
                  <span className="visually-hidden"> hos Nordnet</span>
                </a>
              </div>
            </section>
          </div>
        </section>

        <aside className="invest-risk-disclaimer">
          <p className="invest-eyebrow">Viktig information</p>
          <p>
            Historisk avkastning är ingen garanti för framtida avkastning. En
            investering i fonder kan både öka och minska i värde och det är inte
            säkert att du får tillbaka det investerade kapitalet.
          </p>
        </aside>

        <div className="invest-fund-grid">
          <section
            className="invest-fund-section"
            aria-labelledby="fe-select-title"
          >
            <p className="invest-eyebrow">Månadshandlad specialfond</p>
            <h2 id="fe-select-title">FE Select</h2>
            <p>
              FE Select är en månadshandlad fond som kan köpas per den sista
              bankdagen varje månad. För att möjliggöra en investering per den
              sista bankdagen behöver, på grund av administrationstid på de
              olika plattformarna, en köpanmälan komma in 5 dagar innan sista
              bankdagen.
            </p>
            <p>
              FE Select har dels ett årligt arvode och ett prestationsarvode.
              Det utgår inga avgifter för att köpa eller sälja andelar.
            </p>
            <p>
              Fondab erbjuder en enkel väg för investering via{" "}
              <a href="https://www.fcgfonder.se/" target="_blank" rel="noreferrer">
                FCG
              </a>
              .
            </p>
          </section>

          <section
            className="invest-direct-section"
            aria-labelledby="direct-invest-title"
          >
            <p className="invest-eyebrow">Fler möjligheter</p>
            <h2 id="direct-invest-title">Investera via egen fonddepå</h2>
            <p>
              Nedan finns direktlänkar till våra samarbetspartners Avanza och
              Nordnet. Vill du investera via en annan plattform finns våra
              fonder tillgängliga hos de flesta via kopplingar genom MFEX eller
              Allfunds. Diskutera med din rådgivare eller kontakta oss för
              ytterligare information.
            </p>
          </section>

          <section
            className="invest-fund-section invest-small-cap-section"
            aria-labelledby="fe-small-cap-title"
          >
            <p className="invest-eyebrow">Daglighandlad aktiefond</p>
            <h2 id="fe-small-cap-title">FE Småbolag Sverige</h2>
            <p>
              FE Småbolag Sverige är en dagligen handlad fond som kan köpas
              varje bankdag.
            </p>
            <p>
              Genom vårt samarbete sedan start år 2020 med Avanza Fonder och
              Avanza Småbolag by Skoglund, som är en matarfond som enbart
              investerar i FE Småbolag Sverige, har Avanzas kunder kunnat vara
              med från start. För ytterligare information, följ länken till{" "}
              <a href={avanzaUrl} target="_blank" rel="noreferrer">
                Avanza Småbolag by Skoglund
              </a>
              .
            </p>
            <p>
              För investering i FE Småbolag Sverige B-klass (över 5 miljoner
              kronor) erbjuder Fondab en enkel väg för investering via{" "}
              <a href="https://www.fcgfonder.se/" target="_blank" rel="noreferrer">
                FCG
              </a>
              .
            </p>
            <p className="invest-small-cap-platform-info">
              Vill du investera i FE Småbolag Sverige B-klass via en annan
              plattform finns våra fonder tillgängliga hos de flesta via
              kopplingar genom MFEX eller Allfunds. Diskutera med din rådgivare
              eller kontakta oss för ytterligare information.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Invest;
