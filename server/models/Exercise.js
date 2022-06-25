const { Schema, model } = require('mongoose');

const exerciseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    sets: {
        type: String,
        required: true
    },
    reps: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    }
})

const Exercise = model('Exercise', exerciseSchema);
module.exports = Exercise;