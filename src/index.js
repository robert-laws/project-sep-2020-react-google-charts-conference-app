import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css';
import App from './App';
import ServiceState from './context/service/ServiceState';
import InstructionState from './context/instruction/InstructionState';
import AlmaState from './context/alma/AlmaState';

ReactDOM.render(
  <React.StrictMode>
    <ServiceState>
      <InstructionState>
        <AlmaState>
          <App />
        </AlmaState>
      </InstructionState>
    </ServiceState>
  </React.StrictMode>,
  document.getElementById('root')
);
