import React, { useState } from 'react';
import PropTypes from 'prop-types';

const API_KEY = '0862fa98880a0da61e623edf63754bd7';

const LocationInput = ({ onSelect }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const fetchSuggestions = async (value) => {
    setQuery(value);
    if (value === '') {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(value)}&limit=5&appid=${API_KEY}`);
    const data = await response.json();

    setSuggestions(data);
    setShowSuggestions(true);
  };

  const selectSuggestion = (value) => {
    setQuery(value);
    setShowSuggestions(false);
    onSelect(value);
  };

  return (
    <div className="relative flex-1">
      <input
        type="text"
        value={query}
        onChange={(e) => fetchSuggestions(e.target.value)}
        className=" bg-transparent border-b-2 border-gray-600 outline-none"
        placeholder="Enter location"
      />
      {showSuggestions && (
        <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded shadow-lg z-10">
          {suggestions.length > 0 ? (
            suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="p-3 cursor-pointer hover:bg-gray-200"
                onClick={() => selectSuggestion(`${suggestion.name}, ${suggestion.country}`)}
              >
                {suggestion.name}, {suggestion.country}
              </div>
            ))
          ) : null}
        </div>
      )}
    </div>
  );
};

LocationInput.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default LocationInput;
