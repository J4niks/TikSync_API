import { eventBus } from '../events/eventBus';
import { 
  TikTokLike, 
  TikTokChat, 
  TikTokGift, 
  TikTokFollow, 
  TikTokSocial, 
  TikTokMember 
} from './live.types';

class LiveService {
  constructor() {
    // usar arrow functions ou bind para manter o "this"
    eventBus.on('live.chat', (data) => this.onChat(data));
    eventBus.on('live.gift', (data) => this.onGift(data));
    eventBus.on('live.like', (data) => this.onLike(data));
    eventBus.on('live.follow', (data) => this.onFollow(data));
    eventBus.on('live.social', (data) => this.onSocial(data));
    eventBus.on('live.member', (data) => this.onMember(data));
  }

  private onChat(data: TikTokChat) {
    console.log('💬 Live chat:', data.comment);
  }

  private onGift(data: TikTokGift) {
    console.log('🎁 Live gift:', data.giftName);
  }

  private onLike(data: TikTokLike) {
    console.log('❤️ Live like:', data.likeCount, 'de', data.nickname);
  }

  private onFollow(data: TikTokFollow) {
    console.log('➕ Novo follow:', data.nickname);
  }

  private onSocial(data: TikTokSocial) {
    console.log('🌐 Social:', data.action, 'de', data.nickname);
  }

  private onMember(data: TikTokMember) {
    console.log('💎 live join:', data.nickname);
  }
}

export const liveService = new LiveService();