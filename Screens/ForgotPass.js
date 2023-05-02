import {View, Text, TextInput, Image, Modal, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {AllStyles, fonts, modal} from '../Components/Styles';
import {Formik} from 'formik';
import * as yup from 'yup';
import Button from '../Components/Button';
import axios from 'axios';
import {resendEmailOtp} from '../Utils/Apis';

const {height, width} = Dimensions.get('screen');

const emailValidation = yup.object().shape({
  email: yup
    .string()
    .required('Email ID is required.')
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Enter a valid Email ID.',
    ),
});

export default function ForgotPass(props) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = values => {
    axios({
      method: 'patch',
      url: resendEmailOtp,
      data: {
        email: values.email,
      },
    })
      .then(response => {
        if (response.status == 200) {
          setModalVisible(true);

          setTimeout(() => {
            props.navigation.navigate('OtpScreen', {
              mail: values.email,
              token: true,
            });
          }, 2000);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View style={AllStyles.container}>
      <View style={[AllStyles.container2, {flex: 1}]}>
        <Formik
          initialValues={{email: ''}}
          validationSchema={emailValidation}
          onSubmit={handleSubmit}>
          {({handleChange, handleSubmit, values, errors}) => (
            <View>
              <Text
                style={[
                  fonts.robotoBold,
                  {
                    textAlign: 'center',
                    fontSize: height * 0.026,
                    marginTop: height * 0.05,
                  },
                ]}>
                Forgot Password?
              </Text>
              <Text
                style={[
                  fonts.arial,
                  {
                    textAlign: 'center',
                    marginTop: height * 0.018,
                    fontSize: height * 0.0136,
                  },
                ]}>
                Enter the email address associated with your account{'\n'} and
                we’ll send you a OTP to reset your password
              </Text>

              <TextInput
                style={[
                  AllStyles.input,
                  {borderRadius: 100, marginTop: height * 0.05},
                ]}
                placeholder={'Enter your email'}
                onChangeText={handleChange('email')}
                value={values.email}
                maxLength={35}
              />
              <Text
                style={[
                  fonts.errors,
                  {marginTop: height * 0.006, paddingLeft: width * 0.055},
                ]}>
                {errors.email}
              </Text>
              <Image
                source={require('../Images/Logos/email_logo_sm.png')}
                style={{
                  alignSelf: 'flex-end',
                  height : height*0.014,
                  width :width*0.04,
                  tintColor :'#777777',
                  marginRight: width * 0.05,
                  marginTop: '-18%',
                }}
              />
              <Button
                bgColor={'#e73725'}
                title={'SEND'}
                top={height*0.1}
                onClick={()=>handleSubmit()}
              />
              <Text
                style={[
                  fonts.roboto,
                  {
                    textAlign: 'center',
                    fontSize: height * 0.016,
                    marginTop: height * 0.014,
                  },
                ]}>
                Back to{' '}
                <Text
                  style={{color: '#e73725'}}
                  onPress={() => props.navigation.navigate('Login')}>
                  Login
                </Text>
              </Text>
            </View>
          )}
        </Formik>
        {
          <View style={{flex: 1}}>
            <Modal visible={modalVisible} transparent>
              <View style={modal.container}>
                <View style={modal.popUp}>
                  <Image
                    source={require('../Images/Logos/Success.png')}
                    style={modal.img}
                  />
                  <Text style={fonts.robotoBold}>Thank You!</Text>
                  <Text style={[fonts.arial, {textAlign: 'center'}]}>
                    OTP has been successfully sent to your registered email
                    address.
                  </Text>
                </View>
              </View>
            </Modal>
          </View>
        }
      </View>
    </View>
  );
}
