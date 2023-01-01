import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LocationName from '../components/utills/LoactionsName';

export default function SelectLocationPart2({navigation}) {
  const [text, setText] = useState('');
  const [locationsList, setLocationList] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          onPress={() => navigation.goBack()}
          name="arrow-left"
          color="gray"
          size={25}
        />
        <View style={styles.searchbar}>
          <TextInput
            style={styles.textInput}
            placeholder={'Search Here'}
            onChangeText={text => setText(text)}
            value={text}
          />
          <Icon
            onPress={() => Alert.alert('search btn pressed')}
            name="search"
            size={20}
          />
        </View>
      </View>
      <Text style={{color: 'gray', marginVertical: 10}}>Please select</Text>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled">
        <View style={styles.seacrhResultcontainer}>
          {locationsList.map((text, index) => (
            <LocationName name={text} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  header: {
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    maxWidth: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  searchbar: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '83%',
    marginLeft: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  textInput: {
    width: '90%',
    height: 50,
  },
  seacrhResultcontainer: {
    flex: 1,
  },
});
