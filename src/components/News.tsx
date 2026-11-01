import { Link } from "react-router-dom";
import { getLatestNews } from "../data/news";
import "../styles/news.css";

type NewsProps = {
  showAll?: boolean;
};

function formatNewsDate(date: string) {
  return new Intl.DateTimeFormat("sv-SE", { dateStyle: "long" }).format(
    new Date(`${date}T12:00:00`),
  );
}

function News({ showAll = false }: NewsProps) {
  const articles = getLatestNews(showAll ? undefined : 6);

  return (
    <section className="news-section" aria-labelledby="news-heading">
      {showAll ? (
        <h1 className="news-page-header" id="news-heading">
          Nyheter
        </h1>
      ) : (
        <h2 className="news-page-header" id="news-heading">
          Nyheter
        </h2>
      )}
      <div className="news-container">
        {articles.map((article) => (
          <article className="news" key={article.id}>
            <div className="news-image-container">
              {article.image ? (
                <img
                  src={article.image}
                  alt={article.imageAlt ?? ""}
                  loading="lazy"
                />
              ) : (
                <div className="news-image-placeholder" aria-hidden="true">
                  FE Fonder
                </div>
              )}
            </div>
            <h2 className="news-header">{article.title}</h2>
            <time className="news-date" dateTime={article.date}>
              {formatNewsDate(article.date)}
            </time>
            <p className="news-content">{article.summary}</p>
            {article.url && (
              <a
                className="news-button"
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Läs mer
              </a>
            )}
          </article>
        ))}
      </div>
      {!showAll && (
        <Link className="news-all-button" to="/Nyheter">
          Alla nyheter
        </Link>
      )}
    </section>
  );
}

export default News;
