package com.expenseTracker.expensetracker.service;

import com.expenseTracker.expensetracker.entity.Expense;
import com.expenseTracker.expensetracker.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class ExpenseServiceImpl implements ExpenseService{

    @Autowired
    ExpenseRepository expenseRepository;
    @Override
    public List<Expense> getExpense() {
        return expenseRepository.findAll();
    }

    @Override
    public Expense saveExpense(Expense expense) {
        return expenseRepository.save(expense);
    }

    @Override
    public Expense updateExpense(String id, Expense expense) {
        Expense dbExpense = expenseRepository.findById(id).get();
        System.out.println(dbExpense.toString());

        if(Objects.nonNull(expense.getTitle()) &&
                !"".equalsIgnoreCase(expense.getTitle())) {
            dbExpense.setTitle(expense.getTitle());
        }

        if(Objects.nonNull(expense.getAmount()) && expense.getAmount() >= 0) {
            dbExpense.setAmount(expense.getAmount());
        }

        if(Objects.nonNull(expense.getReason()) &&
                !"".equalsIgnoreCase(expense.getReason())) {
            dbExpense.setReason(expense.getReason());
        }

        System.out.println(dbExpense);
        return expenseRepository.save(dbExpense);
    }

    @Override
    public String deleteExpense(String id) {
        try {
            expenseRepository.deleteById(id);
            return "Record successfully removed";
        }catch (Exception exception){
            return "Error while deleting record";
        }
    }
}
