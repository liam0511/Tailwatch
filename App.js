import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Import screens from Components folder
import HomeScreen from "./Components/HomeScreen";
import LoginScreen from "./Components/LoginScreen";
import ReportScreen from "./Components/ReportScreen";
import SignUpScreen from "./Components/SignUpScreen";
import AdoptScreen from "./Components/AdoptScreen";
import LostScreen from "./Components/LostScreen";
import SettingScreen from "./Components/SettingScreen";
import NotificationScreen from "./Components/NotificationScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Report" component={ReportScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Adopt" component={AdoptScreen} />
        <Stack.Screen name="Lost" component={LostScreen} />
        <Stack.Screen name="Settings" component={SettingScreen} />
        <Stack.Screen name="Notifications" component={NotificationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
