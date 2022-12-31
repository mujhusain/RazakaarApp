import React from 'react';
import {Text, StyleSheet} from 'react-native';
import COLORS from '../../constants';

export default function NewTag({visibility}) {
  return (
    <Text style={[styles.text, !visibility && {display: 'none'}]}>New</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: COLORS.green,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
});
