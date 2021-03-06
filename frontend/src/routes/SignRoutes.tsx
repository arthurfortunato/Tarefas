import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { SignIn } from '../pages/Login';

export const SignRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
    </Routes>
  );
};

