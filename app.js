const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const port = 8080

const app = express();

const historyRoutes = require('./routes/history');
app.use(bodyParser.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/history', historyRoutes);

app.listen(port, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", port);
})