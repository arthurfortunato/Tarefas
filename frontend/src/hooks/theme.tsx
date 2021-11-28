import { useColorMode } from "@chakra-ui/color-mode";

import Dark from '../assets/themeDark.svg';
import Light from '../assets/logo.svg';

import { MdDarkMode, MdLightMode } from 'react-icons/md'

export function Theme() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <header>
      <button onClick={toggleColorMode}>
        {colorMode === 'light' ? <MdDarkMode size={32} onClick={toggleColorMode} /> : <MdLightMode size={32} onClick={toggleColorMode} />}
      </button>
    </header>
  )
}