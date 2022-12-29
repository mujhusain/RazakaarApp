import { useState } from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CustomInput({
  placeholder,
  name,
  value,
  onChangeText,
  onBlur,
  iconName,
  secureTextEntry = false,
}) {
    const [showPassword,setShowPassword]=useState(false);
  return (
    <View style={[styles.inputField, {marginTop: '6%'}]}>
      <View style={styles.icon}>
        <Icon name={iconName} size={24} color="gray" />
      </View>
      <TextInput
        name={name}
        placeholder={placeholder}
        style={styles.textInput}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        secureTextEntry={showPassword?false:secureTextEntry}
      />
      <View style={[styles.icon,placeholder!=='Password'? {display:'none'}:null]}>
        <Icon onPress={()=>setShowPassword((prev)=>!prev)} name={showPassword?'eye-slash':'eye'} size={23} color="gray" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  textInput: {
    borderColor: 'gray',
    borderLeftWidth: 1,
    height: 40,
    fontSize: 16,
    width: '76%',
    paddingLeft: 20,
    marginLeft: 10,
  },
  icon: {
    width: 23,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 6,
  },
});
