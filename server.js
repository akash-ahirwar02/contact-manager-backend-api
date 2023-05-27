const express = require("express");
const app = express();
const mongo = require("mongoose");
const PORT = process.env.PORT || 5000;
const routes = require("./routes/userRoutes")

const cors = require("cors")

app.use(cors())


app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Connect mongodb with nodejs

const uri = `mongodb://erakash7566:root12345@ac-gpydea4-shard-00-00.3vyf8og.mongodb.net:27017,ac-gpydea4-shard-00-01.3vyf8og.mongodb.net:27017,ac-gpydea4-shard-00-02.3vyf8og.mongodb.net:27017/?ssl=true&replicaSet=atlas-12l9lk-shard-0&authSource=admin&retryWrites=true&w=majority`


mongo
  .connect(uri)
  .then(() => {
    console.log("mongodb connect");
  })
  .catch((err) => {
    console.log(err);
  });








app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Server is running on port 5000");
});


app.use(routes);
