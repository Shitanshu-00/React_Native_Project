import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('screen');

//<---------------------- ALL STYLES ------------------------------>

export const AllStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010',
  },
  container2: {
    backgroundColor: '#fafafa',
    flex: 1,
    marginTop: width * 0.01,
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    paddingTop: width * 0.1,
    paddingHorizontal: width * 0.08,
    alignItems :'center',
  },
  input: {
    borderWidth: 1,
    backgroundColor :'#fff',
    borderRadius: 10,
    paddingHorizontal: width * 0.05,
    marginTop: width * 0.04,
    height: width*0.14,
    width : width*0.9,
    elevation :2
  },
  btn: {
    height: width * 0.15,
    width: width * 0.9,
    backgroundColor: '#e73725',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: width * 0.03,
    elevation :5
  },
  OtpBox: {
    borderWidth: 1,
    height: height*0.08,
    width: width * 0.2,
    marginHorizontal: width * 0.01,
    borderRadius: 20,
    backgroundColor: 'rgba(28, 27, 29, 0.1)',
    fontFamily: 'Roboto',
    fontWeight:'bold',
    fontSize: height * 0.03,
    color: '#010',
    textAlign: 'center',
  },
});

//<---------------------- FONTS ------------------------------>

export const fonts = StyleSheet.create({
  robotoBold: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#010',
    fontSize: width * 0.074,
  },
  roboto: {
    fontFamily: 'Roboto',
    color: '#010',
    fontSize: width * 0.038,
  },
  Lato: {
    fontFamily: 'Lato-Regular',
    color: '#010',
    fontSize: width * 0.035,
  },
  btnTxt: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: height * 0.026,
    color: '#ffffff',
  },
  errors: {
    fontFamily: 'Roboto',
    fontSize: height * 0.015,
    color: '#fd2929',
    marginTop: -height * 0.01,
    marginBottom: -height * 0.001,
  },
  arial: {
    fontFamily: 'Arial',
    fontSize: height * 0.015,
    color: '#010',
  },
  poppins: {
    fontFamily: 'poppins',
    color: '#fff',
    fontSize: height * 0.014,
  },
  poppinsBold: {
    fontFamily: 'poppins',
    color: '#010',
    fontSize: height * 0.017,
    fontWeight: 'bold',
    left: width * 0.04,
  },
});

//<---------------------- HOMESCREEN ------------------------------>

export const Home = StyleSheet.create({
  head: {
    height: height*0.08,
    width: height,
    flexDirection: 'row',
    backgroundColor: '#010',
    alignItems: 'center',
    paddingLeft: width * 0.06,
  },
  tab:{
    width: width*0.33,
    height: height*0.05,
    backgroundColor:'#e73725',
    alignItems:'center',
    justifyContent: 'center'

  }
});

//<---------------------- MODAL ------------------------------>

export const modal = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  popUp: {
    backgroundColor: '#fff',
    height: height * 0.2,
    width: width * 0.8,
    borderRadius: 24,
    alignItems: 'center',
  },
  img: {
    marginTop: '-18%'
  },
});

export const list = StyleSheet.create({
  box: {
    backgroundColor: '#000',
    height: height * 0.18,
    width: width * 0.6,
    marginLeft: width * 0.02,
    borderRadius: 10,
    paddingLeft: width * 0.04,
  },
});

//<---------------------- PROFILE SCREEN ------------------------------>

export const profile = StyleSheet.create({
  inputView: {
    borderWidth: 1,
    borderColor: '#515151',
    width: width * 0.9,
    borderRadius: 100,
    marginBottom: height * 0.02,
    paddingHorizontal: width * 0.05,
    color: '#fff',
  },
  inputLabel: {
    color: '#e73725',
    alignSelf: 'flex-start',
    marginLeft: width * 0.11,
    fontSize: height * 0.016,
  },
  edit: {
    color: '#e73725',
    alignSelf: 'flex-end',
    fontSize: height * 0.016,
    marginRight: width * 0.1,
    marginTop: -height * 0.06,
    marginBottom: height * 0.026,
  },
  calendar: {
    tintColor: '#fff',
    height: height * 0.02,
    width: width * 0.045,
    marginLeft: width * 0.8,
    marginTop: -height * 0.06,
    marginBottom: height * 0.03,
  },
});


export const main = StyleSheet.create({
  head :{
    alignItems :'center',
    paddingLeft : width*0.04,
    marginTop : height*0.02,
    columnGap : width*0.025,
    borderBottomWidth : 1,
    borderBottomColor :'#e73725',
    paddingBottom : height*0.02
  },
  logo:{
    tintColor :'#fff',
    height : height*0.02,
    width : height*0.02
  },
  sec2 :{
    flexDirection :'row',
    alignItems :'center',
    justifyContent:'center',
    columnGap : width*0.02
  }
})

export const styles = StyleSheet.create({
  boxView: {
    height: height * 0.16,
    backgroundColor: '#010',
    width: width * 0.9,
    borderRadius: 10,
    paddingHorizontal: width * 0.04,
    paddingVertical : height*0.012
  },
});
