import Hero from "../components/Hero";
import IntroCard from "../components/IntroCard";
import News from "../components/News";
import SmallCapPerformanceTable from "../components/SmallCapPerformanceTable";
import fig1 from "../assets/FE-fig-1.svg";
import fig2 from "../assets/FE-fig-2.svg";

function Home() {
  return (
    <>
      <Hero />
      <IntroCard />

      <section className="info-cards" aria-labelledby="info-cards-heading">
        <h2 className="info-cards-header" id="info-cards-heading">
          Fördelar med småbolag
        </h2>
        <div className="glass-card info-card">
          <div className="info-card-img-container">
            <img
              className="info-card-img"
              src={fig1}
              alt="Illustration av en stigande utveckling"
            />
          </div>
          <div className="info-card-content">
            <h3>Var med och investera från start</h3>
            <p>
              Småbolagsförvaltare kan investera tidigt och vara med på hela
              resan när bolagen växer sig större i vinster och börsvärde. Vi
              tror på att stigande vinster är det som skapar mest avkastning
              till sparare och att småbolag växer vinsterna snabbt. Addtech,
              Balder, Lagercrantz och Nibe är alla goda exempel där
              småbolagsinvesterare fått vara med på den långa resan.
            </p>
          </div>
        </div>

        <div className="glass-card info-card inverted">
          <div className="info-card-content">
            <h3>Bred bas av bolag och sektorer</h3>
            <p>
              Svenska småbolag ger en bred bas av bolag och sektorer att
              investera i. Det är en attraktiv mix av marknadsledare med höga
              inträdesbarriärer, innovativa teknik- och hälsovårdsbolag, bolag
              med skalbara digitala affärsmodeller, marknadsledare i växande
              globala nischer och bolag med en imponerande mix av organiskt
              tillväxt och förvärv.
            </p>
          </div>
          <div className="info-card-img-container">
            <img
              className="info-card-img"
              src={fig2}
              alt="Illustration av en bred bas av bolag"
            />
          </div>
        </div>
      </section>

      <section
        className="performance-section"
        aria-labelledby="performance-heading"
      >
        <div className="performance-intro">
          <p className="performance-eyebrow">Långsiktighet lönar sig</p>
          <h2 className="performance-heading" id="performance-heading">
            Svenska småbolag i topp
          </h2>
          <p className="performance-description">
            Med ränta på ränta har svenska småbolagsfonder historiskt gett stark
            avkastning över tid.
          </p>
        </div>
        <div className="performance-card">
          <SmallCapPerformanceTable />
          <p className="performance-note">
            Svenska småbolagsfonder har i snitt gett 12% årlig avkastning de
            senaste 25 åren.
          </p>
        </div>
      </section>

      <News />
    </>
  );
}

export default Home;
