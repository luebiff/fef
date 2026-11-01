import { Link } from "react-router-dom";
import scenic from "../assets/FE-scenic-1.webp";
import "../styles/feSelect.css";

const fundFacts = [
  ["Fondtyp", "Specialfond"],
  ["Förvaltare", "Fredrik Skoglund"],
  ["Inriktning", "Nordiska små och medelstora bolag"],
  ["Startdatum", "21/10/2020"],
  ["Tillsynsmyndighet", "Finansinspektionen"],
  ["Förvaringsinstitut", "Skandinaviska Enskilda Banken AB"],
  ["Fondadministration", "FCG Fonder"],
  ["Handelsdag", "Sista bankdagen i månaden"],
  ["Prestationsbaserat arvode", "20% av överavkastningen, med high-water mark"],
];

function HistoricalReturnsChart() {
  return (
    <figure className="fe-select-chart">
      <div className="fe-select-chart-scroll">
        <svg
          className="fe-select-chart-svg"
          viewBox="0 0 600 300"
          role="img"
          aria-labelledby="fe-select-chart-title fe-select-chart-description"
        >
          <title id="fe-select-chart-title">Historisk avkastning</title>
          <desc id="fe-select-chart-description">
            Illustrativ linjegraf som återskapar kurvornas utseende från den
            bifogade bilden. Exakta datapunkter är inte återgivna.
          </desc>
          {[0, 1, 2, 3, 4, 5, 6].map((index) => {
            const y = 24 + index * 34;
            const value = 80 - index * 10;

            return (
              <g key={value}>
                <line
                  className="fe-select-chart-gridline"
                  x1="55"
                  x2="590"
                  y1={y}
                  y2={y}
                />
                <text className="fe-select-chart-label" x="5" y={y + 4}>
                  {value}%
                </text>
              </g>
            );
          })}
          <path
            className="fe-select-chart-line fe-select-chart-line-select"
            d="M55 200 L72 180 L88 144 L103 133 L120 117 L137 130 L151 90 L164 77 L177 111 L194 132 L213 150 L230 165 L248 177 L268 190 L287 172 L304 184 L323 200 L340 176 L359 171 L378 151 L396 138 L414 125 L431 115 L449 93 L466 111 L484 77 L501 66 L520 82 L539 52 L556 68 L574 57 L590 66"
          />
          <path
            className="fe-select-chart-line fe-select-chart-line-index"
            d="M55 205 L73 174 L90 152 L107 141 L125 121 L142 132 L159 97 L177 117 L194 149 L211 165 L229 158 L247 191 L265 220 L282 198 L300 211 L317 203 L335 194 L353 201 L371 193 L388 188 L406 179 L424 170 L442 162 L459 177 L477 166 L494 160 L512 147 L530 163 L548 150 L567 143 L590 153"
          />
          <path
            className="fe-select-chart-line fe-select-chart-line-average"
            d="M55 207 L73 183 L91 160 L109 145 L127 137 L145 128 L163 134 L181 143 L199 153 L217 166 L235 178 L253 184 L271 194 L289 201 L307 198 L325 193 L343 190 L361 185 L379 180 L397 176 L415 170 L433 165 L451 166 L469 162 L487 157 L505 154 L523 150 L541 151 L559 146 L577 143 L590 145"
          />
          <text className="fe-select-chart-date" x="55" y="248">
            2010-11-12
          </text>
          <text className="fe-select-chart-date" x="185" y="248">
            2014-11-12
          </text>
          <text className="fe-select-chart-date" x="320" y="248">
            2018-11-12
          </text>
          <text className="fe-select-chart-date" x="460" y="248">
            2022-11-12
          </text>
          <g className="fe-select-chart-legend">
            <line
              x1="100"
              x2="122"
              y1="275"
              y2="275"
              className="fe-select-chart-line-select"
            />
            <text x="128" y="279">
              FE Select
            </text>
            <line
              x1="235"
              x2="257"
              y1="275"
              y2="275"
              className="fe-select-chart-line-index"
            />
            <text x="263" y="279">
              Småbolagsindex (SIX)
            </text>
            <line
              x1="415"
              x2="437"
              y1="275"
              y2="275"
              className="fe-select-chart-line-average"
            />
            <text x="443" y="279">
              Snitt småbolagsfonder
            </text>
          </g>
        </svg>
      </div>
      <figcaption>
        Illustrativ återgivning av diagrammet i underlaget. Exakta historiska
        datapunkter behöver verifieras mot fondens officiella rapportering.
      </figcaption>
    </figure>
  );
}

