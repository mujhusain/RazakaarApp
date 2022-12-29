import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import googleIcon from '../../assets/images/google-symbol.png';

export const GoogleLoginBtn = ({onPress, customStyles = {}}) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, customStyles]}>
    <Image
      source={googleIcon}
      resizeMode="contain"
      style={{height: 28, width: 28, marginLeft: 30}}
    />
    <Text style={styles.buttonText}>Login with Google</Text>
    <View style={styles.icon} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    borderRadius: 28,
    marginVertical: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '4%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 8,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
  },
  icon: {
    marginLeft:'10%'
  },
});
