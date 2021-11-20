import { SignRoutes } from './SignRoutes';
import { OtherRoutes } from './OtherRoutes';
import { UsersRoutes } from './UsersRoutes';
import { SignUpRoutes } from './SignUpRoutes';

import React from 'react';
import { useAuth } from '../contexts/auth';

export const Rotas: React.FC = () => {
  const { signed, user } = useAuth();

  return (
    <main>
      {signed ? <OtherRoutes /> : <SignRoutes />}
      {user ? <UsersRoutes /> : <SignUpRoutes />}
    </main>
  )

};
