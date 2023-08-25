
import React from 'react';
import './Tracklist.module.css';

const Tracklist = () => {
    const handleSaveToSpotify = () => {
        // Logic for saving to Spotify
      };
    
      const handleSearch = () => {
        // Logic for search
      };
  // Mock data
  const data = {
    tracks: [
      { id: 1, name: 'Track 1', artist: 'Artist 1', album: 'Album 1' },
      { id: 2, name: 'Track 2', artist: 'Artist 2', album: 'Album 2' },
      // Additional tracks
    ],
    // Other properties and values specific to the Tracklist component
  };

  return (
    <div className="tracklist">
      {/* Content of the Tracklist component */}
      {data.tracks.map((track) => (
        <Track key={track.id} track={track} />
      ))}
       {/* Content of the SearchBar component */}
       <button onClick={handleSaveToSpotify}>Save To Spotify</button>
      <button onClick={handleSearch}>Search</button>
    </div>
  );

    function newFunction() {
        const handleSaveToSpotify = () => {
            // Logic for saving to Spotify
        };

        const handleSearch = () => {
            // Logic for search
        };
        return { handleSaveToSpotify, handleSearch };
    }
};

export default Tracklist;
