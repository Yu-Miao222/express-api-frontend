import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MusicList = () => {
  const [musicList, setMusicList] = useState([]);
  const [textInput, setTextInput] = useState('')

  useEffect(() => {
    fetch('https://project-express-api-s7fgmoqnaa-lz.a.run.app')
      .then((data) => data.json())
      .then((json) => setMusicList(json.response))
  }, []);

  const OnMusicSearch = (event) => {
    setTextInput(event.target.value)
  }

  return (
    <section className="list-section">
      <h1>Top Music </h1>
      <input type="text" onChange={OnMusicSearch} placeholder="Search for music..." />
      {musicList.map((music) => {
        if (music.artistName.includes(textInput)) {
          return (
            <Link key={music.id} to={`/music/${music.id}`}>
              <p>{music.artistName}</p>
            </Link>
          )
        } else {
          return (<div key={music.id}> </div>)
        }
      })}
    </section>
  );
};

export default MusicList;