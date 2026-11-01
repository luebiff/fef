import FS from "../assets/fSkoglund.webp";
import "../styles/introCard.css";

function IntroCard() {
  return (
    <section className="intro-card" aria-labelledby="intro-card-heading">
      <div className="intro-card-inner">
        <img
          src={FS}
          alt="Fredrik Skoglund"
          className="intro-card-portrait"
        />
        <div className="intro-card-content">
          <p className="intro-card-eyebrow">Fokus på småbolag sedan 1998</p>
          <h2 id="intro-card-heading">
            Småbolag har kraften att skapa långsiktig avkastning.
          </h2>
          <p className="intro-card-description">
            Jag har följt småbolag i över 25 år och sett marknadens upp- och
            nedgångar på nära håll. Min övertygelse är densamma idag som då.
            Därför placerar jag själv enbart i våra fonder.
          </p>
          <p className="intro-card-name">Fredrik Skoglund</p>
        </div>
      </div>
    </section>
  );
}

export default IntroCard;
