import { Axios } from 'axios';

var axios = require('axios');

var config = {
  method: 'get',
  url: '/nearbysearch/json?location=${state.latitude}%2C${state.longitude}&radius=1500&type=restaurant&keyword=cruise&key=YOUR_API_KEY',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});