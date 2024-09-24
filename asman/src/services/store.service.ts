import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocalStorage } from "react-use";
import { create } from "zustand";

const LOCAL_STORAGE_KEY = "siteLng";

const initialLng = localStorage.getItem(LOCAL_STORAGE_KEY) || "ru";

type LngState = {
  siteLng: string;
  changeSiteLng: (lng: string) => void;
};

export const siteLngGlobal = create<LngState>((set) => ({
  siteLng: initialLng,
  changeSiteLng: (lng) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, lng);
    set({ siteLng: lng });
  },
}));
