import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AllStyles, fonts, profile} from '../Components/Styles';
import {Formik} from 'formik';
import * as yup from 'yup';
import Button from '../Components/Button';
import DatePicker from '../Components/DatePicker';
import {Dropdown} from 'react-native-element-dropdown';


const data = [
  {label: 'Item 1', value: '🇺🇸'},
  {label: 'Item 2', value: '🇬🇧'},
  {label: 'Item 3', value: '🇸🇳'},
  {label: 'Item 4', value: '🇳🇵'},
  {label: 'Item 5', value: '🇮🇱'},
  {label: 'Item 6', value: '🇮🇳'},
  {label: 'Item 7', value: '🇮🇸'},
  {label: 'Item 8', value: '🇨🇷'},
];

const {height, width} = Dimensions.get('screen');


const profileValidation = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .matches(/^[\S]*$/, 'Spaces not allowed')
    .matches(/^[a-zA-Z]+$/, 'Name must contain only Alphabets')
    .min(3, 'Name should have atleast 3 characters'),

  contact: yup
    .string()
    .required()
    .matches(/^[\S]*$/, 'Spaces not allowed')
    .matches(/^[0-9]*$/, 'Enter a valid contact number')
    .min(10, 'Must be 10 digits'),

  country: yup
    .string()
    .matches(/^[\S]*$/, 'Spaces not allowed')
    .matches(/^[a-zA-Z]+$/, 'Country must contain only Alphabets')
    .min(3, 'Country should have atleast 3 characters'),

  state: yup
    .string()
    .matches(/^[\S]*$/, 'Spaces not allowed')
    .matches(/^[a-zA-Z]+$/, 'State must contain only Alphabets')
    .min(3, 'State should have atleast 3 characters'),

  city: yup
    .string()
    .matches(/^[\S]*$/, 'Spaces not allowed')
    .matches(/^[a-zA-Z]+$/, 'City must contain only Alphabets')
    .min(3, 'City should have atleast 3 characters'),
});



export default function UpdateProfile(props) {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const handleSubmit = values => {
    props.navigation.navigate('Main');
  };

 
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
            {color: '#fff', marginLeft: width * 0.3, fontSize: height * 0.03},
          ]}>
          Edit Profile
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: height * 0.03,
        }}>
        <TouchableOpacity>
          <Image source={require('../Images/Logos/Profile.png')} />
          <Image
            source={require('../Images/Logos/EditIcon.png')}
            style={{alignSelf: 'flex-end', marginTop: -height * 0.033}}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Formik
          validationSchema={profileValidation}
          initialValues={{
            name: '',
            contact: '',
            country: '',
            state: '',
            city: '',
          }}
          onSubmit={handleSubmit}>
          {({
            handleChange,
            handleSubmit,
            setFieldTouched,
            touched,
            values,
            errors,
          }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: height * 0.02,
                marginBottom: height * 0.04,
              }}>
              <Text style={[fonts.roboto, profile.inputLabel]}>Name*</Text>
              <TextInput
                style={profile.inputView}
                onChangeText={handleChange('name')}
                onBlur={() => setFieldTouched('name')}
                value={values.name}
                maxLength={15}
              />
              <Text style={[fonts.roboto, profile.edit]}>Edit</Text>
              <Text
                style={[
                  fonts.errors,
                  {alignSelf: 'flex-start', marginLeft: width * 0.1},
                ]}>
                {touched.name && errors.name}
              </Text>

              <Text style={[fonts.roboto, profile.inputLabel]}>Email*</Text>
              <TextInput style={profile.inputView} editable={false} />

              <Text style={[fonts.roboto, profile.inputLabel]}>
                Contact Number*
              </Text>
              <TextInput
                style={[profile.inputView, {paddingLeft: width * 0.2}]}
                onChangeText={handleChange('contact')}
                onBlur={() => setFieldTouched('contact')}
                value={values.contact}
                maxLength={10}
              />

              <Text style={[fonts.roboto, profile.edit]}>Edit</Text>
              <View>
                <Dropdown
                  style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  containerStyle={styles.container}
                  itemTextStyle={{color:'#fff'}}
                  data={data}
                  search
                  maxHeight={300}
                  labelField="value"
                  valueField="value"
                  placeholder={!isFocus ? '🇮🇳' : '...'}
                  searchPlaceholder="Search..."
                  value={value}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                  }}
                  renderRightIcon={() => (
                    <Image
                      source={isFocus? require('../Images/Logos/caret_up_icon.png'):require('../Images/Logos/caret_down_icon.png')}
                      style={{height: height*0.018, width: width*0.06, marginRight: width*0.38}}
                    />
                  )}
                />
              </View>

              <Text
                style={[
                  fonts.errors,
                  {alignSelf: 'flex-start', marginLeft: width * 0.1},
                ]}>
                {touched.contact && errors.contact}
              </Text>

              <Text style={[fonts.roboto, profile.inputLabel]}>
                Date of birth
              </Text>
              <DatePicker disable={false} />

              <Text style={[fonts.roboto, profile.inputLabel]}>Country</Text>
              <TextInput
                style={profile.inputView}
                onChangeText={handleChange('country')}
                onBlur={() => setFieldTouched('country')}
                value={values.country}
                maxLength={15}
              />
              <Text style={[fonts.roboto, profile.edit]}>Edit</Text>
              <Text
                style={[
                  fonts.errors,
                  {alignSelf: 'flex-start', marginLeft: width * 0.1},
                ]}>
                {touched.country && errors.country}
              </Text>

              <Text style={[fonts.roboto, profile.inputLabel]}>State</Text>
              <TextInput
                style={profile.inputView}
                onChangeText={handleChange('state')}
                onBlur={() => setFieldTouched('state')}
                value={values.state}
                maxLength={15}
              />
              <Text style={[fonts.roboto, profile.edit]}>Edit</Text>
              <Text
                style={[
                  fonts.errors,
                  {alignSelf: 'flex-start', marginLeft: width * 0.1},
                ]}>
                {touched.state && errors.state}
              </Text>

              <Text style={[fonts.roboto, profile.inputLabel]}>City</Text>
              <TextInput
                style={profile.inputView}
                onChangeText={handleChange('city')}
                onBlur={() => setFieldTouched('city')}
                value={values.city}
                maxLength={15}
              />
              <Text style={[fonts.roboto, profile.edit]}>Edit</Text>
              <Text
                style={[
                  fonts.errors,
                  {alignSelf: 'flex-start', marginLeft: width * 0.1},
                ]}>
                {touched.city && errors.city}
              </Text>

              <Button
                title={'UPDATE'}
                bgColor={'#e73725'}
                top={height * 0.024}
                onClick={handleSubmit}
              />
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
 
  dropdown: {
    height: height * 0.04,
    width : width*0.5,
    marginLeft:-width*0.25,
    marginTop :-height*0.06,
    
    
  },
  label: {
    position: 'absolute',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  selectedTextStyle: {
    fontSize: height*0.016 ,
    color:'#fff',
  },
  container:{
    borderWidth:0.5,
    borderRadius: 10,
    borderColor:'#FFFFFF',
    backgroundColor: '#8E8E8E',
    elevation: 10,
  }
});
