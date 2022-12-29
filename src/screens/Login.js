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
import Icon from 'react-native-vector-icons/FontAwesome';
import {LoginBtn} from '../components/buttons/LoginBtn';

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
export default function Login() {
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
                <View style={styles.inputField}>
                  <Icon
                    style={styles.icon}
                    name="envelope"
                    size={16}
                    color="black"
                  />
                  <TextInput
                    name="email"
                    placeholder="Email Address"
                    style={styles.textInput}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    keyboardType="email-address"
                  />
                </View>
                {errors.email && touched.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
                <View style={[styles.inputField, {marginTop: '6%'}]}>
                  <Icon
                    style={styles.icon}
                    name="lock"
                    size={24}
                    color="black"
                  />
                  <TextInput
                    name="password"
                    placeholder="Password"
                    style={styles.textInput}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry
                  />
                </View>
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
                  title="Submit"
                  customStyles={{width: '100%',marginTop:"5%"}}
                />
                <View style={styles.afterLoginBtn}>
                  <View style={styles.horLine} />
                  <View style={styles.circle}>
                    <Text
                      style={{
                        color: '#0A8383',
                        fontSize: 18,
                        fontWeight: 'bold',
                      }}>
                      OR
                    </Text>
                  </View>
                  <View style={styles.horLine} />
                </View>
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
  afterLoginBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: '6%',
  },
  horLine: {
    borderWidth: 1,
    width: '38%',
    borderColor: '#0A8383',
  },
  circle: {
    borderWidth: 2,
    borderColor: 'gray',
    height: 50,
    width: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#0A8383',
  },
});
