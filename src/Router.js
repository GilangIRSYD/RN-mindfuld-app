import React from 'react'
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import SplashScreen from './pages/SplashScreen';
import HomeScreen from './pages/HomeScreen';
import MindfulnessListScreen from './pages/MindfulnessListScreen';
import LogScreen from './pages/LogScreen';
import AboutScreen from './pages/AboutScreen';
import ReminderScreen from './pages/ReminderScreen';
import CreateReminderScreen from './pages/CreateReminderScreen';

const Stack = createStackNavigator()
const Router = () => {
    return (
        <Stack.Navigator initialRouteName={"SplashScreen"} screenOptions={{headerShown: false, ...TransitionPresets.SlideFromRightIOS}} >
                <Stack.Screen name={"SplashScreen"} component={SplashScreen}/>
                <Stack.Screen name={"HomeScreen"} component={HomeScreen} options={{...TransitionPresets.ScaleFromCenterAndroid}}/>       
                <Stack.Screen name={"MindfulnessListScreen"} component={MindfulnessListScreen}/>       
                <Stack.Screen name={"LogScreen"} component={LogScreen}/>       
                <Stack.Screen name={"AboutScreen"} component={AboutScreen}/>       
                <Stack.Screen name={"ReminderScreen"} component={ReminderScreen}/>       
                <Stack.Screen name={"CreateReminderScreen"} component={CreateReminderScreen}/>       
        </Stack.Navigator>
    )
}

export default Router
