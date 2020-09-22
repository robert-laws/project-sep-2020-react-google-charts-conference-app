import React, { useEffect, useContext, useState } from 'react';
import InstructionContext from '../context/instruction/instructionContext';
import { Chart } from 'react-google-charts';

export const Instruction = () => {
  const instructionContext = useContext(InstructionContext);
  const {
    filteredInstructionData,
    filterInstructionData,
    resetInstruction,
  } = instructionContext;

  const [instructionDataByDate, setInstructionDataByDate] = useState([]);
  const [instructionDataByType, setInstructionDataByType] = useState([]);
  const [instructionDataByAudience, setInstructionDataByAudience] = useState(
    []
  );
  const [instructionDataByLevel, setInstructionDataByLevel] = useState([]);

  const [typeSelect, setTypeSelect] = useState('');
  const [levelSelect, setLevelSelect] = useState('');

  useEffect(() => {
    if (filteredInstructionData) {
      setInstructionDataByDate(
        reverseArray(
          Object.entries(addEntries(filteredInstructionData, 'date'))
        )
      );
    }
  }, [filteredInstructionData]);

  useEffect(() => {
    if (filteredInstructionData) {
      setInstructionDataByType(
        addAndSortEntries(filteredInstructionData, 'type')
      );
    }
  }, [filteredInstructionData]);

  useEffect(() => {
    if (filteredInstructionData) {
      setInstructionDataByAudience(
        addAndSortEntries(filteredInstructionData, 'audience')
      );
    }
  }, [filteredInstructionData]);

  useEffect(() => {
    if (filteredInstructionData) {
      setInstructionDataByLevel(
        addAndSortEntries(filteredInstructionData, 'level')
      );
    }
  }, [filteredInstructionData]);

  useEffect(() => {
    if (typeSelect !== '') {
      filterInstructionData({ field: 'type', selection: typeSelect });
      setLevelSelect('');
    }
  }, [typeSelect, filterInstructionData]);

  useEffect(() => {
    if (levelSelect !== '') {
      filterInstructionData({ field: 'level', selection: levelSelect });
      setTypeSelect('');
    }
  }, [levelSelect, filterInstructionData]);

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

  const handleTypeSelect = (e) => {
    setTypeSelect(e.target.value);
    setLevelSelect('');
  };

  const handleLevelSelect = (e) => {
    setLevelSelect(e.target.value);
    setTypeSelect('');
  };

  const handleReset = () => {
    resetInstruction();
    setLevelSelect('');
    setTypeSelect('');
  };

  return (
    <div className='container'>
      <h4>Instruction</h4>
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
              <h5 className='center-align'>Total Instruction</h5>
              <h4 className='center-align'>
                {filteredInstructionData.length > 0 &&
                  filteredInstructionData.length}
              </h4>
              {!filteredInstructionData.length > 0 && (
                <p className='center-align'>Loading...</p>
              )}
            </div>
          </div>
        </div>
        <div className='col s12 m4'>
          <select
            style={{ display: 'block' }}
            value={typeSelect}
            onChange={handleTypeSelect}
          >
            <option value='' disabled>
              Choose the Type of Instruction/Tour
            </option>
            <option value='Instruction'>Instruction</option>
            <option value='Online Instruction'>Online Instruction</option>
            <option value='Library Tour (new employee)'>
              Library Tour (new employee)
            </option>
            <option value='Library Tour (visitors)'>
              Library Tour (visitors)
            </option>
          </select>
        </div>
        <div className='col s12 m4'>
          <select
            style={{ display: 'block' }}
            value={levelSelect}
            onChange={handleLevelSelect}
          >
            <option value='' disabled>
              Choose the Level of Instruction/Tour
            </option>
            <option value='Introductory'>Introductory</option>
            <option value='Intermediate'>Intermediate</option>
            <option value='Advanced'>Advanced</option>
          </select>
        </div>
      </div>
      <div className='row'>
        <div className='col s12 m12'>
          <div className='card-panel teal' style={{ minHeight: '430px' }}>
            <span className='white-text'>
              {instructionDataByDate.length > 0 && (
                <Chart
                  width={'100%'}
                  height={'400px'}
                  chartType='LineChart'
                  loader={<div>Loading Chart</div>}
                  data={[
                    ['Instruction/Tour', 'Instruction/Tour'],
                    ...instructionDataByDate,
                  ]}
                  options={{
                    title: 'Instruction and Tours in 2020',
                    chartArea: { width: '70%' },
                    pointSize: 5,
                    hAxis: {
                      title: 'Date',
                    },
                    vAxis: {
                      title: 'Instruction/Tours',
                      minValue: 0,
                      format: '0',
                    },
                  }}
                />
              )}

              {!instructionDataByDate.length > 0 && (
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
              {instructionDataByType.length > 0 && (
                <Chart
                  width={'100%'}
                  height={'450px'}
                  chartType='ColumnChart'
                  loader={<div>Loading Chart</div>}
                  data={[['Question', 'Total'], ...instructionDataByType]}
                  options={{
                    title: 'Instruction/Tours by Type',
                    chartArea: { width: '70%' },
                    hAxis: {
                      title: 'Instruction/Tour Type',
                    },
                    vAxis: {
                      title: 'Total Instruction/Tours',
                      minValue: 0,
                      format: '0',
                    },
                    legend: { position: 'bottom' },
                  }}
                />
              )}

              {!instructionDataByType.length > 0 && (
                <p className='center-align'>Loading...</p>
              )}
            </span>
          </div>
        </div>
        <div className='col s12 m4'>
          <div className='card-panel teal' style={{ minHeight: '500px' }}>
            <span className='white-text'>
              {instructionDataByAudience.length > 0 && (
                <Chart
                  width={'100%'}
                  height={'450px'}
                  chartType='ColumnChart'
                  loader={<div>Loading Chart</div>}
                  data={[['Question', 'Total'], ...instructionDataByAudience]}
                  options={{
                    title: 'Audience',
                    chartArea: { width: '70%' },
                    hAxis: {
                      title: 'Audience',
                    },
                    vAxis: {
                      title: 'Total Instruction/Tours',
                      minValue: 0,
                      format: '0',
                    },
                    legend: { position: 'bottom' },
                  }}
                />
              )}

              {!instructionDataByAudience.length > 0 && (
                <p className='center-align'>Loading...</p>
              )}
            </span>
          </div>
        </div>
        <div className='col s12 m4'>
          <div className='card-panel teal' style={{ minHeight: '500px' }}>
            <span className='white-text'>
              {instructionDataByLevel.length > 0 && (
                <Chart
                  width={'100%'}
                  height={'450px'}
                  chartType='PieChart'
                  loader={<div>Loading Chart</div>}
                  data={[['Question', 'Total'], ...instructionDataByLevel]}
                  options={{
                    title: 'Level of Instruction',
                    chartArea: { width: '70%' },
                    legend: { position: 'bottom' },
                  }}
                />
              )}

              {!instructionDataByLevel.length > 0 && (
                <p className='center-align'>Loading...</p>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
