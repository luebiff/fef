import "../styles/hero.css";
import HeroActionButton from "./HeroActionButton";

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-content">
        <p className="hero-eyebrow">Fokus på småbolag sedan 1998</p>
        <h1 id="hero-heading">
          Småbolag växer snabbare än storbolag
        </h1>
        <p className="hero-description">Det har historien visat.</p>
      </div>
      <nav className="hero-call-to-action" aria-label="Våra fonder">
        <HeroActionButton text="FE Select" url="/fe-select" />
        <HeroActionButton
          text="FE Småbolag Sverige"
          url="/fe-smabolag-sverige"
          variant="secondary"
        />
      </nav>
    </section>
  );
}

export default Hero;
