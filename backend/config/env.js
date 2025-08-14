const dotenv = require('dotenv');

dotenv.config();

const config = {
  PORT: process.env.PORT || 3000,
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'https://assignment-nu-ashy.vercel.app/'
};

module.exports = config;


