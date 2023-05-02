import {View, StatusBar, Image, Dimensions, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import Button from '../Components/Button';
import Test from '../Components/Test';

const {width} = Dimensions.get('screen');

export default function SplashScreen(props) {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('Tutorial');
    }, 1000);
  }, []);
  return (
    <View style={styles.container}>
      <Button bgColor={'#e73725'} title={'NEXT'} top={width*0.01}/>
      <Image source={require('../Images/SplashLogo.png')} style={{width : width}}/>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E73725',
  }
});
