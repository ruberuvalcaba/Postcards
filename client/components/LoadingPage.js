import React from 'react';
import Loading from 'react-loading-components';

const LoadingPage = () => (
  <div className="loading-overlay">
      <Loading type='rings' width={200} height={200} fill='#f44242' />
  </div>
);

export default LoadingPage;
