import React, { useContext, useEffect, useState } from 'react';
import ServiceContext from './context/service/serviceContext';
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
  const serviceContext = useContext(ServiceContext);
  const { serviceData, getAllServiceData } = serviceContext;

  const [serviceDeskTotal, setServiceDeskTotal] = useState(0);

  useEffect(() => {
    getAllServiceData();
  }, [getAllServiceData]);

  useEffect(() => {
    if (serviceData.length > 0) {
      setServiceDeskTotal(serviceData.length);
    }
  }, [serviceData]);

  return (
    <Router>
      <div className='App'>
        <Header />
        <main className='grey lighten-5'>
          <Switch>
            <Route exact path='/'>
              <Home serviceDeskTotal={serviceDeskTotal} />
            </Route>
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
