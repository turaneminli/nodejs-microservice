const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

const events = [];

app.post("/events", (req, res) => {
  const event = req.body;

  events.push(event);

  //posts
  axios.post("http://posts-clusterip-srv:4000/events", event, (err) => {
    console.log("error:" + err);
  });

  //comments
  axios.post("http://comments-clusterip-srv:4001/events", event, (err) => {
    console.log("error:" + err);
  });

  //query
  axios.post("http://query-clusterip-srv:4002/events", event, (err) => {
    console.log("error:" + err);
  });

  //moderation
  axios.post("http://moderation-clusterip-srv:4003/events", event, (err) => {
    console.log("error:" + err);
  });

  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log("Listening on 4005");
});
