import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {AllStyles, fonts, profile} from '../Components/Styles';
import Button from '../Components/Button';
import DatePicker from '../Components/DatePicker';

const {height, width} = Dimensions.get('screen');

export default function Profile(props) {
  return (
    <View style={AllStyles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: height * 0.012,
        }}>
        <TouchableOpacity
          style={{marginLeft: width * 0.05}}
          onPress={() => props.navigation.goBack()}>
          <Image source={require('../Images/Vector.png')} />
        </TouchableOpacity>

        <Text
          style={[
            fonts.robotoBold,
            {color: '#fff', marginLeft: width * 0.34, fontSize: height * 0.03},
          ]}>
          Profile
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: height * 0.03,
        }}>
        <Image source={require('../Images/Logos/Profile.png')} />
      </View>
      <ScrollView>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: height * 0.02,
            marginBottom: height * 0.04,
          }}>
          <Text style={[fonts.roboto, profile.inputLabel]}>Name*</Text>
          <TextInput style={profile.inputView} editable={false} />

          <Text style={[fonts.roboto, profile.inputLabel]}>Email*</Text>
          <TextInput style={profile.inputView} editable={false} />

          <Text style={[fonts.roboto, profile.inputLabel]}>
            Contact Number*
          </Text>
          <TextInput style={profile.inputView} editable={false} />

          <Text style={[fonts.roboto, profile.inputLabel]}>Date of birth</Text>
         <DatePicker disable={true} />

          <Text style={[fonts.roboto, profile.inputLabel]}>Country</Text>
          <TextInput style={profile.inputView} editable={false} />

          <Text style={[fonts.roboto, profile.inputLabel]}>State</Text>
          <TextInput style={profile.inputView} editable={false} />

          <Text style={[fonts.roboto, profile.inputLabel]}>City</Text>
          <TextInput style={profile.inputView} editable={false} />

          <Button
            title={'EDIT PROFILE'}
            bgColor={'#e73725'}
            top={height * 0.024}
            onClick={() => props.navigation.navigate('UpdateProfile')}
          />
        </View>
      </ScrollView>
    </View>
  );
}
