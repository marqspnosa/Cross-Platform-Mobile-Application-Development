import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator()

const Stack = createNativeStackNavigator();

function MyTabs() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false}}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Create" component={Add} />
            <Tab.Screen name="Tabs" component={Tabs} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}

export default function AppNavigator() {

    return (
    <Stack.Navigator>
        <Stack.Scrteen name="BottomTabs" component={MyTabs} />
        <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
    );
}