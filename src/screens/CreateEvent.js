import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  Pressable,
  Dimensions,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {handleLogin} from '../logic/auth/login';
import COLORS from '../constants';
import {ButtonGreen} from '../components/buttons/ButtonGreen';
import { useState } from 'react';

const loginValidationSchema = yup.object().shape({
  eventName: yup.string().required('Event name is Required'),
});
export default function CreateEvent({navigation}) {
    const [image,setImage] = useState('');
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Add an Event.</Text>
        </View>

          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{
              eventName: '',
              date: '',
              tag: '',
              location: '',
              description: '',
            }}
            onSubmit={values => handleLogin(values, navigation)}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View style={styles.inputContainer}>
                <View>
                  <Text style={styles.subTitle}>Event Name</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Event Name"
                    onChangeText={handleChange('eventName')}
                    onBlur={handleBlur('eventName')}
                    value={values.eventName}
                  />

                  {errors.eventName && touched.eventName && (
                    <Text style={styles.errorText}>{errors.eventName}</Text>
                  )}
                </View>

                <View>
                  <Text style={styles.subTitle}>Date</Text>
                  <TextInput
                    placeholder="Date"
                    style={styles.textInput}
                    onChangeText={handleChange('date')}
                    onBlur={handleBlur('date')}
                    value={values.date}
                  />
                </View>

                <View>
                  <Text style={styles.subTitle}>Tag</Text>
                  <TextInput
                    placeholder="Tag"
                    style={styles.textInput}
                    onChangeText={handleChange('tag')}
                    onBlur={handleBlur('tag')}
                    value={values.tag}
                  />
                </View>

                <View>
                  <Text style={styles.subTitle}>Location</Text>
                  <TextInput
                    placeholder="Location"
                    style={styles.textInput}
                    onChangeText={handleChange('location')}
                    onBlur={handleBlur('location')}
                    value={values.location}
                  />
                </View>

                <View>
                  <Text style={styles.subTitle}>Description</Text>
                  <TextInput
                    placeholder="Description"
                    style={styles.textInput}
                    onChangeText={handleChange('description')}
                    onBlur={handleBlur('description')}
                    value={values.description}
                  />
                </View>

                <TouchableOpacity
                  style={styles.addImg}
                  onPress={() => Alert.alert('add image')}>
                  <Text style={styles.forgetpassText}>Add Image</Text>
                </TouchableOpacity>
                <ButtonGreen
                  onPress={handleSubmit}
                  title="Create"
                  customStyles={{width: '100%', marginTop: '3%'}}
                />
              </View>
            )}
          </Formik>
      </View>
    </ScrollView>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  titleContainer: {
    marginTop: '10%',
  },
  inputContainer: {
    height: windowHeight - 175,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 8,
  },
  subTitle: {
    fontSize: 16,
    color: COLORS.black,
    marginBottom: 2,
  },
  textInput: {
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderRadius: 8,
    height: 40,
    fontSize: 15,
    paddingLeft: 10,
  },
  errorText: {
    fontSize: 12,
    color: 'red',
  },
  addImg:{
    height:180,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: COLORS.gray,
  }
});
