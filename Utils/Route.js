import React from 'react';
import {StatusBar} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../Screens/SplashScreen';
import Register from '../Screens/Register';
import OtpScreen from '../Screens/OtpScreen';
import Login from '../Screens/Login';
import Main from '../Screens/Main';
import ForgotPass from '../Screens/ForgotPass';
import ResetPass from '../Screens/ResetPass';
import Terms from '../Screens/Terms';
import Privacy from '../Screens/Privacy';
import Profile from '../Screens/Profile';
import About from '../Screens/About';
import Advertise from '../Screens/Advertise';
import UpdateProfile from '../Screens/UpdateProfile';
import Tutorial from '../Screens/Tutorial';
import Dropdown from '../Components/Dropdown';
import DatePicker from '../Components/DatePicker';
import Test from '../Components/Test';


const Stack = createNativeStackNavigator();

export default function Route() {
  return (
    <NavigationContainer>
       <StatusBar backgroundColor={'#010'}/>
      <Stack.Navigator
        initialRouteName={SplashScreen}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="ForgotPass" component={ForgotPass} />
        <Stack.Screen name="ResetPass" component={ResetPass} />
        <Stack.Screen name="Terms" component={Terms} />
        <Stack.Screen name="Privacy" component={Privacy} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Advertise" component={Advertise} />
        <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
        <Stack.Screen name="Tutorial" component={Tutorial} />
        <Stack.Screen name="Dropdown" component={Dropdown} />
        <Stack.Screen name="DatePicker" component={DatePicker} />
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
