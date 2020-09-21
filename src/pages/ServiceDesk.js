import React, { useEffect, useContext, useState } from 'react';
import ServiceContext from '../context/service/serviceContext';
import { Chart } from 'react-google-charts';

export const ServiceDesk = () => {
  const serviceContext = useContext(ServiceContext);
  const {
    filteredServiceData,
    getAllServiceData,
    filterServiceData,
  } = serviceContext;

  const [serviceDataByDate, setServiceDataByDate] = useState([]);
  const [locationSelect, setLocationSelect] = useState('');
  const [patronSelect, setPatronSelect] = useState('');

  useEffect(() => {
    getAllServiceData();
  }, [getAllServiceData]);

  useEffect(() => {
    if (filteredServiceData) {
      setServiceDataByDate(
        reverseArray(Object.entries(addEntries(filteredServiceData, 'date')))
      );
    }
  }, [filteredServiceData]);

  useEffect(() => {
    if (locationSelect !== '') {
      filterServiceData({ field: 'location', selection: locationSelect });
      setPatronSelect('');
    }
  }, [locationSelect, filterServiceData]);

  useEffect(() => {
    if (patronSelect !== '') {
      filterServiceData({ field: 'patron', selection: patronSelect });
      setLocationSelect('');
    }
  }, [patronSelect, filterServiceData]);

  const addEntries = (array, field) => {
    const data = {};

    array.forEach((item) => {
      const dataField = item[field];

      if (data[dataField]) {
        data[dataField]++;
      } else {
        data[dataField] = 1;
      }
    });

    return data;
  };

  const reverseArray = (arr) => {
    let newArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      newArray.push(arr[i]);
    }
    return newArray;
  };

  return (
    <div className='container'>
      <h4>Service Desk Analytics - 2020</h4>
      <hr />
      <div className='row'>
        <div className='input-field col s6'>
          <select
            value={locationSelect}
            onChange={(e) => setLocationSelect(e.target.value)}
          >
            <option value='' disabled>
              Choose your option
            </option>
            <option value='Email'>Email</option>
            <option value='Chat'>Chat</option>
            <option value='Telephone'>Telephone</option>
            <option value='Service Desk - Circulation'>
              Service Desk - Circulation
            </option>
            <option value='Service Desk - Reference'>
              Service Desk - Reference
            </option>
            <option value='Librarian Office'>Librarian Office</option>
            <option value='Roaming'>Roaming</option>
          </select>
          <label>Location</label>
        </div>
        <div className='input-field col s6'>
          <select
            value={patronSelect}
            onChange={(e) => setPatronSelect(e.target.value)}
          >
            <option value='' disabled>
              Choose your option
            </option>
            <option value='Faculty'>Faculty</option>
            <option value='Student'>Student</option>
            <option value='Staff'>Staff</option>
            <option value='UCL'>UCL</option>
            <option value='Visitor'>Visitor</option>
          </select>
          <label>Patron Type</label>
        </div>
      </div>
      <div className='row'>
        <div className='col s12 m4'>
          <div className='card blue-grey lighten-5'>
            <div className='card-content black-text'>
              <h5 className='center-align'>Total Transactions</h5>
              <h4 className='center-align'>
                {filteredServiceData.length > 0 && filteredServiceData.length}
              </h4>
              {!filteredServiceData.length > 0 && (
                <p className='center-align'>Loading...</p>
              )}
            </div>
          </div>
        </div>
        <div className='col s12 m4'>
          <div className='card blue-grey lighten-5'>
            <div className='card-content black-text'>
              <h5 className='center-align'>Total Transactions</h5>
              <h4 className='center-align'>343</h4>
            </div>
          </div>
        </div>
        <div className='col s12 m4'>
          <div className='card blue-grey darken-1'>
            <div className='card-content white-text'>
              <h5 className='center-align'>Questions</h5>
              <h4 className='center-align'>343</h4>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col s12 m12'>
          <div className='card-panel teal' style={{ minHeight: '430px' }}>
            <span className='white-text'>
              {serviceDataByDate.length > 0 && (
                <Chart
                  width={'1180px'}
                  height={'400px'}
                  chartType='LineChart'
                  loader={<div>Loading Chart</div>}
                  data={[['Question', 'Questions'], ...serviceDataByDate]}
                  options={{
                    title: 'Questions Count',
                    chartArea: { width: '70%' },
                    pointSize: 5,
                    hAxis: {
                      title: 'Date',
                    },
                    vAxis: {
                      title: 'Questions',
                      minValue: 0,
                      maxValue: 10,
                      format: '0',
                    },
                  }}
                />
              )}
            </span>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col s12 m4'>
          <div className='card-panel teal'>
            <span className='white-text'>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively. I am similar to what is called a panel in other
              frameworks.
            </span>
          </div>
        </div>
        <div className='col s12 m4'>
          <div className='card-panel teal'>
            <span className='white-text'>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively. I am similar to what is called a panel in other
              frameworks.
            </span>
          </div>
        </div>
        <div className='col s12 m4'>
          <div className='card-panel teal'>
            <span className='white-text'>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively. I am similar to what is called a panel in other
              frameworks.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
