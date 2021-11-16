import { useState } from 'react';
import logo from '../../assets/logo.png';
import { api } from '../../services/api';
import styles from './styles.module.scss';

export function Login() {
  const [nameRegister, setNameRegister] = useState('');
  const [emailRegister, setEmailRegister] = useState('');
  const [passwordRegister, setPasswordRegister] = useState('');

  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');

  const register = () => {
    api.post('users', { name: nameRegister, email: emailRegister, password: passwordRegister })
  }
  const login = () => {
    api.post('login', { email: emailLogin, password: passwordLogin })
  }

  return (
    <div className={styles.loginBoxWrapper}>
      <div className={styles.boxContent}>
        <img src={logo} alt="Logo" className={styles.imageBox} />
        <div className={styles.box}>
        </div>
        <form className={styles.box}>

          <input
            type="text"
            name="name"
            placeholder="Nome"
            value={nameRegister}
            onChange={(event) => { setNameRegister(event.target.value) }}

          />
          <input
            type="text"
            name="email"
            placeholder="E-mail"
            value={emailRegister}
            onChange={(event) => { setEmailRegister(event.target.value) }}

          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            value={passwordRegister}
            onChange={(event) => { setPasswordRegister(event.target.value) }}

          />

          <button type="submit" onClick={register}>Cadastre-se</button>
        </form>
        <form className={styles.box}>

          <input
            type="text"
            name="email"
            placeholder="E-mail"
            value={emailLogin}
            onChange={(event) => { setEmailLogin(event.target.value) }}

          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            value={passwordLogin}
            onChange={(event) => { setPasswordLogin(event.target.value) }}

          />

          <button type="submit" onClick={login}>Login</button>
        </form>
      </div>
    </div>
  )
}