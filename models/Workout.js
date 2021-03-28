const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: Date,
  exercises: [
      {
            type: {
              type: String,
              required: "Exercise type is required",
              trim: true
            },
            name: {
            type: String,
            required: "Name is required",
            trim: true
            },
            duration: {
                type: Integer,
                required: "Duration is required"
            },
            weight: {
                type: Integer,
                required: "Weight is required"
            },
            reps: {
                type: Integer,
                required: "Reps is required"
            },
            sets: {
                type: Integer,
                required: "Sets is required"
            },
            distance: {
                type: Integer,
            }
      }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
