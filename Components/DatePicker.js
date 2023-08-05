import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {profile} from './Styles';


const DatePicker = ({disable}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [birthDate, setBirthDate] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () =>{
    setDatePickerVisibility(false);
  }

  const handleConfirm = value => {
    console.warn('A date has been picked: ', date);
    setBirthDate(value);
    hideDatePicker();
  };

  return (
    <View>
      <TextInput
        style={profile.inputView}
        defaultValue={birthDate.toLocaleDateString()}
        editable={false}
      />
        {isDatePickerVisible && (
        <DateTimePicker
          value={birthDate}
          mode={'date'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={true}
          onConfirm={handleConfirm}
        />
        )}
      {!isDatePickerVisible && (
      <TouchableOpacity onPress={()=>showDatePicker} disabled={disable}>
        <Image
          source={require('../Images/Logos/calendar.png')}
          style={profile.calendar}
        />
      </TouchableOpacity>)}
    </View>
  );
};

export default DatePicker;
