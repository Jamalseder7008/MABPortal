const mongoose = require('mongoose');

const prayerTimeSchema = new mongoose.Schema({
  Fajr: { type: String, required: true },
  Dhuhr: { type: String, required: true },
  Asr: { type: String, required: true },
  Maghrib: { type: String, required: true },
  Isha: { type: String, required: true },
});

const fridayPrayerTimeSchema = new mongoose.Schema({
  Darussalaam: { type: String, required: true },
  MasjidAbuBakr: { type: String, required: true },
});

const PrayerTime = mongoose.model('PrayerTime', prayerTimeSchema, 'PrayerTimesCollection');
const FridayPrayerTime = mongoose.model('FridayPrayerTime', fridayPrayerTimeSchema, 'FridayPrayerTimesCollection');

module.exports = { PrayerTime, FridayPrayerTime };
