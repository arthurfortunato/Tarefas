import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { SignIn } from './pages/Login/SignIn'
import { SignUp } from './pages/Login/SignUp'
import { Home } from './pages/Home';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

