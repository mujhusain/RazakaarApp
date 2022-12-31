import React, {useState} from 'react';
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
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from '../constants';
import floodImg from '../assets/images/flood.jpg';
import {ButtonGreen} from '../components/buttons/ButtonGreen';

export default function EventDetails({navigation}) {
  const [favorite, setFavorite] = useState(false);

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
    <>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled">
        <View styles={styles.container}>
          <ImageBackground
            source={floodImg}
            resizeMode="cover"
            style={styles.bgImg}>
            <View style={styles.actions}>
              <Icon.Button
                onPress={() => navigation.goBack()}
                name="arrow-left"
                backgroundColor="transparent"
              />
              <View style={{flexDirection: 'row'}}>
                <Icon.Button
                  onPress={handleFavoriteBtn}
                  name={favorite ? 'heart' : 'heart-o'}
                  backgroundColor="transparent"
                />
                <Icon.Button
                  onPress={onShare}
                  name="share-alt"
                  backgroundColor="transparent"
                />
              </View>
            </View>
          </ImageBackground>

          <View style={styles.contentContainer}>
            <Text style={styles.headingTitle}>Flood Relief</Text>

            <View style={{borderWidth: 0, marginVertical: '3%'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="calendar-o" size={20} color={COLORS.black} />
                <Text style={styles.title}>MON, April 18 - 21:00 Pm</Text>
              </View>
              <Text style={styles.subTitle}>21:00 Pm - 23:00 Pm</Text>

              {/* Add a reminder button */}
              <TouchableOpacity style={styles.touchableOpacity}>
                <Text style={styles.titleBtn}>Add a reminder</Text>
              </TouchableOpacity>
            </View>

            <View style={{borderWidth: 0, marginVertical: '3%'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="map-marker" size={20} color={COLORS.black} />
                <Text style={styles.title}>Larkana, Sindh</Text>
              </View>
              <Text style={styles.subTitle}>
                Lorem ipsum, 5-7,08083 Barcelona
              </Text>

              {/* Add a reminder button */}
              <TouchableOpacity style={styles.touchableOpacity}>
                <Text style={styles.titleBtn}>View on map</Text>
              </TouchableOpacity>
            </View>

            <View style={{borderWidth: 0, marginVertical: '3%'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="map-marker" size={20} color={COLORS.black} />
                <Text style={styles.title}>Orgnizer</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.subTitle}>Eidhi Foundation</Text>
                {/* More info button */}
                <TouchableOpacity
                  style={[
                    styles.touchableOpacity,
                    {flexDirection: 'row', alignItems: 'center'},
                  ]}>
                  <Text style={[styles.titleBtn, {paddingLeft: 5}]}>
                    More info{' '}
                  </Text>
                  <Icon name="long-arrow-right" size={20} color={COLORS.blue} />
                </TouchableOpacity>
              </View>
            </View>

            <Text
              style={{
                marginTop: '4%',
                fontSize: 18,
                color: COLORS.black,
                fontWeight: 'bold',
              }}>
              Call to action
            </Text>
            <Text style={styles.otherdata}>
              In iOS, returns a Promise which will be invoked with an object
              containing action and activityType. If the user dismissed the
              dialog, the Promise will still be resolved with action being. In
              iOS, returns a Promise which will be invoked with an object
              containing action and activityType. If the user dismissed the
              dialog, the Promise will still be resolved with action being . In
              iOS, returns a Promise which will be invoked with an object
              containing action and activityType. If the user dismissed the
              dialog, the Promise will still be resolved with action being. In
              iOS, returns a Promise which will be invoked with an object
              containing action and activityType. If the user dismissed the
              dialog, the Promise will still be resolved with action being
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <View>
          <Text style={styles.title}>Flood Relief</Text>
          <Text style={[styles.subTitle, {paddingLeft: 8, fontSize: 14}]}>
            MON, April 18 - 21:00 Pm
          </Text>
        </View>
        <ButtonGreen
          title={'Are you going?'}
          onPress={{}}
          customStyles={{width: '50%', height: 40}}
        />
      </View>
    </>
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
  bgImg: {
    height: 230,
    flexDirection: 'column-reverse',
    paddingBottom: 8,
  },
  actions: {
    flexDirection: 'row',
    width: windowWidth,
    justifyContent: 'space-between',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingTop: 8,
  },
  headingTitle: {
    color: COLORS.black,
    fontSize: 23,
    fontWeight: 'bold',
    marginVertical: '1%',
  },
  title: {
    fontSize: 17,
    color: COLORS.black,
    fontWeight: 'bold',
    paddingLeft: 8,
  },
  subTitle: {
    fontSize: 15,
    paddingLeft: 28,
  },
  titleBtn: {
    fontSize: 15,
    paddingLeft: 30,
    color: COLORS.blue,
    fontWeight: 'bold',
  },
  otherdata: {
    lineHeight: 20,
    paddingTop: 10,
    color: COLORS.black,
  },
  bottomContainer: {
    padding: 10,
    backgroundColor: COLORS.lightYellow,
    height: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
