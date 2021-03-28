const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
        console.log(`App running on port ${PORT}!`);
      });
});

// routes
app.use(require("./routes/html-routes.js"));
app.use(require("./routes/api-routes.js"));

// app.post("/submit", ({body}, res) => {
//     const user = new User(body);
//     user.setFullName();
//     user.lastUpdatedDate();
  
//     User.create(user)
//       .then(dbUser => {
//         res.json(dbUser);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });
  
  
