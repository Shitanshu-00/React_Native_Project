import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Image,
  Dimensions,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {AllStyles, fonts, modal} from '../Components/Styles';
import Button from '../Components/Button';
import axios from 'axios';
import {resendEmailOtp, userSignupSendEmailOTP, verifyUserEmailOtp} from '../Utils/Apis';

const {height, width} = Dimensions.get('screen');

export default function OtpScreen(props) {
  const n1 = useRef();
  const n2 = useRef();
  const n3 = useRef();
  const n4 = useRef();
  const [v1, setV1] = useState('');
  const [v2, setV2] = useState('');
  const [v3, setV3] = useState('');
  const [v4, setV4] = useState('');
  const [count, setCount] = useState(60);
  const [error, setError] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  // const [empty, setEmpty] = useState(false);

  const email = props.route.params.mail;
  const token = props.route.params.token;

  const resendOtp = () => {
    axios({
      method: 'post',
      url: resendEmailOtp,
      data: {
        email: email,
      },
    })
      .then(response => {
       if(response.status == 200){
        setCount(60);
       }
      })
      .catch(error => {
        console.log(email);
      });
  };

  const verifyEmailOTP = () => {
    axios({
      method: 'patch',
      url: verifyUserEmailOtp,
      data: {
        email: email,
        otp: v1 + v2 + v3 + v4,
      },
    })
      .then(response => {
        if(response.status == 200){
        setModalVisible(true);
        setTimeout(() => {
          setModalVisible(false);
          {
            token
              ? props.navigation.navigate('ResetPass')
              : props.navigation.replace('Main');
          }
        }, 2000);
      }
      })
      .catch(error => {
        console.log(error);
        setError(true);
        [setV1(''), setV2(''), setV3(''), setV4('')];
      });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (count == 0) {
        clearInterval(interval);
      } else {
        setCount(count - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [count]);

  {
  }
  

  return (
    <View style={AllStyles.container}>
      <View
        style={[AllStyles.container2, {flex: 1, alignItems:'center', justifyContent:'center'}]}>
        <Text
          style={[
            fonts.robotoBold,
            {
              textAlign: 'center',
              marginTop: height * 0.05,
              fontSize: height * 0.03,
            },
          ]}>
          OTP Verification
        </Text>
        <Text
          style={[
            fonts.arial,
            {textAlign: 'center', marginTop: height * 0.016},
          ]}>
          OTP has been sent to abc@mobiloitte.com{'\n'} Please enter the OTP.
        </Text>

        <View
          style={{
            flexDirection: 'row',
            paddingTop: '10%',
            justifyContent: 'space-between',
          }}>
          <TextInput
            style={[
              AllStyles.OtpBox,
              {borderColor: error ? '#fd2929' : '#1c1b1d'},
            ]}
            ref={n1}
            onChangeText={txt => {
              setV1(txt);
              if (txt.length >= 1) {
                n2.current.focus();
              }
            }}
            keyboardType={'numeric'}
            value={v1}
            maxLength={1}
          />
          <TextInput
            style={[
              AllStyles.OtpBox,
              {borderColor: error ? '#fd2929' : '#1c1b1d'},
            ]}
            ref={n2}
            onChangeText={txt => {
              setV2(txt);
              if (txt.length >= 1) {
                n3.current.focus();
              } else if (txt.length < 1) {
                n1.current.focus();
              }
            }}
            keyboardType={'numeric'}
            value={v2}
            maxLength={1}
          />
          <TextInput
            style={[
              AllStyles.OtpBox,
              {borderColor: error ? '#fd2929' : '#1c1b1d'},
            ]}
            ref={n3}
            onChangeText={txt => {
              setV3(txt);
              if (txt.length >= 1) {
                n4.current.focus();
              } else if (txt.length < 1) {
                n2.current.focus();
              }
            }}
            keyboardType={'numeric'}
            value={v3}
            maxLength={1}
          />
          <TextInput
            style={[
              AllStyles.OtpBox,
              {borderColor: error ? '#fd2929' : '#1c1b1d'},
            ]}
            ref={n4}
            onChangeText={txt => {
              setV4(txt);
              if (txt.length >= 1) {
                n4.current.focus();
              } else if (txt.length < 1) {
                n3.current.focus();
              }
            }}
            keyboardType={'numeric'}
            value={v4}
            maxLength={1}
          />



        </View>
        {error ? (
          <Text style={[fonts.errors, {paddingTop: '4%', marginLeft: -width * 0.42}]}>
            Please enter a valid OTP
          </Text>
        ) : null}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '14%',
          }}>
          {count !== 0 ? (
            <Text style={[fonts.roboto, {fontSize: height * 0.016}]}>
              Resend code in <Text style={{color: '#e73725'}}>{count} </Text>s
            </Text>
          ) : (
            <Text style={[fonts.roboto, {fontSize: height * 0.016}]}>
              Incase you didn't receive OTP ?{' '}
              <Text
                style={{color: '#e73725'}}
                onPress={() => [resendOtp(), setError(false)]}>
                Resend OTP
              </Text>
            </Text>
          )}
        </View>

        <Button
          title={'VERIFY OTP'}
          bgColor={
            v1 !== '' && v2 !== '' && v3 !== '' && v4 !== ''
              ? '#E73725'
              : '#696969'
          }
          top ={height*0.03}
          disable={
            v1 !== '' && v2 !== '' && v3 !== '' && v4 !== '' ? false : true
          }
          onClick={() => verifyEmailOTP()}
        />

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
                  <Text style={fonts.arial}>
                    OTP has been verified successfully.
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
