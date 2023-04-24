import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import DisplayDetails from "./DisplayDetails";

export default function Income() {
  const type = "INCOME";
  const { income, setIncome, incomeList, setIncomeList, error, setError } =
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

  const addIncome = () => {
    (income.id =
      incomeList.length === 0
        ? 1
        : parseInt(incomeList[incomeList.length - 1].id) + 1),
      (income.title = titleValue);
    income.reason = reasonValue;
    income.amount = amountValue;
    income.timestamp = new Date().toISOString().slice(0, 10);

    if (isEmpty(titleValue) || amountValue === 0 || isEmpty(reasonValue)) {
      setError(true);
    } else {
      setError(false);
      insertIncomeInList(income);
    }
  };

  function insertIncomeInList(newIncome) {
    fetch("http://localhost:8080/income/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newIncome),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .then((res) => setIncome(res))
      .catch((error) => console.error(error));
  }

  async function fetchIncome() {
    try {
      const response = await fetch("http://localhost:8080/income/getIncome");
      const datas = await response.json();
      setIncomeList(datas);
    } catch (e) {
      console.log(e);
    }
  }

  function deleteIncome(id) {
    fetch("http://localhost:8080/income/remove/" + id, {
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
  /*
  function editIncome(incomeObj) {
    console.log("EDIT");
    fetch("https://example.com/api/resource/123", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // data to send in request 
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update resource");
        }
        // handle successful response here
      })
      .catch((error) => {
        console.error("Error updating resource:", error);
      });
  }
  */

  useEffect(() => {
    fetchIncome();
  }, [income, response]);

  return (
    <div>
      <DisplayDetails
        changeTitle={changeTitle}
        changeAmount={changeAmount}
        changeReason={changeReason}
        addData={addIncome}
        listData={incomeList}
        type={type}
        isError={error}
        deleteItem={deleteIncome}
      />
    </div>
  );
}
