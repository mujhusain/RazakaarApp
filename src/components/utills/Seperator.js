import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default function Seperator({navigation}) {
  return (
    <View style={styles.afterLoginBtn}>
      <View style={styles.horLine} />
      <View style={styles.circle}>
        <Text
          style={{
            color: '#0A8383',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          OR
        </Text>
      </View>
      <View style={styles.horLine} />
    </View>
  );
}

const styles = StyleSheet.create({
  afterLoginBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: '4%',
  },
  horLine: {
    borderWidth: 0.9,
    width: '38%',
    borderColor: '#0A8383',
  },
  circle: {
    borderWidth: 1.5,
    borderColor: 'gray',
    height:40,
    width: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#0A8383',
  },
});
