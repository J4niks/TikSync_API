import { api } from "../utils/api";
import qs from "qs";

export const sendBroadcast = async (message: string): Promise<void> => {
  const body = qs.stringify({ message });

  await api.post("v1/chat/broadcast", body, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};

export const sendPrivateMessage = async (message: string, playerUuid: string): Promise<void> => {
  const body = qs.stringify({ message, playerUuid });

  await api.post("v1/chat/tell", body, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};