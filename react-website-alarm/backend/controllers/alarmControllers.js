
const mongoose = require('mongoose');
let recentInsert = null;
let changeStream; // Define changeStream variable at the top
function sendPushNotificationToClient(message) {
    if ('Notification' in window) {
        // Check if the browser supports notifications
        if (Notification.permission === 'granted') {
          // If permission is granted, show the notification
          new Notification('Lock Status Changed!', {
            body: message,
            // Other notification options like icon, image, etc.
          });
        } else if (Notification.permission !== 'denied') {
          // If permission is not granted or denied, request permission
          Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
              // Permission granted, show the notification
              new Notification('Lock Status Changed!', {
                body: message,
                // Other notification options like icon, image, etc.
              });
            }
          });
        }
      } else {
        console.log('Notifications are not supported in this browser.');
        // Handle cases where notifications are not supported
      }
  }

function setUpChangeStream(alarmsCollection) {
  // Set up change stream on your collection
  changeStream = alarmsCollection.watch();

  // Set up change stream listener BEFORE performing any queries or actions
  changeStream.on('change', (change) => {
    // Trigger push notification logic here
    const recentEntry = change.fullDocument
    console.log('Change detected:', change);
    console.log('recent entry:', recentEntry)
    recentInsert = recentEntry
    const currentLockStatus = recentEntry?.alarmStatus?.lockedStatus;

    
  });
}
//get all alarms
const getAlarms = async(req,res) => {
    try {
        
        const db = req.app.get('db'); // Access the existing Mongoose connection from app
        const alarmStatusDb = mongoose.connection.useDb('alarmStatus');
        const alarmsCollection = alarmStatusDb.collection('lockedStatus');
        
        // Set up change stream on your collection
        const changeStream = alarmsCollection.watch();
        if (!changeStream) {
            setUpChangeStream(alarmsCollection); // Initialize change stream if not already initialized
          }

        // Set up change stream listener BEFORE performing any queries or actions
        changeStream.on('change', (change) => {
            // Trigger push notification logic here
            const recentEntry = change.fullDocument
            console.log('Change detected:', change);
            console.log('recent entry:', recentEntry)
            recentInsert = recentEntry

            //sendPushNotification(change); // Call function to send push notification
        });


        const alarms = await alarmsCollection.find({}).toArray();
        res.status(200).json(alarms);
      } catch (error) {
        console.error('Error:', error); // Log the error
        res.status(500).json({ error: error.message });
      }
}
// Function to return the current value of recentInsert
function getRecentInsert() {
    return recentInsert;
}


module.exports = {
    getAlarms,
    recentInsert,
    setUpChangeStream
 
}