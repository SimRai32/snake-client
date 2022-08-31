const { clear } = require("console");
const { clearInterval } = require("timers");

let connection;
let movementX;
let movementY;
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = function (key) {
  console.log(key);
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    clearInterval(movementX);
    movementY = setInterval(() => {connection.write("Move: up")}, 50);
  }
  if (key === 's') {
    clearInterval(movementX);
    movementY = setInterval(() => {connection.write("Move: down")}, 50);
  }
  if (key === 'a') {
    clearInterval(movementY);
    movementX = setInterval(() => {connection.write("Move: left")}, 50);
  }
  if (key === 'd') {
    clearInterval(movementY);
    movementX = setInterval(() => {connection.write("Move: right")}, 50);
  }
  if (key === 'h') {
    connection.write("Say: Hello");
  }
  if (key === 'm') {
    connection.write("Say: maan");
  }
};

module.exports = {
  setupInput
};