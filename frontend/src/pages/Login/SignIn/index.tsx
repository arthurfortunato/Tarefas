import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

import { MdEmail } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';

import { useAuth } from '../../../contexts/auth';
export const SignIn: React.FC = () => {

  const [emailSignIn, setEmailSignIn] = useState('');
  const [passwordSignIn, setPasswordSignIn] = useState('');

  const { Login } = useAuth()

  async function handleLogin() {
    await Login(

      emailSignIn,
      passwordSignIn

    )
  }
  console.log(emailSignIn, passwordSignIn)

  return (
    <div className={styles.content}>
      <div className={styles.text}>
        <h1>Faça seu login na plataforma</h1>
      </div>
      <div className={styles.boxContent}>
        <form onSubmit={handleLogin}>
          <div>
            <MdEmail size="20px" color="rgb(32, 32, 36)" />
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              value={emailSignIn}
              onChange={(event) => { setEmailSignIn(event.target.value) }}
            />
          </div>

          <div>
            <FaLock size="18px" color="rgb(32, 32, 36)" />
            <input
              type="password"
              name="password"
              placeholder="Senha"
              value={passwordSignIn}
              onChange={(event) => { setPasswordSignIn(event.target.value) }}
            />
          </div>

          <button type="submit">ENTRAR</button>
        </form>

        <div className={styles.separator}>
          <p>Não tem uma conta?</p>
          <a href="/signup" >
            Registre-se
          </a>
        </div>

      </div>
    </div>
  )
}