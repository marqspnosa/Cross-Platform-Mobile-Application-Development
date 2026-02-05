import { FlatList, StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { tailwind } from 'twrnc';

export const CATEGORIES = [
    { id: '1', name: 'Food', icon: '🍖' },
    { id: '2', name: 'Transport', icon: '🚗' },
    { id: '3', name: 'Shopping', icon: '🛍️' },
    { id: '4', name: 'Utilities', icon: '💡' },
    { id: '5', name: 'Entertainment', icon: '🎬' },
    { id: '6', name: 'Health', icon: '🏋️‍♂️' },
    { id: '7', name: 'Travel', icon: '✈️' },
    { id: '8', name: 'Education', icon: '📚' },
];

const Category = ({ navigation }) => {
    
    const handleSelectedCategory = (category) => {
        console.log("selected category", category.name);
        navigation.popTo("BottomTabs", {
            screen: "Create",
            params: { selectedCategory: category }
        });
    };

    const renderItem = ({ item }) => {
        return (
            <Pressable
                onPress={() => handleSelectedCategory(item)}
                style={tailwind('flex-1 items-center p-4 m-2 border border-gray-300 rounded-lg')}
            >
                <Text style={tailwind('text-4xl')}>{item.icon}</Text>
                <Text style={tailwind('text-lg font-semibold text-gray-700')}>{item.name}</Text>
            </Pressable>
        );
    };

    return (
        <View style={tailwind('flex-1 p-5')}>
            
            <Pressable onPress={() => navigation.goBack()}>
                <Text style={tailwind('text-lg text-gray-700')}>X</Text>
            </Pressable>

           
            <Text style={tailwind('text-xl font-bold text-gray-800 mt-4')}>Select Category</Text>
            <Text style={tailwind('text-base text-gray-500 mt-2')}>Select a category to assign to your expense</Text>

           
            <FlatList
                data={CATEGORIES}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2} 
                contentContainerStyle={tailwind('px-4 mt-4')}
            />
        </View>
    );
};

export default Category;

const styles = StyleSheet.create({});