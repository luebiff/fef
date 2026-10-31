import { useState } from "react";
import borslunch from "../assets/borslunch-14-nov.jpg";
import borslunch2 from "../assets/borslunch-9-sep.jpg";
import "../styles/news.css";

export const News = () => {
  const [viewMore, setViewMore] = useState(false);

  return (
    <>
      <h2 className="news-page-header">Nyheter</h2>
      <div className="news-container">
        <div className="news">
          <div className="news-image-container">
            <img src={borslunch} alt="borslunch 14 november 2025" />
          </div>
          <h3 className="news-header">
            Fredrik Skoglund medverkar i Börslunch 14/11
          </h3>
          <span className="news-date">21 November 2025</span>

          <p className="news-content">
            Fredrik skoglund medverkar i Börslunch och pratar om läget för
            svenska smpbolag och djupdyker i mobilspelsbolaget MTG som enligt
            experterna är ”börsens mest missförstådda bolag”.
            <span
              className="news-link"
              style={{ display: viewMore ? "block" : "none" }}
            >
              Läs mer i artikeln nedan och se hela intervjun i Börslunch på
              Expressen TV.
            </span>
          </p>

          <button
            className="news-button"
            onClick={() => setViewMore(!viewMore)}
          >
            Läs mer
          </button>
        </div>
        <div className="news">
          <div className="news-image-container">
            <img src={borslunch2} alt="borslunch 9 september 2025" />
          </div>
          <h3 className="news-header">
            Fredrik Skoglund medverkar i Börslunch 9/9 2025
          </h3>
          <span className="news-date">21 Oktober 2025</span>

          <p className="news-content">
            Fredrik skoglund medverkar i Börslunch och pratar om de små
            marknadscyklerna som ger stor påverkan på ens avkastningen och ifall
            M&A-marknaden äntligen börjat tina upp.
          </p>
          <p
            className="news-link"
            style={{ display: viewMore ? "block" : "none" }}
          >
            <a
              href="https://efn.se/play/borslunch-9-september-2025"
              target="_blank"
              rel="noopener noreferrer"
            >
              Se sändningen från EFN play här!
            </a>
          </p>
          <button
            className="news-button"
            onClick={() => setViewMore(!viewMore)}
          >
            Läs mer
          </button>
        </div>
      </div>
    </>
  );
};

export default News;
