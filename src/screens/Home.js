import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Share,
  BackHandler,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from '../constants';
import floodImg from '../assets/images/flood.jpg';
import logo from '../assets/images/logo.png';

import EventCard from '../components/EventCard';
import NewTag from '../components/utills/NewTag';
import DropdownComponent from '../components/utills/Dropdown';
export default function Home({navigation}) {
  const [favorite, setFavorite] = useState(false);
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

  const handleFavoriteBtn = () => setFavorite(prev => !prev);
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

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
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled">
        <View style={{paddingHorizontal: 12, marginBottom: 5}}>
          <Text style={styles.headingTitle}>Polular in Lahore</Text>
        </View>
        <ImageBackground
          source={floodImg}
          resizeMode="cover"
          style={styles.bgImg}>
          {/* Toggle new tag here */}
          <View style={{flexDirection: 'row-reverse', margin: 8}}>
            <NewTag visibility={true} />
          </View>

          <TouchableOpacity onPress={() => Alert.alert('pressed poular event')}>
            <View style={styles.data}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    paddingTop: 4,
                    paddingHorizontal: 8,
                  }}>
                  <Text style={styles.subTitle}>Mon, April 18 - 21:00 Pm</Text>
                  <Text style={styles.title}>Blood Drive</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Icon name="map-marker" size={18} color={COLORS.black} />
                    <Text style={styles.subTitle}> Lorem, Lahore</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.actions}>
              <View style={{flexDirection: 'row', marginBottom: 5}}>
                <Icon.Button
                  onPress={handleFavoriteBtn}
                  name={favorite ? 'heart' : 'heart-o'}
                  backgroundColor="transparent"
                  color={COLORS.gray}
                />
                <Icon.Button
                  onPress={onShare}
                  name="share-alt"
                  color={COLORS.gray}
                  backgroundColor="transparent"
                />
              </View>
            </View>
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.contentContainer}>
          {/* event for mapping data */}
          <FlatList
            data={eventList}
            renderItem={item => <EventCard item={item.item} />}
            keyExtractor={item => item}
          />
        </View>
      </ScrollView>
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
  bgImg: {
    height: 230,
    overflow: 'hidden',
    borderRadius: 16,
    justifyContent: 'space-between',
    marginHorizontal: 12,
  },
  data: {
    height: 70,
    backgroundColor: COLORS.lightGray2,
  },
  actions: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    backgroundColor: COLORS.lightGray2,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingTop: 8,
  },
  headingTitle: {
    color: COLORS.black,
    fontSize: 19,
  },
  title: {
    fontSize: 17,
    color: COLORS.black,
    fontWeight: 'bold',
    lineHeight: 30,
  },
  subTitle: {
    fontSize: 13,
    color: COLORS.black,
  },
});
