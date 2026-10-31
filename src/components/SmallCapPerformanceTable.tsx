import "../styles/smallCapPerformanceTable.css";

const performanceRows = [
  ["Småbolagsfonder Sverige", "2043%", "12%"],
  ["Sverige fonder", "807%", "9%"],
  ["Norden fonder", "766%", "9%"],
  ["Global fonder", "642%", "8%"],
  ["Generationsfonder", "371%", "6%"],
  ["USA fonder", "359%", "5%"],
  ["Europa fonder", "249%", "5%"],
  ["Blandfonder (alla)", "206%", "4%"],
  ["Obligationsfonder", "102%", "3%"],
  ["Räntefonder", "59%", "2%"],
];

function SmallCapPerformanceTable() {
  return (
    <div className="performance-table-scroll">
      <table className="performance-table">
        <thead>
          <tr>
            <th scope="col">Avkastning i snitt 1999-2024</th>
            <th scope="col">Totalt</th>
            <th scope="col">Årlig</th>
          </tr>
        </thead>
        <tbody>
          {performanceRows.map(([fundType, total, annual]) => (
            <tr key={fundType}>
              <th scope="row">{fundType}</th>
              <td>{total}</td>
              <td>{annual}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>
              Källa: Fondbolagens förening / Infront - 2024/12/30
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default SmallCapPerformanceTable;