function FESelect() {
  return (
    <section className="fe-select-page" aria-labelledby="fe-select-title">
      <header
        className="fe-select-hero"
        style={{ backgroundImage: `url(${scenic})` }}
      >
        <div className="fe-select-hero-panel">
          <div className="fe-select-hero-copy">
            <p className="fe-select-eyebrow">Aktiv nordisk småbolagsfond</p>
            <h1 id="fe-select-title">FE Select</h1>
          </div>
          <Link to="/Investera" className="fe-select-hero-link">
            INVESTERA I FE SELECT
          </Link>
        </div>
      </header>

      <div className="fe-select-content-layout">
        <div className="fe-select-main">
          <section
            className="fe-select-intro-card"
            aria-labelledby="fe-select-about-title"
          >
            <p className="fe-select-eyebrow">Om fonden</p>
            <h2 id="fe-select-about-title">
              Aktiv förvaltning med fler verktyg
            </h2>
            <p className="fe-select-intro">
              FE Select är en aktivt förvaltad specialfond (även kallad
              hedgefond) som fokuserar på småbolag i Norden. Jämfört med en
              vanlig aktiefond (long-only), så får andelsägarna två tjänster –
              val av aktier, men även val av hur stor exponeringen ska vara mot
              aktiemarknaden vid varje tillfälle. Målet är absolut avkastning.
              Därför har FE Select andra placeringsregler och möjlighet att
              variera exponeringen jämfört med en traditionell aktiefond.
            </p>
          </section>

          <div className="fe-select-main-columns">
            <div className="fe-select-details">
              <section
                className="fe-select-info-card"
                aria-labelledby="market-exposure-title"
              >
                <p className="fe-select-eyebrow">Förvaltningsstrategi</p>
                <h2 id="market-exposure-title">
                  Möjlighet att styra exponeringen mot marknaden
                </h2>
                <p>
                  Till skillnad från en traditionell aktiefond kan förvaltaren
                  anpassa fondens exponering mot aktiemarknaden. Det innebär att
                  fonden kan ha olika marknadsexponering beroende på
                  förvaltarens bedömning.
                </p>
              </section>

              <section
                className="fe-select-info-card"
                aria-labelledby="historical-returns-title"
              >
                <p className="fe-select-eyebrow">Utveckling över tid</p>
                <h2 id="historical-returns-title">Historisk avkastning</h2>
                <HistoricalReturnsChart />
                <h3 className="fe-select-table-title">
                  FE Select – historisk avkastning (%)
                </h3>
                <p className="fe-select-data-note">
                  Månadsvisa avkastningssiffror finns i fondens officiella
                  månadsrapporter.
                </p>
              </section>

              <section
                className="fe-select-risk-note"
                aria-labelledby="fe-select-risk-title"
              >
                <p className="fe-select-eyebrow">Viktig information</p>
                <h2 id="fe-select-risk-title">Riskinformation</h2>
                <p>
                  Historisk avkastning är ingen garanti för framtida avkastning.
                  En investering i fonder kan både öka och minska i värde och
                  det är inte säkert att du får tillbaka det investerade
                  kapitalet.
                </p>
                <ul>
                  <li>Informationsbroschyr FE Fonder (PDF)</li>
                  <li>Fondbestämmelser FE Select (PDF)</li>
                  <li>Faktablad för FE Select (PDF)</li>
                </ul>
              </section>
            </div>

            <aside className="fe-select-facts">
              <section
                className="fe-select-facts-card"
                aria-labelledby="fe-select-facts-title"
              >
                <h2 id="fe-select-facts-title">Fondfakta</h2>
                <dl>
                  <div>
                    <dt>Namn</dt>
                    <dd>FE Select</dd>
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
      </div>

      <Link to="/Investera" className="fe-select-bottom-cta">
        <span>FE Select</span>
        <span className="fe-select-hero-link">INVESTERA I FE SELECT</span>
      </Link>
    </section>
  );
}

export default FESelect;
