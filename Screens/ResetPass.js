import {
  View,
  Text,
  TextInput,
  Dimensions,
} from 'react-native';
import React from 'react';
import {AllStyles, fonts} from '../Components/Styles';
import {Formik} from 'formik';
import * as yup from 'yup';
import Button from '../Components/Button';

const {height, width} = Dimensions.get('screen');

const passwordValidation = yup.object().shape({
  pass: yup
    .string()
    .required('Password is required.')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      `Please enter a password with atleast 8 characters, atleast 1 number, atleast 1 uppercase, atleast 1 lowercase and atleast 1 special character.`,
    ),
  confirmPass: yup
    .string()
    .required('Confirm Password is required.')
    .oneOf([yup.ref('pass'), null], 'Password should match the new password'),
});

export default function ResetPass(props) {
  const handleSubmit = values => {
    props.navigation.navigate('Main');
  };

  return (
    <View style={AllStyles.container}>
      <Formik
        initialValues={{pass: '', confirmPass: ''}}
        validationSchema={passwordValidation}
        onSubmit={handleSubmit}>
        {({
          handleChange,
          handleSubmit,
          setFieldTouched,
          touched,
          values,
          errors,
        }) => (
          <View style={[AllStyles.container2, {flex: 1}]}>
            <Text
              style={[
                fonts.robotoBold,
                {
                  textAlign: 'center',
                  fontSize: height * 0.026,
                  marginTop: height * 0.05,
                },
              ]}>
              Reset Password
            </Text>

            <TextInput
              style={[
                AllStyles.input,
                {
                  borderRadius: 100,
                  marginTop: height * 0.05,
                  borderColor:
                    touched.pass && errors.pass ? '#fd2929' : '#cbcbcb',
                },
              ]}
              placeholder={'Enter new password'}
              onChangeText={handleChange('pass')}
              value={values.pass}
              onBlur={() => setFieldTouched('pass')}
              maxLength={16}
            />
            <Text
              style={[
                fonts.errors,
                {
                  marginTop: height * 0.01,
                  fontSize: height * 0.011,
                  alignSelf :'flex-start',
                  marginLeft:width*0.02
                },
              ]}>
              {touched.pass && errors.pass}
            </Text>

            <TextInput
              style={[
                AllStyles.input,
                {
                  borderRadius: 100,
                  marginTop: height * 0.01,
                  borderColor:
                    touched.confirmPass && errors.confirmPass
                      ? '#fd2929'
                      : '#cbcbcb',
                },
              ]}
              placeholder={'Confirm password'}
              onChangeText={handleChange('confirmPass')}
              value={values.confirmPass}
              onBlur={() => setFieldTouched('confirmPass')}
              maxLength={16}
            />
            <Text
              style={[
                fonts.errors,
                {
                  marginTop: height * 0.01,
                  fontSize: height * 0.011,
                  alignSelf :'flex-start',
                  marginLeft : width*0.02
                },
              ]}>
              {touched.confirmPass && errors.confirmPass}
            </Text>

            <Button
              title={'RESET'}
              bgColor={'#e73725'}
              top={height * 0.04}
              onClick={handleSubmit}
            />

            <Text
              style={[
                fonts.roboto,
                {
                  textAlign: 'center',
                  fontSize: height * 0.016,
                  marginTop: height * 0.02,
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
    </View>
  );
}
