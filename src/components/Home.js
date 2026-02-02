import { Button, Pressable, StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { tailwind } from "twrnc";

const Home = ({navigation}) => {
    return (
        <View>
            <View style={tailwind('px-5 pt-5 pb-3')}>
                <Text style={tailwind('text-4xl font-bold text-black')}>Welcome back, User!</Text>
                <Text style={tailwind('text-base text-gray-500 mt-1')}>
                    Here's a summary of your expenses.
                </Text>
            </View>
            <View style={tailwind('bg-black rounded-3xl p-6 my-5 mx-5 items-center shadow-lg')}>
                <Text style={tailwind('text-base text-gray-400')}>Spent so far</Text>
                <Text style={tailwind('text-base text-gray-400')}>$ 400</Text>
            </View>

            <FlatList data={[1,2,3]} renderItem={({item}) => <ExpenseItemCard item={item}/>} 
            contentContainerStyle={{paddingBottom: 20}}
            ListEmptyComponent={<EmptyList title = "Add expense" a/>}
            
            />

        </View>
    );
};

export default Home;
const styles = StyleSheet.create({});
