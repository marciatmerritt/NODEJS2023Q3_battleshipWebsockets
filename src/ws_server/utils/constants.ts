export enum ERROR {
  HASH = 'Error generate hash value',
  LOGIN = 'Login already exists',
  LOGIN_OR_PASS_LESS = 'Login or password less 5 letter',
}

export enum MESSAGE {
  START_SERVER = 'Start websocket server on ',
  NEW_CLIENT = 'New client connected',
  RECEIVED_MSG = 'Received message',
  SERVER_RECEIVED_MSG = 'Server received your message',
  CLOSE_CLIENT = 'Client Disconnected',
}

export enum MessageType {
  REG = 'reg',
  CREATE_GAME = 'create_game',
  START_GAME = 'start_game',
  TURN = 'turn',
  ATTACK = 'attack',
  RANDOM_ATTACK = 'randomAttack',
  FINISH = 'finish',
  UPDATE_ROOM = 'update_room',
  UPDATE_WINNERS = 'update_winners',
  CREATE_ROOM = 'create_room',
  ADD_USER_TO_ROOM = 'add_user_to_room',
  ADD_SHIPS = 'add_ships',
  SINGLE_PLAY = 'single_play',
}

export const MAX_USERS_IN_ROOM = 2;

export const bot = {
  name: 'SkyNet',
  password: 'password',
};
