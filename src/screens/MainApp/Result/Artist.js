import React from 'react';
import useQuery from '../../../utils/hooks/useQuery';

const Artist = () => {
  const query = useQuery();
  return (
    <>
      <h1>Artist name: {query.get('name')} </h1>
    </>
  );
};

export default Artist;
