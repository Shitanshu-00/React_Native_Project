import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {AllStyles, fonts} from '../Components/Styles';
import {userSignupSendEmailOTP} from '../Utils/Apis';

const {height, width} = Dimensions.get('screen');

const baseURL = 'https://node.gflightmode.com/api';
const termApi = '/v1/static/static';

export default function Terms(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getTermsApi();
  }, []);

  const getTermsApi = () => {
    axios({
      method: 'GET',
      url: baseURL + termApi,
    })
      .then(response => {
        if (response.data.responseCode === 200) {
          setData(
            response.data.result.docs.filter(
              item => item.type == 'Privacypolicy',
            )[0].description,
          );
        }
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          top: height * 0.02,
          paddingHorizontal: width * 0.04,
        }}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
          <Image source={require('../Images/Logos/BackIcon.png')} />
        </TouchableOpacity>

        <Text
          style={[
            fonts.robotoBold,
            {fontSize: height * 0.026, left: width * 0.1},
          ]}>
          Terms and conditions
        </Text>
      </View>

      <View style={{marginTop: height * 0.04}}>
        <ScrollView>
          <Text
            style={[
              fonts.roboto,
              {marginHorizontal: width * 0.03, textAlign: 'justify'},
            ]}>
            {data}
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}
