import {View, Text, FlatList, Dimensions, Image} from 'react-native';
import React from 'react';
import {fonts} from '../../../Components/Styles';

const {height, width} = Dimensions.get('window');

const data = [
  {
    title: 'Harris,Redymayne star in heat’s comfortable win',
    time: '1hr ago',
    lead: 'The pair stiched an impressive opening stand of 165 to help brisbane heat down melbourne renegades by 21 runs.',
    image: require('../../../Images/story.png'),
  },
];

export default function Stories() {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <View style={{paddingHorizontal: width*0.03, paddingVertical: height*0.01, columnGap: width*0.02}}>
              <View style={{flexDirection: 'row'}}>
                <Image source={item.image}/>
                <Text style={[fonts.robotoBold, {fontSize: height * 0.016}]}>
                  {item.title}
                </Text>
              </View>
              <Text style={[fonts.robotoBold, {fontSize: height * 0.012}]}>
                  {item.time}
                </Text>
              
            </View>
          );
        }}
      />
    </View>
  );
}
