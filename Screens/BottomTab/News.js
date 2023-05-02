import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {fonts, Home} from '../../Components/Styles';
import Stories from './News/Stories';
import Trending from './News/Trending';

const {height, width} = Dimensions.get('screen');

export default function News() {
  const [tab, setTab] = useState(0);

  return (
    <View style={{flex: 1}}>
      <View style={[Home.head]}>
        <Text
          style={[fonts.robotoBold, {color: '#fff', fontSize: height * 0.026}]}>
          News
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
          style={[Home.tab, {backgroundColor: tab == 0 ? '#e73725' : '#010', width: width*0.5}]}
          onPress={() => setTab(0)}>
          <Text style={[fonts.roboto, {color: '#fff'}]}>ALL STORIES</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[Home.tab, {backgroundColor: tab == 1 ? '#e73725' : '#010', width: width*0.5}]}
          onPress={() => setTab(1)}>
          <Text style={[fonts.roboto, {color: '#fff'}]}>TRENDINGS</Text>
        </TouchableOpacity>
      </View>
      {
        tab == 0 ? (<Stories/>) : (<Trending/>)
      }
    </View>
  );
}
