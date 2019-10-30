import React, { Fragment } from 'react';
import spinner from './spinner.gif';

//racf
const Spiner = () => {
  //console.log({ spinner });
  return (
    <Fragment>
      <img
        src={spinner}
        alt='Loading...'
        style={{
          width: '200px',
          margin: 'auto',
          display: 'block'
        }}
      />
    </Fragment>
  );
};

export default Spiner;
