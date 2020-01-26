import React from 'react';
import { Spinner } from '../../components';

const LoadingScreen = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Spinner />
    </div>
  );
};

export default LoadingScreen;
