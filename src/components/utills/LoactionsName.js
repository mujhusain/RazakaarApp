import React from 'react';
import {Alert, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function LocationName({name}) {
  return (
    <TouchableOpacity
      onPress={() => Alert.alert(JSON.stringify(name))}
      style={styles.searchResults}>
      <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
        Bagchi Road {name}
      </Text>
      <Text style={{fontSize: 16, color: 'black'}}>Lahore</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  searchResults: {
    height: 48,
    marginVertical: "3%",
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
});
