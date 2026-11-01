import { Link } from "react-router-dom";
import scenic from "../assets/FE-scenic-2.webp";
import "../styles/feSmallCapSweden.css";

const fundFacts = [
  ["Fondtyp", "UCITS-fond"],
  ["Förvaltare", "Fredrik Skoglund"],
  ["Storlek", "Upp till 100 miljarder kronor"],
  ["Inriktning", "Fokus på småbolag i svenska marknadsbolag"],
  ["Startdatum", "2020"],
  ["Tillsynsmyndighet", "Finansinspektionen"],
  ["Jämförelseindex", "SIX"],
  ["Förvaringsinstitut", "Skandinaviska Enskilda Banken AB"],
  ["Fondadministration", "FCG Fonder"],
  ["Riskhantering", "Advisense"],
  ["NAV-beräkning", "FCG Fonder"],
  ["Handel", "Dagligen"],
  ["Nettoexponering", "Minst 90%"],
  ["Avgift", "1,50%"],
];

function SmallCapReturnsChart() {
  return (
    <figure className="small-cap-returns-chart">
      <div className="small-cap-returns-chart-scroll">
      <svg
        className="small-cap-returns-chart-svg"
        viewBox="0 0 600 300"
        role="img"
        aria-labelledby="small-cap-chart-title small-cap-chart-description"
      >
        <title id="small-cap-chart-title">
          FE Småbolag Sverige historisk avkastning
        </title>
        <desc id="small-cap-chart-description">
          Illustrativ linjegraf jämför FE Småbolag Sverige med SIX Carnegie
          Small Cap Index. Exakta datapunkter återges inte.
        </desc>
        {[0, 1, 2, 3, 4, 5, 6].map((index) => {
          const y = 24 + index * 34;
          const value = 170 - index * 20;

          return (
            <g key={value}>
              <line
                className="small-cap-chart-gridline"
                x1="54"
                x2="590"
                y1={y}
                y2={y}
              />
              <text className="small-cap-chart-label" x="4" y={y + 4}>
                {value}
              </text>
            </g>
          );
        })}
        <path
          className="small-cap-chart-line small-cap-chart-fund"
          d="M54 194 L70 181 L86 162 L102 154 L118 143 L134 134 L150 117 L166 127 L182 94 L198 82 L214 111 L230 128 L246 146 L262 164 L278 181 L294 190 L310 204 L326 194 L342 184 L358 177 L374 162 L390 154 L406 140 L422 133 L438 121 L454 126 L470 111 L486 102 L502 116 L518 98 L534 91 L550 101 L566 85 L590 94"
        />
        <path
          className="small-cap-chart-line small-cap-chart-index"
          d="M54 199 L70 186 L86 171 L102 160 L118 149 L134 141 L150 130 L166 137 L182 108 L198 101 L214 125 L230 141 L246 155 L262 170 L278 191 L294 198 L310 205 L326 198 L342 191 L358 187 L374 177 L390 166 L406 157 L422 150 L438 144 L454 149 L470 139 L486 134 L502 146 L518 133 L534 126 L550 133 L566 119 L590 124"
        />
        <text className="small-cap-chart-date" x="54" y="248">
          2020-10-16
        </text>
        <text className="small-cap-chart-date" x="185" y="248">
          2021-10-16
        </text>
        <text className="small-cap-chart-date" x="320" y="248">
          2022-10-16
        </text>
        <text className="small-cap-chart-date" x="455" y="248">
          2024-10-16
        </text>
        <g className="small-cap-chart-legend">
          <line
            x1="170"
            x2="194"
            y1="278"
            y2="278"
            className="small-cap-chart-fund"
          />
          <text x="200" y="282">
            FE Småbolag Sverige
          </text>
          <line
            x1="355"
            x2="379"
            y1="278"
            y2="278"
            className="small-cap-chart-index"
          />
          <text x="385" y="282">
            SIX Carnegie Small Cap Index
          </text>
        </g>
      </svg>
      </div>
      <figcaption>
        Illustrativ återgivning av diagrammet i bilden. Se fondens officiella
        rapportering för faktiska historiska värden.
      </figcaption>
    </figure>
  );
}

