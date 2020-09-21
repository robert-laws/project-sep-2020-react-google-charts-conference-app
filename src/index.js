import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css';
import App from './App';
import ServiceState from './context/service/ServiceState';

ReactDOM.render(
  <React.StrictMode>
    <ServiceState>
      <App />
    </ServiceState>
  </React.StrictMode>,
  document.getElementById('root')
);
