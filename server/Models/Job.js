const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    company_name: {
        type: String,
        required: true
    },
    company_position: {
        type: String,
        required: true
    },
    company_location: {
        type: String,
        required: true
    },
    company_salary: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Job', JobSchema);