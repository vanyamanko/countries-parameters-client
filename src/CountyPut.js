import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateCountryForm = () => {
  const [id, setId] = useState('');
  const [countryShortName, setCountryShortName] = useState('');
  const [country, setCountry] = useState('');
  const [code, setCode] = useState('');
  const [region, setRegion] = useState('');
  const [error, setError] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const handleUpdate = () => {
    setId('');
    setCountryShortName('');
    setCountry('');
    setCode('');
    setRegion('');
    setCountry('');
    const countryParameters = {
      countryShortName,
      country,
      code,
      region
    };

    axios
    .put(`https://countries-parameters.onrender.com/api/v1/countries-parameters/${id}`, countryParameters)
    .then(data => {
      setError('');
      setIsVisible(true);
    })
    .catch(error => {
      setError('Error update country')
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '0 10px',

        maxHeight: '50px',
      }}
    >
      <h1 style={{ color: '#7B68EE', marginBottom: '10px' }}>Country Update</h1>
      <input
        type="number"
        value={id}
        onChange={e => setId(e.target.value)}
        placeholder="ID"
        style={{
          marginBottom: '10px',
          padding: '10px',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: '#f0f0f0'
        }}
      />
      <input
        type="text"
        value={countryShortName}
        onChange={e => setCountryShortName(e.target.value)}
        placeholder="Country Short Name"
        style={{
          marginBottom: '10px',
          padding: '10px',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: '#f0f0f0'
        }}
      />
      <input
        type="text"
        value={country}
        onChange={e => setCountry(e.target.value)}
        placeholder="Country"
        style={{
          marginBottom: '10px',
          padding: '10px',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: '#f0f0f0'
        }}
      />
      <input
        type="number"
        value={code}
        onChange={e => setCode(e.target.value)}
        placeholder="Code"
        style={{
          marginBottom: '10px',
          padding: '10px',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: '#f0f0f0'
        }}
      />
      <input
        type="text"
        value={region}
        onChange={e => setRegion(e.target.value)}
        placeholder="Region"
        style={{
          marginBottom: '10px',
          padding: '10px',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: '#f0f0f0'
        }}
      />
      <button
        onClick={handleUpdate}
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Update Country
        </button>
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
      {isVisible && <p style={{ color: 'green', marginTop: '10px' }}>Country updated!</p>}
    </div>
  );
};

export default UpdateCountryForm;