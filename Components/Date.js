import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Date(props) {
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  function showDatePicker() {
    setDatePicker(true);
  };
  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  };
  return (
    <View style={{ flex: 1 }}>
      <View >
        {datePicker && (
          <DateTimePicker
            value={date}
            mode={'date'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={true}
            onChange={onDateSelected}
            style={styles.datePicker}
          />
        )}
        {!datePicker && (
          <View>
            <TouchableOpacity style={styles.weight} onPress={() => { showDatePicker(); }}>
              <Image style={styles.wlogo} source={require('../Images/Logos/calendar.png')} />
              <TextInput style={styles.text} placeholder=" Date of Birth" placeholderTextColor={'grey'}>{date.toLocaleDateString()} </TextInput>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  weight: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderColor: '#ccc',
    width: 80,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10
  },
  wlogo: {
    position: 'absolute',
    width: 45,
    height: 26,
    marginLeft: 70,
    marginTop: 20,
  },
  text: {
    fontSize: 14,
    color: 'black',
    marginTop: 1,
    marginLeft: 3,
    // textAlign: 'center'
  },
});