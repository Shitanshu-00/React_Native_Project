import {View, Text, Image, Dimensions, Animated} from 'react-native';
import React, {useRef, useState} from 'react';
import {AllStyles, fonts} from '../Components/Styles';
import Button from '../Components/Button';

const {height, width} = Dimensions.get('screen');

export default function Tutorial(props) {
  const [data, setData] = useState([1, 1, 1]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef();

  return (
    <View style={{flex: 1}}>
      <Image
        source={require('../Images/background.png')}
        resizeMode={'cover'}
        style={{height: height * 0.5, width: width * 1}}
      />
      <View style={[AllStyles.container2, {marginTop: -height * 0.05}]}>
        <View style={{height: height * 0.34}}>
          <Animated.FlatList
            ref={ref}
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            onScroll={s => {
              const x = s.nativeEvent.contentOffset.x;
              setCurrentIndex((x / width).toFixed(0));
            }}
            renderItem={({item, index}) => {
              return (
                <Animated.View
                  style={{height: height * 0.35, width: width * 0.9}}>
                  <Text
                    style={[
                      fonts.Lato,
                      {
                        color: '#e73725',
                        fontWeight: 'bold',
                        fontSize: height * 0.024,
                        textAlign: 'center',
                        paddingTop: width * 0.02,
                      },
                    ]}>
                    Keep track of your sports Keep track of your sports
                  </Text>
                  <Text
                    style={[
                      fonts.roboto,
                      {
                        textAlign: 'center',
                        lineHeight: height * 0.03,
                        marginTop: height * 0.01,
                        fontSize: height * 0.016,
                      },
                    ]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                    adipiscing nibh sed dolor. Vulputate neque facilisi tortor
                    ipsum sit. Arcu nunc commodo neque neque.
                  </Text>
                </Animated.View>
              );
            }}
          />
          <Button
            bgColor={'#e73725'}
            title={'NEXT'}
            onClick={() => {
              if (currentIndex < 2) {
                setCurrentIndex(currentIndex + 1);
                ref.current.scrollToIndex({
                  animated: true,
                  index: parseInt(currentIndex) + 1,
                });
              } else {
                props.navigation.replace('Register');
                setCurrentIndex(0);
              }
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              // alignItems: 'center',
              justifyContent: 'center',
              marginTop: height * 0.02,
            }}>
            {data.map((item, index) => {
              return (
                <View
                  style={{
                    height: 8,
                    width: 8,
                    borderRadius: 4,
                    backgroundColor:
                      currentIndex == index ? '#e73725' : '#D9D9D9',
                    marginLeft: 10,
                  }}></View>
              );
            })}
          </View>
        </View>
        <Text
          style={[
            fonts.errors,
            {
              textAlign: 'center',
              marginTop: height * 0.02,
              fontSize: height * 0.02,
            },
          ]}
          onPress={() => props.navigation.replace('Register')}>
          Skip
        </Text>
      </View>
    </View>
  );
}
