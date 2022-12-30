import {View, Text, StyleSheet, Image, Button, Dimensions} from 'react-native';
import peoples from '../assets/images/peoples.png';
import {ButtonGreen} from '../components/buttons/ButtonGreen';
import {SimpleButton} from '../components/buttons/SimpleButton';

export const WelcomeScreen=({navigation})=> {
  return (
    <View style={styles.container}>
      <View style={styles.topTitle}>
        <Text style={styles.heading}>Razakaar</Text>
        <Text style={styles.text}>A Community which cares.</Text>
      </View>
      <View style={styles.image}>
        <Image source={peoples} resizeMode="contain" style={{width: '80%'}} />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonGreen
        onPress={() =>
            navigation.navigate('Auth')
          }
          customStyles={{minWidth: '85%'}}
          title="Login"
        />
        <SimpleButton
          onPress={() => navigation.navigate('Auth', { screen: 'SignupScreen' })}
          customStyles={{minWidth: '85%'}}
          title="No Account yet? Sign up"
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
    backgroundColor: '#FFFEFE',
    padding: 20,
  },
  topTitle: {
    marginTop: '20%',
    alignItems: 'center',
    zIndex:2,
    marginBottom:`-20%`
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  text: {
    fontSize: 16,
  },
  buttonContainer: {
    justifyContent: 'space-evenly',
    marginBottom: '25%',
  },
  image: {
    width: windowWidth,
    height: windowHeight - 330,
    alignItems: 'center',
  },
});
