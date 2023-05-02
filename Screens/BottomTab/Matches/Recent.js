import {
  View,
  Text,
  Dimensions,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {fonts, styles} from '../../../Components/Styles';

const {height, width} = Dimensions.get('screen');

const data = [
  {
    match: '6th Match',
    group: 'Group - A',
    stadium: 'Geelong',
    country1: '🇱🇰SL',
    country2: '🇦🇪UAE',
    score1: '152',
    wicket1: '8',
    over1: '20',
    score2: '21',
    wicket2: '4',
    over2: '5.3',
    result: 'United Arab Emirates won by 4 wickets',
  },
  {
    match: '5th Match',
    group: 'Group - A',
    stadium: 'Geelong',
    country1: '🇱🇰NAM',
    country2: '🇦🇪NED',
    score1: '121',
    wicket1: '6',
    over1: '20',
    score2: '122',
    wicket2: '5',
    over2: '20',
    result: 'Netherland won by 5 wickets',
  },
];

export default function Recent() {
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
            justifyContent: 'center',
            paddingLeft: width * 0.05,
          }}>
          <Text
            style={[fonts.roboto, {color: '#fff', fontSize: height * 0.015}]}>
            ICC MENS T20 WORLD CUP 2022
          </Text>
        </View>

        <View style={{marginTop: height * 0.01, alignItems: 'center'}}>
          <FlatList
            data={data}
            scrollEnabled={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={[styles.boxView, {marginBottom: height * 0.01}]}>
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
                        fonts.robotoBold,
                        {color: '#fff', fontSize: height * 0.018},
                      ]}>
                      {item.score1}-{item.wicket1} ({item.over1}){' '}
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
                      {item.country2}
                    </Text>
                    <Text
                      style={[
                        fonts.robotoBold,
                        {color: '#fff', fontSize: height * 0.018},
                      ]}>
                      {item.score2}-{item.wicket2} ({item.over2}){' '}
                    </Text>
                  </View>
                  <View
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text
                      style={[
                        fonts.roboto,
                        {color: '#00920F', fontSize: height * 0.012},
                      ]}>
                      {item.result}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <View>
          <Text
            style={[
              fonts.robotoBold,
              {
                fontSize: height * 0.016,
                paddingLeft: width * 0.05,
                paddingVertical: height * 0.005,
              },
            ]}>
            DOMESTIC
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
              ICC MENS T20 WORLD CUP EAST ASIA PACIFIC ...
            </Text>
          </View>

          <View style={{marginTop: height * 0.01, alignItems: 'center'}}>
            <FlatList
              data={data}
              scrollEnabled={false}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={[styles.boxView, {marginBottom: height * 0.01}]}>
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
                          fonts.robotoBold,
                          {color: '#fff', fontSize: height * 0.018},
                        ]}>
                        {item.score1}-{item.wicket1} ({item.over1}){' '}
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
                        {item.country2}
                      </Text>
                      <Text
                        style={[
                          fonts.robotoBold,
                          {color: '#fff', fontSize: height * 0.018},
                        ]}>
                        {item.score2}-{item.wicket2} ({item.over2}){' '}
                      </Text>
                    </View>
                    <View
                      style={{alignItems: 'center', justifyContent: 'center'}}>
                      <Text
                        style={[
                          fonts.roboto,
                          {color: '#00920F', fontSize: height * 0.012},
                        ]}>
                        {item.result}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>

        <View>
          <View
            style={{
              height: height * 0.05,
              backgroundColor: '#e73725',
              justifyContent: 'center',
              paddingLeft: width * 0.05,
              marginVertical: height * 0.01,
            }}>
            <Text
              style={[fonts.roboto, {color: '#fff', fontSize: height * 0.015}]}>
              ICC MENS T20 C WORLD CUP 2022
            </Text>
          </View>

          <View style={{marginTop: height * 0.01, alignItems: 'center'}}>
            <FlatList
              data={data}
              scrollEnabled={false}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={[styles.boxView, {marginBottom: height * 0.01}]}>
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
                          fonts.robotoBold,
                          {color: '#fff', fontSize: height * 0.018},
                        ]}>
                        {item.score1}-{item.wicket1} ({item.over1}){' '}
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
                        {item.country2}
                      </Text>
                      <Text
                        style={[
                          fonts.robotoBold,
                          {color: '#fff', fontSize: height * 0.018},
                        ]}>
                        {item.score2}-{item.wicket2} ({item.over2}){' '}
                      </Text>
                    </View>
                    <View
                      style={{alignItems: 'center', justifyContent: 'center'}}>
                      <Text
                        style={[
                          fonts.roboto,
                          {color: '#00920F', fontSize: height * 0.012},
                        ]}>
                        {item.result}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
