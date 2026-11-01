import { Link } from "react-router-dom";
import logo from "../assets/FE-Fonder-Logo.svg";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-main">
        <div className="site-footer-brand">
          <Link className="site-footer-logo-link" to="/" aria-label="FE Fonder – startsida">
            <img className="site-footer-logo" src={logo} alt="FE Fonder" />
          </Link>
          <p>FE Fonder AB</p>
        </div>

        <div className="site-footer-information">
          <section className="site-footer-section" aria-labelledby="footer-address">
            <h2 id="footer-address">Besök oss</h2>
            <address>
              FE Fonder AB
              <br />
              Brahegatan 20
              <br />
              114 37 Stockholm
            </address>
          </section>

          <section className="site-footer-section" aria-labelledby="footer-contact">
            <h2 id="footer-contact">Kontakt</h2>
            <p>
              Fredrik Skoglund
              <br />
              <span>Förvaltare</span>
            </p>
            <a href="mailto:kontakt@fefonder.se">kontakt@fefonder.se</a>
            <a
              className="site-footer-linkedin"
              href="https://www.linkedin.com/company/fe-fonder/home/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="FE Fonder på LinkedIn (öppnas i en ny flik)"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </section>
        </div>
      </div>

      <div className="site-footer-bottom">
        <p>© {new Date().getFullYear()} FE Fonder AB</p>
      </div>
    </footer>
  );
}