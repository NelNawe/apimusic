import React, { useState } from 'react';

const SubmitMusic = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');

  const handleSubmit = () => {
    
    console.log('Submitting music...', { title, artist });
  };

  return (
    <div>
      <h2>Submit Music</h2>
      <form>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

        <label>Artist:</label>
        <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} />

        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default SubmitMusic;
