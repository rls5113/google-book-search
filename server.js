const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
require("./routes/api-routes")(app);
//Connect to mongo db
const mongoose = require("mongoose");
// const mongoURL = process.env.MONGODB_URI || "mongodb://user1:Password123@ds237267.mlab.com:37267/heroku_n56w7j3c";
const mongoURL = process.env.MONGODB_URI || "mongodb://localhost/google-book-search";
mongoose.connect(mongoURL , {useNewUrlParser:true})
.then(() => {
  console.log("Successfully connected to Mongo DB");
})
.catch((err) => {
  console.log(`Error connecting to Mongo DB: ${err}`);
});


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
