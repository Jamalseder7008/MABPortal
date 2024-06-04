const fs = require('fs');
const { PrayerTime, FridayPrayerTime } = require('../models/prayerModels');

async function fetchDataAndWriteToFile(docId, filename, model) {
  try {
    const doc = await model.findById(docId).exec();
    if (!doc) {
      console.log("No document found with the given ID.");
      return;
    }

    const { _id, ...dataWithoutId } = doc.toObject(); // Exclude _id field
    const data = JSON.stringify(dataWithoutId, null, 2);

    fs.writeFile(`backend/${filename}`, data, (err) => {
      if (err) {
        console.log('Error writing to file:', err);
      } else {
        console.log(`Done writing to file: ${filename}`);
      }
    });
  } catch (err) {
    console.error('Error during database operations:', err);
  }
}

module.exports = { fetchDataAndWriteToFile };
