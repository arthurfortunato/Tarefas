import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './components/Theme'

import './styles/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider {...theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

