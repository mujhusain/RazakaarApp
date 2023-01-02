import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import COLORS from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import Checkbox from '../components/utills/Checkbox';
import {ButtonGreen} from '../components/buttons/ButtonGreen';

export default function Settings({navigation}) {
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        <View style={styles.Checkbox}>
          <View style={styles.label}>
            <Text style={{color: 'gray'}}>Here you can check you data</Text>
            <Text style={{color: 'teal'}}>Check All</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Text style={styles.subTitle}>Do you like React Native?</Text>
            <Checkbox />
          </View>
          <View style={styles.checkboxContainer}>
            <Text style={styles.subTitle}>Do you like React Native?</Text>
            <Checkbox />
          </View>
          <View style={styles.checkboxContainer}>
            <Text style={styles.subTitle}>Do you like React Native?</Text>
            <Checkbox />
          </View>
          <View style={styles.label}>
            <Text style={{color: 'gray',marginTop:10}}>Here you can check you data</Text>
            <Text style={{color: 'teal'}}>Check All</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Text style={styles.subTitle}>Do you like React Native?</Text>
            <Checkbox />
          </View>
          <View style={styles.checkboxContainer}>
            <Text style={styles.subTitle}>Do you like React Native?</Text>
            <Checkbox />
          </View>
          <View style={styles.checkboxContainer}>
            <Text style={styles.subTitle}>Do you like React Native?</Text>
            <Checkbox />
          </View>
          <View style={styles.checkboxContainer}>
            <Text style={styles.subTitle}>Do you like React Native?</Text>
            <Checkbox />
          </View>
          <View style={styles.label}>
            <Text style={{color: 'gray',marginTop:10}}>Here you can check you data</Text>
            <Text style={{color: 'teal'}}>Check All</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Text style={styles.subTitle}>Do you like React Native?</Text>
            <Checkbox />
          </View>
          <View style={styles.checkboxContainer}>
            <Text style={styles.subTitle}>Do you like React Native?</Text>
            <Checkbox />
          </View>
          <View style={styles.checkboxContainer}>
            <Text style={styles.subTitle}>Do you like React Native?</Text>
            <Checkbox />
          </View>
        </View>
          <View style={styles.btn}>
            <ButtonGreen title="Submit" customStyles={{width: '90%'}} />
          </View>
      </View>
    </ScrollView>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    padding: 12,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    paddingVertical: 8,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  subTitle: {
    fontSize: 16,
    color: COLORS.black,
    fontWeight:'bold'
  },
  label: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,

    justifyContent: 'space-between',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height:40
  },
  Checkbox: {
    flex:2,

  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
