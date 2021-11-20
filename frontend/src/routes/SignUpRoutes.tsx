import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { SignUp } from '../pages/Login/SignUp';

export const SignUpRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/users" element={<SignUp />} />
    </Routes>
  );
};
