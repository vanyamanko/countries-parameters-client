import React, { useState, useEffect } from 'react';

const CreateCountryForm = () => {
  const [countries, setCountries] = useState([]);
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

  const handleCreateCountry = () => {
    const newCountry = {
      countryShortName: countryShortName,
      country: country,
      code: code,
      region: region
    };

    fetch('https://countries-parameters.onrender.com/api/v1/countries-parameters', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([newCountry])
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error creating country');
        }
      })
      .then(data => {
        setIsVisible(true);
        console.log('Country created:', data);
        setCountryShortName('');
        setCountry('');
        setCode('');
        setRegion('');
        setCountries([...countries, data]);
        setError('');
      })
      .catch(error => {
        console.error('Error creating country:', error);
        setError('Error creating country');
      });
  };

  return (
    <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      padding: '0 10px',

      mixWidth: '100px',
    }}
  >
      <h1 style={{ color: '#4169e1', marginBottom: '20px' }}>Create Country</h1>
      <div style={{ display: 'flex', flexDirection: 'column', padding: '0 15px' }}>
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
          onClick={() => {
            handleCreateCountry();
          }}
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Create Country
        </button>
      </div>
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
      {isVisible && <p style={{ color: 'green', marginTop: '10px' }}>Country created!</p>}
    </div>
  );
};

export default CreateCountryForm;