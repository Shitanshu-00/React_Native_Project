import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  Modal,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React, {useState} from 'react';
import {AllStyles, fonts, modal} from '../Components/Styles';
import CheckBox from '@react-native-community/checkbox';
import {Formik} from 'formik';
import * as yup from 'yup';
import Button from '../Components/Button';
import {userSignupSendEmailOTP} from '../Utils/Apis';
import auth from '@react-native-firebase/auth';
import axios from 'axios';

const {height, width} = Dimensions.get('screen');

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

export default function Register(props) {

  const [checked, setChecked] = useState(false);
  const [visible, setVisible] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  handleSubmit = values => {
    setModalVisible(true);

  //   auth()
  // .createUserWithEmailAndPassword(email, password)
  // .then(() => {
  //   console.log('User account created & signed in!');
  //   setTimeout(() => {
  //           setModalVisible(false);
  //           props.navigation.navigate('OtpScreen', {
  //             mail: values.email,
  //             token: false,
  //           });
  //         }, 1000);
  // })
  // .catch(error => {
  //   if (error.code === 'auth/email-already-in-use') {
  //     console.log('That email address is already in use!');
  //   }

  //   if (error.code === 'auth/invalid-email') {
  //     console.log('That email address is invalid!');
  //   }
  //   Alert.alert(error.message)
  //   console.error(error);
  // });


    axios({
      method: 'post',
      url: userSignupSendEmailOTP,
      data: {
        email: values.email,
      },
    })
      .then(response => {
        setTimeout(() => {
          setModalVisible(false);
          props.navigation.navigate('OtpScreen', {
            mail: values.email,
            token: false,
          });
        }, 1000);
      })
      .catch(error => {
        // console.log(error);
      });
  };

  return (
    <View style={AllStyles.container}>
      <Image source={require('../Images/Logo.png')} style={styles.Logo} />

      <View style={AllStyles.container2}>
        <Text style={[fonts.robotoBold, {alignSelf: 'flex-start'}]}>
          REGISTER
        </Text>
        <Text style={[fonts.roboto, {alignSelf: 'flex-start'}]}>
          Create account
        </Text>

        <Formik
          validationSchema={loginSchema}
          initialValues={{email: '', password: ''}}
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
                autoCapitalize='none'
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                value={setEmail(values.email)}
                maxLength={35}
              />
              <Image
                source={require('../Images/Logos/email_logo_sm.png')}
                style={styles.inputLogo}
              />
              <Text style={fonts.errors}>{touched.email && errors.email}</Text>

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
                  style={[
                    styles.inputLogo,
                    {marginTop: width * 0.001, marginRight: width * 0.001},
                  ]}
                />
              </TouchableOpacity>
              <Text style={[fonts.errors, {marginTop: -width * 0.015}]}>
                {touched.password && errors.password}
              </Text>

              <View style={styles.checkboxView}>
                <CheckBox
                  value={checked}
                  onValueChange={setChecked}
                  tintColors={{true: '#353535', false: 'black'}}
                />
                <Text style={[fonts.Lato, {marginLeft: width * 0.005}]}>
                  By submitting this form I accept to the{' '}
                  <Text
                    style={{color: '#E73725'}}
                    onPress={() => props.navigation.navigate('Terms')}>
                    Terms & Conditions{' '}
                  </Text>
                  and <Text style={{color: '#E73725'}} onPress={()=>props.navigation.navigate('Privacy')}>Privacy Policy</Text> of
                  this platform.
                </Text>
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Button
                  bgColor={checked ? '#e73725' : '#696969'}
                  title={'REGISTER'}
                  top={width * 0.05}
                  disable={checked ? false : true}
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
              marginTop: width * 0.015,
            },
          ]}>
          OR
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            columnGap: width * 0.06,
            marginTop: width * 0.02,
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
          style={[fonts.Lato, {textAlign: 'center', marginTop: width * 0.05}]}>
          Already have an account?{' '}
          <Text
            style={{color: '#e73725', fontWeight: 'bold'}}
            onPress={() => props.navigation.navigate('Login')}>
            {' '}
            Log In
          </Text>
        </Text>
        {
          <TouchableOpacity style={{flex: 1}}>
            <Modal visible={modalVisible} transparent>
              <View style={modal.container}>
                <TouchableOpacity style={modal.popUp}>
                  <Image
                    source={require('../Images/Logos/Success.png')}
                    style={modal.img}
                  />
                  <Text style={fonts.robotoBold}>Thank You!</Text>
                  <Text style={[fonts.arial, {textAlign: 'center'}]}>
                    OTP has been successfully sent to your registered email
                    address.
                  </Text>
                </TouchableOpacity>
              </View>
            </Modal>
          </TouchableOpacity>
        }
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
    marginTop: width * 0.032,
    flexDirection: 'row',
    marginLeft: -width * 0.01,
  },
  inputLogo: {
    alignSelf: 'flex-end',
    height: width * 0.03,
    width: width * 0.05,
    tintColor: '#777777',
    marginTop: -width * 0.086,
    marginRight: width * 0.04,
    marginBottom: width * 0.08,
  },
});
