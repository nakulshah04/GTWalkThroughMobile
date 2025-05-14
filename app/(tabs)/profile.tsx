import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Profile</Text>
      <Text style={styles.label}>Username: <Text style={styles.value}>gtstudent01</Text></Text>
      <Text style={styles.label}>Email: <Text style={styles.value}>student@gatech.edu</Text></Text>
      <Text style={styles.label}>Status: <Text style={styles.value}>Logged In</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  label: { fontSize: 16, fontWeight: '600', marginTop: 10 },
  value: { fontWeight: 'normal', color: '#555' },
});