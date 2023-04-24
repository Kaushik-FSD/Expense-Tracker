package com.expenseTracker.expensetracker.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Expense")
public class Expense {
    @Id
    private String id;
    private String title;
    private Double amount;
    private String timestamp;
    private String reason;

    public Expense() {
    }

    public Expense(String id, String title, Double amount, String timestamp, String reason) {
        this.id = id;
        this.title = title;
        this.amount = amount;
        this.timestamp = timestamp;
        this.reason = reason;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    @Override
    public String toString() {
        return "Expense{" +
                "id='" + id + '\'' +
                ", title='" + title + '\'' +
                ", amount=" + amount +
                ", timestamp='" + timestamp + '\'' +
                ", reason='" + reason + '\'' +
                '}';
    }
}
