import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native"; 

import Home from "./screens/Home";  
import Add from "./screens/Add";    
import Tabs from "./screens/Tabs";  
import Profile from "./screens/Profile";  
import Category from "./screens/Category"; 

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function MyTabs() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Create" component={Add} />
            <Tab.Screen name="Tabs" component={Tabs} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}


export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="BottomTabs" component={MyTabs} />
                <Stack.Screen 
                    name="Category" 
                    component={Category} 
                    options={{ presentation: "modal", headerShown: false }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}