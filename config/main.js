module.exports = {
  // Secret key for JWT signing and encryption
  secret: 'helloworld#2017',
  // Setting port for server
  port: process.env.Port || 3000,
  // Database connection information
  database: 'mongodb://localhost:27017/dct-code'
};
