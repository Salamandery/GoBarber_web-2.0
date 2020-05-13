import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface AuthContextData {
  user: object;
  signIn(credentials: Credentials): Promise<void>;
  signOut(): void;
}

interface Credentials {
  email: string;
  password: string;
}

interface AuthState {
  token: string;
  user: object;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@GoBarber:token');
    const user = localStorage.getItem('@GoBarber:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@GoBarber:token', token);
    localStorage.setItem('@GoBarber:user', JSON.stringify(user));

    setData({ token, user });
  }, []);
  const signOut = useCallback(() => {
    localStorage.setItem('@GoBarber:token', '');
    localStorage.setItem('@GoBarber:user', '');

    setData({} as AuthState);
  }, []);
  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const contextData = useContext(AuthContext);

  if (!contextData) {
    throw new Error('useAuth must not be used within an AuthProvider');
  }

  return contextData;
}
