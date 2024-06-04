const mongoose = require('mongoose');
const { fetchDataAndWriteToFile } = require('./controllers/controller');
const { PrayerTime, FridayPrayerTime } = require('./models/prayerModels');

// MongoDB connection string
const uri = "mongodb+srv://JamalSederPublic:MasjidApp123@mabportal.zsiydao.mongodb.net/PrayerTimes?retryWrites=true&w=majority&appName=MABPortal";

async function run() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB!");

    // Fetches info from controller and model to write prayer times to app
    const prayerDocId = "665e00ccec5aed6c540c97d4";
    if (!mongoose.Types.ObjectId.isValid(prayerDocId)) {
      console.log("Invalid document ID for prayer times");
      return;
    }
    await fetchDataAndWriteToFile(prayerDocId, 'data/prayerTimes.json', PrayerTime);

    // Fetches info from controller and model to write Friday prayer times to app
    const fridayPrayerDocId = "665e08b0ec5aed6c54221cdb";
    if (!mongoose.Types.ObjectId.isValid(fridayPrayerDocId)) {
      console.log("Invalid document ID for Friday prayer times");
      return;
    }
    await fetchDataAndWriteToFile(fridayPrayerDocId, 'data/fridayPrayerTimes.json', FridayPrayerTime);
    
  } catch (err) {
    console.error('Error during database operations:', err);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB.");
  }
}

run().catch(console.error);
