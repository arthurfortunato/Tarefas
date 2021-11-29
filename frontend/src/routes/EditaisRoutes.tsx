import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Edital } from '../pages/Editais';

export const EditaisRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Edital />} />
    </Routes>
  );
};

