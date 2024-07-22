import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import '../src/styles/index.css';
import ChakraProviderWrapper from './ChakraProviderWrapper';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProviderWrapper>
      <Router>
        <App />
      </Router>
    </ChakraProviderWrapper>
  </React.StrictMode>,
);
