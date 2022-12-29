import React,{useEffect} from'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import logo from '../assets/images/logo.png';
export default function Spalshscreen({navigation}) {


useEffect(() => {
  //After two second navigate to welcome page
  setTimeout(() => {
    navigation.replace("WelcomeScreen")
  }, 2000);
},[])

  return (
    <View style={styles.container}>
      <Image source={logo} resizeMode="contain" style={{height: "30%"}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F1E8',
    padding: 20,
  },
});
