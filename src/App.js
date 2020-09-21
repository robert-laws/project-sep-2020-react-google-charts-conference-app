import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Home,
  ServiceDesk,
  Instruction,
  AlmaCollections,
  AlmaLoans,
} from './pages';
import { Header, Footer } from './layout';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/instruction' component={Instruction} />
            <Route path='/service' component={ServiceDesk} />
            <Route path='/collections' component={AlmaCollections} />
            <Route path='/loans' component={AlmaLoans} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
