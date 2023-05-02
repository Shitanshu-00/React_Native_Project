import {
  View,
  Text,
  Dimensions,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {fonts, styles} from '../../../Components/Styles';

const {height, width} = Dimensions.get('window');

const data = [
  {
    match: '7th Match',
    group: 'Group - B',
    stadium: 'Hobart',
    country1: '🇱🇰SL',
    country2: '🇦🇪UAE',
    day: 'Tomorrow',
    time: '9:30 AM',
  },
  {
    match: '7th Match',
    group: 'Group - B',
    stadium: 'Hobart',
    country1: '🇱🇰SL',
    country2: '🇦🇪UAE',
    day: 'Tomorrow',
    time: '9:30 AM',
  },
];

export default function Upcoming() {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <Text
          style={[
            fonts.robotoBold,
            {
              fontSize: height * 0.016,
              paddingLeft: width * 0.05,
              paddingVertical: height * 0.005,
            },
          ]}>
          INTERNATIONAL
        </Text>
        <View
          style={{
            height: height * 0.05,
            backgroundColor: '#e73725',
            alignItems: 'center',
            paddingLeft: width * 0.05,
            flexDirection: 'row',
          }}>
          <Text
            style={[fonts.roboto, {color: '#fff', fontSize: height * 0.015}]}>
            ICC MENS T20 WORLD CUP 2022
          </Text>
          <Image
            source={require('../../../Images/Vector.png')}
            style={{alignSelf: 'center', transform: [{scaleX: -1}], marginLeft: width*0.35}}
          />
        </View>

        <View style={{marginTop: height * 0.01, alignItems: 'center'}}>
          <FlatList
            data={data}
            scrollEnabled={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.boxView,
                    {marginBottom: height * 0.01, height: height * 0.1},
                  ]}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={[
                        fonts.roboto,
                        {color: '#fff', fontSize: height * 0.014},
                      ]}>
                      {item.match}
                    </Text>
                    <Text
                      style={[
                        fonts.roboto,
                        {color: '#fff', fontSize: height * 0.014},
                      ]}>
                      {item.group}
                    </Text>
                    <Text
                      style={[
                        fonts.roboto,
                        {color: '#fff', fontSize: height * 0.014},
                      ]}>
                      {item.stadium}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: height * 0.02,
                    }}>
                    <Text
                      style={[
                        fonts.robotoBold,
                        {color: '#fff', fontSize: height * 0.018},
                      ]}>
                      {item.country1}
                    </Text>
                    <Text
                      style={[
                        fonts.roboto,
                        {
                          color: '#EC0000',
                          fontSize: height * 0.015,
                          marginLeft: width * 0.08,
                        },
                      ]}>
                      {item.day} - {item.time}
                    </Text>
                    <Text
                      style={[
                        fonts.robotoBold,
                        {color: '#fff', fontSize: height * 0.018},
                      ]}>
                      {item.country2}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <Text
          style={[
            fonts.robotoBold,
            {
              fontSize: height * 0.016,
              paddingLeft: width * 0.05,
              paddingVertical: height * 0.005,
            },
          ]}>
         LEAGUE
        </Text>
        <View
          style={{
            height: height * 0.05,
            backgroundColor: '#e73725',
            justifyContent: 'center',
            paddingLeft: width * 0.05,
          }}>
          <Text
            style={[fonts.roboto, {color: '#fff', fontSize: height * 0.015}]}>
           CSA T20 CHALLENGE
          </Text>
        </View>

        <View style={{marginTop: height * 0.01, alignItems: 'center'}}>
          <FlatList
            data={data}
            scrollEnabled={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.boxView,
                    {marginBottom: height * 0.01, height: height * 0.1},
                  ]}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={[
                        fonts.roboto,
                        {color: '#fff', fontSize: height * 0.014},
                      ]}>
                      {item.match}
                    </Text>
                    <Text
                      style={[
                        fonts.roboto,
                        {color: '#fff', fontSize: height * 0.014},
                      ]}>
                      {item.group}
                    </Text>
                    <Text
                      style={[
                        fonts.roboto,
                        {color: '#fff', fontSize: height * 0.014},
                      ]}>
                      {item.stadium}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: height * 0.02,
                    }}>
                    <Text
                      style={[
                        fonts.robotoBold,
                        {color: '#fff', fontSize: height * 0.018},
                      ]}>
                      {item.country1}
                    </Text>
                    <Text
                      style={[
                        fonts.roboto,
                        {
                          color: '#EC0000',
                          fontSize: height * 0.015,
                          marginLeft: width * 0.08,
                        },
                      ]}>
                      {item.day} - {item.time}
                    </Text>
                    <Text
                      style={[
                        fonts.robotoBold,
                        {color: '#fff', fontSize: height * 0.018},
                      ]}>
                      {item.country2}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
