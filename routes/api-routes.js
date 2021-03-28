const router = require("express").Router();

const Workout = require("../models/Workout.js");

module.exports = function (app) {

    router.get("/api/workouts", (req, res) => {
        Workout.find({})
          .sort({ date: -1 })
          .then(FitnessTrackerDB => {
            res.json(FitnessTrackerDB);
          })
          .catch(err => {
            res.status(400).json(err);
          });
      });

    // app.create("/api/workouts/", (req, res) => {
    //     Workout.create({})
    //     .then(data => {
    //         res.json(data);
    //     })
    //     .catch(err => {
    //         res.json(err);
    //     });
    // });
    
    router.post("/api/workouts/", ({ body }, res) => {
        Workout.insertMany(body)
          .then(FitnessTrackerDB => {
            res.json(FitnessTrackerDB);
          })
          .catch(err => {
            res.status(400).json(err);
          });
      });

    router.get('/api/workouts/range', (req, res) => {
        Workout.aggregate([
          {
            $addFields: {
              totalDuration: {
                $sum: '$exercises.duration',
              },
            },
          },
        ])
          .sort({ _id: -1 })
          .limit(7)
          .then((dbWorkouts) => {
            console.log(dbWorkouts);
            res.json(dbWorkouts);
          })
          .catch((err) => {
            res.json(err);
          });
      });

};