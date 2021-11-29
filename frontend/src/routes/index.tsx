import { SignRoutes } from './SignRoutes';
import { EditaisRoutes } from './EditaisRoutes';

import React from 'react';
import { useAuth } from '../contexts/auth';

export const Rotas: React.FC = () => {
  const { signed } = useAuth();

  return (
    <main>
      {signed ? <EditaisRoutes /> : <SignRoutes />}
    </main>
  )

};
