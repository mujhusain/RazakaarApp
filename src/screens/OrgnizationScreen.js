import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Alert,
  TextInput,
  TouchableWithoutFeedback,
  FlatList,
  Text,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import EventCard from '../components/EventCard';
import OrgnizationCard from '../components/OrgnizationCard';
import PeopleCard from '../components/PeopleCard';
import COLORS from '../constants';
import {ButtonGreen} from '../components/buttons/ButtonGreen';
import floodImg from '../assets/images/flood.jpg';
export default function OrgnizationScreen({navigation}) {
  const [eventList, setEventList] = useState([1, 2, 3, 4, 5, 6]);
  const [pastEventsList, setPastEventsList] = useState([1, 2, 3]);

  return (
    <TouchableWithoutFeedback
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        <View style={styles.aboutOrg}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={floodImg}
              style={{height: 120, width: '45%', borderRadius: 10}}
              resizeMode="cover"
            />
            <View
              style={{
                marginLeft: 12,
                width: '55%',
              }}>
              <Text style={styles.title}>Blood Drive </Text>
              <Text style={{color: 'black', lineHeight: 19}}>
                In publishing commonly may be used as a placeholder before final
                copy is available.
              </Text>
            </View>
          </View>
          <View style={styles.contentAction}>
            <ButtonGreen
              title={'Follow this Orgnization'}
              onPress={() => Alert.alert('Follow this Orgnization')}
              customStyles={{backgroundColor: '#0B8283', paddingHorizontal: 20}}
            />

            <Icon name="handshake-o" size={60} color="#0B8283" />
          </View>
        </View>
        <View style={styles.eventsList}>
          <Text style={styles.title}>Events</Text>
          <FlatList
            data={eventList}
            renderItem={item => <EventCard item={item.item} />}
          />
        </View>
        <View style={styles.orgList}>
          <Text style={styles.title}>Past Events</Text>
          <FlatList
            data={pastEventsList}
            renderItem={item => (
              <OrgnizationCard item={item.item} navigation={navigation} />
            )}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: 'white',
    paddingHorizontal:10
  },
  eventsList: {
    flex: 1.7,
    margin: 8,
  },
  aboutOrg: {
    flex: 1,
    marginTop: '5%',
  },
  title: {
    color: COLORS.black,
    fontSize: 18,
    fontWeight: 'bold',
  },
  orgList: {
    flex: 0.8,
    margin: 8,
  },
  img: {
    height: 210,
  },
  contentAction: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 8,
    paddingRight: '4%',
  },
});
