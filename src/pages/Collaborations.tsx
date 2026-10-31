import PromoAside from "../components/PromoAside";
import "../styles/collaborations.css";

const partners = [
  {
    name: "Avanza",
    description:
      "FE Fonder har samarbetat med Avanza och Avanza Fonder från start. I november 2020 lanserades Avanza Småbolag by Skoglund. Det är en matarfond som enbart investerar i FE Småbolag Sverige.",
    linkLabel: "AVANZA",
    href: "https://www.avanza.se/",
  },
  {
    name: "FCG Fonder",
    description:
      "FCG Fonder är vår samarbetspartner kring fonderna, och de sköter all administration kring fonderna. FCG Fonder är ett fondbolag med tillstånd att förvalta värdepappersfonder (UCITS), specialfonder samt alternativa investeringsfonder (AIFs).",
    linkLabel: "FCG FONDER",
    href: "https://www.fcgfonder.se/",
  },
  {
    name: "Advise",
    description:
      "Advise är vår samarbetspartner kring Risk och Compliance. Advise är en ledande leverantör av tjänster inom governance, risk och regelefterlevnad.",
    linkLabel: "ADVISENSE",
    href: "https://www.advisense.com/",
  },
  {
    name: "CAG Datastöd",
    description:
      "CAG Datastöd är vår samarbetspartner inom IT. CAG Datastöd erbjuder kompletta tjänster inom drift och förvaltning av IT-miljöer med fokus på finans- och juristbranschen.",
    linkLabel: "CAG DATASTÖD",
    href: "https://www.cag.se/",
  },
];

function Collaborations() {
  return (
    <main className="collaborations-page">
      <div className="collaborations-layout">
        <div className="collaborations-content">
          <h1>Samarbeten</h1>
          <div className="collaborations-partners">
            {partners.map((partner) => (
              <section
                className="collaboration-partner"
                key={partner.name}
                aria-labelledby={`partner-${partner.name}`}
              >
                <h2 id={`partner-${partner.name}`}>{partner.name}</h2>
                <p>{partner.description}</p>
                <a
                  className="collaboration-link"
                  href={partner.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {partner.linkLabel}
                </a>
              </section>
            ))}
          </div>
        </div>
        <PromoAside />
      </div>
    </main>
  );
}

export default Collaborations;
