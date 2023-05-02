import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native';
import React from 'react';
import {fonts, Home, main} from '../../Components/Styles';

const {height, width} = Dimensions.get('screen');

export default function More(props) {
  return (
    <View style={{flex: 1, backgroundColor: '#1C1B1D'}}>
      <ScrollView>
        <View style={[main.head, {flexDirection: 'row'}]}>
          <Image source={require('../../Images/Logos/Dp.png')} />
          <View>
            <Text
              style={[fonts.roboto, {color: '#fff', fontSize: height * 0.016}]}>
              Mohd Umair Siddiqui
            </Text>
            <Text
              style={[fonts.roboto, {color: '#fff', fontSize: height * 0.01}]}>
              de-umair@mobiloitte.com
            </Text>
          </View>
        </View>

        <View
          style={[
            main.head,
            {alignItems: 'flex-start', rowGap: height * 0.02},
          ]}>
          <View style={main.sec2}>
            <Image
              source={require('../../Images/Logos/cricket.png')}
              style={main.logo}
            />
            <Text
              style={[fonts.roboto, {color: '#fff', fontSize: height * 0.016}]}>
              Cricket
            </Text>
          </View>

          <View style={main.sec2}>
            <Image
              source={require('../../Images/Logos/soccer-ball.png')}
              style={main.logo}
            />
            <Text
              style={[fonts.roboto, {color: '#fff', fontSize: height * 0.016}]}>
              Football
            </Text>
          </View>

          <View style={main.sec2}>
            <Image
              source={require('../../Images/Logos/horse.png')}
              style={main.logo}
            />
            <Text
              style={[fonts.roboto, {color: '#fff', fontSize: height * 0.016}]}>
              Horse Racing
            </Text>
          </View>

          <View style={main.sec2}>
            <Image
              source={require('../../Images/Logos/gamepad.png')}
              style={main.logo}
            />
            <Text
              style={[fonts.roboto, {color: '#fff', fontSize: height * 0.016}]}>
              Esport
            </Text>
          </View>
        </View>
        <View
          style={[
            main.head,
            {alignItems: 'flex-start', rowGap: height * 0.02},
          ]}>
          <Text
            style={[fonts.roboto, {color: '#fff', fontSize: height * 0.016}]} onPress={()=>props.navigation.navigate('Fantacy')}>
            Fantasy
          </Text>
          <Text
            style={[fonts.roboto, {color: '#fff', fontSize: height * 0.016}]}>
            Predictions
          </Text>
        </View>

        <View
          style={[
            main.head,
            {
              alignItems: 'flex-start',
              rowGap: height * 0.02,
              borderBottomWidth: 0,
            },
          ]}>
          <Text
            style={[fonts.roboto, {color: '#fff', fontSize: height * 0.016}]}>
            Subscription
          </Text>
          <Text
            style={[fonts.roboto, {color: '#fff', fontSize: height * 0.016}]}
            onPress={() => props.navigation.navigate('About')}>
            About Us
          </Text>
          <Text
            style={[fonts.roboto, {color: '#fff', fontSize: height * 0.016}]}>
            Contact Us
          </Text>
          <Text
            style={[fonts.roboto, {color: '#fff', fontSize: height * 0.016}]}
            onPress={() => props.navigation.navigate('Advertise')}>
            Advertise with us
          </Text>
          <Text
            style={[fonts.roboto, {color: '#fff', fontSize: height * 0.016}]}
            onPress={() => props.navigation.navigate('Privacy')}>
            Privacy policy
          </Text>
          <Text
            style={[fonts.roboto, {color: '#fff', fontSize: height * 0.016}]}>
            Logout
          </Text>
        </View>

        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={[fonts.arial, {color: '#fff', fontSize: height * 0.016}]}>
            # FOLLOW US
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            columnGap: width * 0.03,
            paddingTop: height * 0.01,
          }}>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://www.facebook.com/mobiloitte/');
            }}>
            <Image
              source={require('../../Images/Logos/facebook.png')}
              style={{height: height * 0.04, width: height * 0.04}}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://twitter.com/Mobiloitte');
            }}>
            <Image
              source={require('../../Images/Logos/twitter.png')}
              style={{height: height * 0.04, width: height * 0.04}}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://www.instagram.com/mobiloitte/');
            }}>
            <Image
              source={require('../../Images/Logos/instagram.png')}
              style={{height: height * 0.05, width: height * 0.05}}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
