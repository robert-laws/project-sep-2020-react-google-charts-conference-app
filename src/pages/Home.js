import React from 'react';

export const Home = ({
  serviceDeskTotal,
  instructionTotal,
  collectionsData,
  loansData,
}) => {
  return (
    <div className='container'>
      <h4>Library Stats Highlights - 2020</h4>
      <hr />
      <div className='row'>
        <div className='col s12 m12'>
          <h5>Reference and Instruction Stats</h5>
        </div>
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
      <div className='row'>
        <div className='col s12 m12'>
          <h5>Collections Stats</h5>
        </div>
        <div className='col s12 m4'>
          <div className='card blue-grey lighten-5'>
            <div className='card-content black-text'>
              <h5 className='center-align'>Collections - Total in Stacks</h5>
              <h4 className='center-align'>
                {collectionsData.length > 0 && collectionsData[0][1]}
              </h4>
              {collectionsData.length === 0 && (
                <p className='center-align'>Loading...</p>
              )}
            </div>
          </div>
        </div>
        <div className='col s12 m4'>
          <div className='card blue-grey lighten-5'>
            <div className='card-content black-text'>
              <h5 className='center-align'>Collections - Total in Media</h5>
              <h4 className='center-align'>
                {collectionsData.length > 0 && collectionsData[3][1]}
              </h4>
              {collectionsData.length === 0 && (
                <p className='center-align'>Loading...</p>
              )}
            </div>
          </div>
        </div>
        <div className='col s12 m4'>
          <div className='card blue-grey lighten-5'>
            <div className='card-content black-text'>
              <h5 className='center-align'>
                Collections - Total in Periodicals
              </h5>
              <h4 className='center-align'>
                {collectionsData.length > 0 && collectionsData[7][1]}
              </h4>
              {collectionsData.length === 0 && (
                <p className='center-align'>Loading...</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col s12 m12'>
          <h5>Loans Stats</h5>
        </div>
        <div className='col s12 m4'>
          <div className='card blue-grey lighten-5'>
            <div className='card-content black-text'>
              <h5 className='center-align'>Loans - Total for Students</h5>
              <h4 className='center-align'>
                {loansData.length > 0 && loansData[2][1]}
              </h4>
              {loansData.length === 0 && (
                <p className='center-align'>Loading...</p>
              )}
            </div>
          </div>
        </div>
        <div className='col s12 m4'>
          <div className='card blue-grey lighten-5'>
            <div className='card-content black-text'>
              <h5 className='center-align'>Loans - Total for Faculty</h5>
              <h4 className='center-align'>
                {loansData.length > 0 && loansData[2][2]}
              </h4>
              {loansData.length === 0 && (
                <p className='center-align'>Loading...</p>
              )}
            </div>
          </div>
        </div>
        <div className='col s12 m4'>
          <div className='card blue-grey lighten-5'>
            <div className='card-content black-text'>
              <h5 className='center-align'>Loans - Total for Staff</h5>
              <h4 className='center-align'>
                {loansData.length > 0 && loansData[2][3]}
              </h4>
              {loansData.length === 0 && (
                <p className='center-align'>Loading...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
