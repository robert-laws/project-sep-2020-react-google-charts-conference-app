import React from 'react';
import { Chart } from 'react-google-charts';

export const AlmaLoans = ({ data }) => {
  return (
    <div className='container'>
      <h4>Loans - Totals</h4>
      <hr />
      <div className='row'>
        <div className='col s12 m12'>
          <div className='card-panel teal' style={{ minHeight: '800px' }}>
            <span className='white-text'>
              {data.length > 0 && (
                <Chart
                  width={'100%'}
                  height={'800px'}
                  chartType='LineChart'
                  loader={<div>Loading Chart</div>}
                  data={[
                    ['Year', 'Undergraduate', 'Faculty', 'Staff', 'Alumni'],
                    ...data,
                  ]}
                  options={{
                    title: 'Loans by Patron Type',
                    chartArea: { width: '70%' },
                    pointSize: 5,
                    hAxis: {
                      title: 'Year',
                    },
                    vAxis: {
                      title: 'Total Loans',
                    },
                    legend: { position: 'bottom' },
                  }}
                />
              )}

              {!data.length > 0 && <p className='center-align'>Loading...</p>}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
