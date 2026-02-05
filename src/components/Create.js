import { ScrollView, StyleSheet, Text, View, TextInput, Pressable, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { tailwind } from "twrnc";

const Create = ({ navigation, route }) => {
    const [amount, setAmount] = useState(null);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState({ title: "Select Category", icon: "🍖" });

    useEffect(() => {
        if (route.params?.category) {
            const { category } = route.params;
            setCategory(category);
            console.log("Selected category from route:", category);
        }
    }, [route.params?.category]);

    const handleAddExpense = () => {
        if (!amount || !title || category.title === "Select Category") {
            Alert.alert("Error", "Please fill in all fields and select a category.");
            return;
        }

        console.log("Expense Added:", { amount, title, category });

        Alert.alert("Success", "Expense Added Successfully!");

    
        navigation.goBack(); 
    };

    const handleCategoryInput = () => {
        console.log("Navigating to Category screen");
        navigation.navigate("Category", {
            setCategory: (selectedCategory) => setCategory(selectedCategory),
        });
    };

    return (
        <ScrollView contentContainerStyle={tailwind`p-6`}>
            <Text style={tailwind`text-2xl font-bold text-black`}>Create Expense</Text>
            <Text style={tailwind`text-base text-gray-500 mt-2 mb-8`}>
                Add your expense details below.
            </Text>

            <View style={tailwind`mb-5`}>
                <Text style={tailwind`text-lg font-semibold text-gray-700 mb-2`}>Enter Amount:</Text>
                <TextInput
                    placeholder="$0.00"
                    keyboardType="numeric"
                    style={tailwind`mt-2 p-4 border border-gray-300 rounded-lg text-lg`}
                    value={amount}
                    onChangeText={setAmount}
                />
            </View>

            <View style={tailwind`mb-5`}>
                <Text style={tailwind`text-lg font-semibold text-gray-700 mb-2`}>Title</Text>
                <TextInput
                    placeholder="What was it for?"
                    style={tailwind`mt-2 p-4 border border-gray-300 rounded-lg text-lg`}
                    value={title}
                    onChangeText={setTitle}
                />
            </View>

            <View style={tailwind`mb-5`}>
                <Text style={tailwind`text-lg font-semibold text-gray-700 mb-2`}>Category</Text>

                <Pressable
                    onPress={handleCategoryInput}
                    style={tailwind`p-4 border border-gray-300 rounded-lg`}
                >
                    <View style={tailwind`flex-row justify-between items-center`}>
                        <Text style={tailwind`text-base text-gray-500`}>{category.title}</Text>
                        <Text style={tailwind`text-xl`}>{category.icon}</Text>
                    </View>
                    <Text style={tailwind`absolute right-4 top-4 text-gray-400 text-xl`}>▼</Text>
                </Pressable>
            </View>

            <Pressable
                style={tailwind`bg-blue-500 p-4 rounded-lg mt-4`}
                onPress={handleAddExpense}
            >
                <Text style={tailwind`text-white text-center font-bold`}>Add Expense</Text>
            </Pressable>
        </ScrollView>
    );
};

export default Create;

const styles = StyleSheet.create({});