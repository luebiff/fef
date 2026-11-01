import logo from "../assets/FE-Fonder-Logo.svg";
import "../styles/header.css";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import useDeviceWidth from "../hooks/useDeviceWidth";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isInformationOpen, setIsInformationOpen] = useState(false);
  const [isFundsOpen, setIsFundsOpen] = useState(false);
  const [isBuyPanelOpen, setIsBuyPanelOpen] = useState(false);
  const buyButtonRef = useRef<HTMLButtonElement>(null);
  const buyPanelRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const width = useDeviceWidth();
  const isMobile = width < 768;
  const location = useLocation();
  const isInformationActive = location.pathname.startsWith("/Information");
  const isFundsActive = location.pathname.startsWith("/Fonder");

  const closeMenus = () => {
    setIsOpen(false);
    setIsInformationOpen(false);
    setIsFundsOpen(false);
  };

  const toggleByeview = () => {
    setIsBuyPanelOpen((open) => !open);
  };

  useEffect(() => {
    if (!isBuyPanelOpen) {
      return;
    }

    const buyButton = buyButtonRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsBuyPanelOpen(false);
        return;
      }

      if (event.key !== "Tab" || !buyPanelRef.current) {
        return;
      }

      const focusableElements =
        buyPanelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      buyButton?.focus();
    };
  }, [isBuyPanelOpen]);

  return (
    <>
      <header className={`nav ${!isMobile ? "nav-desktop" : ""}`}>
        <div className="test">
          <NavLink to="/" className="logo-link">
            <img className="nav-logo" src={logo} alt="FE Småbolag Logo" />
          </NavLink>
          <button
            ref={buyButtonRef}
            className="purchase-trigger"
            type="button"
            aria-expanded={isBuyPanelOpen}
            aria-controls="purchase-panel"
            onClick={toggleByeview}
          >
            Köp
          </button>
          {isMobile && (
            <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          )}
        </div>

        {isMobile && (
          <button
            className={`mobile-nav-backdrop ${isOpen ? "is-open" : ""}`}
            type="button"
            aria-label="Stäng menyn"
            tabIndex={isOpen ? 0 : -1}
            onClick={closeMenus}
          />
        )}

        <nav
          aria-label="Huvudmeny"
          id="primary-navigation"
          aria-hidden={isMobile && !isOpen}
          inert={isMobile && !isOpen}
          className={`nav-test ${isMobile ? "nav-links-mobile" : "nav-links"} 
            ${isMobile && isOpen ? "open" : ""}`}
        >
          {isMobile && (
            <button
              className="mobile-nav-close"
              type="button"
              aria-label="Stäng menyn"
              onClick={closeMenus}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          )}
          <NavLink to="/Smabolag" className="nav-link" onClick={closeMenus}>
            Varför Småbolag
          </NavLink>
          <div className={`nav-dropdown ${isFundsOpen ? "dropdown-open" : ""}`}>
            <button
              className={`nav-link nav-dropdown-toggle ${isFundsActive ? "active" : ""}`}
              type="button"
              aria-expanded={isFundsOpen}
              aria-controls="funds-submenu"
              onClick={() => setIsFundsOpen((open) => !open)}
            >
              Fonder
              <span className="nav-dropdown-chevron" aria-hidden="true" />
            </button>
            <div
              className="nav-dropdown-menu"
              id="funds-submenu"
              hidden={!isFundsOpen}
            >
              <NavLink to="fe-selec" onClick={closeMenus}>
                FE Select
              </NavLink>
              <NavLink to="fe-smabolag-sverige" onClick={closeMenus}>
                FE Småbolag Sverige
              </NavLink>
            </div>
          </div>
          <NavLink to="/Investera" className="nav-link" onClick={closeMenus}>
            Investera
          </NavLink>
          <NavLink to="/Nyheter" className="nav-link" onClick={closeMenus}>
            Nyheter
          </NavLink>
          <div
            className={`nav-dropdown ${isInformationOpen ? "dropdown-open" : ""}`}
          >
            <button
              className={`nav-link nav-dropdown-toggle ${isInformationActive ? "active" : ""}`}
              type="button"
              aria-expanded={isInformationOpen}
              aria-controls="information-submenu"
              onClick={() => setIsInformationOpen((open) => !open)}
            >
              Information
              <span className="nav-dropdown-chevron" aria-hidden="true" />
            </button>
            <div
              className="nav-dropdown-menu"
              id="information-submenu"
              hidden={!isInformationOpen}
            >
              <NavLink to="/Information/Teamet" onClick={closeMenus}>
                Teamet
              </NavLink>
              <NavLink to="/Information/Omoss" onClick={closeMenus}>
                Om oss
              </NavLink>
              <NavLink to="/Information/Samarbeten" onClick={closeMenus}>
                Samarbeten
              </NavLink>
              <NavLink to="/Information/Riskinformation" onClick={closeMenus}>
                Riskinformation
              </NavLink>
            </div>
          </div>
        </nav>
      </header>
      <div
        className={`purchase-overlay ${isBuyPanelOpen ? "is-open" : ""}`}
        aria-hidden={!isBuyPanelOpen}
      >
        <button
          className="purchase-backdrop"
          type="button"
          aria-label="Stäng köppanelen"
          tabIndex={-1}
          onClick={() => setIsBuyPanelOpen(false)}
        />
        <aside
          ref={buyPanelRef}
          className="purchase-panel"
          id="purchase-panel"
          role="dialog"
          aria-modal={isBuyPanelOpen}
          aria-labelledby="purchase-panel-title"
          aria-hidden={!isBuyPanelOpen}
        >
          <div className="purchase-panel-header">
            <div>
              <p className="purchase-panel-eyebrow">FE Fonder</p>
              <h2 id="purchase-panel-title">Välj fond</h2>
            </div>
            <button
              ref={closeButtonRef}
              className="purchase-panel-close"
              type="button"
              aria-label="Stäng"
              tabIndex={isBuyPanelOpen ? 0 : -1}
              onClick={() => setIsBuyPanelOpen(false)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="purchase-panel-content">
            <section className="purchase-fund">
              <h3>FE Select</h3>
              <p>
                FE Select är en aktivt förvaltad specialfond (hedgefond). Till
                skillnad från en vanlig fond får du här två tjänster: noggrant
                utvalda aktier och flexibel nettoexponering mot marknaden med
                målet att skapa absolut avkastning.
              </p>
              <div className="purchase-links">
                <a
                  href="https://www.avanza.se/fonder/om-fonden.html/1162342/fe-select-a"
                  target="_blank"
                  rel="noreferrer"
                >
                  Köp via Avanza
                </a>
                <a
                  href="https://www.nordnet.se/fonder/lista/fe-select-a-sek-07a06696"
                  target="_blank"
                  rel="noreferrer"
                >
                  Köp via Nordnet
                </a>
              </div>
              <NavLink
                className="purchase-fund-details"
                to="/fe-selec"
                onClick={() => setIsBuyPanelOpen(false)}
              >
                Läs mer om FE Select
              </NavLink>
            </section>

            <section className="purchase-fund">
              <h3>FE Småbolag Sverige</h3>
              <p>
                FE Småbolag Sverige är en aktivt förvaltad aktiefond som
                investerar i svenska småbolag. Som en traditionell long-only
                fond är du alltid fullt investerad på aktiemarknaden – ett
                långsiktigt sparande i småbolagens kraft.
              </p>
              <div className="purchase-links">
                <a
                  href="https://www.avanza.se/fonder/om-fonden.html/1162060/avanza-smabolag-by-skoglund"
                  target="_blank"
                  rel="noreferrer"
                >
                  Avanza Småbolag by Skoglund
                </a>
              </div>
              <NavLink
                className="purchase-fund-details"
                to="/fe-smabolag-sverige"
                onClick={() => setIsBuyPanelOpen(false)}
              >
                Läs mer om FE Småbolag Sverige
              </NavLink>
            </section>

            <p className="purchase-risk-note">
              En investering i fonder kan både öka och minska i värde. Det är
              inte säkert att du får tillbaka hela det investerade kapitalet.
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}

export default Header;
