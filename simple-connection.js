const io = require('socket.io')({transports: ['websocket']});
const client = require('socket.io-client');

io.listen(3001);

const socket = client('http://localhost:3000', {transports: ['websocket']});

socket.on('connect', () => console.log('connected'));
