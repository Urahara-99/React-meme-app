import React from 'react'
import trollface from '../assets/troll-face.png'

const Header = () => {
  return (
    <div className='meme-header'>
        <img src={trollface}/>
        <h2>Meme Generator</h2>
    </div>
  )
}

export default Header