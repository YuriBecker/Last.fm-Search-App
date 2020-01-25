import React from 'react';
import useQuery from '../../../utils/hooks/useQuery';

const Album = () => {
  const query = useQuery();
  return (
    <>
      <h1>Album name: {query.get('name')} </h1>
    </>
  );
};

export default Album;
