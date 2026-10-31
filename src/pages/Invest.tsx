import "../styles/invest.css";
import PromoAside from "../components/PromoAside";

const avanzaUrl = "https://www.avanza.se/";
const nordnetUrl = "https://www.nordnet.se/";

function Invest() {
  return (
    <main className="invest-page">
      <div className="invest-content">
        <h1 className="invest-title">Investera</h1>

        <section className="invest-platforms" aria-label="Välj fondplattform">
          <div className="invest-platform-row">
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
            <div className="invest-platform-links">
              <a href={avanzaUrl} target="_blank" rel="noreferrer">
                FE SELECT
              </a>
              <a href={avanzaUrl} target="_blank" rel="noreferrer">
                FE SMÅBOLAG SVERIGE
              </a>
            </div>
          </div>

          <div className="invest-platform-row">
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
            <div className="invest-platform-links">
              <a href={nordnetUrl} target="_blank" rel="noreferrer">
                FE SELECT
              </a>
            </div>
          </div>
        </section>

        <p className="invest-risk-disclaimer">
          Historisk avkastning är ingen garanti för framtida avkastning. En
          investering i fonder kan både öka och minska i värde och det är inte
          säkert att du får tillbaka det investerade kapitalet.
        </p>

        <section
          className="invest-fund-section"
          aria-labelledby="fe-select-title"
        >
          <h2 id="fe-select-title">FE Select</h2>
          <p>
            FE Select är en månadshandlad fond som kan köpas per den sista
            bankdagen varje månad. För att möjliggöra en investering per den
            sista bankdagen behöver, pga administrationstid på de olika
            plattformarna, en köpanmälan komma in 5 dagar innan sista bankdagen.
            <br />
            FE Select har dels ett årligt arvode och ett prestationsarvode. Det
            utgår inga avgifter för att köpa eller sälja andelar.
            <br />
            Fondab erbjuder en enkel väg för investering via:{" "}
            <a href="https://www.fcgfonder.se/" target="_blank" rel="noreferrer">
              FCG
            </a>
          </p>
        </section>

        <section
          className="invest-direct-section"
          aria-labelledby="direct-invest-title"
        >
          <h2 className="visually-hidden" id="direct-invest-title">
            Investera via egen fonddepå
          </h2>
          <p>
            Investera via egen fonddepå:
            <br />
            Nedan finns direktlänkar till våra samarbetspartners Avanza och
            Nordnet.
            <br />
            Vill du investera via annan plattform finns våra fonder
            tillgängliga hos de flesta via kopplingar genom MFEX eller Allfunds.
            Diskutera med din rådgivare eller kontakta oss för ytterligare
            information.
          </p>
        </section>

        <section
          className="invest-fund-section invest-small-cap-section"
          aria-labelledby="fe-small-cap-title"
        >
          <h2 id="fe-small-cap-title">FE Småbolag Sverige</h2>
          <p>
            FE Småbolag Sverige är en daglig handlad fond som kan köpas varje
            bankdag.
            <br />
            Genom vårt samarbete sedan start år 2020 med Avanza Fonder och
            Avanza Småbolag by Skoglund, som är en matarfond som enbart
            investerar i FE Småbolag Sverige, har Avanzas kunder kunnat vara med
            från start.
            <br />
            För ytterligare information, vänligen följ nedan länk till{" "}
            <a href="https://www.avanza.se/" target="_blank" rel="noreferrer">
              Avanza Småbolag by Skoglund
            </a>
            .
            <br />
            För investering i FE Småbolag Sverige B-klass (över 5 miljoner
            kronor) erbjuder Fondab en enkel väg för investering via:{" "}
            <a href="https://www.fcgfonder.se/" target="_blank" rel="noreferrer">
              FCG
            </a>
          </p>
          <p className="invest-small-cap-platform-info">
            Vill du investera i FE Småbolag Sverige B-klass via annan plattform
            finns våra fonder tillgängliga hos de flesta via kopplingar genom
            MFEX eller Allfunds. Diskutera med din rådgivare eller kontakta oss
            för ytterligare information.
          </p>
        </section>
      </div>
      <PromoAside />
    </main>
  );
}

export default Invest;
