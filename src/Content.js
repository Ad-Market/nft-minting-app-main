import React from 'react'
import "./Content.css"
import Typewriter from 'typewriter-effect';

const Content = () => {
  return (
    <div className='content'>
        <div className='content__norm'>
    
    <div className='content__lower'>
    <img className='content__logo3' src='https://i.imgur.com/JtAAhLZ.png'   alt='' />
    <Typewriter
        onInit={(typewriter) => {
            typewriter.typeString('habits can kill you')
            .pauseFor(1200)
            .deleteAll()
            typewriter.typeString('habits can kill you')
            .pauseFor(1200)
            .deleteAll()
            typewriter.typeString('habits can kill you')
            .pauseFor(1200)
            .deleteAll()
            typewriter.typeString('habits can kill you')
            .pauseFor(444400000)
            .deleteAll()
            .start();
  }}
/>
    </div>
    </div>
    </div>
  )
}

export default Content