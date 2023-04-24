#This is a CRUD Operated expense tracker to keep your income/expenses records

The data showing are dynamic.

##Technologies used:

1. Frontend - React JS
2. Backend - Spring Boot (Maven)
3. Database - MongoDB (Cloud)
4. Styling - Material UI

##The Functionalities are:

1. Read/Display all the income and expenses.
2. Create a new Income/Expense.
3. Edit the Income/Expense.
4. Delete the Income/Expense
5. Download the Income/Expense in .csv format to record.
6. Validation provided if the form is not filled.

##To run the project:

1. Clone the project.
2. Set the backend by creating a mongo Database collection at your end and configuring it in application.properties file.
3. for the frontend, use cmd 'npm install' to install node-modules.
4. use cmd 'npm start' to start the project.
5. Once the UI boots up try to add some records. (Remember to run both the server/backend and react app to keep it working)

##Front-End Routes:

1. /dashboard 
2. /income
3. /expense

##Back-End Routes:

1. /income/getIncome
2. /income/add
3. /expense/getExpense
4. /expense/add
5. /income/update/{id}
6. /expense/update/{id}
7. /income/remove/{id}
8. /expense/remove/{id}


#Happy Coding.
