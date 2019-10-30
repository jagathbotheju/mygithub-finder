import React from 'react';

const alert = ({ alert }) => {
  //racf
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle' />
        {alert.msg}
      </div>
    )
  );
};

export default alert;
