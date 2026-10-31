import { Link } from "react-router-dom";
import "../styles/heroActionButton.css";

type HeroActionButtonProps = {
  text: string;
  buttonText?: string;
};

function HeroActionButton({ text }: HeroActionButtonProps) {
  return (
    <a className="hero-action-button glass-card" href="#">
      {text}
    </a>
  );
}

export default HeroActionButton;
