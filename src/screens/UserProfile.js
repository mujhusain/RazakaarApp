import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import flood from '../assets/images/flood.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from '../constants';
import {ButtonGreen} from '../components/buttons/ButtonGreen';

export default function UserProfile({navigation}) {
  const [profilePic, setProfilePic] = useState(flood);
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps="handled">
      <>
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
              }}
            />
            <Text style={styles.title}>Salahudin Yusuf</Text>
            <Text style={styles.subTitle}>General | 16 Honors</Text>
          </View>

          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate('Profile');
              }}>
              <Text style={styles.subTitle}>Primary City</Text>
              <Text>Cairo Egypt</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate('Profile');
              }}>
              <Text style={styles.subTitle}>Participated in events</Text>
              <Icon name="long-arrow-right" color="gray" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate('Profile');
              }}>
              <Text style={styles.subTitle}>Achivements</Text>
              <Icon name="long-arrow-right" color="gray" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate('Profile');
              }}>
              <Text style={styles.subTitle}>Contact Information</Text>
              <Icon name="long-arrow-right" color="gray" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate('Profile');
              }}>
              <Text style={styles.subTitle}>Account Settings</Text>
              <Icon name="long-arrow-right" color="gray" />
            </TouchableOpacity>
          </View>

          <View style={styles.logout}>
            <ButtonGreen
              title={'Logout'}
              onPress={() => navigation.replace('Auth')}
              customStyles={{
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: 'gray',
              }}
              customText={{color: 'gray'}}
            />
          </View>
        </View>
      </>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  profilePic: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '35%',
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
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: COLORS.lightGray2,
    backgroundColor: COLORS.white,
    marginTop: 6,
    borderRadius: 8,
  },
  logout: {
    marginVertical: '20%',
  },
});
