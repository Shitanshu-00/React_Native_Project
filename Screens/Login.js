import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Linking,
  Dimensions,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { AllStyles, fonts } from '../Components/Styles';
import CheckBox from '@react-native-community/checkbox';
import { Formik } from 'formik';
import * as yup from 'yup';
import Button from '../Components/Button';
// import axios from 'axios';
// import { userLogin } from '../Utils/Apis';
import auth from '@react-native-firebase/auth';


const { height, width } = Dimensions.get('screen');

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email ID is required.')
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please enter valid email',
    ),
  password: yup
    .string()
    .required('Password is required.')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      `Please enter a password with atleast 8 characters, atleast 1 number, atleast 1 uppercase, atleast 1 lowercase and atleast 1 special character.`,
    ),
});

export default function Login(props) {

  const [checked, setChecked] = useState(false);
  const [visible, setVisible] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  handleSubmit = values => {

    auth().signInWithEmailAndPassword(email, password).then(() => {
      props.navigation.navigate('Main');
    }).catch(error => {
      Alert.alert(error.message)
    })

    // axios({
    //   method: 'post',
    //   url: userLogin,
    //   data: {
    //     email: values.email,
    //     password: values.password,
    //     // token : token,
    //   },
    // })
    //   .then(response => {
    //     if (response.status == 200) {
    //       props.navigation.navigate('Main');
    //     }
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };

  return (
    <View style={AllStyles.container}>
      <Image source={require('../Images/Logo.png')} style={styles.Logo} />

      <View style={AllStyles.container2}>
        <Text style={[fonts.robotoBold, { alignSelf: 'flex-start' }]}>Login</Text>
        <Text style={[fonts.roboto, { fontSize: width * 0.038, alignSelf: 'flex-start' }]}>
          Log in to your account
        </Text>

        <Formik
          validationSchema={loginSchema}
          initialValues={{ email: '', password: '' }}
          onSubmit={handleSubmit}>
          {({
            handleChange,
            handleSubmit,
            setFieldTouched,
            values,
            touched,
            errors,
          }) => (
            <View>
              <TextInput
                placeholder="Enter your email address"
                style={AllStyles.input}
                autoCapitalize ='none'
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                value={setEmail(values.email)}
                maxLength={35}
              />
              <Image
                source={require('../Images/Logos/email_logo_sm.png')}
                style={styles.inputLogo}
              />
              <Text style={[fonts.errors, { marginTop: -width * 0.015 }]}>{touched.email && errors.email}</Text>

              <TextInput
                placeholder="Enter Password"
                style={AllStyles.input}
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
                value={setPassword(values.password)}
                secureTextEntry={visible}
                maxLength={16}
              />
              <TouchableOpacity
                style={styles.inputLogo}
                onPress={() => setVisible(!visible)}>
                <Image
                  source={require('../Images/Logos/eyeLogo.png')}
                  style={[styles.inputLogo, { marginTop: width * 0.001, marginRight: width * 0.001 }]}
                />
              </TouchableOpacity>
              <Text style={[fonts.errors, { marginTop: -width * 0.015 }]}>
                {touched.password && errors.password}
              </Text>

              <View style={styles.checkboxView}>
                <CheckBox
                  value={checked}
                  onValueChange={setChecked}
                  tintColors={{ true: '#e73725', false: 'black' }}
                />
                <Text
                  style={[
                    fonts.robotoBold,
                    { fontSize: width * 0.036, marginLeft: width * 0.01 },
                  ]}>
                  Remember me
                </Text>
                <Text
                  style={[
                    fonts.robotoBold,
                    {
                      fontSize: width * 0.036,
                      color: '#e73725',
                      marginLeft: width * 0.18,
                    },
                  ]}
                  onPress={() => props.navigation.navigate('ForgotPass')}>
                  Forgot Password?
                </Text>
              </View>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Button
                  bgColor={'#e73725'}
                  title={'LOGIN'}
                  top={width * 0.03}
                  onClick={handleSubmit}
                />
              </View>
            </View>
          )}
        </Formik>
        <Text
          style={[
            fonts.roboto,
            {
              alignSelf: 'center',
              fontSize: width * 0.036,
              marginTop: width * 0.05,
            },
          ]}>
          OR
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            columnGap: width * 0.05,
            marginTop: width * 0.015,
          }}>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://google.com/')}>
            <Image source={require('../Images/Logos/Google_Logo.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://facebook.com/')}>
            <Image source={require('../Images/Logos/fb_Logo.png')} />
          </TouchableOpacity>
        </View>
        <Text
          style={[
            fonts.Lato,
            { textAlign: 'center', marginTop: width * 0.05},
          ]}>
         New User?{' '}
          <Text
            style={{ color: '#e73725', fontWeight: 'bold' }}
            onPress={() => props.navigation.navigate('Register')}>
            {' '}
            Register Yourself
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Logo: {
    height: width * 0.5,
    width: width * 0.7,
    marginTop: width * 0.05,
    alignSelf: 'center',
  },
  checkboxView: {
    marginTop: width * 0.02,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputLogo: {
    alignSelf: 'flex-end',
    height: width * 0.03,
    width: width * 0.05,
    tintColor: '#777777',
    marginTop: -width * 0.086,
    marginRight: width * 0.02,
    marginBottom: width * 0.08,
  },
});
