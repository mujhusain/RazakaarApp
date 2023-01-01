import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Alert,
  TextInput,
  TouchableWithoutFeedback,
  FlatList,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import EventCard from '../components/EventCard';
import OrgnizationCard from '../components/OrgnizationCard';
import PeopleCard from '../components/PeopleCard';
import COLORS from '../constants';

export default function SearchScreen({navigation}) {
  const [text, setText] = useState('');
  const [eventList, setEventList] = useState([1, 2, 3, 4, 5, 6]);
  const [orgList, setOrgList] = useState([1, 2, 3]);
  const [peopleList, setPeopleList] = useState([1, 2, 3]);

  return (
    <TouchableWithoutFeedback
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        <View style={styles.header}>
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

        {/* search header ends */}

        <View style={styles.eventsList}>
          <FlatList
            data={eventList}
            renderItem={item => <EventCard item={item.item} />}
          />
        </View>
        <View style={styles.orgList}>
          <Text style={styles.title}>Orgnizations</Text>
          <FlatList
            data={orgList}
            renderItem={item => <OrgnizationCard item={item.item} />}
          />
        </View>
        <View style={styles.peoplesList}>
          <Text style={styles.title}>Peoples</Text>
          <FlatList
            data={peopleList}
            renderItem={item => <PeopleCard item={item.item} />}
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
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    borderRadius: 8,
  },
  searchbar: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  textInput: {
    width: '94%',
    height: 50,
  },
  eventsList: {
    flex: 1.7,
    marginBottom: 5,
  },
  orgList: {
    flex: 1.2,
  },
  peoplesList: {
    flex: 0.7,
  },
  title: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: 'bold',
    margin: 8,
  },
});
