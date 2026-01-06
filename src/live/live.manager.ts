import { WebcastPushConnection } from 'tiktok-live-connector';
import { eventBus } from '../events/eventBus';

export class LiveManager {
  private connection: WebcastPushConnection | null = null;
  private username: string | null = null;

  private reconnectAttempts = 0;
  private readonly MAX_RECONNECT_ATTEMPTS = 2;
  private readonly RECONNECT_DELAY = 30_000; // 30 segundos
  private reconnecting = false;

  async connect(username: string) {
    if (this.connection) {
      throw new Error('Live já conectada');
    }

    this.username = username;
    this.connection = new WebcastPushConnection(username);
    this.registerListeners();

    return this.connection.connect();
  }

  private registerListeners() {
    if (!this.connection) return;

    // ==========================
    // DISCONNECTED (com retry)
    // ==========================
    this.connection.on('disconnected', async () => {
      console.log('⚠️ Live desconectada');

      if (this.reconnecting) return;
      this.reconnecting = true;

      while (this.reconnectAttempts < this.MAX_RECONNECT_ATTEMPTS) {
        this.reconnectAttempts++;
        console.log(`🔄 Tentando reconectar (${this.reconnectAttempts}/${this.MAX_RECONNECT_ATTEMPTS})`);

        await this.delay(this.RECONNECT_DELAY);

        try {
          this.connection = new WebcastPushConnection(this.username!);
          this.registerListeners();
          await this.connection.connect();

          console.log('✅ Reconectado com sucesso');
          this.resetReconnectState();
          return;
        } catch (err) {
          console.log('❌ Falha ao reconectar');
        }
      }

      // ❌ Falhou todas as tentativas
      console.log('🛑 Live encerrada definitivamente');
      eventBus.emit('live.end');
      this.disconnect();
    });

    // ==========================
    // ERROS
    // ==========================
    this.connection.on('error', (err) => {
      eventBus.emit('live.error', err);
    });

    // ==========================
    // EVENTOS DA LIVE
    // ==========================
    this.connection.on('chat', data => eventBus.emit('live.chat', data));
    this.connection.on('gift', data => eventBus.emit('live.gift', data));
    this.connection.on('like', data => eventBus.emit('live.like', data));
    this.connection.on('follow', data => eventBus.emit('live.follow', data));
    this.connection.on('social', data => eventBus.emit('live.social', data));
    this.connection.on('member', data => eventBus.emit('live.member', data)); // join = entrou na live
  }

  // ==========================
  // HELPERS
  // ==========================
  private resetReconnectState() {
    this.reconnectAttempts = 0;
    this.reconnecting = false;
  }

  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  disconnect() {
    this.connection?.disconnect();
    this.connection = null;
    this.username = null;
    this.resetReconnectState();
  }

  isConnected() {
    return !!this.connection;
  }
}

export const liveManager = new LiveManager();
