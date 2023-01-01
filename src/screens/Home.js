import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Alert,
  Dimensions,
  BackHandler,
  FlatList,
} from 'react-native';
import logo from '../assets/images/logo.png';
import EventCard from '../components/EventCard';
import DropdownComponent from '../components/utills/Dropdown';
import PopularEventCard from '../components/PopularEventCard';

export default function Home({navigation}) {
  const [eventList, setEventList] = useState([1, 2, 3, 4, 5]);
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
    <View styles={styles.container}>
      <View style={styles.searchContainer}>
        <DropdownComponent />

        <Image
          source={logo}
          resizeMode="cover"
          style={{width: 100, height: 80}}
        />
      </View>
      <View style={styles.contentContainer}>
        {/* event for mapping data */}
        <FlatList
          ListHeaderComponent={<PopularEventCard />}
          ListHeaderComponentStyle={{marginVertical: '3%'}}
          data={eventList}
          renderItem={item => <EventCard item={item.item} />}
          keyExtractor={item => item}
        />
      </View>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    justifyContent: 'space-between',
    marginTop: 15,
  },

  contentContainer: {
    flex: 1,
    minHeight: windowHeight - 190,
  },
});
