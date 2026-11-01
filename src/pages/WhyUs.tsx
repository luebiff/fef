import EarningsGrowthChart from "../components/EarningsGrowthChart";
import SmallCapMarketCapChart from "../components/SmallCapMarketCapChart";
import SmallCapPerformanceTable from "../components/SmallCapPerformanceTable";
import SmallCapSectorChart from "../components/SmallCapSectorChart";
import "../styles/whyUs.css";

function WhyUs() {
  return (
    <section className="why-us-page">
      <div className="why-us-content">
        <header className="why-us-hero">
          <p className="why-us-eyebrow">Därför svenska småbolag</p>
          <h1 className="why-us-title">Var med på resan när bolag växer</h1>
          <p className="why-us-intro">
            Vi investerar i svenska småbolag med stor bredd. Här kan du läsa
            mer om vad småbolag är och vilka möjligheter de kan ge över tid.
          </p>
        </header>

        <section
          className="why-us-section why-us-performance"
          aria-labelledby="small-cap-performance-title"
        >
          <div className="why-us-section-copy">
            <p className="why-us-eyebrow">Långsiktighet lönar sig</p>
            <h2
              className="why-us-section-title"
              id="small-cap-performance-title"
            >
              Svenska småbolag i topp
            </h2>
            <p className="why-us-description">
              Svenska småbolagsfonder har i snitt gett 12% årlig avkastning de
              senaste 25 åren. Med ränta på ränta har det lett till hög
              avkastning jämfört med andra fondalternativ*.
            </p>
          </div>
          <div className="why-us-card why-us-performance-card">
            <SmallCapPerformanceTable />
          </div>
        </section>

        <section
          className="why-us-insight"
          aria-labelledby="small-cap-insight-title"
        >
          <div>
            <p className="why-us-eyebrow">Flera drivkrafter</p>
            <h2 className="why-us-section-title" id="small-cap-insight-title">
              Vad kan ligga bakom utvecklingen?
            </h2>
            <p className="why-us-description">
              Det är omöjligt att säga exakt varför småbolag har gett bra
              avkastning. Mindre bolag kan ha lättare att växa, och bland
              småbolag sker fler uppköp. Starka bolagsresor som Addtech och
              Nibe, påverkan från förvärv, större fastighetsexponering och ett
              stort intresse från sparare kan också spela in.
            </p>
          </div>
        </section>

        <section
          className="why-us-section why-us-growth"
          aria-labelledby="earnings-growth-title"
        >
          <div className="why-us-section-copy">
            <p className="why-us-eyebrow">Vinstutveckling</p>
            <h2 className="why-us-section-title" id="earnings-growth-title">
              Med småbolagen växer vinsten snabbt
            </h2>
            <p className="why-us-description">
              Vi tror att en stor del av den goda avkastningen beror på att
              vinsten i småbolagen växer snabbare över tid. Carnegie har tagit
              fram vinstutvecklingen för småbolag sedan 1996. På lång sikt fram
              till 2024 är vinsttillväxten högre för småbolag. De senaste åren
              har utvecklingen varit svagare, medan storbolagen gynnats mer av
              höjda räntor och hög inflation.
            </p>
          </div>
          <div className="why-us-card why-us-chart-card">
            <EarningsGrowthChart />
          </div>
        </section>

        <section
          className="why-us-strength"
          aria-labelledby="company-leaders-title"
        >
          <p className="why-us-eyebrow">Svenskt entreprenörskap</p>
          <h2 className="why-us-section-title" id="company-leaders-title">
            Svenska bolag och företagsledare är starka
          </h2>
          <p className="why-us-description">
            Skulle det finnas VM i företagande skulle Sverige vara i toppen.
            Svenska företagsledare är starka och vi är vana att växa våra
            företag internationellt, givet en liten hemmamarknad.
          </p>
        </section>

        <section
          className="why-us-section why-us-definition"
          aria-labelledby="small-cap-definition-title"
        >
          <div className="why-us-section-copy">
            <p className="why-us-eyebrow">En bred investeringsmöjlighet</p>
            <h2
              className="why-us-section-title"
              id="small-cap-definition-title"
            >
              Vad är småbolag?
            </h2>
            <p className="why-us-description">
              Vad ett småbolag är skiljer sig mycket åt beroende på vem man
              frågar. Här utgår vi generellt från Carnegies Småbolagsindex, som
              funnits i 25 år och använts som jämförelseindex för många
              småbolagsfonder.
            </p>
          </div>
          <div className="why-us-card why-us-chart-card">
            <SmallCapMarketCapChart />
          </div>
          <p className="why-us-description why-us-definition-detail">
            Den övre gränsen i Carnegie Småbolagsindex har förändrats över tid.
            För 25 år sedan gick definitionen upp till 30 miljarder kronor; i
            dag är gränsen nästan 100 miljarder kronor i börsvärde. Indexet
            innehåller 306 aktier, från 50 miljoner till cirka 80 miljarder
            kronor i börsvärde. Det totala börsvärdet är cirka 3 200 miljarder
            kronor, ungefär 25% av börsen. Räknar vi in aktielistorna utanför
            huvudlistan finns cirka 500 svenska bolag i storleksintervallet.
            Som jämförelse står OMX30:s 30 bolag för över 6 000 miljarder kronor
            i börsvärde.
          </p>
        </section>

        <section
          className="why-us-section why-us-sectors"
          aria-labelledby="sector-diversity-title"
        >
          <div className="why-us-section-copy">
            <p className="why-us-eyebrow">Bredd i portföljen</p>
            <h2 className="why-us-section-title" id="sector-diversity-title">
              Bred bas av sektorer och bolag
            </h2>
            <p className="why-us-description">
              Svenska småbolag ger en bred bas av bolag och sektorer att
              investera i. Här finns marknadsledare med höga
              inträdesbarriärer, innovativa teknik- och hälsovårdsbolag,
              skalbara digitala affärsmodeller, växande globala nischer och
              bolag med en imponerande mix av organisk tillväxt och förvärv.
            </p>
          </div>
          <div className="why-us-card why-us-sector-card">
            <SmallCapSectorChart />
          </div>
        </section>
      </div>
    </section>
  );
}

export default WhyUs;
