// models.js
const mongoose = require('mongoose');

const prayerTimeSchema = new mongoose.Schema({
  Fajr: { type: String, required: true },
  Dhuhr: { type: String, required: true },
  Asr: { type: String, required: true },
  Maghrib: { type: String, required: true },
  Isha: { type: String, required: true },
});

const PrayerTime = mongoose.model('PrayerTime', prayerTimeSchema, 'PrayerTimesCollection');

module.exports = { PrayerTime };
