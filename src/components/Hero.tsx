import FEF from "../assets/FE-fonder-vert_white.svg";
import "../styles/hero.css";
import HeroActionButton from "./HeroActionButton";

function Hero() {
  return (
    <div className="hero">
      <div className="text">
        <p className="hero-description">
          Småbolag växer snabbare än storbolag – det har historien visat. Vi är
          övertygade om att trenden kommer fortsätta, och att morgondagens
          vinnare redan idag finns bland småbolagen.
        </p>
        <p className="question">Tror du också på småbolagens kraft?</p>
        <p className="welcome">Välkommen till FE Fonder!</p>

        <div className="hero-call-to-action">
          <HeroActionButton text="FE Select" />
          <HeroActionButton text="FE Småbolag Sverige" />
        </div>
      </div>
      <img className="logo" src={FEF} alt="FE Fonder" />
    </div>
  );
}

export default Hero;
