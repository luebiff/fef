import { useEffect, useRef } from "react";
import fredrikSkoglund from "../assets/fSkoglund.webp";
import "../styles/about.css";

const milestones = [
  {
    year: "1998",
    title: "Allt börjar med Fredrik Skoglund",
    image: fredrikSkoglund,
    imageAlt: "Fredrik Skoglund",
    text: "Fredrik har varit på aktiemarknaden sedan 1998. 17 år som aktieanalytiker och småbolagsstrateg (huvudsakligen på Carnegie) och som aktieförvaltare (bland annat förvaltare av Länsförsäkringar Småbolag i 2,5 år) från 2016.",
  },
  {
    year: "2020",
    title: "FE Fonder grundas",
    text: "FE Fonder grundades i oktober 2020 av Fredrik Skoglund och Erik Selin. Erik är den första investeraren i fonderna. Med ett gemensamt intresse för aktier och företagande vill de att FE Fonder ska kunna ge småbolagens kraft till fler sparare.",
  },
  {
    year: "2020",
    title: "Avanza Småbolag by Skoglund lanseras",
    text: "Avanza Fonder hade liknande tankar och lanserade därför Avanza Småbolag by Skoglund i november 2020. Genom Avanza Småbolag by Skoglund kan vi hjälpa cirka 60 000 andelsägare med småbolagssparande. Avanza Småbolag by Skoglund är en matarfond som investerar i FE Småbolag Sverige.",
  },
  {
    year: "Idag",
    title: "FE Fonder idag",
    text: "FE Fonder har idag förvaltning av FE Småbolag Sverige (en long-only-fond) och FE Select (en specialfond, även kallad hedgefond).",
  },
];

const investmentSteps = [
  { label: "Fundamenta", x: 95, y: 42 },
  { label: "Tillväxt", x: 235, y: 42 },
  { label: "Avkastning", x: 375, y: 42 },
  { label: "Risk", x: 375, y: 118 },
  { label: "Värdering", x: 235, y: 118 },
  { label: "Bästa aktierna", x: 95, y: 118 },
];

