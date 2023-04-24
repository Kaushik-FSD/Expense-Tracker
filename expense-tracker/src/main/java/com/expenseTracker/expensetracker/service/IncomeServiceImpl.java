package com.expenseTracker.expensetracker.service;

import com.expenseTracker.expensetracker.entity.Income;
import com.expenseTracker.expensetracker.repository.IncomeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class IncomeServiceImpl implements IncomeService {

    @Autowired
    IncomeRepository incomeRepository;
    @Override
    public List<Income> getIncome() {
        return incomeRepository.findAll();
    }

    @Override
    public Income saveIncome(Income income) {
        return incomeRepository.save(income);
    }

    @Override
    public Income updateIncome(String id, Income income) {
        Income dbIncome = incomeRepository.findById(id).get();
        System.out.println(dbIncome.toString());

        if(Objects.nonNull(income.getTitle()) &&
                !"".equalsIgnoreCase(income.getTitle())) {
            dbIncome.setTitle(income.getTitle());
        }

        if(Objects.nonNull(income.getAmount()) && income.getAmount() >= 0) {
            dbIncome.setAmount(income.getAmount());
        }

        if(Objects.nonNull(income.getReason()) &&
                !"".equalsIgnoreCase(income.getReason())) {
            dbIncome.setReason(income.getReason());
        }

        System.out.println(dbIncome);
        return incomeRepository.save(dbIncome);
    }

    @Override
    public String deleteIncome(String id) {
        try {
            incomeRepository.deleteById(id);
            return "Record successfully removed";
        }catch (Exception exception){
            return "Error while deleting record";
        }
    }
}
