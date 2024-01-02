const mongoose = require('mongoose')

const Schema = mongoose.Schema

const alarmStatSchema = new Schema({
    _id:{
        type: Schema.Types.ObjectId,
        required: true
    },
    alarmStatus:{
        lockedStatus:{
            type: Number,
            default: 0
        }
    },
    ts: {
        type: Date,
        required: true
    }
})

