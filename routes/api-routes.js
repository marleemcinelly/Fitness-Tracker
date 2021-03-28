const path = require("path");

const Workout = require("../models/Workout.js");

module.exports = function (app) {

    app.get("/api/workouts", (req, res) => {
        Workout.find()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.create("/api/workouts/", (req, res) => {
        Workout.create({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
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