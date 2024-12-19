import React from 'react'
import { useState } from 'react';

const Main = () => {

    const [meme, setMeme] = useState({
        imageUrl: "http://i.imgflip.com/1bij.jpg",
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
    });

    function handleChange(event){
        const {value, name} = event.currentTarget;
        setMeme(prev=>({
            ...prev,
            [name]: value,
        }))
    }
  return (
    <main>
    <div className='form'>
        <label>Top Text:
            <input 
            type='text'
            placeholder=''
            name='topText'
            onChange={handleChange}
            value={meme.topText}
            />
        </label>
        <label>Bottom Text:
            <input 
            type='text'
            placeholder=''
            name='bottomText'
            onChange={handleChange}
            value={meme.bottomText}
            />
        </label>
        <button>Get the meme image!</button>
    </div>
    <div className="meme">
        <img src={meme.imageUrl} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
    </div>
    </main>
  )
}

export default Main