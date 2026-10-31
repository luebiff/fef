import logo from "../assets/FE-Fonder-Logo.svg";
import "../styles/header.css";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import useDeviceWidth from "../hooks/useDeviceWidth";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isInformationOpen, setIsInformationOpen] = useState(false);
  const [isFundsOpen, setIsFundsOpen] = useState(false);
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

  return (
    <>
      <header className={`nav ${!isMobile ? "nav-desktop" : ""}`}>
        <div className="test">
          <NavLink to="/" className="logo-link">
            <img className="nav-logo" src={logo} alt="FE Småbolag Logo" />
          </NavLink>

          {isMobile && <HamburgerMenu setIsOpen={setIsOpen} />}
        </div>

        <nav
          aria-label="Huvudmeny"
          className={`nav-test ${isMobile ? "nav-links-mobile" : "nav-links"} 
            ${isMobile && isOpen ? "open" : ""}`}
        >
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
    </>
  );
}

export default Header;
