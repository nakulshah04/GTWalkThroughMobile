import { Stack } from "expo-router";
// Importing React to use JSX
import React, { useState } from "react";
// Importing components from react-nartive-maps
import MapView, { Polygon, PROVIDER_GOOGLE } from "react-native-maps";
// Importing components from react-native
// https://reactnative.dev/docs/components-and-apis
import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";

// Default: gets rendered on the screen
// Component called HomeScreen
export default function HomeScreen() {
  // Holds the list of coordinates
  const [zoneCoords, setZoneCoords] = useState([]);
  // Boolean for if user is in drawing mode or not
  const [drawing, setDrawing] = useState(false);
  // Boolean for if the submission form is shown after const zone is drawn
  const [modalVisible, setModalVisible] = useState(false);
  // Text that the user types into the input field
  const [description, setDescription] = useState("");

  // Callback function for when the user taps on the map
  const handleMapPress = (e) => {
    if (drawing) {
      setZoneCoords([...zoneCoords, e.nativeEvent.coordinate]);
    }
  };

  const handleSubmitZone = () => {
    console.log("Submitting zone:", { zoneCoords, description });
    setModalVisible(false);
    setDrawing(false);
    setZoneCoords([]);
    setDescription("");
  };

  return (
    <>
      <Stack.Screen options={{ title: "GT WalkThrough" }} />
      
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          provider={PROVIDER_GOOGLE}
          onPress={handleMapPress}
          initialRegion={{
            latitude: 33.7756,
            longitude: -84.3963,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          {zoneCoords.length > 0 && (
            <Polygon
              coordinates={zoneCoords}
              strokeColor="red"
              fillColor="rgba(255,0,0,0.4)"
              strokeWidth={2}
            />
          )}
        </MapView>

        <View style={styles.buttonContainer}>
          <Button
            title={drawing ? "Finish Drawing" : "Add Zone"}
            onPress={() => {
              if (drawing && zoneCoords.length > 2) {
                setModalVisible(true);
              } else {
                setDrawing(true);
                setZoneCoords([]);
              }
            }}
          />
        </View>

        <Modal visible={modalVisible} animationType="slide" transparent>
          <View style={styles.modalContainer}>
            <View style={styles.modalBox}>
              <Text style={styles.modalTitle}>Zone Details</Text>
              <TextInput
                placeholder="Description"
                style={styles.input}
                value={description}
                onChangeText={setDescription}
              />
              <Button title="Submit Zone" onPress={handleSubmitZone} />
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    bottom: 40,
    left: 20,
    right: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalBox: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});