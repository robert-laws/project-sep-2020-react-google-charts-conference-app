import React, { useContext, useEffect, useState } from 'react';
import ServiceContext from './context/service/serviceContext';
import InstructionContext from './context/instruction/instructionContext';
import AlmaContext from './context/alma/almaContext';
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

  const instructionContext = useContext(InstructionContext);
  const { instructionData, getAllInstructionData } = instructionContext;

  const almaContext = useContext(AlmaContext);
  const {
    almaCollectionsData,
    getAlmaCollectionsData,
    almaLoansData,
    getAlmaLoansData,
  } = almaContext;

  const [serviceDeskTotal, setServiceDeskTotal] = useState(0);
  const [instructionTotal, setInstructionTotal] = useState(0);
  const [almaCollectionsDataSet, setAlmaCollectionsDataSet] = useState([]);
  const [almaLoansDataSet, setAlmaLoansDataSet] = useState([]);

  useEffect(() => {
    getAllServiceData();
  }, [getAllServiceData]);

  useEffect(() => {
    getAllInstructionData();
  }, [getAllInstructionData]);

  useEffect(() => {
    getAlmaCollectionsData();
  }, [getAlmaCollectionsData]);

  useEffect(() => {
    getAlmaLoansData();
  }, [getAlmaLoansData]);

  useEffect(() => {
    if (serviceData.length > 0) {
      setServiceDeskTotal(serviceData.length);
    }
  }, [serviceData]);

  useEffect(() => {
    if (instructionData.length > 0) {
      setInstructionTotal(instructionData.length);
    }
  }, [instructionData]);

  useEffect(() => {
    if (almaCollectionsData.length > 0) {
      const processData = (arr) => {
        const data = arr.map((item) => [item.location, parseInt(item.total)]);
        return data;
      };

      setAlmaCollectionsDataSet(sortData(processData(almaCollectionsData)));
    }
  }, [almaCollectionsData]);

  useEffect(() => {
    if (almaLoansData.length > 0) {
      const processData = (arr) => {
        const data = arr.map((item) => [
          item.year,
          parseInt(item.undergraduate),
          parseInt(item.faculty),
          parseInt(item.staff),
          parseInt(item.alumni),
        ]);
        return data;
      };

      setAlmaLoansDataSet(processData(almaLoansData));
    }
  }, [almaLoansData]);

  const sortData = (data) => {
    let newData = data.sort(function (a, b) {
      return b[1] - a[1];
    });

    return newData;
  };

  console.log(almaLoansData);

  return (
    <Router>
      <div className='App'>
        <Header />
        <main className='grey lighten-5'>
          <Switch>
            <Route exact path='/'>
              <Home
                serviceDeskTotal={serviceDeskTotal}
                instructionTotal={instructionTotal}
              />
            </Route>
            <Route path='/instruction' component={Instruction} />
            <Route path='/service' component={ServiceDesk} />
            <Route path='/collections'>
              <AlmaCollections data={almaCollectionsDataSet} />
            </Route>
            <Route path='/loans'>
              <AlmaLoans data={almaLoansDataSet} />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
