package com.expenseTracker.expensetracker.controller;

import com.expenseTracker.expensetracker.entity.Expense;
import com.expenseTracker.expensetracker.entity.Income;
import com.expenseTracker.expensetracker.service.ExpenseService;
import com.expenseTracker.expensetracker.service.IncomeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class ExpenseController {

    @Autowired
    IncomeService incomeService;
    @Autowired
    ExpenseService expenseService;

    private final Logger LOGGER = LoggerFactory.getLogger(ExpenseController.class);

    @GetMapping("/")
    public String hello() {
        LOGGER.info("Inside hello() function");
        return "Hello Expense Tracker";
    }

    @GetMapping("/income/getIncome")
    public List<Income> income() {
        LOGGER.info("Inside income() function");
        return incomeService.getIncome();
    }

    @PostMapping("/income/add")
    public Income addIncome(@RequestBody Income income){
        LOGGER.info("Inside addIncome() function");
        return incomeService.saveIncome(income);
    }

    @GetMapping("/expense/getExpense")
    public List<Expense> getExpense(){
        LOGGER.info("Inside getExpense() function");
        return expenseService.getExpense();
    }

    @PostMapping("/expense/add")
    public Expense addExpense(@RequestBody Expense expense){
        LOGGER.info("Inside addExpense() function");
        return expenseService.saveExpense(expense);
    }

    @PutMapping("/income/update/{id}")
    public Income updateIncome(@PathVariable("id") String id, @RequestBody Income income){
        LOGGER.info("Inside updateIncome() function");
        return incomeService.updateIncome(id, income);
    }

    @PutMapping("/expense/update/{id}")
    public Expense updateExpense(@PathVariable("id") String id, @RequestBody Expense expense){
        LOGGER.info("Inside updateExpense() function");
        return expenseService.updateExpense(id, expense);
    }

    @DeleteMapping("/income/remove/{id}")
    public String deleteIncome(@PathVariable("id") String id){
        return incomeService.deleteIncome(id);
    }

    @DeleteMapping("/expense/remove/{id}")
    public String deleteExpense(@PathVariable("id") String id){
        return expenseService.deleteExpense(id);
    }
}
