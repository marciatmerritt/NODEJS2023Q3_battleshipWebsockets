interface Player {
    name: string;
    password: string;
    wins: number;
  }
  
  const playersDB: { [key: string]: Player } = {};
  
  export function registerPlayer(name: string, password: string): { error: boolean, errorText?: string, index?: string | number } {
    if (playersDB[name]) {
      return { error: true, errorText: "Player already exists" };
    }
    const newPlayer: Player = { name, password, wins: 0 };
    playersDB[name] = newPlayer;
    return { error: false, index: name };
  }
  
  export function findPlayer(name: string, password: string): { error: boolean, errorText?: string, index?: string | number } {
    const player = playersDB[name];
    if (!player || player.password !== password) {
      return { error: true, errorText: "Invalid login" };
    }
    return { error: false, index: name };
  }
  