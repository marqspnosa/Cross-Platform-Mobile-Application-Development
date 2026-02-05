import { Button, Pressable, StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { tailwind } from "twrnc";
import EmptyList from "../components/EmptyList"; 
import ExpenseItemCard from "./ExpenseItemCard"; 


export const expensesData = [
    {
        id: '1',
        title: 'Food',
        amount: 20,
        category: 'Food',
        date: '2026-02-04',
        color: '#f87171',
        icon: '🍖🍖',
    },
    {
        id: '2',
        title: 'Transport',
        amount: 15, 
        category: 'Transport',
        date: '2026-02-03',
        color: '#34d399',
        icon: '🚗',
    },
    {
        id: '3',
        title: 'Shopping',
        amount: 50, 
        category: 'Shopping',
        date: '2026-02-02',
        color: '#60a5fa',
        icon: '🛍️',
    },
    {
        id: '4',
        title: 'Utilities',
        amount: 100,
        category: 'Utilities',
        date: '2026-02-01',
        color: '#fbbf24',
        icon: '💡',
    },
    {
        id: '5',
        title: 'Entertainment',
        amount: 30,    
        category: 'Entertainment',
        date: '2026-01-31',
        color: '#a78bfa',
        icon: '🎬',
    },
    {
        id: '6',
        title: 'Health & Fitness',
        amount: 25, 
        category: 'Health',
        date: '2026-01-30',
        color: '#f472b6',
        icon: '🏋️‍♂️' ,
    },
    {
        id: '7',
        title: 'Travel',
        amount: 200,    
        category: 'Travel',
        date: '2026-01-29',
        color: '#34d399',
        icon: '✈️',
    },
    {
        id: '8',
        title: 'Education',
        amount: 80, 
        category: 'Education',
        date: '2026-01-28',
        color: '#f59e0b',
        icon: '📚',
    }
];

const Home = ({ navigation }) => {

    
    const totalSpent = expensesData.reduce((total, expense) => total + expense.amount, 0);

    return (
        <View style={tailwind('flex-1 bg-white')}>
            <View>
               
                <View style={tailwind('px-5 pt-5 pb-3')}>
                    <Text style={tailwind('text-4xl font-bold text-black')}>Welcome back, User!</Text>
                    <Text style={tailwind('text-base text-gray-500 mt-1')}>
                        Here's a summary of your expenses.
                    </Text>
                </View>

                <View style={tailwind('bg-black rounded-3xl p-6 my-5 mx-5 items-center shadow-lg')}>
                    <Text style={tailwind('text-base text-gray-400')}>Spent so far</Text>
                    <Text style={tailwind('text-2xl font-bold text-white')}>${totalSpent}</Text>
                </View>

              
                <FlatList 
                    data={expensesData}  
                    renderItem={({ item }) => <ExpenseItemCard item={item} />} 
                    keyExtractor={(item) => item.id}  
                    contentContainerStyle={{ paddingBottom: 20 }}
                    ListEmptyComponent={<EmptyList />}  
                />
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    
});