import { WebcastPushConnection } from 'tiktok-live-connector';
import { eventBus } from '../events/eventBus';

export class LiveManager {
  private connection: WebcastPushConnection | null = null;

  async connect(username: string) {
    if (this.connection) {
      throw new Error('Live já conectada');
    }

    this.connection = new WebcastPushConnection(username);
    this.registerListeners();

    return this.connection.connect();
  }

  private registerListeners() {
    if (!this.connection) return;

    this.connection.on('chat', (data) => {
      eventBus.emit('live.chat', data);
    });

    this.connection.on('gift', (data) => {
      eventBus.emit('live.gift', data);
    });

    this.connection.on('like', (data) => {
      eventBus.emit('live.like', data);
    });

    this.connection.on('follow', (data) => {
      eventBus.emit('live.follow', data)
    });

    this.connection.on('social', (data) => {
      eventBus.emit('live.social', data)
    });
    
    this.connection.on('member', (data) => {
      eventBus.emit('live.member', data)
    });
  }

  disconnect() {
    this.connection?.disconnect();
    this.connection = null;
  }

  isConnected() {
    return !!this.connection;
  }
}

export const liveManager = new LiveManager();