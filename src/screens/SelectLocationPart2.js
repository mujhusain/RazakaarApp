import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import map from '../assets/images/map.png';
import {ButtonGreen} from '../components/buttons/ButtonGreen';
export default function SelectLocationPart2({navigation}) {
  return (
    <View style={styles.container}>
     <Text>SelectLocationPart2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '5%',
  },
});
