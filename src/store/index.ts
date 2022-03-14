import create from "zustand";
import { devtools } from "zustand/middleware";
import { ZustandStore } from "./types";

export const useStore = create<ZustandStore>(
  devtools((set, get) => ({
    getUser: () => {
      return get().user;
    },

    setUser: (user) => {
      set((state) => {
        state.user = user;
      });
    },
    setCurrentUrl: (url) => {
      set((state) => {
        state.currentUrl = url;
      });
    },
  }))
);
