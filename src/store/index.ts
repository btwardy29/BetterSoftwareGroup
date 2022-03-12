import create from "zustand";

interface ZustandStore {
  isAuth?: () => boolean;
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
}
const initialState = {
  isAuth: false,
  user: {},
  AuthData: {},
};

export const useStore = create((set: any, get: any) => ({
  ...initialState,
  getAuth: () => {
    return console.log(get().isAuth);
  },
  addAuth: (auth: boolean) => {
    set((state: any) => {
      state.isAuth = auth;
    });
  },
}));
