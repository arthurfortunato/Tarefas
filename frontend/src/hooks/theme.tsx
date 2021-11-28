import { useColorMode } from "@chakra-ui/color-mode";

import Light from '../assets/themeLight.svg';
import Dark from '../assets/themeDark.svg';


export function Theme() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <header>
      <button onClick={toggleColorMode}>
        {colorMode === 'light' ? <img src={Light} alt="" onClick={toggleColorMode} /> : <img src={Dark} alt="" onClick={toggleColorMode} />}
      </button>
    </header>
  )
}