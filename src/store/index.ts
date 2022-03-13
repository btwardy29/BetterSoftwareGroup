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
    isAuth?: boolean;
    Token: string;
    TokenExpires: string;
    RefreshToken: string;
  };
  setAuth: (auth: boolean) => void;
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
  isAuth: false,
  getAuth: () => {
    return get().isAuth;
  },
  setAuth: (auth) => {
    set((state) => {
      state.isAuth = auth;
    });
  },
  setAuthData: (authData) => {
    set((state) => {
      state.AuthData = authData;
    });
  },
  getAuthData: () => {
    return get().AuthData;
  },
  setUser: (User) => {
    set((state) => {
      state.User = User;
    });
  },
  getUser: () => {
    return get().User;
  },
}));
