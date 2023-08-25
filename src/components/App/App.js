import React from 'react';
import './App.module.css';

const App = () => {
    const handleSaveToSpotify = () => {
        // Logic for saving to Spotify
      };
    
      const handleSearch = () => {
        // Logic for search
      };
  // Mock data
  const data = {
    appName: 'Jammming',
    version: '1.0.0',
    // Other properties and values specific to the App component
  };

  return (
    <div className="app">
      {/* Content of the App component */}
      <button onClick={handleSaveToSpotify}>Save To Spotify</button>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default App;
