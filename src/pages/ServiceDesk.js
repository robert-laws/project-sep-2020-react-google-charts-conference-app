import React, { useEffect, useContext, useState } from 'react';
import ServiceContext from '../context/service/serviceContext';
import { Chart } from 'react-google-charts';

export const ServiceDesk = () => {
  const serviceContext = useContext(ServiceContext);
  const {
    filteredServiceData,
    filterServiceData,
    resetService,
  } = serviceContext;

  const [serviceDataByDate, setServiceDataByDate] = useState([]);
  const [serviceDataByType, setServiceDataByType] = useState([]);
  const [serviceDataByDuration, setServiceDataByDuration] = useState([]);
  const [serviceDataByLocation, setServiceDataByLocation] = useState([]);

  const [locationSelect, setLocationSelect] = useState('');
  const [patronSelect, setPatronSelect] = useState('');

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

  useEffect(() => {
    if (filteredServiceData) {
      setServiceDataByType(addAndSortEntries(filteredServiceData, 'question'));
    }
  }, [filteredServiceData]);

  useEffect(() => {
    if (filteredServiceData) {
      setServiceDataByDuration(addAndSortEntries(filteredServiceData, 'time'));
    }
  }, [filteredServiceData]);

  useEffect(() => {
    if (filteredServiceData) {
      setServiceDataByLocation(
        addAndSortEntries(filteredServiceData, 'location')
      );
    }
  }, [filteredServiceData]);

  const handleLocationSelect = (e) => {
    setLocationSelect(e.target.value);
    setPatronSelect('');
  };

  const handlePatronSelect = (e) => {
    setPatronSelect(e.target.value);
    setLocationSelect('');
  };

  const handleReset = () => {
    resetService();
    setPatronSelect('');
    setLocationSelect('');
  };

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

  const addAndSortEntries = (array, field) => {
    const data = {};

    array.forEach((item) => {
      const dataField = item[field];

      if (data[dataField]) {
        data[dataField]++;
      } else {
        data[dataField] = 1;
      }
    });

    let sortable = [];

    for (let field in data) {
      sortable.push([field, data[field]]);
    }

    sortable.sort(function (a, b) {
      return b[1] - a[1];
    });

    return sortable;
  };

  return (
    <div className='container'>
      <h4>Service Desk Analytics - 2020</h4>
      <hr />
      <div className='row'>
        <div className='col s12 right-align'>
          <a onClick={handleReset} className='waves-effect waves-light btn'>
            Reset
          </a>
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
          <select
            style={{ display: 'block' }}
            value={locationSelect}
            onChange={handleLocationSelect}
          >
            <option value='' disabled>
              Choose the Location of the Question
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
        </div>
        <div className='col s12 m4'>
          <select
            style={{ display: 'block' }}
            value={patronSelect}
            onChange={handlePatronSelect}
          >
            <option value='' disabled>
              Choose the Patron Type
            </option>
            <option value='Faculty'>Faculty</option>
            <option value='Student'>Student</option>
            <option value='Staff'>Staff</option>
            <option value='UCL'>UCL</option>
            <option value='Visitor'>Visitor</option>
          </select>
        </div>
      </div>
      <div className='row'>
        <div className='col s12 m12'>
          <div className='card-panel teal' style={{ minHeight: '430px' }}>
            <span className='white-text'>
              {serviceDataByDate.length > 0 && (
                <Chart
                  width={'100%'}
                  height={'400px'}
                  chartType='LineChart'
                  loader={<div>Loading Chart</div>}
                  data={[['Question', 'Questions'], ...serviceDataByDate]}
                  options={{
                    title: 'Service Desk Questions in 2020',
                    chartArea: { width: '70%' },
                    pointSize: 5,
                    hAxis: {
                      title: 'Date',
                    },
                    vAxis: {
                      title: 'Questions',
                      minValue: 0,
                      format: '0',
                    },
                  }}
                />
              )}

              {!serviceDataByDate.length > 0 && (
                <p className='center-align'>Loading...</p>
              )}
            </span>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col s12 m4'>
          <div className='card-panel teal' style={{ minHeight: '500px' }}>
            <span className='white-text'>
              {serviceDataByType.length > 0 && (
                <Chart
                  width={'100%'}
                  height={'450px'}
                  chartType='ColumnChart'
                  loader={<div>Loading Chart</div>}
                  data={[['Question', 'Total'], ...serviceDataByType]}
                  options={{
                    title: 'Transactions by Question Type',
                    chartArea: { width: '70%' },
                    hAxis: {
                      title: 'Question Type',
                    },
                    vAxis: {
                      title: 'Total Transactions',
                      minValue: 0,
                      format: '0',
                    },
                    legend: { position: 'bottom' },
                  }}
                />
              )}

              {!serviceDataByType.length > 0 && (
                <p className='center-align'>Loading...</p>
              )}
            </span>
          </div>
        </div>
        <div className='col s12 m4'>
          <div className='card-panel teal' style={{ minHeight: '500px' }}>
            <span className='white-text'>
              {serviceDataByDuration.length > 0 && (
                <Chart
                  width={'100%'}
                  height={'450px'}
                  chartType='ColumnChart'
                  loader={<div>Loading Chart</div>}
                  data={[['Question', 'Total'], ...serviceDataByDuration]}
                  options={{
                    title: 'Transactions by Duration',
                    chartArea: { width: '70%' },
                    hAxis: {
                      title: 'Duration',
                    },
                    vAxis: {
                      title: 'Total Transactions',
                      minValue: 0,
                      format: '0',
                    },
                    legend: { position: 'bottom' },
                  }}
                />
              )}

              {!serviceDataByDuration.length > 0 && (
                <p className='center-align'>Loading...</p>
              )}
            </span>
          </div>
        </div>
        <div className='col s12 m4'>
          <div className='card-panel teal' style={{ minHeight: '500px' }}>
            <span className='white-text'>
              {serviceDataByLocation.length > 0 && (
                <Chart
                  width={'100%'}
                  height={'450px'}
                  chartType='ColumnChart'
                  loader={<div>Loading Chart</div>}
                  data={[['Question', 'Total'], ...serviceDataByLocation]}
                  options={{
                    title: 'Transactions by Location',
                    chartArea: { width: '70%' },
                    hAxis: {
                      title: 'Location',
                    },
                    vAxis: {
                      title: 'Total Transactions',
                      minValue: 0,
                      format: '0',
                    },
                    legend: { position: 'bottom' },
                  }}
                />
              )}

              {!serviceDataByLocation.length > 0 && (
                <p className='center-align'>Loading...</p>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
