import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Rotas } from './routes';
import { SignUp } from './pages/Login/SignUp';

import { AuthProvider } from './contexts/auth';

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="*" element={<Rotas />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

