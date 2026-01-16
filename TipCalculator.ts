import React, { useState } from "react"; // Import React and useState hook
import { View, Text, TextInput, Button, StyleSheet } from "react-native"; // Import necessary components from react-native
import { StatusBar } from "expo-status-bar"; // Import StatusBar from expo-status-bar

export default function TipCalculator() { // Main component function
  const [bill, setBill] = useState<string>(""); // State for bill amount
  const [tipPercent, setTipPercent] = useState<number>(15); // State for tip percentage

  const billAmount = parseFloat(bill) || 0; // Convert bill to number
  const tipAmount = (billAmount * tipPercent) / 100; // Calculate tip amount
  const totalAmount = billAmount + tipAmount; // Calculate total amount

  const handleClear = (): void => { // Clear inputs
    setBill(""); // Reset bill amount
    setTipPercent(15); // Reset tip percentage
  };

  return ( 
    <View style={styles.container}>// Main view style container
      <Text style={styles.title}>Tip Calculator</Text> // Title

      <Text>Bill Amount ($)</Text> // Label for bill amount
      <TextInput // Input for bill amount
        style={styles.input} // Input style
        placeholder="Enter bill amount" // Placeholder text
        keyboardType="numeric" // Numeric keyboard
        value={bill} // Bind value to state
        onChangeText={setBill} // Update state on text change
      />

      <Text>Tip Percentage</Text> // Label for tip percentage
      <View style={styles.buttons}> // Container for tip percentage buttons
        <Button title="10%" onPress={() => setTipPercent(10)} /> // Button for 10%
        <Button title="15%" onPress={() => setTipPercent(15)} /> // Button for 15%
        <Button title="20%" onPress={() => setTipPercent(20)} /> // Button for 20%
      </View>

      <Text style={styles.result}>Tip: ${tipAmount.toFixed(2)}</Text> // Display tip amount
      <Text style={styles.result}>Total: ${totalAmount.toFixed(2)}</Text> // Display total amount

      <Button title="Clear" onPress={handleClear} /> // Clear button

      <StatusBar style="auto" /> // Status bar style
    </View>
  );
};

