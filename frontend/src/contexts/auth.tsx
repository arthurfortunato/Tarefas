import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  SignUp(name: string, email: string, password: string): Promise<void>;
  Logout: () => void;
}

type AuthResponse = {
  token: string,
  user: {
    id: string;
    name: string;
    email: string;
    password: string;
    admin?: boolean;
  }
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

type AuthProviderProps = {
  children: ReactNode;
}

export function AuthProvider(props: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  async function Login(email: string, password: string) {
    const response = await api.post<AuthResponse>('/login', {
      email: email, password: password
    });

    const { token, user } = response.data;

    localStorage.setItem('token', token);

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    setUser(user)

  }

  async function SignUp(name: string, email: string, password: string) {
    await api.post('/users', {
      name: name,
      email: email,
      password: password
    })
  }

  useEffect(() => {
    const url = window.location.href;
    const hasGithubCode = url.includes('?');

    if (hasGithubCode) {
      const [urlWithoutCode] = url.split('?')

      window.history.pushState({}, '', urlWithoutCode);

    }
  }, [])

  const navigate = useNavigate()
  function Logout() {
    setUser(null);
    localStorage.removeItem('token')
    navigate('/')
  }

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`

      api.get<User>('/users').then(response => {
        setUser(response.data)
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={{ signed: Boolean(user), user, Login, Logout, SignUp }}>
      {props.children}
    </AuthContext.Provider>
  );
};


export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}