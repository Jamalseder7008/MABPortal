// server.js
const mongoose = require('mongoose');
const { fetchDataAndWriteToFile } = require('./controller');

// MongoDB connection string
const uri = "mongodb+srv://JamalSederPublic:MasjidApp123@mabportal.zsiydao.mongodb.net/PrayerTimes?retryWrites=true&w=majority&appName=MABPortal";

async function run() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB!");

    const docId = "665e00ccec5aed6c540c97d4";
    if (!mongoose.Types.ObjectId.isValid(docId)) {
      console.log("Invalid document ID");
      return;
    }

    await fetchDataAndWriteToFile(docId);
  } catch (err) {
    console.error('Error during database operations:', err);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB.");
  }
}

run().catch(console.error);
