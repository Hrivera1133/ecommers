import { create } from 'zustand';
import { AuthState, AuthStatus, User } from '@/types/auth';

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  status: 'idle',

  login: async (email: string) => {
    set({ status: 'logging_in' });
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set({ status: 'awaiting_2fa' });
  },

  verify2FA: async (code: string) => {
    set({ status: 'logging_in' });
    // Simulate API verification
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    if (code === '123456') {
      const mockUser: User = {
        id: '1',
        email: 'user@example.com',
        name: 'John Doe',
      };
      set({ user: mockUser, status: 'authenticated' });
    } else {
      set({ status: 'awaiting_2fa' });
      throw new Error('Invalid 2FA code. Hint: Try 123456');
    }
  },

  logout: () => {
    set({ user: null, status: 'idle' });
  },
}));
