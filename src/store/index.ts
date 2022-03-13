import create from "zustand";
import { devtools } from "zustand/middleware";

interface ZustandStore {
  user?: {
    Username: string;
    Password: string;
    Device: {
      Name: string;
      PlatformCode: string;
      FirebaseToken: string;
      DpiCode: string;
    };
  };

  setUser: (user: {
    Username: string;
    Password: string;
    Device: {
      Name: string;
      PlatformCode: string;
      FirebaseToken: string;
      DpiCode: string;
    };
  }) => void;
}

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
  }))
);
