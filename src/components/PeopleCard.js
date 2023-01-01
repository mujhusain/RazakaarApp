import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
  Share,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from '../constants';
import peoples from '../assets/images/peoples.png';

export default function PeopleCard({item,navigation}) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('FriendsScreen')}
      style={styles.mainContainer}>
      <View style={{flexDirection: 'row'}}>
        <Image source={peoples} style={styles.img} resizeMode="cover" />
        <View
          style={{
            justifyContent: 'space-between',
            paddingVertical: 4,
            paddingHorizontal: 8,
          }}>
          <Text style={styles.title}>Slahudin Khan {item}</Text>
          <Text style={styles.subTitle}>Genral</Text>
          <View style={{flexDirection: 'row'}}>
            <Icon name="map-marker" size={18} color={COLORS.black} />
            <Text style={styles.subTitle}> Lorem, Lahore</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    justifyContent: 'space-between',
    marginTop: '2%',
  },
  title: {
    fontSize: 17,
    color: COLORS.black,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 13,
    color: COLORS.black,
  },
  img: {width: 80, height: 80, borderRadius: 8},
});
