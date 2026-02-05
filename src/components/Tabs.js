
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


function HomeScreen() {
    return (
        <View style={styles.screen}>
            <Text>Home Screen</Text>
        </View>
    );
}

function ProfileScreen() {
    return (
        <View style={styles.screen}>
            <Text>Profile Screen</Text>
        </View>
    );
}


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false, 
                    tabBarActiveTintColor: 'tomato', 
                    tabBarInactiveTintColor: 'gray', 
                }}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Tabs;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});