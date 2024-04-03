import React, { useState } from 'react';

const CountryList = () => {
  const [countries, setCountries] = useState([]);

  const getAllCountries = () => {
    fetch('http://localhost:8080/api/v1/countries-parameters')
      .then(response => response.json())
      .then(data => {
        setCountries(data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1 style={{ color: '#1E90FF', marginBottom: '20px' }}>Country List</h1>
      <button
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          border: 'none',
          marginRight: '10px',
        }}
        onClick={getAllCountries}
      >
        Get all countries
      </button>
      <ul>
        {countries.map(country => (
          <li
            key={country.id}
            style={{
              marginBottom: '10px',
              padding: '10px',
              backgroundColor: '#f2f2f2',
              borderRadius: '5px',
            }}
          >
            <strong>ID:</strong> {country.id}<br />
            <strong>Country Short Name:</strong> {country.countryShortName}<br />
            <strong>Country:</strong> {country.country}<br />
            <strong>Code:</strong> {country.code}<br />
            <strong>Region:</strong> {country.region}<br />
            {country.timeZones && country.timeZones.length > 0 && (
              <React.Fragment>
                <strong>Time Zones:</strong> {country.timeZones.join(', ')}
              </React.Fragment>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;