import socketIo from 'socket.io';
import { app } from './app';
import { createPlayer, getPlayer, getRoom, getRoomPlayers, joinRoom, leaveRoom } from "./utils/roomUtils";
import { Player } from "./interfaces/Player";
import { Room } from "./interfaces/Room";

const http = require('http').createServer(app);

const io = socketIo(http);

export let rooms: Map<string, Room> = new Map();

io.on('connection', (socket) => {
  const { issued, query: { gameId } } = socket.handshake;

  socket.join(gameId);

  let room = getRoom(gameId);

  socket.emit('info', {
    ...room,
    players: Array.from(room.players || [], ([ name, value]) => value)
  });

  let player: Player;

  socket.on('join', ({ username }) => {
    player = getPlayer(gameId, issued) || createPlayer(gameId, issued, { username });

    joinRoom(player, gameId);

    io.to(gameId).emit('playerJoined', player);
  })

  socket.on('disconnect', () => {
    if (player) {
      leaveRoom(player, gameId);

      io.to(gameId).emit('playerLeaved', player);
    }
  })
});

http.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}!`);
});