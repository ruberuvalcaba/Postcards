import React from 'react';
import Loading from 'react-loading-components';

const LoadingPage = () => (
  <div className="loading-overlay">
      <Loading type='ball_triangle' width={100} height={100} fill='#f44242' />
  </div>
);

export default LoadingPage;
