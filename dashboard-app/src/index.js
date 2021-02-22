/**
 * App starting point
 * This App is using Chakra UI as UI framework
 */
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter'
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from "@chakra-ui/react"
import './index.css'

ReactDOM.render(
  <ChakraProvider>
    <AppRouter />
  </ChakraProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
