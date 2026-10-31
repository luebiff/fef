import Hero from "../components/Hero";
import IntroCard from "../components/IntroCard";
import InvestCards from "../components/InvestCards";
import News from "../components/News";
import SmallCapPerformanceTable from "../components/SmallCapPerformanceTable";
import fig1 from "../assets/FE-fig-1.svg";
import fig2 from "../assets/FE-fig-2.svg";
import fig3 from "../assets/FE-fig-3.svg";

function Home() {
  return (
    <>
      <Hero />
      <IntroCard />

      <InvestCards />
      <h2>Fördelar med småbolag</h2>
      <div className="info-cards">
        <div className="glass-card info-card">
          <img className="info-card-img" src={fig1} alt="Figur 1" />
          <div>
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

        <div className="glass-card info-card">
          <img className="info-card-img" src={fig2} alt="Figur 2" />
          <div>
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
        </div>

        <div className="glass-card info-card">
          <img className="info-card-img" src={fig3} alt="Figur 3" />
          <div>
            <h3>Svenska småbolag i topp</h3>
            <p>
              Svenska småbolagsfonder har i snitt gett 12% årlig avkastning de
              senaste 25 åren. Med ”ränta-på-ränta” har det lett till hög
              avkastning mot andra fondalternativ*.
            </p>
            <SmallCapPerformanceTable />
          </div>
        </div>
      </div>

      <News />
    </>
  );
}

export default Home;
