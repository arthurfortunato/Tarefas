import { useState } from 'react';
import logo from '../../../assets/logo.svg';
import { api } from '../../../services/api';
import styles from './styles.module.scss';

import { MdEmail } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';

export function SignIn() {

  const [emailSignIn, setEmailSignIn] = useState('');
  const [passwordSignIn, setPasswordLogin] = useState('');

  const signIn = () => {
    api.post('login', { email: emailSignIn, password: passwordSignIn })
  }

  return (
    <div className={styles.content}>
      <div className={styles.text}>
        <h1>Faça seu login na plataforma</h1>
      </div>
      <div className={styles.boxContent}>
        <form>
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
              onChange={(event) => { setPasswordLogin(event.target.value) }}
            />
          </div>

          <button type="submit" onClick={signIn}>ENTRAR</button>
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