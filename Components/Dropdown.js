
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput,
  Dimensions,
} from 'react-native';
import React, {useRef, useState} from 'react';

const {height, width} = Dimensions.get('screen');

const countries = [
  {
    "name": "United States",
    "flag": ":us:",
    "code": "+1"
  },
  {
    "name": "Canada",
    "flag": ":flag-ca:",
    "code": "+1"
  },
  {
    "name": "Mexico",
    "flag": ":flag-mx:",
    "code": "+52"
  },
  {
    "name": "Brazil",
    "flag": ":flag-br:",
    "code": "+55"
  },
  {
    "name": "Argentina",
    "flag": ":flag-ar:",
    "code": "+54"
  },
  {
    "name": "United Kingdom",
    "flag": ":gb:",
    "code": "+44"
  },
  {
    "name": "France",
    "flag": ":fr:",
    "code": "+33"
  },
  {
    "name": "Germany",
    "flag": ":de:",
    "code": "+49"
  },
  {
    "name": "Spain",
    "flag": ":es:",
    "code": "+34"
  },
  {
    "name": "Italy",
    "flag": ":it:",
    "code": "+39"
  },
  {
    "name": "China",
    "flag": ":cn:",
    "code": "+86"
  },
  {
    "name": "India",
    "flag": ":flag-in:",
    "code": "+91"
  },
  {
    "name": "Japan",
    "flag": ":jp:",
    "code": "+81"
  },
  {
    "name": "South Korea",
    "flag": ":kr:",
    "code": "+82"
  },
  {
    "name": "Australia",
    "flag": ":flag-au:",
    "code": "+61"
  },
  {
    "name": "New Zealand",
    "flag": ":flag-nz:",
    "code": "+64"
  },
  {
    "name": "South Africa",
    "flag": ":flag-za:",
    "code": "+27"
  },
  {
    "name": "Nigeria",
    "flag": ":flag-ng:",
    "code": "+234"
  },
  {
    "name": "Egypt",
    "flag": ":flag-eg:",
    "code": "+20"
  },
  {
    "name": "Saudi Arabia",
    "flag": ":flag-sa:",
    "code": "+966"
  },
  {
    "name": "Afghanistan",
    "flag": ":flag-af:",
    "code": "+93"
  },
  {
    "name": "Albania",
    "flag": ":flag-al:",
    "code": "+355"
  },
  {
    "name": "Algeria",
    "flag": ":flag-dz:",
    "code": "+213"
  },
  {
    "name": "American Samoa",
    "flag": ":flag-as:",
    "code": "+1-684"
  },
  {
    "name": "Andorra",
    "flag": ":flag-ad:",
    "code": "+376"
  },
  {
    "name": "Angola",
    "flag": ":flag-ao:",
    "code": "+244"
  },
  {
    "name": "Anguilla",
    "flag": ":flag-ai:",
    "code": "+1-264"
  },
  {
    "name": "Antigua and Barbuda",
    "flag": ":flag-ag:",
    "code": "+1-268"
  },
  {
    "name": "Argentina",
    "flag": ":flag-ar:",
    "code": "+54"
  },
  {
    "name": "Armenia",
    "flag": ":flag-am:",
    "code": "+374"
  },
  {
    "name": "Aruba",
    "flag": ":flag-aw:",
    "code": "+297"
  },
  {
    "name": "Australia",
    "flag": ":flag-au:",
    "code": "+61"
  },
  {
    "name": "Austria",
    "flag": ":flag-at:",
    "code": "+43"
  },
  {
    "name": "Azerbaijan",
    "flag": ":flag-az:",
    "code": "+994"
  },
  {
    "name": "Bahamas",
    "flag": ":flag-bs:",
    "code": "+1-242"
  },
  {
    "name": "Bahrain",
    "flag": ":flag-bh:",
    "code": "+973"
  },
  {
    "name": "Bangladesh",
    "flag": ":flag-bd:",
    "code": "+880"
  },
  {
    "name": "Barbados",
    "flag": ":flag-bb:",
    "code": "+1-246"
  },
  {
    "name": "Belarus",
    "flag": ":flag-by:",
    "code": "+375"
  },
  {
    "name": "Belgium",
    "flag": ":flag-be:",
    "code": "+32"
  },
  {
    "name": "Belize",
    "flag": ":flag-bz:",
    "code": "+501"
  },
  {
    "name": "Benin",
    "flag": ":flag-bj:",
    "code": "+229"
  },
  {
    "name": "Bermuda",
    "flag": ":flag-bm:",
    "code": "+1-441"
  },
];
export default function Dropdown({top,left, bottom}) {
  const [isClicked, setIsClicked] = useState(false);
  const [data, setData] = useState(countries);
  const [selectedCountry, setSelectedCountry] = useState('+91');

  const searchRef = useRef();
  const onsearch = txt => {
    if (txt !== '') {
      let tempData = data.filter(item => {
        return item.name.toLowerCase().indexOf(txt.toLowerCase()) > -1;
      });
      setData(tempData);
    } else {
      setData(countries);
    }
  };
  console.table(countries.name);
  return (
    <View style={{ width:width*0.5, marginTop :top, marginLeft : left, marginBottom : bottom}}>
      <TouchableOpacity
        style={styles.Dropdown}
        onPress={() => setIsClicked(!isClicked)}>
        <Text style={{alignSelf: 'center', color: '#FFFFFF'}}>
          {selectedCountry}
        </Text>
        {isClicked ? (
          <Image
            source={require('../Images/Logos/caret_up_icon.png')}
            style={styles.icon}
          />
        ) : (
          <Image
            source={require('../Images/Logos/caret_down_icon.png')}
            style={styles.icon}
          />
        )}
      </TouchableOpacity>
      {isClicked ? (
        <View style={styles.dropdownContainer}>
          <TextInput
            placeholder="Search"
            onChangeText={txt => onsearch(txt)}
            ref={searchRef}
          />
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={styles.countryItem}
                  onPress={() => {
                    setSelectedCountry(item.code);
                    onsearch('');
                    setIsClicked(false);
                    searchRef.current.clear();
                  }}>
                  <Text style={{color: '#FFFFFF'}}>{item.name}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
  Dropdown: {
    flexDirection: 'row',
    width: '30%',
    borderRadius: 10,
    backgroundColor: '#010',
    justifyContent: 'center',
    alignItems :'center'
  },
  icon: {
    height: '60%',
    width: '40%',
    alignSelf: 'center',
  },
  dropdownContainer: {
    position:'absolute',
    width: '100%',
    height:150,
    marginTop:20,
    borderWidth:0.5,
    borderRadius: 10,
    borderColor:'#FFFFFF',
    alignItems: 'center',
    backgroundColor: '#8E8E8E',
    elevation: 10,
  },
  countryItem: {
    borderBottomWidth: 0.2,
    borderBottomColor: '#FFFFFF',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});