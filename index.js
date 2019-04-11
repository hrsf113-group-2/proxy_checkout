const express = require('express');
const path = require('path');
// const bodyparser = require('body-parser');
const morgan = require('morgan');
const axios = require('axios')

const app = express();
app.use(morgan('dev'));

const port = process.env.PORT || 3000;

app.use('/rooms/:room_id', express.static(__dirname));

// app.use(bodyparser.json());

app.get('/rooms/:room_id/reservations', (req, res) => {
    axios.get(`http://localhost:3001/rooms/${req.params.room_id}/reservations`) 
      .then(function (response) {
        res.send(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
});

app.get('/photos/byroom/:roomid/all', (req, res) => {
  console.log('ram!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
  axios.get(`http://localhost:3002/photos/byroom/${req.params.roomid}/all`) 
    .then(function (response) {
      console.log(response, '*************************************************************')
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get('/relatedlisting', (req, res) => {
  axios.get(`http://localhost:3003/relatedlisting`) 
    .then(function (response) {
      res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
});


app.get('/api/locations/:locationID/reviews', (req, res) => {
  axios.get(`http://localhost:3004/api/locations/${req.params.locationID}/reviews`) 
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});


app.listen(port, () => (console.log(`Listening on ${port}`)));