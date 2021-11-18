import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  admin?: boolean;
}

type AuthContextData = {
  signed: boolean;
  user: User | null;
  Login(email: string, password: string): Promise<void>;
  Logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  async function Login(email: string, password: string) {
    const response = await api.post('/login', {
      email: email, password: password
    });

    setUser(response.data.user);
    api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;

    localStorage.setItem('@App:user', JSON.stringify(response.data.user));
    localStorage.setItem('@App:token', response.data.token);

  }

  useEffect(() => {
    const storagedUser = localStorage.getItem('@App:user');
    const storagedToken = localStorage.getItem('@App:token');

    if (storagedToken && storagedUser) {
      api.defaults.headers.common.authorization = `Bearer ${storagedToken}`;

      api.get<User>('/users').then(response => {
        setUser(response.data);
      })
    }
  }, []);

  useEffect(() => {
    const url = window.location.href;
    const hasGithubCode = url.includes('?');

    if (hasGithubCode) {
      const [urlWithoutCode] = url.split('?')

      window.history.pushState({}, '', urlWithoutCode);

    }
  }, [])

  function Logout() {
    setUser(null);

    localStorage.removeItem('@App:user');
    localStorage.removeItem('App:token');
  }

  return (
    <AuthContext.Provider value={{ signed: Boolean(user), user, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}