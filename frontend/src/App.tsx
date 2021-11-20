import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Rotas } from './routes';

import { AuthProvider } from './contexts/auth';

export function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="*" element={<Rotas />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

