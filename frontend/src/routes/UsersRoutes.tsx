import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { UsersList } from '../pages/Users';

export const UsersRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/users" element={<UsersList />} />
    </Routes>
  );
};

