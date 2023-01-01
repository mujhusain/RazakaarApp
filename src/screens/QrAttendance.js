// 'use strict';
import React from 'react';
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function QrAttendance({navigation}) {
  async function takePicture(camera) {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);
    //  eslint-disable-next-line
    console.log(data.uri);
  }
  return (
    <>
      <Icon.Button
        onPress={() => navigation.goBack()}
        name="arrow-left"
        backgroundColor="gray"
        color="white"
        style={{marginHorizontal: 15, paddingTop: 10, width: '10%'}}
      />
      <View style={styles.container}>
        <View style={StyleSheet.textContainer}>
          <Text style={styles.title}>Blood Drive - Attendance</Text>
          <Text style={styles.instruction}>
            Scan the QR Code as shown by Orgnizers
          </Text>
        </View>
        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({barcodes}) => {
            if (barcodes.length > 0) {
              const [{data}] = barcodes;
              Alert.alert(data);
            }
          }}>
          {/* {({ camera, status, recordAudioPermissionStatus }) => {
            if (status !== 'READY') return <ActivityIndicator />;
            return (
              <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => takePicture(camera)} style={styles.capture}>
              <Text style={{ fontSize: 14 }}> SNAP </Text>
              </TouchableOpacity>
              </View>
              );
            }} */}
        </RNCamera>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  preview: {
    // flex: 1,
    height: '35%',
    width: '75%',
    marginBottom: '25%',
    overflow: 'hidden',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  textContainer: {},
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  instruction: {
    fontSize: 16,
    color: '#333333',
    color: 'black',
    marginBottom: '10%',
  },
});
