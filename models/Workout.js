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
                type: Number,
                required: "Duration is required"
            },
            weight: {
                type: Number,
                required: "Weight is required"
            },
            reps: {
                type: Number,
                required: "Reps is required"
            },
            sets: {
                type: Number,
                required: "Sets is required"
            },
            distance: {
                type: Number,
            }
      }
  ]
},
{
    toJSON: {
        virtuals:true,
    },
});

WorkoutSchema.virtual("totalDuration").get(() => {
    return this.exercises.reduce((total, exercise) => total + exercise.duration, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
