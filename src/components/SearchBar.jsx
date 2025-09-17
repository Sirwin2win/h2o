// components/SearchBar.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../features/filtersSlice';


const SearchBar = () => {
  const dispatch = useDispatch();
  const [localSearchTerm, setLocalSearchTerm] = useState('');

  const handleChange = (e) => {
    setLocalSearchTerm(e.target.value);
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search products..."
      value={localSearchTerm}
      onChange={handleChange}
    />
  );
};

export default SearchBar;