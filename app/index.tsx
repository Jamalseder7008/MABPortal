import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';

interface PrayerTimes {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
}

interface FridayPrayerTimes {
  Darussalaam: string;
  MasjidAbuBakr: string;
}

const HomeScreen = () => {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimes | null>(null);
  const [fridayPrayerTimes, setFridayPrayerTimes] = useState<FridayPrayerTimes | null>(null);

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const data = require('../backend/prayerTimes.json'); // Update path if necessary
        setPrayerTimes(data);
      } catch (error) {
        console.error('Error fetching prayer times:', error);
      }
    };

    const fetchFridayPrayerTimes = async () => {
      try {
        const data = require('../backend/fridayPrayerTimes.json'); // Update path if necessary
        setFridayPrayerTimes(data);
      } catch (error) {
        console.error('Error fetching Friday prayer times:', error);
      }
    };

    fetchPrayerTimes();
    fetchFridayPrayerTimes();
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#d3d3d3', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/JMA_Logo.png')}
          style={styles.jmaLogo}
        />
      }>
      <View style={{ flex: 1 }}>
        <PrayerTimesComponent prayerTimes={prayerTimes} />
        <FridayPrayerTimesComponent fridayPrayerTimes={fridayPrayerTimes} />
      </View>
    </ParallaxScrollView>
  );
};

const PrayerTimesComponent: React.FC<{ prayerTimes: PrayerTimes | null }> = ({ prayerTimes }) => {
  if (!prayerTimes) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Daily Prayer Times</Text>
      <View style={styles.table}>
        {Object.entries(prayerTimes).map(([prayer, time]) => (
          <View key={prayer} style={styles.row}>
            <Text style={styles.cell}>{prayer}</Text>
            <Text style={styles.cell}>{time}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const FridayPrayerTimesComponent: React.FC<{ fridayPrayerTimes: FridayPrayerTimes | null }> = ({ fridayPrayerTimes }) => {
  if (!fridayPrayerTimes) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Friday Prayer Times</Text>
      <View style={styles.table}>
        {Object.entries(fridayPrayerTimes).map(([mosque, time]) => (
          <View key={mosque} style={styles.row}>
            <Text style={styles.cell}>{mosque}</Text>
            <Text style={styles.cell}>{time}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 25,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  table: {
    width: '80%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  cell: {
    fontSize: 18,
  },
  jmaLogo: {
    width: 150, // Set your desired width
    height: 150, // Set your desired height
    alignSelf: 'center',
    marginTop: 60,
    resizeMode: 'contain', // Optional: to ensure the image scales properly
    marginBottom: 30,
  },
});

export default HomeScreen;
