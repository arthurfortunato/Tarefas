import { SignRoutes } from './SignRoutes';
import { OtherRoutes } from './OtherRoutes';

import React from 'react';
import { useAuth } from '../contexts/auth';

export const Rotas: React.FC = () => {
  const { signed } = useAuth();

  return signed ? <OtherRoutes /> : <SignRoutes />
};
