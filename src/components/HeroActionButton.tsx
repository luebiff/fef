import { NavLink } from "react-router-dom";
import "../styles/heroActionButton.css";

type HeroActionButtonProps = {
  text: string;
  url: string;
  variant?: "primary" | "secondary";
};

function HeroActionButton({
  text,
  url,
  variant = "primary",
}: HeroActionButtonProps) {
  return (
    <NavLink
      className={`hero-action-button hero-action-button-${variant}`}
      to={url}
    >
      {text}
    </NavLink>
  );
}

export default HeroActionButton;
