# ws-monitor

Monitors WebSocket activity (uses to explore ws protocol)

## Usage

```sh
./bin/ws-monitor -p 3000 --hostport=3001
node ./simple-connection
```

Dump :

```
[begin:client]
GET /socket.io/?EIO=3&transport=websocket HTTP/1.1\13\10Connection: Upgrade\13\10Upgrade: websocket\13\10Host: localhost:3000\13\10Sec-WebSocket-Version: 13\13\10Sec-WebSocket-Key: MTMtMTQ3MDMxNzIwNzg1Nw==\13\10Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits\13\10\13\10
[end]
[begin:server]
HTTP/1.1 101 Switching Protocols\13\10Upgrade: websocket\13\10Connection: Upgrade\13\10Sec-WebSocket-Accept: NbSmpmQydiUeexywF0Qn2PTojO8=\13\10Sec-WebSocket-Extensions: permessage-deflate\13\10\13\10
[end]
[begin:server]
\129V0{"sid":"glR_WXB9SSMtol5aAAAA","upgrades":[],"pingInterval":25000,"pingTimeout":60000}
[end]
[begin:server]
\129\240
[end]
[begin:client]
\129\129\247K\150(\197
[end]
[begin:server]
\129\13
[end]
```
