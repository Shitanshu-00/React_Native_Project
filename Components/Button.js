import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {AllStyles, fonts} from './Styles';

export default function Button({title, onClick, bgColor, top, disable}) {
  return (
    <View>
      <TouchableOpacity
        style={[AllStyles.btn, {backgroundColor: bgColor, marginTop: top}]}
        onPress={onClick}
        disabled={disable}>
        <Text style={fonts.btnTxt}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
