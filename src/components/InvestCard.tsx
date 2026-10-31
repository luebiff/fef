import "../styles/investCard.css";
import dots from "../assets/dots-horizontal.png";

type InvestCardProps = {
  title: string;
  description?: string;
  infoButtonText?: string;
  saveButtonText?: string;
};

function InvestCard({
  title,
  description,
  infoButtonText,
  saveButtonText,
}: InvestCardProps) {
  return (
    <div className="invest-card glass-card">
      <div className="invest-card-info">
        <p className="invest-card-header">{title}</p>
        <img className="dots" src={dots} alt="dots" />
        <p className="invest-card-info-description">{description}</p>
        <div className="invest-card-buttons">
          {infoButtonText && (
            <button className="invest-card-button">{infoButtonText}</button>
          )}
          <button className="invest-card-button start">{saveButtonText}</button>
        </div>
      </div>
    </div>
  );
}

export default InvestCard;
