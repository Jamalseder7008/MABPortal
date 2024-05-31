import React from 'react';
import { View, Text, StyleSheet, Image, Platform } from 'react-native';


import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

// index.tsx
import { AppRegistry } from 'react-native';
import App from '../src/App'; // Ensure this path is correct
import { name as appName } from '../package.json'; // Use package.json for Expo projects

AppRegistry.registerComponent(appName, () => App);



interface PrayerTimes {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
}

interface fridayPrayers{
  MasjidAbuBakr: string;
  Darussalaam: string;
}

interface PrayerTimesProps {
  prayerTimes: PrayerTimes;
}

interface FridayPrayerTimesProps {
  fridayPrayers: fridayPrayers;
}


const PrayerTimesComponent: React.FC<PrayerTimesProps> = ({ prayerTimes }) => {
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

const dailyPrayerTimes: PrayerTimes = {
  Fajr: '5:00 AM',
  Dhuhr: '1:30 PM',
  Asr: '6:00 PM',
  Maghrib: '8:00 PM',
  Isha: '9:30 PM',
};

const FridayPrayerTimesComponent: React.FC<FridayPrayerTimesProps> = ({ fridayPrayers }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Friday Prayer Times</Text>
      <View style={styles.table}>
        {Object.entries(fridayPrayers).map(([prayer, time]) => (
          <View key={prayer} style={styles.row}>
            <Text style={styles.cell}>{prayer}</Text>
            <Text style={styles.cell}>{time}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const fridayPrayerTimes: fridayPrayers = {
  Darussalaam: '1:30 PM',
  MasjidAbuBakr: '2:00 PM',
};


export default function HomeScreen() {
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
        <PrayerTimesComponent prayerTimes={dailyPrayerTimes} />
      </View>

      <View style={{ flex: 1 }}>
        <FridayPrayerTimesComponent fridayPrayers={fridayPrayerTimes} />
      </View>


    </ParallaxScrollView>
  );
}


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

