import React from 'react';

export const Home = ({ serviceDeskTotal, instructionTotal }) => {
  return (
    <div className='container'>
      <h4>Library Stats Highlights - 2020</h4>
      <hr />
      <div className='row'>
        <div className='col s12 m4'>
          <div className='card blue-grey lighten-5'>
            <div className='card-content black-text'>
              <h5 className='center-align'>Total Service Desk Transactions</h5>
              <h4 className='center-align'>
                {serviceDeskTotal > 0 && serviceDeskTotal}
              </h4>
              {serviceDeskTotal === 0 && (
                <p className='center-align'>Loading...</p>
              )}
            </div>
          </div>
        </div>
        <div className='col s12 m4'>
          <div className='card blue-grey lighten-5'>
            <div className='card-content black-text'>
              <h5 className='center-align'>Total Instruction</h5>
              <h4 className='center-align'>
                {instructionTotal > 0 && instructionTotal}
              </h4>
              {instructionTotal === 0 && (
                <p className='center-align'>Loading...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
