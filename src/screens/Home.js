import React, {useEffect} from 'react';
import {View, Text, Alert, StyleSheet, Image, BackHandler} from 'react-native';

export default function Home({navigation}) {
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  return (
    <View>
      <Text style={{color: 'black'}}>Home</Text>
    </View>
  );
}
