const Alarm = require('../models/alarmStat')
const mongoose = require('mongoose');
//get all alarms
const getAlarms = async(req,res) => {
    try {
        
        const db = req.app.get('db'); // Access the existing Mongoose connection from app
        const alarmsCollection = db.collection('lockedStatus');
        const alarms = await alarmsCollection.find({}).toArray();
        console.log('DB Name:', db.name);
        console.log('result:', alarms)
        res.status(200).json(alarms);
      } catch (error) {
        console.error('Error:', error); // Log the error
        res.status(500).json({ error: error.message });
      }
}


module.exports = {
    getAlarms
}