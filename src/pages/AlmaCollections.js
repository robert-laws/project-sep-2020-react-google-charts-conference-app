import React from 'react';
import { Chart } from 'react-google-charts';

export const AlmaCollections = ({ data }) => {
  return (
    <div className='container'>
      <h4>Collections - Totals</h4>
      <hr />
      <div className='row'>
        <div className='col s12 m12'>
          <div className='card-panel teal' style={{ minHeight: '800px' }}>
            <span className='white-text'>
              {data.length > 0 && (
                <Chart
                  width={'100%'}
                  height={'800px'}
                  chartType='ColumnChart'
                  loader={<div>Loading Chart</div>}
                  data={[['Location', 'Total'], ...data]}
                  options={{
                    title: 'Collections by Location',
                    chartArea: { width: '70%' },
                    hAxis: {
                      title: 'Location',
                    },
                    vAxis: {
                      title: 'Total Collection Items',
                      minValue: 0,
                      format: '0',
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
