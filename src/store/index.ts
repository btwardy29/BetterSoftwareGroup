import create from "zustand";

interface ZustandStore {
  isAuth?: boolean;
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

  AuthData?: {
    Token: string;
    TokenExpires: string;
    RefreshToken: string;
  };
  addAuth: (auth: boolean) => void;
  getAuth: () => void;
}

export const useStore = create<ZustandStore>((set, get) => ({
  getAuth: () => {
    return console.log(get().isAuth);
  },
  addAuth: (auth) => {
    set((state) => {
      state.isAuth = auth;
    });
  },
}));
