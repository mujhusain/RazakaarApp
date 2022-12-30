import {signup} from '../../api/index';

export async function handleSignup(values,navigation) {
  console.log(values);
  navigation.navigate('BottomTabs');
  return true; //testing purposes only
  
  try {
    const response= await signup(values);
    if (response.status === 200) {
        navigation.navigate('BottomTabs');
        Alert.alert('Success', 'Successfully account created!');
      }
    } catch (error) {
      console.log(error);
    }
}
