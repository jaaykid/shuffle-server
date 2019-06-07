// config.js
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  client_id: process.env.client_id,
  client_secret: process.env.client_secret,
  redirect_uri: process.env.redirect_uri,
  port: process.env.PORT
};