function InvestmentPhilosophyDiagram() {
  return (
    <div className="about-philosophy-diagram">
      <svg
        viewBox="0 0 470 150"
        role="img"
        aria-labelledby="philosophy-title philosophy-description"
      >
        <title id="philosophy-title">FE Fonders investeringsfilosofi</title>
        <desc id="philosophy-description">
          En cirkulär process där fundamenta, tillväxt och avkastning leder
          vidare till risk, värdering och de bästa aktierna.
        </desc>
        <defs>
          <marker
            id="about-arrow-green"
            markerWidth="9"
            markerHeight="9"
            refX="7"
            refY="4.5"
            orient="auto"
          >
            <path
              d="M0 0 L8 4.5 L0 9"
              fill="none"
              stroke="#70ad35"
              strokeWidth="2"
            />
          </marker>
        </defs>
        <path
          className="about-process-line"
          d="M95 42 H375 Q430 42 430 80 Q430 118 375 118 H95"
          markerEnd="url(#about-arrow-green)"
        />
        <path
          className="about-process-start"
          d="M95 118 C18 118 18 42 78 42"
        />
        {investmentSteps.map(({ label, x, y }) => (
          <g key={label}>
            <circle className="about-process-node" cx={x} cy={y} r="12" />
            <text
              className="about-process-label"
              x={x}
              y={y === 42 ? 18 : 148}
              textAnchor="middle"
            >
              {label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

function About() {
  const timelineRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) {
      return;
    }

    let animationFrame = 0;
    const updateProgress = () => {
      animationFrame = 0;
      const bounds = timeline.getBoundingClientRect();
      const timelineStyle = window.getComputedStyle(timeline, "::after");
      const trackTop = Number.parseFloat(timelineStyle.top);
      const trackBottom = Number.parseFloat(timelineStyle.bottom);
      const trackHeight = timeline.clientHeight - trackTop - trackBottom;
      const viewportCenter = window.innerHeight / 2;
      const progress = Math.min(
        1,
        Math.max(0, (viewportCenter - bounds.top - trackTop) / trackHeight),
      );
      const fillPosition =
        bounds.top + trackTop + trackHeight * progress;

      timeline.style.setProperty(
        "--about-timeline-progress",
        String(progress),
      );

      timeline.querySelectorAll(".about-timeline-item").forEach((item) => {
        const marker = item.querySelector(".about-timeline-marker");
        if (!marker) {
          return;
        }

        const markerBounds = marker.getBoundingClientRect();
        const markerPosition = markerBounds.top + markerBounds.height / 2;
        item.classList.toggle("is-reached", markerPosition <= fillPosition);
      });
    };

    const scheduleProgressUpdate = () => {
      if (animationFrame === 0) {
        animationFrame = window.requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    window.addEventListener("scroll", scheduleProgressUpdate, {
      passive: true,
    });
    window.addEventListener("resize", scheduleProgressUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleProgressUpdate);
      window.removeEventListener("resize", scheduleProgressUpdate);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="about-page" aria-labelledby="about-page-title">
      <div className="about-page-content">
        <header className="about-intro">
          <p className="about-eyebrow">Om FE Fonder</p>
          <h1 id="about-page-title">Långsiktighet med småbolag i fokus</h1>
          <p>
            FE Fonder är ett värdepappersbolag med ett tillstånd för
            diskretionär portföljförvaltning från Finansinspektionen.
          </p>
        </header>

        <section className="about-story" aria-labelledby="about-story-title">
          <div className="about-section-heading">
            <p className="about-eyebrow">Från idé till idag</p>
            <h2 id="about-story-title">Vår story</h2>
          </div>
          <ol className="about-timeline" ref={timelineRef}>
            {milestones.map((milestone) => (
              <li className="about-timeline-item" key={milestone.title}>
                <span className="about-timeline-year">{milestone.year}</span>
                <span className="about-timeline-marker" aria-hidden="true" />
                <article className="about-timeline-card">
                  {milestone.image && (
                    <img
                      className="about-timeline-image"
                      src={milestone.image}
                      alt={milestone.imageAlt}
                    />
                  )}
                  <div className="about-timeline-card-content">
                    <h3>{milestone.title}</h3>
                    <p>{milestone.text}</p>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="about-strategy"
          aria-labelledby="about-strategy-title"
        >
          <div className="about-strategy-copy">
            <p className="about-eyebrow">Vårt arbetssätt</p>
            <h2 id="about-strategy-title">Vår strategi</h2>
            <p>
              Vi skapar långsiktigt värde genom att investera i bolag med stark
              tillväxtpotential och hållbar lönsamhet. Med erfarenhet, analys
              och gediget arbete bygger vi framgång för våra andelsägare.
            </p>
          </div>
        </section>

        <section
          className="about-philosophy"
          aria-labelledby="about-philosophy-title"
        >
          <div className="about-philosophy-copy">
            <p className="about-eyebrow">Så väljer vi bolag</p>
            <h2 id="about-philosophy-title">Vår investeringsfilosofi</h2>
            <p>
              Vi investerar långsiktigt och fundamentalt – alltid med målet att
              skapa värde för våra andelsägare. Vår filosofi bygger på att hitta
              bolag med stark tillväxt och hög avkastningspotential, och vi vet
              att rätt risk är en förutsättning för att nå dit.
            </p>
            <p>
              För att identifiera de bästa investeringarna kombinerar vi vår
              25-åriga erfarenhet med ett aktivt arbetssätt. Genom kontinuerliga
              möten med företagsledare, analytiker och ekonomer får vi en
              samlad bild av marknaden och kan fatta välgrundade beslut.
            </p>
            <p>
              Vi har en särskild tro på svenska småbolag. De kännetecknas ofta
              av globalt perspektiv, starkt entreprenörskap och förmågan att
              skapa uthållig lönsamhet. Som tidiga investerare vill vi vara med
              på resan när dessa bolag växer och utvecklas till morgondagens
              marknadsledare.
            </p>
          </div>
          <div className="about-philosophy-card">
            <InvestmentPhilosophyDiagram />
          </div>
        </section>

        <section
          className="about-sustainability"
          aria-labelledby="sustainability-title"
        >
          <div className="about-sustainability-heading">
            <p className="about-eyebrow">Ansvarsfullt ägande</p>
            <h2 id="sustainability-title">Hållbarhet på FE Fonder</h2>
          </div>
          <div className="about-sustainability-content">
            <p>
              Vi ser hållbarhet som en självklar och integrerad del av vårt
              arbete – både för att minska risker och för att identifiera
              framtidens vinnare. Vi är övertygade om att bolag som agerar
              ansvarsfullt står bättre rustade för långsiktig tillväxt och
              värdeskapande.
            </p>
            <p>
              FE Småbolag Sverige främjar en rad miljörelaterade och sociala
              egenskaper genom att integrera hållbarhet i den bolagsanalys som
              genomförs för de bolag som fonden avser att investera i, men har
              inga mål för hållbara investeringar.
            </p>
            <p>
              Utöver exkluderingsstrategin används indikatorer inom områdena
              växthusgasutsläpp, energieffektivitet, vatten, avfall, sociala
              och arbetsrättsliga frågor, mänskliga rättigheter, miljö,
              bekämpning av korruption och mutor för att identifiera och
              prioritera huvudsakliga negativa konsekvenser.
            </p>
            <span className="about-sustainability-document">
              Hållbarhetsrelaterade upplysningar FE Småbolag (PDF)
            </span>
          </div>
        </section>
      </div>
    </section>
  );
}

export default About;
