import React, { createContext, useContext, useState } from "react";
import { getCategoryColor, getDate, getId } from "../helpers";

export const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {
    const [expenses, setExpenses] = useState([]); 

 
    const addExpense = (expense) => {
        const newExpense = {
            id: getId(), 
            title: expense.title, 
            amount: expense.amount, 
            category: expense.category.name, 
            date: getDate(new Date()), 
            color: getCategoryColor(expense.category.name), 
            icon: expense.category.icon, 
        };

      
        setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
    };

    return (
        <ExpenseContext.Provider value={{ expenses, addExpense }}>
            {children} 
        </ExpenseContext.Provider>
    );
}