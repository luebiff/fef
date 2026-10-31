import { useState } from "react";
import fredrikSkoglund from "../assets/fSkoglund.webp";
import boardPhoto from "../assets/team-board.png";
import PromoAside from "../components/PromoAside";
import "../styles/team.css";

type TeamSection = "fredrik" | "management" | "board";

const teamSections: { id: TeamSection; label: string }[] = [
  { id: "fredrik", label: "Fredrik Skoglund" },
  { id: "management", label: "Förvaltningsteamet" },
  { id: "board", label: "Styrelsen" },
];

function Team() {
  const [activeSection, setActiveSection] = useState<TeamSection>("fredrik");

  return (
    <main className="team-page">
      <h1 className="team-page-title">Teamet</h1>
      <div className="team-page-layout">
        <nav className="team-section-nav" aria-label="Teamsektioner">
          {teamSections.map(({ id, label }) => (
            <button
              className={`team-section-button ${activeSection === id ? "active" : ""}`}
              key={id}
              type="button"
              aria-pressed={activeSection === id}
              onClick={() => setActiveSection(id)}
            >
              {label}
            </button>
          ))}
        </nav>

        <section className="team-profile-panel" aria-live="polite">
          {activeSection === "fredrik" && (
            <article>
              <img
                className="team-profile-image"
                src={fredrikSkoglund}
                alt="Fredrik Skoglund"
              />
              <h2>Fredrik Skoglund</h2>
              <p>
                Fredrik är grundare till FE Fonder och har sedan 1998 fokuserat
                på aktier och småbolag i Norden. Han har arbetat 17 år som
                aktieanalytiker samt småbolagsstrateg och har rankats som en av
                Sveriges bästa aktieanalytiker inom sitt område under flera år.
                Fredrik har arbetat 7 år som aktieförvaltare och under de 2,5
                år som Fredrik förvaltade Länsförsäkringar Småbolagsfond var
                fonden den bästa småbolagsfonden i Sverige. Fredrik är utbildad
                civilekonom från Jönköping International Business School
                (JIBS).
              </p>
              <h3>Aktieanalytiker och småbolagsstrateg</h3>
              <p>
                Fredrik har varit på aktiemarknaden sedan 1998, med 17 år som
                aktieanalytiker och småbolagsstrateg, och som aktieförvaltare
                från 2016.
              </p>
              <p>
                – Som aktieanalytiker på en investmentbank är man specialist på
                aktier i en specifik bransch. Jobbet går ut på att följa den
                branschen och bolagen i den. Man har väldigt stor kontakt med
                bolagen och andra intressenter i branschen.
              </p>
              <p>
                – Som småbolagsstrateg går arbetet ut på att väga in
                omvärldsfaktorer och olika teman och drivkrafter, för att göra
                bedömningar av vilka sektorer och aktier som är bäst för stunden
                inom småbolagssegmentet. Detta arbete är väldigt likt en
                aktieförvaltares vardag.
              </p>
            </article>
          )}

          {activeSection === "management" && (
            <article className="team-list-panel">
              <h2>Förvaltningsteamet</h2>
              <p>
                <strong>Fredrik Skoglund</strong> – Förvaltare
              </p>
              <p>
                <strong>Gustav Davidsson</strong> – Analytiker
              </p>
            </article>
          )}

          {activeSection === "board" && (
            <article className="team-list-panel">
              <h2>Styrelsen</h2>
              <img
                className="team-board-image"
                src={boardPhoto}
                alt="FE Fonders styrelse tillsammans utomhus"
              />
              <p>
                FE Fonder har hög erfarenhet i styrelse, förvaltning och i
                övriga delar. Vi samarbetar med de bästa för att ge oss
                möjlighet att fullt ut fokusera på förvaltningen så vi kan
                skapa så bra avkastning vi kan åt andelsägarna i fonderna.
              </p>
              <p>Rätt organisation ska göra rätt saker åt spararna, helt enkelt.</p>
              <ul>
                <li>Fredrik Svederman – Ordförande</li>
                <li>Ulla Hedenström</li>
                <li>Jonas Hansson</li>
                <li>Fredrik Skoglund</li>
              </ul>
            </article>
          )}
        </section>

        <PromoAside />
      </div>

      <blockquote className="team-testimonial">
        <p>
          ”Vid aktiv förvaltning så har förvaltningsteamets kompetens och
          förmåga en mycket stor betydelse för avkastningen i fonden. Fredrik
          har en lång och relevant erfarenhet av svenska småbolag och bedöms ha
          stor potential att fortsätta överavkasta marknaden och andra
          småbolagsfonder även framöver.”
        </p>
        <cite>Avanzas ledning</cite>
      </blockquote>
    </main>
  );
}

export default Team;
