import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';

const data = [
  {label: 'Location 1', value: '1'},
  {label: 'Location 2', value: '2'},
  {label: 'Location 3', value: '3'},
  {label: 'Location 4', value: '4'},
  {label: 'Location 5', value: '5'},
  {label: 'Location 6', value: '6'},
  {label: 'Location 7', value: '7'},
  {label: 'Location 8', value: '8'},
];

export const DropdownComponent = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={{color:'gray'}} >Find event in</Text>
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
        placeholderStyle={styles.placeholderStyle}
        dropdownStyle={styles.dropdownStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select Location' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <Icon
            style={styles.icon}
            color={isFocus ? 'blue' : 'black'}
            name="map-marker"
            size={20}
          />
        )}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  dropdown: {
    width: 150,
    borderColor: 'white',
  },
  icon: {
    marginRight: 8,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    color: 'black',
    borderWidth:1
  },
  placeholderStyle: {
    fontSize: 16,
    color:"gray"
  },
  selectedTextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color:'black'
  },
  dropdownStyle:{
    color:'black',
    borderRadius:5,
    borderWidth:1,
  }
  
});
