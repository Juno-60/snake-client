const net = require('net');
const { IP, PORT } = require("./constants");

const connect = function() {
  // establishes a connection with the server
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  })  
  // return success message if connected
  conn.on("connect", () => {
    console.log("Successfully connected!");
  });
  conn.on("connect", () => {
    conn.write("Name: N.R");
  });
  // interpret incoming data as text:
  conn.setEncoding('utf8');
  conn.on("data", (data) => {
    console.log(data);
  }) 
  return conn;
};

module.exports = { 
  connect,
};