const express = require('express')
const {getAlarms} = require('../controllers/alarmControllers')
const router = express.Router()

//get all the alarm status
router.get('/', (req, res) => {
    console.log('App Object:', req.app);
    getAlarms(req, res);
  });

//get one alarm status
router.get('/:id', (req,res) => {
    res.json({mssg: 'get one alarm status'})
})


module.exports = router 