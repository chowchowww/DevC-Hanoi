import React, { useState, useEffect, useMemo } from 'react';
import MapView from 'react-native-maps';
import { View, StyleSheet, Dimensions, Modal, Text, Button, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import Lightbox from 'react-native-lightbox';

export default function Map({latitude, longitude}) {
  const [marker, setMarker] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [temp, setTemp] = useState({});
  const [image, setImage] = useState('');

  const getCameraPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };
  useMemo(() => getCameraPermissionAsync(),[]);

  const handleLongPress = (e) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setShowModal(true);
    setTemp({
      name: `Marker ${marker.length+1}`,
      latitude,
      longitude
    });
  };

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setImage(result.uri);
      }
      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

  const submitMarker = (t) => {
    console.log(t);
    setMarker(marker.concat({
      name: t.temp.name,
      latitude: t.temp.latitude,
      longitude: t.temp.longitude,
      uri: t.image
    }))
    setShowModal(false);
    setImage('');
    setTemp({});
  }

  return (
    <View>
      <MapView
        style={styles.mapStyle}
        provider='google'
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        onLongPress={e => handleLongPress(e)}
      >
        {
          (marker.length > 0) && marker.map((item, index) => (
            <MapView.Marker
              key={index}
              coordinate= {{
                latitude: item.latitude,
                longitude: item.longitude
              }}
            >
              <MapView.Callout tooltip style={styles.calloutStyle}>
                <View style={styles.bubble}>
                  {item.uri != '' &&
                    <Lightbox underlayColor='black' renderHeader={close => (
                        <TouchableOpacity onPress={close}>
                          <Text style={styles.closeButton}>Close</Text>
                        </TouchableOpacity>
                      )}
                    >
                      <Image resizeMode='contain' source={{ uri: item.uri }} style={{ width: 100, height: 100, alignSelf: 'center' }} />
                    </Lightbox>
                  }
                  <Text style={{ fontSize: 18, color: 'black', textAlign: 'center' }}>{item.name}</Text>
                </View>
              </MapView.Callout>
            </MapView.Marker>
          ))
        }
      </MapView>
      <Modal
        animationType='slide'
        transparent={false}
        visible={showModal}
        style={styles.modalStyle}
      >
        <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 20}}>Add New Marker</Text>
        <Text style={{ textAlign: 'center'}}>Add Picture for</Text>
        <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: 'bold'}}>{temp.name}</Text>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {image != '' && <Image source={{ uri: image }} style={{ width: 200, height: 200, alignSelf: 'center' }} />}
        <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
          <Button title='Add New' onPress={() => submitMarker({ temp, image })}/>
          <Button title='Cancel' onPress={() => setShowModal(false)}/>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  modalStyle: {
    flex: 1,
  },
  calloutStyle: {

  },
  bubble: {
    width: 120,
    flexDirection: 'column',
    alignSelf: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 6,
    borderColor: 'white',
    borderWidth: 0.5,
    marginTop: 32,
  },
  closeButton: {
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    padding: 8,
    borderRadius: 3,
    textAlign: 'center',
    margin: 10,
    alignSelf: 'flex-end',
  },
})