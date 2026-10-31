import "../styles/investCards.css";
import InvestCard from "../components/InvestCard";

function InvestCards() {
  return (
    <>
      <h2>Investera smart med oss</h2>
      <p>
        FE Småbolag Sverige och FE Select, är våra småbolagsfonder för dig om du
        vill spara tillsammans med oss.
      </p>
      <div className="invest-cards">
        <InvestCard
          title="FE Select"
          description="FE Select är en aktivt förvaltad specialfond (hedgefond). Till skillnad från en vanlig fond får du här två tjänster: noggrant utvalda aktier och flexibel nettoexponering mot marknaden med målet att skapa absolut avkastning."
          infoButtonText="Mer information"
          saveButtonText="Börja spara"
        />

        <InvestCard
          title="FE Småbolag Sverige"
          description="FE Småbolag Sverige är en aktivt förvaltad aktiefond som investerar i svenska småbolag. Som en traditionell long-only fond är du alltid fullt investerad på aktiemarknaden – ett långsiktigt sparande i småbolagens kraft."
          infoButtonText="Mer information"
          saveButtonText="Börja spara"
        />
      </div>
    </>
  );
}

export default InvestCards;
