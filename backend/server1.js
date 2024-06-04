const express = require('express');
const MongoCli = require('./mongo-client.js');

const server = async () => {
  const app = express();

  await MongoCli.init();

  app.route("/:topic_wanted").get(async (req, res) => {
    // we now know the collection is named 'tasks'
    // then, .find({topic: req.params.topic_wanted}) indicates we want all the results where the key 'topic' corresponds to req.params.topic_wanted
    // finally, we call .toArray() to transform a Cursor to a human-readable array
    const tasks = await MongoCli.db.collection('PrayerTimesCollection').find({topic: req.params.topic_wanted}).toArray();
    // making sure we got what we needed
    console.log(tasks);
    // return a HTTP 200 OK, along with the results we just queried
    res.status(200).json(tasks);
  });
  return app;
};

module.exports = server;