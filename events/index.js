const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/events", (req, res) => {
  const event = req.body;
  // console.log(req.body);
  // console.log(event);
  axios.post("http://localhost:4000/events", event, (err) => {
    console.log("error:" + err);
  });
  axios.post("http://localhost:4001/events", event, (err) => {
    console.log("error:" + err);
  });
  axios.post("http://localhost:4002/events", event, (err) => {
    console.log("error:" + err);
  });

  res.send({ status: "OK" });
});

app.listen(4005, () => {
  console.log("Listening on 4005");
});
