import logo from "../assets/logo-white.svg";
import "../styles/promoAside.css";

function PromoAside() {
  return (
    <aside className="promo-aside">
      <img className="promo-aside-logo" src={logo} alt="FE Fonder" />
      <h2 className="promo-aside-title">INVESTERA SMART MED OSS</h2>
      <p className="promo-aside-copy">
        Låt småbolagens kraft sköta ditt sparande. FE Select och FE Småbolag
        Sverige är våra småbolagsfonder för dig om du vill spara tillsammans
        med oss.
      </p>
    </aside>
  );
}

export default PromoAside;
