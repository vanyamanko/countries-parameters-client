import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountryDeleteForm = () => {
  const [id, setId] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const handleDelete = () => {
    axios
      .delete(`https://countries-parameters.onrender.com/api/v1/countries-parameters/${id}`)
      .then(response => {
        setId('');
        console.log('delete.OK');
      })
      .catch(error => {
        console.error('erroe:', error);
      });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '300px',
        padding: '5px',
        borderRadius: '5px',
      }}
    >
      <h1 style={{ color: '#F08080', marginBottom: '20px' }}>Delete Country</h1>
      <input
        type="number"
        value={id}
        onChange={e => setId(e.target.value)}
        placeholder="Enter ID of country to delete"
        style={{
          marginBottom: '10px',
          padding: '8px',
          borderRadius: '8px',
          backgroundColor: '#f0f0f0',
          border: 'none',
          width: '93%'
        }}
      />
      <button
        onClick={() => {
          handleDelete();
          setIsVisible(true);
        }}
        style={{
          backgroundColor: '#f44336',
          color: 'white',
          padding: '8px',
          borderRadius: '3px',
          border: 'none',
          cursor: 'pointer',
          width: '100%'
        }}
      >
        Delete Country
      </button>
      {isVisible && <div style={{ marginTop: '10px', color: 'green' }}>Country deleted!</div>}
    </div>
  );
};

export default CountryDeleteForm;