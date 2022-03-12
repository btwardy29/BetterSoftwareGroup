import create from "zustand";

interface ZustandStore {
  isAuth?: boolean;
  User?: {
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
  setAuthData: (authData: {
    Token: string;
    TokenExpires: string;
    RefreshToken: string;
  }) => void;
  getAuthData: () => void;
  setUser: (User: {
    Username: string;
    Password: string;
    Device: {
      Name: string;
      PlatformCode: string;
      FirebaseToken: string;
      DpiCode: string;
    };
  }) => void;
  getUser: () => void;
}

export const useStore = create<ZustandStore>((set, get) => ({
  getAuth: () => {
    return get().isAuth;
  },
  addAuth: (auth) => {
    set((state) => {
      state.isAuth = auth;
    });
  },
  setAuthData: (authData) => {
    set((state) => {
      state.AuthData = authData;
      console.log(state.AuthData);
    });
  },
  getAuthData: () => {
    return get().AuthData;
  },
  setUser: (User) => {
    set((state) => {
      state.User = User;
      console.log(state.User);
    });
  },
  getUser: () => {
    return get().User;
  },
}));
