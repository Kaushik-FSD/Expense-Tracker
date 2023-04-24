import React, { useContext } from "react";
import { CSVLink } from "react-csv";
import { headers } from "./Dashboard";
import { AppContext } from "../App";

function CsvDownload(props) {
  const { incomeList, expenseList } = useContext(AppContext);

  const csvReport = {
    data: props.type === "INCOME" ? incomeList : expenseList,
    headers: headers,
    filename:
      props.type === "INCOME" ? "Income_Summary.csv" : "Expense_Summary.csv",
  };

  return (
    <div className="button-like">
      <CSVLink {...csvReport}>
        <span style={{ color: "white", textDecoration: "none" }}>
          EXPORT DATA
        </span>
      </CSVLink>
    </div>
  );
}

export default CsvDownload;
