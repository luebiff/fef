import EarningsGrowthChart from "../components/EarningsGrowthChart";
import SmallCapMarketCapChart from "../components/SmallCapMarketCapChart";
import SmallCapPerformanceTable from "../components/SmallCapPerformanceTable";
import SmallCapSectorChart from "../components/SmallCapSectorChart";
import PromoAside from "../components/PromoAside";
import "../styles/whyUs.css";

function WhyUs() {
  return (
    <section className="why-us-page">
      <div className="why-us-content">
        <h1 className="why-us-title">Vad är småbolag?</h1>
        <p className="why-us-intro">
          Vi investerar i svenska småbolag med stor bredd. Här kan du läsa mer
          om varför och vad ”småbolag” är för oss.
        </p>

        <section aria-labelledby="small-cap-performance-title">
          <h2
            className="why-us-section-title"
            id="small-cap-performance-title"
          >
            Svenska småbolag i topp
          </h2>
          <p className="why-us-description">
            Svenska småbolagsfonder har i snitt gett 12% årlig avkastning de
            senaste 25 åren. Med ”ränta-på-ränta” har det lett till hög
            avkastning mot andra fondalternativ*.
          </p>
          <SmallCapPerformanceTable />
        </section>

        <section className="why-us-follow-up">
          <p className="why-us-description">
            Det är omöjligt att säga exakt varför småbolag har gett bra
            avkastning, men att mindre bolag har ”lättare” att växa spelar in,
            det är fler uppköp bland småbolag, starka bolagsresor (tex Addtech,
            Nibe etc), mer påverkan från förvärv, mer fastighetsexponering i
            småbolag och generellt ett stort intresse från sparare kring
            småbolag.
          </p>

          <section aria-labelledby="earnings-growth-title">
            <h2
              className="why-us-section-title"
              id="earnings-growth-title"
            >
              Med småbolagen växer vinsten snabbt
            </h2>
            <p className="why-us-description">
              Vi tror att en stor del av den goda avkastningen beror på att
              vinsten i småbolagen växer snabbare över tid. I nedan diagram har
              Carnegie tagit fram vinstutvecklingen för småbolag sedan 1996.
              Som synes är vinsttillväxten högre för småbolag på lång sikt fram
              till 2024. Det är också tydligt att vinstutvecklingen varit
              svagare för småbolag de senaste åren – där det är tydligt att
              Storbolagen gynnats mer av höjda räntor och hög inflation.
            </p>
            <EarningsGrowthChart />
          </section>

          <section aria-labelledby="company-leaders-title">
            <h2
              className="why-us-section-title"
              id="company-leaders-title"
            >
              Svenska bolag och företagsledare är starka
            </h2>
            <p className="why-us-description">
              Skulle det finnas VM i företagande skulle Sverige vara i toppen.
              Svenska företagsledare är starka och vi i Sverige är vana att
              växa våra företag internationellt givet en liten hemmamarknad.
            </p>
          </section>

          <section aria-labelledby="small-cap-definition-title">
            <h2
              className="why-us-section-title"
              id="small-cap-definition-title"
            >
              Vad är småbolag?
            </h2>
            <p className="why-us-description">
              Vad ett småbolag är skiljer sig mycket åt beroende på vem man
              frågar. I ovan tabell utgår vi generellt från Carnegies
              Småbolagsindex som funnits i 25 år – och som har använts som
              jämförelseindex för många småbolagsfonder över de senaste 25
              åren.
            </p>
            <SmallCapMarketCapChart />
            <p className="why-us-description">
              Som synes i ovan bild har den övre gränsen i Carnegie
              Småbolagsindex förändrats över tid. 25 år sedan var definitionen
              av småbolag upp till 30 miljarder kronor, men idag är gränsen
              nästan 100 miljarder kronor i börsvärde. I Carnegie
              Småbolagsindex idag finns det 306 aktier, från 50 miljoner till
              det största på ca 80 mrd SEK i börsvärde, med ett totalt
              börsvärde om cirka 3,200 miljarder kronor (Ca 25% av börsen).
              Adderar vi aktielistorna utanför huvudlistan, så finns det cirka
              500 olika bolag inom detta storleksintervall att välja på bland
              svenska småbolag att investera i. Detta är en av de största
              skillnaderna jämfört med OMX30 (storbolagen), där 30 bolag står
              för ca över 6,000 miljarder kronor i börsvärde.
            </p>
          </section>

          <section aria-labelledby="sector-diversity-title">
            <h2
              className="why-us-section-title"
              id="sector-diversity-title"
            >
              Bred bas av sektorer och bolag
            </h2>
            <p className="why-us-description">
              Svenska småbolag ger en bred bas av bolag och sektorer att
              investera inom, där en attraktiv mix av marknadsledare med höga
              inträdesbarriärer, innovativa teknik- och hälsovårdsbolag, bolag
              med skalbara digitala affärsmodeller, marknadsledare i växande
              globala nischer och bolag med en imponerande mix av organiskt
              tillväxt och förvärv.
            </p>
            <SmallCapSectorChart />
          </section>
        </section>
      </div>

      <PromoAside />
    </section>
  );
}

export default WhyUs;
