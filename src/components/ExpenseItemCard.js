import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { tailwind } from "twrnc"; 

const ExpenseItemCard = ({ item }) => {
    return (
        <View style={tailwind('bg-white rounded-2xl p-4 mx-5 mb-3 flex-row justify-between items-center shadow-sm')}>
           
            <View style={tailwind('flex-row items-center')}>
            
                <View>
                    <Text style={tailwind('text-lg font-semibold text-gray-800')}>{item.title}</Text>

                 
                    <View style={[tailwind('mt-1 px-2 py-1 rounded-lg self-start bg-gray-100'), { backgroundColor: item.color }]}>
                        <Text style={tailwind('text-xs font-bold text-gray-700')}>{item.category}</Text>
                    </View>
                </View>
            </View>

           
            <View style={tailwind('items-end')}>
                <Text style={tailwind('text-lg font-bold text-gray-800')}>${item.amount}</Text>
              
                <Text style={tailwind('text-xs text-gray-500 mt-1')}>{item.date}</Text>
            </View>
        </View>
    );
};

export default ExpenseItemCard;

const styles = StyleSheet.create({});