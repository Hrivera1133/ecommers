export interface User {
  id: string;
  email: string;
  name: string;
}

export type AuthStatus =
  | 'idle'
  | 'logging_in'
  | 'awaiting_2fa'
  | 'authenticated';

export interface AuthState {
  user: User | null;
  status: AuthStatus;
  login: (email: string) => Promise<void>;
  verify2FA: (code: string) => Promise<void>;
  logout: () => void;
}
