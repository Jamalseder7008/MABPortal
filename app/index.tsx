import React from 'react';
import { View, Text, StyleSheet, Image, Platform } from 'react-native';


import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

interface PrayerTimes {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
}

interface PrayerTimesProps {
  prayerTimes: PrayerTimes;
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

const examplePrayerTimes: PrayerTimes = {
  Fajr: '05:00 AM',
  Dhuhr: '1:30 PM',
  Asr: '06:00 PM',
  Maghrib: '08:00 PM',
  Isha: '09:30 PM',
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
        <PrayerTimesComponent prayerTimes={examplePrayerTimes} />
      </View>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.subtitle}>Friday Prayers</ThemedText>
      </ThemedView>


      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}


const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  subtitle: {
    fontSize: 25
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

