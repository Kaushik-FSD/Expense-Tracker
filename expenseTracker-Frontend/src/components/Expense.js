import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import DisplayDetails from "./DisplayDetails";
import CsvDownload from "./CsvDownload";

export default function Expense() {
  const type = "EXPENSE";
  const { expense, setExpense, expenseList, setExpenseList, error, setError } =
    useContext(AppContext);
  const [amountValue, setAmountValue] = useState(0);
  const [titleValue, setTitleValue] = useState("");
  const [reasonValue, setReasonValue] = useState("");
  const [response, setResponse] = useState("");

  const changeAmount = (e) => {
    setAmountValue(e.target.value);
  };

  const changeTitle = (e) => {
    setTitleValue(e.target.value);
  };

  const changeReason = (e) => {
    setReasonValue(e.target.value);
  };

  function isEmpty(value) {
    return (
      value == null || (typeof value === "string" && value.trim().length === 0)
    );
  }

  const addExpense = () => {
    (expense.id =
      expenseList.length === 0
        ? 1
        : parseInt(expenseList[expenseList.length - 1].id) + 1),
      (expense.title = titleValue),
      (expense.reason = reasonValue),
      (expense.amount = amountValue),
      (expense.timestamp = new Date().toISOString().slice(0, 10));
    if (isEmpty(titleValue) || amountValue === 0 || isEmpty(reasonValue)) {
      setError(true);
    } else {
      setError(false);
      insertExpenseInList(expense);
    }
  };

  function insertExpenseInList(newExpense) {
    fetch("http://localhost:8080/expense/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newExpense),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .then((res) => setExpense(res))
      .catch((error) => console.error(error));
  }

  async function fetchExpense() {
    try {
      const response = await fetch("http://localhost:8080/expense/getExpense");
      const datas = await response.json();
      setExpenseList(datas);
    } catch (e) {
      console.log(e);
    }
  }

  function deleteExpense(id) {
    fetch("http://localhost:8080/expense/remove/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to delete resource");
        } else if (res.ok) {
          setResponse(res);
        }
        // handle successful response here
      })
      .catch((error) => {
        console.error("Error deleting resource:", error);
      });
  }

  useEffect(() => {
    fetchExpense();
  }, [expense, response]);

  return (
    <div>
      <DisplayDetails
        changeTitle={changeTitle}
        changeAmount={changeAmount}
        changeReason={changeReason}
        addData={addExpense}
        listData={expenseList}
        type={type}
        isError={error}
        deleteItem={deleteExpense}
      />
    </div>
  );
}
