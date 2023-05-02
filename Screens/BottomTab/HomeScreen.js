import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  FlatList,
  StyleSheet,
  Modal,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import {AllStyles, fonts, Home, list} from '../../Components/Styles';
import Share from 'react-native-share';

const {height, width} = Dimensions.get('window');

const HomeScreen = props => {
  const [newsModal, setNewsModal] = useState(false);

  const onShare = () => {
    const options = {
      // url : ....,
      message: 'Share',
    };
    Share.open(options);
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar
        backgroundColor={newsModal ? 'white' : 'black'}
        barStyle={newsModal ? 'dark-content' : 'light-content'}
      />
      <View style={Home.head}>
        <Image source={require('../../Images/Logo_sm.png')} />
        <TouchableOpacity>
          <Image
            source={require('../../Images/Logos/SearchIcon.png')}
            style={{marginLeft: width * 0.48}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../Images/Logos/bell-notification.png')}
            style={{marginLeft: width * 0.04}}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Profile');
          }}>
          <Image
            source={require('../../Images/Logos/ProfileLogo_sm.png')}
            style={{marginLeft: width * 0.05}}
          />
        </TouchableOpacity>

        <Text
          style={[
            fonts.poppins,
            {
              alignSelf: 'flex-end',
              marginLeft: -width * 0.09,
              fontSize: height * 0.012,
            },
          ]}>
          Hi Guest
        </Text>
      </View>
      <ScrollView>
        <View style={{marginTop: height * 0.02, marginBottom: height * 0.05}}>
          <Text style={fonts.poppinsBold}>MATCHES</Text>

          <FlatList
            data={[1, 1, 1]}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => (
              <View style={{width: width * 0.04}} />
            )}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity style={list.box}>
                  <View style={styles.boxTxt}>
                    <Image
                      source={require('../../Images/Logos/cricket.png')}
                      style={styles.boxImg}
                    />
                    <Text style={[fonts.poppins, {marginLeft: width * 0.014}]}>
                      ICC World Cup 2022
                    </Text>
                    <View style={styles.live}>
                      <Text style={fonts.poppins}>LIVE</Text>
                    </View>
                  </View>
                  <View
                    style={{flexDirection: 'row', marginTop: height * 0.022}}>
                    <Image source={require('../../Images/Logos/flagIndia.png')} />
                    <Text style={[fonts.poppins, {marginLeft: width * 0.02}]}>
                      INDIA
                    </Text>
                    <Text style={[fonts.poppins, {marginLeft: width * 0.18}]}>
                      *19/1 (1.4 ov)
                    </Text>
                  </View>
                  <View
                    style={{flexDirection: 'row', marginTop: height * 0.018}}>
                    <Image source={require('../../Images/Logos/flagSA.png')} />
                    <Text style={[fonts.poppins, {marginLeft: width * 0.02}]}>
                      SOUTH AFRICA
                    </Text>
                  </View>
                  <View
                    style={[
                      AllStyles.btn,
                      {
                        height: height * 0.028,
                        width: width * 0.52,
                        marginTop: height * 0.014,
                      },
                    ]}>
                    <Text style={[fonts.poppins, {fontSize: height * 0.011}]}>
                      IND won the toss and elected to bat
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />

          <View>
            <Image
              source={require('../../Images/Poster.png')}
              style={{
                width: width,
                height: height * 0.126,
                marginTop: height * 0.02,
              }}
            />
          </View>

          <View style={{marginTop: height * 0.02}}>
            <Text style={fonts.poppinsBold}>TRENDING VIDEOS</Text>
            <FlatList
              data={[1, 1, 1]}
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => (
                <View style={{width: width * 0.04}} />
              )}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={[list.box, {height: height * 0.26, paddingLeft: 0}]}>
                    <Image
                      source={require('../../Images/Thumbnail.png')}
                      style={{
                        height: height * 0.2,
                        width: width * 0.6,
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10,
                      }}
                    />
                    <Image
                      source={require('../../Images/Logos/playIcon.png')}
                      style={{marginTop: -height * 0.12, alignSelf: 'center'}}
                    />
                    <Text
                      style={[
                        fonts.roboto,
                        {
                          color: '#fff',
                          fontSize: height * 0.011,
                          marginLeft: width * 0.02,
                          marginTop: height * 0.04,
                        },
                      ]}>
                      Ecclestone rips through South Africa batting line-up |
                      CWC22
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginLeft: width * 0.02,
                        marginTop: height * 0.002,
                        alignItems: 'center',
                      }}>
                      <Image
                        source={require('../../Images/Logos/clock.png')}
                        style={{
                          tintColor: '#fff',
                          height: height * 0.012,
                          width: width * 0.026,
                        }}
                      />
                      <Text
                        style={[
                          fonts.arial,
                          {
                            color: '#fff',
                            fontSize: height * 0.01,
                            marginLeft: width * 0.02,
                          },
                        ]}>
                        2 min ago
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>

          <View style={{marginTop: height * 0.02, alignItems: 'center'}}>
            <Text style={[fonts.poppinsBold, {marginLeft: -width * 0.7}]}>
              TRENDING NEWS
            </Text>
            <TouchableOpacity
              style={[
                list.box,
                {height: height * 0.38, width: width * 0.94, paddingLeft: 0},
              ]}
              onPress={() => setNewsModal(true)}>
              <Text style={[fonts.poppins, {padding: height * 0.01}]}>
                T20 WORLD CUP 2022
              </Text>
              <Image
                source={require('../../Images/NewsImg.png')}
                style={{width: width * 0.94}}
              />
              <Text
                style={[
                  fonts.robotoBold,
                  {
                    color: '#fff',
                    fontSize: height * 0.016,
                    marginLeft: height * 0.012,
                    marginTop: height * 0.006,
                  },
                ]}>
                Can India ride the T20 evolutionary tide?
              </Text>
              <Text
                style={[
                  fonts.roboto,
                  {
                    color: '#fff',
                    fontSize: height * 0.011,
                    paddingHorizontal: width * 0.04,
                  },
                ]}>
                If change is happening, it is happening around BCCI. And because
                they continue to hold all the best cards in the pack, they have
                the ability to make this transition work for them
              </Text>
              <TouchableOpacity onPress={() => setNewsModal(true)}>
                <Text
                  style={[
                    fonts.errors,
                    {
                      textAlign: 'right',
                      marginRight: width * 0.02,
                      textDecorationLine: 'underline',
                      marginTop: height * 0.01,
                    },
                  ]}>
                  Read more..
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          {
            <View style={{flex: 1}}>
              <Modal visible={newsModal} transparent>
                <View>
                  <Image
                    source={require('../../Images/NewsCricket.png')}
                    style={{alignSelf: 'stretch'}}
                  />
                  <TouchableOpacity
                    style={{
                      marginTop: -height * 0.36,
                      marginLeft: width * 0.05,
                    }}
                    onPress={() => setNewsModal(false)}>
                    <Image source={require('../../Images/Logos/BackIcon.png')} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      marginTop: -height * 0.042,
                      marginRight: width * 0.03,
                      alignSelf: 'flex-end',
                    }}
                    onPress={onShare}>
                    <Image source={require('../../Images/Logos/Share.png')} />
                  </TouchableOpacity>
                </View>

                <View
                  style={[
                    AllStyles.container2,
                    {
                      backgroundColor: '#010',
                      height: height * 0.6,
                      marginTop: height * 0.28,
                    },
                  ]}>
                  <ScrollView>
                    <Text
                      style={[
                        fonts.robotoBold,
                        {
                          color: '#fff',
                          fontSize: height * 0.018,
                          textAlign: 'justify',
                        },
                      ]}>
                      Team India crush Thailand and reach semi-final of Asia cup
                    </Text>
                    <Text
                      style={[
                        fonts.roboto,
                        {
                          fontSize: height * 0.012,
                          color: '#fff',
                          textAlign: 'justify',
                          marginTop: height * 0.01,
                          lineHeight: height * 0.018,
                        },
                      ]}>
                      India strolled to a nine-wicket win against Thailand in
                      the Women's T20 Asia Cup after spinners Deepti Sharma,
                      Sneh Rana and Rajeshwari Gayakwad shared seven wickets
                      between them. Thailand were restricted to 37, their
                      third-lowest total in the Asia Cup, which table-toppers
                      India then chased down in six overs, losing just one
                      wicket.
                    </Text>
                    <Text
                      style={[
                        fonts.arial,
                        {
                          color: '#fff',
                          alignSelf: 'flex-start',
                          marginVertical: height * 0.01,
                        },
                      ]}>
                      Thailand openers cautious
                    </Text>
                    <Text
                      style={[
                        fonts.roboto,
                        {
                          fontSize: height * 0.012,
                          color: '#fff',
                          textAlign: 'justify',
                          lineHeight: height * 0.018,
                          marginBottom: height * 0.01,
                        },
                      ]}>
                      India strolled to a nine-wicket win against Thailand in
                      the Women's T20 Asia Cup after spinners Deepti Sharma,
                      Sneh Rana and Rajeshwari Gayakwad shared seven wickets
                      between them. Thailand were restricted to 37, their
                      third-lowest total in the Asia Cup, which table-toppers
                      India then chased down in six overs, losing just one
                      wicket.
                    </Text>
                    <Text
                      style={[
                        fonts.roboto,
                        {
                          fontSize: height * 0.012,
                          color: '#fff',
                          textAlign: 'justify',
                          lineHeight: height * 0.018,
                          marginBottom: height * 0.01,
                        },
                      ]}>
                      India strolled to a nine-wicket win against Thailand in
                      the Women's T20 Asia Cup after spinners Deepti Sharma,
                      Sneh Rana and Rajeshwari Gayakwad shared seven wickets
                      between them. Thailand were restricted to 37, their
                      third-lowest total in the Asia Cup, which table-toppers
                      India then chased down in six overs, losing just one
                      wicket.
                    </Text>
                    <Text
                      style={[
                        fonts.roboto,
                        {
                          fontSize: height * 0.012,
                          color: '#fff',
                          textAlign: 'justify',
                          lineHeight: height * 0.018,
                          marginBottom: height * 0.02,
                        },
                      ]}>
                      India strolled to a nine-wicket win against Thailand in
                      the Women's T20 Asia Cup after spinners Deepti Sharma,
                      Sneh Rana and Rajeshwari Gayakwad shared seven wickets
                      between them. Thailand were restricted to 37, their
                      third-lowest total in the Asia Cup, which table-toppers
                      India then chased down in six overs, losing just one
                      wicket.
                    </Text>
                  </ScrollView>
                </View>
              </Modal>
            </View>
          }
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  boxTxt: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.006,
    borderBottomWidth: 0.5,
    borderBottomColor: '#fff',
    width: width * 0.54,
  },
  boxImg: {
    height: height * 0.014,
    width: width * 0.04,
    tintColor: '#fff',
  },
  live: {
    width: width * 0.1,
    marginLeft: width * 0.088,
    alignItems: 'center',
    backgroundColor: '#e73725',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    marginBottom: height * 0.0026,
  },
});
