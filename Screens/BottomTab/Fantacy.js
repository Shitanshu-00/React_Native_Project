import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import {fonts, Home} from '../../Components/Styles';

const {height, width} = Dimensions.get('screen');

export default function Fantacy() {
  return (
    <View style={{flex: 1}}>
      <View style={[Home.head]}>
        <Text
          style={[fonts.robotoBold, {color: '#fff', fontSize: height * 0.026}]}>
          Fantasy
        </Text>
      </View>

      <View
        style={{
          alignSelf: 'center',
          backgroundColor: '#e73725',
          height: height * 0.06,
          width: width * 0.6,
          borderTopLeftRadius: 50,
          borderBottomRightRadius: 50,
          marginTop: height * 0.3,
        }}>
        <Text
          style={[
            fonts.poppinsBold,
            {
              color: '#fff',
              fontSize: height * 0.022,
              textAlign: 'center',
              marginTop: height * 0.012,
              paddingRight: width * 0.04,
            },
          ]}>
          COMING SOON!
        </Text>
      </View>
    </View>
  );
}
