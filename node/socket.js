const io = require("socket.io");

const socket = new io();
socket.listen(8000);

module.exports = socket;
