import { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css";
import Income from "./components/Income";
import Expense from "./components/Expense";
import Dashboard from "./components/Dashboard";
import { Footer } from "./components/Footer";

export const AppContext = createContext();

export default function App() {
  const [income, setIncome] = useState({});
  const [expense, setExpense] = useState({});
  const [incomeList, setIncomeList] = useState([]);
  const [expenseList, setExpenseList] = useState([]);
  const [error, setError] = useState(false);

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          income,
          setIncome,
          expense,
          setExpense,
          incomeList,
          setIncomeList,
          expenseList,
          setExpenseList,
          error,
          setError,
        }}
      >
        <Router>
          <div className="navbar">
            <div className="header">
              <h2>Expense Tracker</h2>
            </div>
            <div>
              <Link to="/">
                <span
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  Dashboard
                </span>
              </Link>
              <Link to="/income">
                <span
                  style={{
                    color: "white",
                    textDecoration: "none",
                    paddingLeft: "15px",
                  }}
                >
                  Income
                </span>
              </Link>
              <Link to="/expense">
                <span
                  style={{
                    color: "white",
                    textDecoration: "none",
                    paddingLeft: "15px",
                    paddingRight: "15px",
                  }}
                >
                  Expense
                </span>
              </Link>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/income" element={<Income />} />
            <Route path="/expense" element={<Expense />} />
            <Route path="*" element={<h1>Page Not Found - 404 </h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
      <Footer />
    </div>
  );
}
