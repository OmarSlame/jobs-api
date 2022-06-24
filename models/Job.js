const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
    company: {
        type: String,
        required: [true, 'Please provide company name'],
        maclength: 50
    },
    position: {
        type: String,
        required: [true, 'Please provide position'],
        maclength: 100
    },
    status: {
        type: String,
        enum: ['interview', 'declined', 'pending'],
        default: 'pending',
    },
    // 1 user have many jobs -- 1..m relation 
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide user']
    }
    // { timestamps: true } will create 2 propperties createdAt and updatedAt
}, { timestamps: true })

module.exports = mongoose.model('Job', JobSchema)