const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host:  'localhost', //IP Address here
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('data', (data) => {
    console.log(data);
  })
  conn.on('connect', () => {
    console.log("Successfully connected!!");
    conn.write("Name: SPK");
  })
  // conn.on('connect', () => {
  //   setInterval(() => {conn.write("Move: up")}, 50);
  // })

  return conn;
};

module.exports = {
  connect,
};

