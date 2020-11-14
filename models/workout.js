const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
    type: {
        type: String
    },
    name: {
        type: String
    },
    duration: {
        type: Number,
        allowNull: true
    },
    distance: {
        type: Number,
        allowNull: true
    },
    weight: {
        type: Number,
        allowNull: true
    },
    sets: {
        type: Number,
        allowNull: true
    },
    reps: {
        type: Number,
        allowNull: true
    }
}]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;