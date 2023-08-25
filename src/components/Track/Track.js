import React from 'react';
import './Track.module.css';

const Track = () => {
    const handleSaveToSpotify = () => {
        // Logic for saving to Spotify
      };
    
      const handleSearch = () => {
        // Logic for search
      };
  // Mock data
  const data = {
    name: 'Track 1',
    artist: 'Artist 1',
    album: 'Album 1',
    // Other properties and values specific to the Track component
  };

  return (
    <div className="track">
      {/* Content of the Track component */}
      <h3>{data.name}</h3>
      <p>{data.artist}</p>
      <p>{data.album}</p>
      <button onClick={handleSaveToSpotify}>Save To Spotify</button>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Track;
