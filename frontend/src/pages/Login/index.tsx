import { useState } from 'react';
import styles from './styles.module.scss';

import { MdEmail } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';

import { useAuth } from '../../contexts/auth';
import { Theme } from '../../hooks/theme';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box } from '@chakra-ui/layout';
import { Input } from '@chakra-ui/input';

import { ModalCreateUser } from '../../components/Modal/CreateUser';

import logo from '../../assets/logo.svg'

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

  const bg = useColorModeValue("linear-gradient(138deg, #b794f4 0%, #805ad5 100%, #312950 100%, #322659 100%)", "linear-gradient(138deg, #805ad5 0%, #312950 100%, #322659 100%)")
  const bgInput = useColorModeValue("#EDF2F7", "#0F1016");

  return (
    <div className={styles.content}>
      <header>
        <Theme />
      </header>
      <Box bg={bg} className={styles.text}>
        <h1>Faça seu login na plataforma</h1>
      </Box>
      <div className={styles.boxContent}>
        <form >
          <img src={logo} alt="Logo" />
          <h1>Por favor insira seus dados para prosseguir.</h1>
          <label>E-mail</label>
          <Box bg={"#EDF2F7"} mb={15}>
            <MdEmail size="20px" color="rgb(32, 32, 36)" />
            <Input
              color="#000"
              type="email"
              name="email"
              placeholder="Insira o seu E-mail..."
              value={emailSignIn}
              onChange={(event) => { setEmailSignIn(event.target.value) }}
              variant="unstyled"
              pl={"20px"}
              cursor="pointer"
              _autofill={{ bg: { bg } }}
            />
          </Box>
          <label>Senha</label>
          <Box bg={"#EDF2F7"}>
            <FaLock size="18px" color="rgb(32, 32, 36)" />
            <Input
              color="#000"
              type="password"
              name="password"
              placeholder="•••••••••••"
              value={passwordSignIn}
              onChange={(event) => { setPasswordSignIn(event.target.value) }}
              variant="unstyled"
              pl={"20px"}
              cursor="pointer"
            />
          </Box>

          <button type="submit" onClick={handleLogin}>ENTRAR</button>

          <div className={styles.separator}>
            <p>Não tem uma conta? </p>
            <ModalCreateUser />
          </div>
        </form>
      </div>
    </div>
  )
}