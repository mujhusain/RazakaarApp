import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  Pressable,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {LoginBtn} from '../components/buttons/LoginBtn';
import CustomInput from '../components/CustomInput';
import Seperator from '../components/utills/Seperator';
import { GoogleLoginBtn } from '../components/buttons/GoogleLoginBtn';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});
export default function Login({navigation}) {
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps="handled">
      <View styles={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Hey, Volunteer</Text>
          <Text style={styles.subTitle}>Welcome back</Text>
        </View>

        <View style={styles.inputContainer}>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{email: '', password: ''}}
            onSubmit={values => console.log(values)}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <>
                <CustomInput
                  iconName={'envelope'}
                  name="email"
                  placeholder="Email Address"
                  style={styles.textInput}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
                {errors.email && touched.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
                <CustomInput
                  iconName={'lock'}
                  name="password"
                  placeholder="Password"
                  style={styles.textInput}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
                {errors.password && touched.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}

                <TouchableOpacity
                  style={styles.forgetpass}
                  onPress={() => Alert.alert('Forget password')}>
                  <Text style={styles.forgetpassText}>Forgot Password?</Text>
                </TouchableOpacity>
                <LoginBtn
                  onPress={handleSubmit}
                  title="Login"
                  customStyles={{width: '100%', marginTop: '3%'}}
                />
                <Seperator />
                <GoogleLoginBtn
                //handle google login here
                  onPress={()=> Alert.alert('google login')}
                  customStyles={{width: '100%', marginTop: '3%'}}
                />
              </>
            )}
          </Formik>
        </View>
        <View style={styles.signUpBtnContainer}>
          <Text style={styles.signUpMessage}>New member?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
            <Text style={styles.btnSignUp}> Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 100,
  },
  titleContainer: {
    marginTop: '20%',
    paddingLeft: 50,
  },
  inputContainer: {
    padding: 50,
    paddingBottom: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 8,
  },
  subTitle: {
    fontSize: 16,
  },
  textInput: {
    borderColor: 'gray',
    borderLeftWidth: 1,
    height: 40,
    fontSize: 16,
    width: '100%',
    paddingLeft: 20,
    marginLeft: 10,
  },
  errorText: {
    fontSize: 12,
    color: 'red',
  },
  inputField: {
    marginTop: 10,
    borderColor: 'gray',
    borderBottomWidth: 1,
    flexDirection: 'row',
    borderRadius: 10,
    paddingBottom: 3,
  },
  icon: {
    margin: 8,
  },

  forgetpass: {
    margin: '15%',
  },
  forgetpassText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    textDecorationLine: 'underline',
  },
  signUpBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: "6%",
  },
  signUpMessage: {
    fontSize: 16,
  },
  btnSignUp: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#3C9C8F',
  },
});
