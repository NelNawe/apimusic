import React, { useEffect, useState } from 'react';

const MusicList = () => {
  const [musicList, setMusicList] = useState([]);

  useEffect(() => {
  
    fetch('/api/music')
      .then(response => response.json())
      .then(data => setMusicList(data.musics))
      .catch(error => console.error('Error fetching music list:', error));
  }, []);

  return (
    <div>
      <h2>Music List</h2>
      <ul>
        {musicList.map((music, index) => (
          <li key={index}>{music.title} by {music.artist}</li>
        ))}
      </ul>
    </div>
  );
};

export default MusicList;
