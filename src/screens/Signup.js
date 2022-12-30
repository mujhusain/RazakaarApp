import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {LoginBtn} from '../components/buttons/LoginBtn';
import {handleSignup} from '../logic/auth/signup'
import CustomInput from '../components/CustomInput';
import Seperator from '../components/utills/Seperator';
import { GoogleLoginBtn } from '../components/buttons/GoogleLoginBtn';
import COLORS from '../constants';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  name: yup.string().required('User name is Required'),
  mobileNumber: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Mobile number is required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),

});
export default function Signup({navigation}) {
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps="handled">
      <View styles={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Lets's add you in the team</Text>
          <Text style={styles.subTitle}>Signup to start helping others</Text>
        </View>

        <View style={styles.inputContainer}>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{
              name: '',
              mobileNumber: '',
              email: '',
              password: '',
            }}
            onSubmit={values => handleSignup(values,navigation)}>
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
                  iconName={'user-o'}
                  name="name"
                  placeholder="Create an account here"
                  style={styles.textInput}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />
                {errors.name && touched.name && (
                  <Text style={styles.errorText}>{errors.name}</Text>
                )}
                <CustomInput
                  iconName={'mobile'}
                  name="mobileNumber"
                  placeholder="Mobile Number"
                  style={styles.textInput}
                  onChangeText={handleChange('mobileNumber')}
                  onBlur={handleBlur('mobileNumber')}
                  value={values.mobileNumber}
                  keyboardType="number"
                />
                {errors.mobileNumber && touched.mobileNumber && (
                  <Text style={styles.errorText}>{errors.mobileNumber}</Text>
                )}

                <CustomInput
                  iconName={'envelope-o'}
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

                <Text style={{marginVertical: '8%',marginBottom:"10%", textAlign: 'center'}}>
                  By signing up you agree our Terms of Use
                </Text>
                <LoginBtn
                  onPress={handleSubmit}
                  title="Next"
                  customStyles={{width: '100%', marginTop: '5%'}}
                />
               <Seperator />
                <GoogleLoginBtn onPress={()=>Alert.alert("Google login")} />
              </>
            )}
          </Formik>
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
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 8,
  },
  subTitle: {
    fontSize: 16,
  },
  textInput: {
    borderColor: COLORS.gray,
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
});
