import React from 'react';
import './SearchResults.module.css';
import Track from './Track'; // Assuming Track component is imported

const SearchResults = () => {
    const handleSaveToSpotify = () => {
        // Logic for saving to Spotify
      };
    
      const handleSearch = () => {
        // Logic for search
      };
  // Mock data
  const data = {
    trackResults: [
      { id: 1, name: 'Track 1', artist: 'Artist 1', album: 'Album 1' },
      { id: 2, name: 'Track 2', artist: 'Artist 2', album: 'Album 2' },
      // Additional track results
    ],
    // Other properties and values specific to the SearchResults component
  };

  return (
    <div className="search-results">
      {/* Content of the SearchResults component */}
      {data.trackResults.map((track) => (
        <Track key={track.id} track={track} />
      ))}
      <button onClick={handleSaveToSpotify}>Save To Spotify</button>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchResults;
