import {StyleSheet, Text, View} from "react-native";
import React from "react";

const EmptyList = ({title = "No Expenses yet", message = "Add a new expense to see it in your list",}) => {
    return (
        <View style={tailwind('flex-1 justify-center items-center p-8 mt-10')}>
            <Text style={tailwind('text-6xl mb-4')}> </Text>
               
                {title || "No Expenses yet"}

            <Text style ={tailwind('text-xl font-bold text-gray-800 mb-2')}>
                {title}
                </Text>
            <Text style={tailwind('text-base')}>{message}</Text>
        </View>
    );
};

export default EmptyList;

const styles = StyleSheet.create({});