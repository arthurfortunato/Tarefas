import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import styles from './styles.module.scss';

import { HiArrowLeft } from 'react-icons/hi'

export function SignUp() {
  const [nameSignUp, setNameSignUp] = useState('');
  const [emailSignUp, setEmailSignUp] = useState('');
  const [passwordSignUp, setPasswordSignUp] = useState('');

  useEffect(() => {
    const url = window.location.href;
    const hasUrl = url.includes('?');

    if (hasUrl) {
      const [urlWithoutCode] = url.split('?')

      window.history.pushState({}, '', urlWithoutCode);
    }
  }, [])

  const signUp = () => {
    api.post('users', { name: nameSignUp, email: emailSignUp, password: passwordSignUp })
  }

  return (
    <div className={styles.content}>
      <div className={styles.boxContent}>
        <form>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Nome"
              value={nameSignUp}
              onChange={(event) => { setNameSignUp(event.target.value) }}

            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={emailSignUp}
              onChange={(event) => { setEmailSignUp(event.target.value) }}

            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Senha"
              value={passwordSignUp}
              onChange={(event) => { setPasswordSignUp(event.target.value) }}

            />
          </div>

          <button type="submit" onClick={signUp}>Cadastre-se</button>

        </form>
      </div>

      <div className={styles.text}>
        <h1>Realize o seu cadastro!</h1>
        <a href="/">
          <HiArrowLeft />
          <p>Voltar para login</p>
        </a>
      </div>
    </div>
  )
}