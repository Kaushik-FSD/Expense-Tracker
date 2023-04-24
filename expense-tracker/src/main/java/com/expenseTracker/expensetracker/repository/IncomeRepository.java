package com.expenseTracker.expensetracker.repository;


import com.expenseTracker.expensetracker.entity.Income;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IncomeRepository extends MongoRepository<Income, String> {
}
