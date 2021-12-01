// store active TCP connection object
let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') { // w
    connection.write("Move: up");
  }
  if (key === 'a') { // a
    connection.write("Move: left");
  }
  if (key === 's') { // s
    connection.write("Move: down");
  }
  if (key === 'd') { // d
    connection.write("Move: right");
  }
  if (key === 'g') {
    connection.write("Say: AAAH");
  }
}

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => {
    handleUserInput(key);
  });
  return stdin;
};

module.exports = {
  setupInput,
}