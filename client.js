const net = require("net");
const { ip, port } = require("./constants");
const connect = function () {
  const conn = net.createConnection({
    host: ip, //IP Address here
    port: port,
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
  

  return conn;
};

module.exports = {
  connect,
};

