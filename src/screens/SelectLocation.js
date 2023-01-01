import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import map from '../assets/images/map.png';
import {ButtonGreen} from '../components/buttons/ButtonGreen';
export default function SelectLocation({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.middile}>
        <Image source={map} resizeMode="contain" style={{height: '50%'}} />
        <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
          Select Location
        </Text>
        <Text style={{fontSize: 16, color: 'gray', textAlign: 'center'}}>
          Lets find where you are. So, we could rank events for you.
        </Text>
      </View>
      <View style={styles.bottom}>
        <ButtonGreen
          title={'Choose Location'}
          onPress={()=>console.log('Choose Location')}
          customStyles={{padding: 5}}
        />
      </View>
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
  header: {
    flex: 0.5,
  },
  middile: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '10%',
  },

  bottom: {
    flex: 1,
    width: 350,
    flexDirection: 'column-reverse',
  },
});
