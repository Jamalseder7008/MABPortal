// controller.js
const fs = require('fs');
const { PrayerTime } = require('./models');

async function fetchDataAndWriteToFile(docId) {
  try {
    const doc = await PrayerTime.findById(docId).exec();
    if (!doc) {
      console.log("No document found with the given ID.");
      return;
    }

    const { _id, ...dataWithoutId } = doc.toObject(); // Exclude _id field
    const data = JSON.stringify(dataWithoutId, null, 2);

    fs.writeFile('backend/out_file.json', data, (err) => {
      if (err) {
        console.log('Error writing to file:', err);
      } else {
        console.log('Done writing to file.');
      }
    });
  } catch (err) {
    console.error('Error during database operations:', err);
  }
}

module.exports = { fetchDataAndWriteToFile };
