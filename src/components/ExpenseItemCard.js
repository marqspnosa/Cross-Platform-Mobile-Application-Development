import { Stylesheet, Text, View } from "react-native";
import React from "react";

const ExpenseItemCard = ({item}) => {
    return (
        <View style={tailwind('bg-white rounded-2xl p-4 mx-5 mb-3 flex-row justify-between items-center shadow-sm')}>
            <View style={tailwind('flex-row items-center')}>
                <View style={tailwind('w-12 h-12 rounded-x1 bg-gray-100 justify-center items-center mr-4')}>
                    <Text>🍖</Text>
                </View>
                <View style={tailwind('mt-1 px-2 py-1 rounded-lg self-start')}>
                    <Text style={tailwind('text-base font-bold text-gray-800')}>Food & Dining</Text>
                </View>
                <View style={tailwind('mt-1 px-2 py-1 rounded-lg self-start bg-orange-400')}>
                    <Text style={tailwind('text-sm font-semibold text-white')}>Aug 20, 2023</Text>
                </View>
            </View>
            <Text style={tailwind('text-lg font-semibold text-black')}>$50</Text>
        </View>
    );
};

export default ExpenseItemCard;
const styles = Stylesheet.create({});