import React from 'react';
import { Spinner } from '../../components';

const LoadingUserInfo = () => {
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

export default LoadingUserInfo;
