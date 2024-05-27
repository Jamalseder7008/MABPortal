import React from 'react';

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
    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <text>Prayer Times</text>
      <table style={{ margin: '0 auto', borderCollapse: 'collapse', width: '50%' }}>
        <thead>
          <tr>
            <text style={{ border: '1px solid #ddd', padding: '8px' }}>Prayer</text>
            <text style={{ border: '1px solid #ddd', padding: '8px' }}>Time</text>
          </tr>
        </thead>
        <tbody>
          <tr>
            <text style={{ border: '1px solid #ddd', padding: '8px' }}>Fajr</text>
            <text style={{ border: '1px solid #ddd', padding: '8px' }}>{prayerTimes.Fajr}</text>
          </tr>
          <tr>
            <text style={{ border: '1px solid #ddd', padding: '8px' }}>Dhuhr</text>
            <text style={{ border: '1px solid #ddd', padding: '8px' }}>{prayerTimes.Dhuhr}</text>
          </tr>
          <tr>
            <text style={{ border: '1px solid #ddd', padding: '8px' }}>Asr</text>
            <text style={{ border: '1px solid #ddd', padding: '8px' }}>{prayerTimes.Asr}</text>
          </tr>
          <tr>
            <text style={{ border: '1px solid #ddd', padding: '8px' }}>Maghrib</text>
            <text style={{ border: '1px solid #ddd', padding: '8px' }}>{prayerTimes.Maghrib}</text>
          </tr>
          <tr>
            <text style={{ border: '1px solid #ddd', padding: '8px' }}>Isha</text>
            <text style={{ border: '1px solid #ddd', padding: '8px' }}>{prayerTimes.Isha}</text>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

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
    <div>
      <PrayerTimesComponent prayerTimes={examplePrayerTimes} />
    </div>
  );
};

export default App;
