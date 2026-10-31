import "../styles/earningsGrowthChart.css";

const series = [
  {
    name: "Small Caps Sweden",
    color: "#92283d",
    values: [11, 11.5, 10.5, 6.5, 9, 10.5, 11, 8.5, 1],
  },
  {
    name: "Large Cap Sweden",
    color: "#c88880",
    values: [8.5, 7.5, 9.5, 4.5, 4.5, 6, 9, 8.5, 9],
  },
  {
    name: "MSCI Europe Small-Cap EPS",
    color: "#17417f",
    values: [0, 0, 0, 1.5, 4, 5.5, 7.5, 6.5, 4.5],
  },
];

const periods = [
  "1996-24",
  "2000-24",
  "2003-24",
  "2007-24",
  "2010-24",
  "2012-24",
  "2015-24",
  "2019-24",
  "2022-25e",
];

const chart = {
  left: 48,
  top: 38,
  width: 432,
  height: 174,
  maxValue: 12,
};

function EarningsGrowthChart() {
  const groupWidth = chart.width / periods.length;
  const barWidth = 13;
  const barGap = 1;

  return (
    <figure className="earnings-growth-chart">
      <svg
        className="earnings-growth-chart-svg"
        viewBox="0 0 520 290"
        role="img"
        aria-labelledby="earnings-chart-title earnings-chart-description"
      >
        <title id="earnings-chart-title">
          Justerad vinsttillväxt för små och stora bolag
        </title>
        <desc id="earnings-chart-description">
          Stapeldiagram som jämför årlig vinsttillväxt för svenska småbolag,
          svenska storbolag och europeiska småbolag under nio tidsperioder.
        </desc>
        <text className="earnings-chart-heading" x="48" y="17">
          Adj. Earnings growth Small &amp; Large Caps (historical aggregate)
        </text>

        {[0, 2, 4, 6, 8, 10, 12].map((value) => {
          const y =
            chart.top + chart.height - (value / chart.maxValue) * chart.height;

          return (
            <g key={value}>
              <line
                className="earnings-chart-gridline"
                x1={chart.left}
                x2={chart.left + chart.width}
                y1={y}
                y2={y}
              />
              <text className="earnings-chart-axis-label" x="34" y={y + 4}>
                {value}%
              </text>
            </g>
          );
        })}

        {periods.map((period, periodIndex) => {
          const groupStart =
            chart.left + periodIndex * groupWidth + (groupWidth - 3 * barWidth - 2 * barGap) / 2;

          return (
            <g key={period}>
              {series.map((item, seriesIndex) => {
                const value = item.values[periodIndex];
                const barHeight = (value / chart.maxValue) * chart.height;
                const x = groupStart + seriesIndex * (barWidth + barGap);
                const y = chart.top + chart.height - barHeight;

                if (value === 0) {
                  return null;
                }

                return (
                  <g key={item.name}>
                    <rect
                      x={x}
                      y={y}
                      width={barWidth}
                      height={barHeight}
                      fill={item.color}
                    />
                    <text
                      className="earnings-chart-value"
                      x={x + barWidth / 2}
                      y={y - 5}
                      textAnchor="middle"
                    >
                      {Math.round(value)}%
                    </text>
                  </g>
                );
              })}
              <text
                className="earnings-chart-period"
                x={chart.left + periodIndex * groupWidth + groupWidth / 2}
                y={chart.top + chart.height + 17}
                textAnchor="middle"
              >
                {period}
              </text>
            </g>
          );
        })}

        {series.map((item, index) => {
          const x = chart.left + index * 139;

          return (
            <g key={item.name} transform={`translate(${x}, 250)`}>
              <rect width="7" height="7" y="-7" fill={item.color} />
              <text className="earnings-chart-legend" x="10" y="0">
                {item.name}
              </text>
            </g>
          );
        })}
        <line
          className="earnings-chart-source-line"
          x1={chart.left}
          x2={chart.left + chart.width}
          y1="266"
          y2="266"
        />
        <text className="earnings-chart-source" x="478" y="281" textAnchor="end">
          Source: Carnegie Research, Factset
        </text>
      </svg>
    </figure>
  );
}

export default EarningsGrowthChart;
