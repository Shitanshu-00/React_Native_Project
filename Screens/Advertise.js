import { View, Text, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { fonts } from '../Components/Styles';

const {height, width} = Dimensions.get('screen');

export default function Advertise(props) {
  return (
    <View style={{flex: 1}}>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        top: height * 0.02,
        paddingHorizontal: width * 0.04,
      }}>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Image source={require('../Images/Logos/BackIcon.png')} />
      </TouchableOpacity>

      <Text
        style={[
          fonts.robotoBold,
          {fontSize: height * 0.026, left: width * 0.15},
        ]}>
       Advertise With Us
      </Text>
   
    </View>
    <View style={{marginTop: height * 0.04}}>
      <ScrollView>
        <Text
          style={[
            fonts.roboto,
            {marginHorizontal: width * 0.04, textAlign: 'justify'},
          ]}>
            India strolled to a nine-wicket win against Thailand in the Women's T20 Asia Cup after spinners Deepti Sharma, Sneh Rana and Rajeshwari Gayakwad shared seven wickets between them. Thailand were restricted to 37, their third-lowest total in the Asia Cup, which table-toppers India then chased down in six overs, losing just one wicket.
          </Text>

          <Text
        style={[
          fonts.robotoBold,
          {fontSize: height * 0.026, marginLeft: width * 0.05, marginTop: height*0.1},
        ]}>
     Contact Details
      </Text>
      
      <Text
          style={[
            fonts.roboto,
            { marginLeft: width*0.06, fontSize: height*0.015, marginTop: height*0.01},
          ]}>
           Email Address: abc@gmail.com {'\n'}
Phone Number: +96-84848484848484
          </Text>
      </ScrollView>
    </View>
  </View>
  )
}