function FESmallCapSweden() {
  return (
    <section
      className="small-cap-fund-page"
      aria-labelledby="small-cap-fund-title"
    >
      <header
        className="small-cap-fund-hero"
        style={{ backgroundImage: `url(${scenic})` }}
      >
        <div className="small-cap-fund-hero-panel">
          <div className="small-cap-fund-hero-copy">
            <p className="small-cap-fund-eyebrow">
              Aktiv svensk småbolagsfond
            </p>
            <h1 id="small-cap-fund-title">FE Småbolag Sverige</h1>
          </div>
          <Link to="/Investera" className="small-cap-fund-invest-link">
            INVESTERA I FE SMÅBOLAG SVERIGE
          </Link>
        </div>
      </header>

      <div className="small-cap-fund-content">
        <section
          className="small-cap-fund-intro-card"
          aria-labelledby="small-cap-about-title"
        >
          <p className="small-cap-fund-eyebrow">Om fonden</p>
          <h2 id="small-cap-about-title">
            Investera långsiktigt i svenska småbolag
          </h2>
          <p className="small-cap-fund-intro">
            FE Småbolag Sverige är en aktivt förvaltad aktiefond som investerar
            i svenska småbolag. Som en traditionell long-only UCITS-fond är den
            alltid exponerad mot aktiemarknaden, vilket gör fonden lämpad för
            långsiktigt sparande. Fonden ger en bred riskspridning över
            sektorer och urval av bolag med stor utvecklingspotential.
          </p>
        </section>

        <div className="small-cap-fund-columns">
          <div className="small-cap-fund-details">
            <section
              className="small-cap-fund-info-card"
              aria-labelledby="small-cap-long-term-title"
            >
              <p className="small-cap-fund-eyebrow">Långsiktighet</p>
              <h2 id="small-cap-long-term-title">Långsiktigt sparande</h2>
              <p>
                Aktiv förvaltning kan påverka hur skilda aktier och sektorer
                utvecklas, och småbolag kan växa över tid. Genom att investera
                långsiktigt i svenska småbolag söker fonden bolag med god
                utvecklingspotential och en stark verksamhet.
              </p>
            </section>

            <section
              className="small-cap-fund-info-card"
              aria-labelledby="small-cap-returns-title"
            >
              <p className="small-cap-fund-eyebrow">Utveckling över tid</p>
              <h2 id="small-cap-returns-title">Historisk avkastning</h2>
              <SmallCapReturnsChart />
              <h3 className="small-cap-returns-table-title">
                FE Småbolag Sverige – historisk avkastning (%)
              </h3>
              <p className="small-cap-data-note">
                Månadsvisa avkastningssiffror och jämförelseindex finns i
                fondens officiella månadsrapporter.
              </p>
            </section>

            <section
              className="small-cap-fund-risk"
              aria-labelledby="small-cap-risk-title"
            >
              <p className="small-cap-fund-eyebrow">Viktig information</p>
              <h2 id="small-cap-risk-title">Riskinformation</h2>
              <p>
                Historisk avkastning är ingen garanti för framtida avkastning.
                En investering i fonder kan både öka och minska i värde och det
                är inte säkert att du får tillbaka det investerade kapitalet.
              </p>
              <ul>
                <li>Informationsbroschyr FE Fonder (PDF)</li>
                <li>Fondbestämmelser FE Småbolag (PDF)</li>
                <li>Faktablad FE Småbolag Sverige A (PDF)</li>
                <li>Faktablad FE Småbolag Sverige B (PDF)</li>
              </ul>
            </section>
          </div>

          <aside className="small-cap-fund-facts">
            <section
              className="small-cap-fund-facts-card"
              aria-labelledby="small-cap-facts-title"
            >
              <h2 id="small-cap-facts-title">Fondfakta</h2>
              <dl>
                <div>
                  <dt>Namn</dt>
                  <dd>FE Småbolag Sverige</dd>
                </div>
                {fundFacts.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </aside>
        </div>
      </div>

      <Link to="/Investera" className="small-cap-fund-bottom-cta">
        <span>FE Småbolag Sverige</span>
        <span className="small-cap-fund-invest-link">
          INVESTERA I FE SMÅBOLAG SVERIGE
        </span>
      </Link>
    </section>
  );
}

export default FESmallCapSweden;
