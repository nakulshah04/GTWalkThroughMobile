import { db } from '@/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

type Zone = {
  id: string;
  description: string;
  coordinates: { latitude: number; longitude: number }[];
};

export default function ReportsScreen() {
  const [zones, setZones] = useState<Zone[]>([]);

  useEffect(() => {
    const fetchZones = async () => {
      const snapshot = await getDocs(collection(db, 'constructionZones'));
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as Zone[];
      setZones(data);
    };

    fetchZones();
  }, []);

  const renderItem = ({ item }: { item: Zone }) => (
    <View style={styles.zoneCard}>
      <Text style={styles.desc}>{item.description}</Text>
      <Text style={styles.coordCount}>{item.coordinates.length} points</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Submitted Zones</Text>
      <FlatList
        data={zones}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={styles.empty}>No zones yet.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  zoneCard: {
    backgroundColor: '#f4f4f4',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  desc: { fontSize: 16, fontWeight: '600' },
  coordCount: { fontSize: 12, color: '#666', marginTop: 5 },
  empty: { textAlign: 'center', marginTop: 50, color: '#999' },
});