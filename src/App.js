import React from 'react';
import CountryGetAll from './CountryGetAll';
import CountryListWithForm from './CountryListWithForm';
import CountryDelete from './CountryDelete';
import CountryPut from './CountyPut.js';

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 15px',
        background: 'linear-gradient(to bottom right, rgba(200, 44, 0, 0.1) 50%, transparent 00%)',
      }}
    >
      <CountryGetAll />
      <CountryListWithForm />
      <CountryPut /> 
      <CountryDelete />
    </div>
  );
};

export default App;