import { Telegram } from "telegraf";
import axios from "axios";
import { useAsync, useAsyncFn } from "react-use";
import { useEffect } from "react";
import { later } from "@/services/utils.service";

const BASE_URL = "https://api.telegram.org/bot";
const CHAT_ID = "-1002185431526";
const TOKEN = import.meta.env.VITE_TG_BOT_TOKEN;

export function useTelegramApi({ message }) {
  const url = `${BASE_URL}${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${message}`;

  const [state, doFetch] = useAsyncFn(async () => {
    
    const res = await fetch(url);
    const updates = await res.json();
    await later(2000);
    return updates;
  }, [url]);

  return { state, doFetch, message };
}
