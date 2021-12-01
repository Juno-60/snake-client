const net = require('net');

const connect = function() {
  // establishes a connection with the server
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
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
  return conn;
  })  
};

module.exports = { 
  // net, 
  connect,
};