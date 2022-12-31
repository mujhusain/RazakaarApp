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
import floodImg from '../assets/images/flood.jpg';

export default function EventCard({item}) {
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
    <TouchableOpacity
    onPress={()=>Alert.alert("pressed")}
      style={styles.mainContainer}>
      <View style={{flexDirection: 'row'}}>
          <Image
            source={floodImg}
            style={styles.img}
            resizeMode="cover"
          />
        <View
          style={{
            justifyContent: 'space-between',
            paddingVertical: 4,
            paddingHorizontal: 8,
          }}>
          <Text style={styles.subTitle}>Mon, April 18 - 21:00 Pm</Text>
          <Text style={styles.title}>Blood Drive {item}</Text>
          <View style={{flexDirection: 'row'}}>
            <Icon name="map-marker" size={18} color={COLORS.black} />
            <Text style={styles.subTitle}> Lorem, Lahore</Text>
          </View>
        </View>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon.Button
          onPress={handleFavoriteBtn}
          name={favorite ? 'heart' : 'heart-o'}
          backgroundColor="transparent"
          color={COLORS.black}
        />
        <Icon.Button
          onPress={onShare}
          color={COLORS.black}
          name="share-alt"
          backgroundColor="transparent"
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection: 'row',
        paddingHorizontal: 8,
        justifyContent: 'space-between',
        marginTop:"5%"
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
  img:{width: 85, height: 85,borderRadius: 8},
});
