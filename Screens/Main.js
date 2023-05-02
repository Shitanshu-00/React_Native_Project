import {Dimensions, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {AllStyles} from '../Components/Styles';
import HomeScreen from './BottomTab/HomeScreen';
import Matches from './BottomTab/Matches';
import Fantacy from './BottomTab/Fantacy';
import News from './BottomTab/News';
import More from './BottomTab/More';


const {height} = Dimensions.get('screen');

const Bottom = createBottomTabNavigator();

export default function Main() {
  return (
    <Bottom.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: '#010', height: height * 0.08}, tabBarActiveTintColor :'#e73725'
      }}
      initialRouteName={HomeScreen}>
      <Bottom.Screen
        name="Home"
        component={HomeScreen}
        style={AllStyles.tab}
        options={{
          tabBarIcon: tabClick => {
            return (
              <Image
                source={require('../Images/Logos/HomeIcon.png')}
                style={{tintColor: tabClick.focused ? '#e73725' : '#fdfdfd'}}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Matches"
        component={Matches}
        style={AllStyles.tab}
        options={{
          tabBarIcon: tabClick => {
            return (
              <Image
                source={require('../Images/Logos/MatchesIcon.png')}
                style={{tintColor: tabClick.focused ? '#e73725' : '#fdfdfd'}}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Fantacy"
        component={Fantacy}
        style={AllStyles.tab}
        options={{
          tabBarIcon: tabClick => {
            return (
              <Image
                source={require('../Images/Logos/FantacyIcon.png')}
                style={{tintColor: tabClick.focused ? '#e73725' : '#fdfdfd'}}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="News"
        component={News}
        style={AllStyles.tab}
        options={{
          tabBarIcon: tabClick => {
            return (
              <Image
                source={require('../Images/Logos/NewsIcon.png')}
                style={{tintColor: tabClick.focused ? '#e73725' : '#fdfdfd'}}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="More"
        component={More}
        style={AllStyles.tab}
        options={{
          tabBarIcon: tabClick => {
            return (
              <Image
                source={require('../Images/Logos/MoreIcon.png')}
                style={{tintColor: tabClick.focused ? '#e73725' : '#fdfdfd'}}
              />
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
}
