import FS from "../assets/fSkoglund.webp";
import dots from "../assets/dots-horizontal.png";
import "../styles/introCard.css";

function IntroCard() {
  return (
    <div className="introCard glass-card">
      <img className="card-img" src={FS} alt="Fredrik Skoglund" />

      <div className="text">
        <p className="header">
          Fokus på <span className="header-fokus"> småbolag </span> sedan 1998
        </p>
        {/* <img className="dots" src={dots} alt="dots" /> */}
        <p className="intro-card-description">
          Jag har följt småbolag i över 25 år och sett marknadens upp- och
          nedgångar på nära håll. Min övertygelse är densamma idag som då –
          småbolag har kraften att skapa långsiktig avkastning. Därför placerar
          jag själv enbart i våra fonder.
        </p>
        <img className="dots" src={dots} alt="dots" />
        <p className="name">Fredrik skoglund</p>
      </div>
    </div>
  );
}

export default IntroCard;
