import "../styles/whyUsCharts.css";

const marketCaps = [
  2000, 2800, 3500, 4200, 4800, 5500, 6200, 7000, 7500, 7800, 8000, 8500,
  9000, 10000, 12000, 14500, 16500, 19000, 21000, 34000, 31000, 27000, 24000,
  22000, 19000, 17000, 16000, 18000, 21000, 23000, 26000, 29000, 34000, 40000,
  33000, 22000, 20000, 24000, 27000, 30000, 33000, 36000, 40000, 44000, 50000,
  46000, 48000, 52000, 54000, 53000, 55000, 57000, 62000, 68000, 72000, 78000,
  85000, 78000, 81000, 86000, 90000, 95000,
];

const chart = {
  left: 58,
  top: 34,
  width: 420,
  height: 166,
  maxValue: 120000,
};

function SmallCapMarketCapChart() {
  const barWidth = chart.width / marketCaps.length;

  return (
    <figure className="why-us-chart why-us-market-cap-chart">
      <svg
        className="why-us-chart-svg"
        viewBox="0 0 520 290"
        role="img"
        aria-labelledby="market-cap-chart-title market-cap-chart-description"
      >
        <title id="market-cap-chart-title">
          Övre gränsen för börsvärdet i Carnegie Småbolagsindex
        </title>
        <desc id="market-cap-chart-description">
          Stapeldiagram som visar hur den övre gränsen i Carnegie
          Småbolagsindex har vuxit från 1985 till 2025.
        </desc>
        <text className="why-us-chart-heading" x="58" y="16">
          Upper market cap limit in the Carnegie small cap index - Sweden
        </text>
        {[0, 20000, 40000, 60000, 80000, 100000, 120000].map((value) => {
          const y =
            chart.top + chart.height - (value / chart.maxValue) * chart.height;

          return (
            <g key={value}>
              <line
                className="why-us-chart-gridline"
                x1={chart.left}
                x2={chart.left + chart.width}
                y1={y}
                y2={y}
              />
              <text
                className="why-us-chart-axis-label"
                x={chart.left - 7}
                y={y + 3}
                textAnchor="end"
              >
                {value === 0 ? "0" : value.toLocaleString("en-US")}
              </text>
            </g>
          );
        })}
        <text className="why-us-chart-unit" x={chart.left} y={chart.top - 5}>
          SEK m
        </text>
        {marketCaps.map((value, index) => {
          const barHeight = (value / chart.maxValue) * chart.height;
          const x = chart.left + index * barWidth;
          const year = 1985 + index;

          return (
            <g key={year}>
              <rect
                className="why-us-market-cap-bar"
                x={x}
                y={chart.top + chart.height - barHeight}
                width={Math.max(1, barWidth - 0.6)}
                height={barHeight}
              />
              <text
                className="why-us-chart-year"
                transform={`translate(${x + barWidth / 2} ${chart.top + chart.height + 8}) rotate(-90)`}
                textAnchor="end"
              >
                {year}
              </text>
            </g>
          );
        })}
        <line
          className="why-us-chart-source-line"
          x1={chart.left}
          x2={chart.left + chart.width}
          y1="268"
          y2="268"
        />
        <text className="why-us-chart-source" x="478" y="282" textAnchor="end">
          Source: SIX, Carnegie Research
        </text>
      </svg>
    </figure>
  );
}

export default SmallCapMarketCapChart;
