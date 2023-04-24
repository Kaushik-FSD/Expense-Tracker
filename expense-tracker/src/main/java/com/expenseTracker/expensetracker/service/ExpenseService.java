package com.expenseTracker.expensetracker.service;

import com.expenseTracker.expensetracker.entity.Expense;

import java.util.List;

public interface ExpenseService {
    List<Expense> getExpense();

    Expense saveExpense(Expense expense);

    Expense updateExpense(String id, Expense expense);

    String deleteExpense(String id);
}
