import { Server } from 'socket.io';
import { eventBus } from '../events/eventBus';

export function setupLiveSocket(io: Server) {
  eventBus.on('live.chat', (data) => io.emit('live.chat', data));
  eventBus.on('live.gift', (data) => io.emit('live.gift', data));
  eventBus.on('live.like', (data) => io.emit('live.like', data));
  eventBus.on('live.follow', (data) => io.emit('live.follow', data));
  eventBus.on('live.social', (data) => io.emit('live.social', data));
  eventBus.on('live.member', (data) => io.emit('live.member', data));
  eventBus.on('live.end', () => io.emit('live.end'));
}