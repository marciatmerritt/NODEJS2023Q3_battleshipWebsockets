import { WebSocket, WebSocketServer } from 'ws';
import dotenv from 'dotenv';
import { registerPlayer, findPlayer } from './models/player';
import { MESSAGE } from './utils/constants';

const wss = new WebSocket.Server({ port: 8181 });

wss.on('connection', (ws: WebSocket) => {
  console.log(MESSAGE.NEW_CLIENT);

  ws.on('message', (message: string) => {
    console.log(`${MESSAGE.RECEIVED_MSG}: ${message}`);
    ws.send(`${MESSAGE.SERVER_RECEIVED_MSG}: ${message}`);
  });

  ws.on('close', () => {
    console.log(MESSAGE.CLOSE_CLIENT);
  });
});
