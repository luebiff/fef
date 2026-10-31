import "../styles/whyUsCharts.css";

const sectors = [
  { name: "Metaller", percentage: 3, color: "#08c2e8" },
  { name: "Skog", percentage: 3, color: "#2476b8" },
  { name: "Bygg", percentage: 3, color: "#a7a7a7" },
  { name: "Fastighet", percentage: 17, color: "#f9ab08" },
  { name: "Industri", percentage: 25, color: "#0797ce" },
  { name: "Konsument", percentage: 16, color: "#43d830" },
  { name: "Hälsovård", percentage: 12, color: "#1a3b91" },
  { name: "Investmentbolag", percentage: 6, color: "#f0e500" },
  { name: "Finansiella tjänster", percentage: 5, color: "#ad315c" },
  { name: "Teknologi", percentage: 6, color: "#547e4d" },
  { name: "Tjänstebolag", percentage: 6, color: "#64a7a3" },
];

function getSectorSlices() {
  const total = sectors.reduce((sum, sector) => sum + sector.percentage, 0);
  let currentAngle = -Math.PI / 2;

  return sectors.map((sector) => {
    const angle = (sector.percentage / total) * Math.PI * 2;
    const nextAngle = currentAngle + angle;
    const startX = 230 + Math.cos(currentAngle) * 160;
    const startY = 230 + Math.sin(currentAngle) * 160;
    const endX = 230 + Math.cos(nextAngle) * 160;
    const endY = 230 + Math.sin(nextAngle) * 160;
    const path = [
      "M 230 230",
      `L ${startX} ${startY}`,
      `A 160 160 0 ${angle > Math.PI ? 1 : 0} 1 ${endX} ${endY}`,
      "Z",
    ].join(" ");

    currentAngle = nextAngle;

    return { ...sector, path };
  });
}

const sectorSlices = getSectorSlices();

function SmallCapSectorChart() {
  return (
    <figure className="why-us-chart why-us-sector-chart">
      <figcaption className="why-us-sector-chart-title">
        Sektorer Carnegie Småbolagsindex
      </figcaption>
      <ul className="why-us-sector-legend" aria-label="Sektorer">
        {sectors.map((sector) => (
          <li className="why-us-sector-legend-item" key={sector.name}>
            <span
              className="why-us-sector-swatch"
              style={{ backgroundColor: sector.color }}
              aria-hidden="true"
            />
            <span>
              {sector.name} {sector.percentage}%
            </span>
          </li>
        ))}
      </ul>
      <svg
        className="why-us-sector-pie"
        viewBox="0 0 460 460"
        role="img"
        aria-labelledby="sector-chart-title sector-chart-description"
      >
        <title id="sector-chart-title">Sektorer i Carnegie Småbolagsindex</title>
        <desc id="sector-chart-description">
          Cirkeldiagram över elva sektorer med industri, konsument och
          fastigheter som de största.
        </desc>
        {sectorSlices.map((sector) => (
          <path
            key={sector.name}
            d={sector.path}
            fill={sector.color}
            stroke="#fff"
            strokeWidth="1"
          />
        ))}
      </svg>
    </figure>
  );
}

export default SmallCapSectorChart;
