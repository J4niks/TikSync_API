// =========================
// Evento Like
// =========================
export interface TikTokLike {
  likeCount: number;
  totalLikeCount: number;
  userId: string;
  uniqueId: string;
  nickname: string;
  profilePictureUrl: string;
  method: 'WebcastLikeMessage';
  msgId: string;
  roomId: string;
  createTime: string;
}

// =========================
// Evento Chat
// =========================
export interface TikTokChat {
  userId: string;
  uniqueId: string;
  nickname: string;
  profilePictureUrl: string;
  comment: string;
  msgId: string;
  roomId: string;
  method: 'WebcastChatMessage';
  createTime: string;
}

// =========================
// Evento Gift
// =========================
export interface TikTokGift {
  userId: string;
  uniqueId: string;
  nickname: string;
  profilePictureUrl: string;
  giftName: string;
  giftId: number | string;
  repeatCount: number;
  diamondCount: number;
  price: number;
  msgId: string;
  roomId: string;
  method: 'WebcastGiftMessage';
  createTime: string;
}

// =========================
// Evento Follow
// =========================
export interface TikTokFollow {
  userId: string;
  uniqueId: string;
  nickname: string;
  profilePictureUrl: string;
  msgId: string;
  roomId: string;
  method: 'WebcastFollowMessage';
  createTime: string;
}

// =========================
// Evento Social (share, duet, mention, etc)
// =========================
export interface TikTokSocial {
  userId: string;
  uniqueId: string;
  nickname: string;
  profilePictureUrl: string;
  action: 'share' | 'duet' | 'mention' | string;
  msgId: string;
  roomId: string;
  method: 'WebcastSocialMessage';
  createTime: string;
}

// =========================
// Evento Member (assinantes / subs / membros)
// =========================
export interface TikTokMember {
  userId: string;
  uniqueId: string;
  nickname: string;
  profilePictureUrl: string;
  msgId: string;
  roomId: string;
  method: 'WebcastMemberMessage';
  createTime: string;
}