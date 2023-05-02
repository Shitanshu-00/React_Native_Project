import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {fonts, Home} from '../../Components/Styles';
import Live from './Matches/Live';
import Upcoming from './Matches/Upcoming';
import Recent from './Matches/Recent';

const {height, width} = Dimensions.get('screen');

export default function Matches() {
  const [tab, setTab] = useState(0);

  return (
    <View style={{flex: 1}}>
      <View style={Home.head}>
        <Text
          style={[
            fonts.robotoBold,
            {
              color: '#fff',
              fontSize: height * 0.026,
              alignSelf: 'center',
            },
          ]}>
          Current Matches
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#010',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          style={[Home.tab, {backgroundColor: tab == 0 ? '#e73725' : '#010'}]}
          onPress={() => setTab(0)}>
          <Text style={[fonts.roboto, {color: '#fff'}]}>LIVE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[Home.tab, {backgroundColor: tab == 1 ? '#e73725' : '#010'}]}
          onPress={() => setTab(1)}>
          <Text style={[fonts.roboto, {color: '#fff'}]}>UPCOMING</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[Home.tab, {backgroundColor: tab == 2 ? '#e73725' : '#010'}]}
          onPress={() => setTab(2)}>
          <Text style={[fonts.roboto, {color: '#fff'}]}>RECENT</Text>
        </TouchableOpacity>
      </View>
      {
        tab == 0 ? (<Live/>) : tab == 1 ? (<Upcoming/>) : (<Recent/>)
      }
    </View>
  );
}
