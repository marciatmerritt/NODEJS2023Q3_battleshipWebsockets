import { WebSocketServer } from 'ws';
import { registerPlayer } from '../models/player'; // Adjust your path

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    const parsedMessage = JSON.parse(message.toString());

    if (parsedMessage.type === 'reg') {
      const { name, password } = parsedMessage.data;
      const result = registerPlayer(name, password);
      ws.send(
        JSON.stringify({
          type: 'reg',
          data: {
            name,
            index: result.index,
            error: result.error,
            errorText: result.errorText || '',
          },
          id: 0,
        }),
      );
    }
  });
});
