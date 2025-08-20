import React, { createContext, useState, useMemo } from 'react';

export const SearchContext = createContext({
  searchQuery: '',
  setSearchQuery: () => {}
});

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const value = useMemo(() => ({ searchQuery, setSearchQuery }), [searchQuery]);
  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};
