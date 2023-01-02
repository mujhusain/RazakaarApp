import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import flood from '../assets/images/flood.jpg';
import COLORS from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ButtonGreen} from '../components/buttons/ButtonGreen';
import EventCard from '../components/EventCard';

export default function FriendsScreen({navigation}) {
  const [profilePic, setProfilePic] = useState(flood);
  const [achivments, setAchivments] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <View style={styles.container}>
      <View style={styles.profilePic}>
        <Image
          source={profilePic}
          resizeMode="contain"
          style={{
            width: 120,
            height: 120,
            borderWidth: 1,
            borderRadius: 120,
            marginVertical: '5%',
          }}
        />
        <Text style={styles.title}>Salahudin Yusuf</Text>
        <Text style={styles.subTitle}>General | 16 Honors</Text>
      </View>
      <View style={styles.contentAction}>
        <ButtonGreen
          title={'Send friend invitation'}
          onPress={() => Alert.alert('Send friend invitation')}
          customStyles={{backgroundColor: '#0B8283', paddingHorizontal: 45}}
        />

        <Icon name="hand-holding-usd" size={50} color="orange" />
      </View>

      <View style={styles.hisAchivements}>
        <FlatList
          data={achivments}
          renderItem={item => (
            <EventCard item={item.item} keyExtractor={item => item} />
          )}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  profilePic: {
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '35%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    margin: 6,
  },
  contentAction: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 8,
    paddingRight: '4%',
  },
  hisAchivements: {
    flex: 1,
  },
});
