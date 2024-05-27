import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

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
      <Image style={styles.jmaLogo} source={require('@/assets/images/JMA_Logo.png')}/>
      
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

const styles = StyleSheet.create({
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
    resizeMode: 'contain', // Optional: to ensure the image scales properly
    marginBottom: 30,
  },
});

// Example usage
const examplePrayerTimes: PrayerTimes = {
    Fajr: '05:00 AM',
    Dhuhr: '1:30 PM',
    Asr: '06:00 PM',
    Maghrib: '08:00 PM',
    Isha: '09:30 PM',
};

const App: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <PrayerTimesComponent prayerTimes={examplePrayerTimes} />
    </View>
  );
};

export default App;
