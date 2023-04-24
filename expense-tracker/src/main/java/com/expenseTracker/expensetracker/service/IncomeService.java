package com.expenseTracker.expensetracker.service;

import com.expenseTracker.expensetracker.entity.Income;

import java.util.List;

public interface IncomeService {
    List<Income> getIncome();

    Income saveIncome(Income income);

    Income updateIncome(String id, Income income);

    String deleteIncome(String id);
}
