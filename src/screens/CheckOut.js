import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import RadioButtonRN from 'radio-buttons-react-native';
import COLORS from '../constants';

export default function CheckOut({navigation}) {
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps="handled">
      <View styles={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.headerTitle}>Donation - Flood Relief</Text>
          <Text style={styles.time}>Reamining time: 11 Days</Text>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.aboutCard}>
            <Text style={styles.title}>Sadil Khan - Edhi Foundation</Text>
            <Text style={styles.subTitle}>About the event:</Text>
            <Text style={styles.aboutData}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled.
            </Text>
            <View style={styles.seeDetailsContainer}>
              <TouchableOpacity
            //   Navigate to event details screen
                onPress={() => navigation.navigate('EventDetails')}
                style={styles.seeDetailsContainer}>
                <Icon name="arrow-circle-right" size={23} color="black" />
                <Text style={styles.subTitle}>See Original Event </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Payment method */}
          <View style={[styles.contentContainer]}>
            <Text style={styles.title}>Payment Methods</Text>
            <RadioButtonRN
              data={[
                {
                  label: 'Bank Account',
                },
                {
                  label: 'Jazz Cash',
                },
              ]}
              boxStyle={{width: '100%'}}
              circleSize={15}
              textStyle={{fontSize: 16}}
              selectedBtn={e => console.log(e)}
            />
          </View>

          <View style={[styles.contentContainer]}>
            <TouchableOpacity
              onPress={() => Alert.alert('next button pressed', 'pressed')}
              style={styles.nextButton}>
              <Text
                style={[
                  styles.title,
                  {color: COLORS.white, fontSize: 20, paddingHorizontal: 6},
                ]}>
                Next{' '}
              </Text>
              <Icon name="long-arrow-right" size={23} color={COLORS.white} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  mainContainer: {
    height: windowHeight - 120,
    justifyContent: 'space-between',
  },
  contentContainer: {
    padding: 10,
    alignItems: 'center',
    padding: '5%',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  time: {
    color: COLORS.red,
  },
  aboutCard: {
    padding: 12,
    margin: 12,
    borderRadius: 8,
    borderColor: COLORS.black,
    backgroundColor: COLORS.lightGray,
  },
  title: {
    fontSize: 18,
    paddingVertical: 8,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  subTitle: {
    fontSize: 16,
    color: COLORS.black,
    fontWeight: 'bold',
  },
  aboutData: {
    fontSize: 14,
    lineHeight: 19,
    color: COLORS.black,
  },
  seeDetailsContainer: {
    flexDirection: 'row-reverse',
    marginTop: '2%',
    marginBottom: '1%',
    alignItems: 'center',
  },
  nextButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    width: '100%',
    borderRadius: 8,
    backgroundColor: COLORS.green,
  },
});
