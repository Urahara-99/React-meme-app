import React from 'react'
import { useState } from 'react';

const Main = () => {

    const [meme, setMeme] = useState({
        imageUrl: "https://i.imgflip.com/3po4m7.jpg",
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
    });
    const [allmemes, setAllMemes] = React.useState([]);
    React.useEffect(()=>{
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data =>
            {
                (setAllMemes(data.data.memes))
            })        
    }, [])
    
    function memeNeeded() {
        const randomMeme = Math.floor(Math.random() * allmemes.length);
        console.log(randomMeme);
        const memeRandom = allmemes[randomMeme].url
        setMeme(prev=>({
            ...prev,
            imageUrl: memeRandom
        }))
    }
    
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
        <button onClick={memeNeeded}>Get the meme image!</button>
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