import {login} from '../../api/index';

export async function handleLogin(values, navigation) {
    
  navigation.navigate('BottomTabs');
return true; // for testing purposes

  try {
    const response = await login(values);
    console.log(response);
    if (response.status === 200) {
      navigation.navigate('BottomTabs');
      Alert.alert('Success', 'Successfully logged in');
    }
  } catch (error) {
    console.log(error);
  }
}
