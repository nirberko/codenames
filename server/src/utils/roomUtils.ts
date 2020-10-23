import { Player, Team } from "../interfaces/Player";
import { rooms } from "../server";
import { Room } from "../interfaces/Room";

export const getRoomPlayers = (room): Map<string, Player> => room?.players || new Map();

export const getRoom = (gameId): Room => {
  if (rooms.has(gameId)) {
    return <Room>rooms.get(gameId);
  }

  const room: Room = {
    started: false
  }

  rooms.set(gameId, room)

  return room
};

export const getPlayer = (gameId, issued) => {
  const room = getRoom(gameId);

  return room.players?.get(issued);
}

export const getTeams = (room: Room): {
  [Team.BLUE]: Player[];
  [Team.RED]: Player[]
} => {
  const getTeam = team => Array.from(
    getRoomPlayers(room),
    ([_, player]) => player
  ).filter((player) => player.team === team)

  return {
    [Team.BLUE]: getTeam(Team.BLUE),
    [Team.RED]: getTeam(Team.RED)
  }
}

export const createPlayer = (gameId, issued, { username }) => {
  const room = getRoom(gameId);
  const teams = getTeams(room);

  return {
    issued,
    username,
    team: teams[Team.BLUE].length > teams[Team.RED].length ? Team.RED : Team.BLUE
  }
}

export const joinRoom = (player, gameId) => {
  const room = getRoom(gameId);

  if (!room) return;
  let players = getRoomPlayers(room);

  players.set(player.issued, player);

  rooms.set(gameId, {
    ...room,
    players
  })
}

export const leaveRoom = (player, gameId) => {
  const room = getRoom(gameId);

  if (!room) return;

  let players = getRoomPlayers(room);

  players.delete(player.issued);

  rooms.set(gameId, {
    ...room,
    players
  })
}