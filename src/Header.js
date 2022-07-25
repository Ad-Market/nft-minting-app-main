import React from 'react'
import "./Header.css"
import {AiOutlineTwitter} from "react-icons/ai"
import {SiDiscord} from "react-icons/si"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Link } from "react-router-dom";


function Header() {


  const contentStyle = { background: '#FFF' };
  const overlayStyle = { background: 'rgba(0,0,0,0.5)' };
  const height = { height: "10%" };
  return (
    <div className='header'>
        
        <div className='multi-button'>
       <button onClick={() => {
    window.location.href = 'https://deadhabits.com';
  }} className="h3_retro__button">Home</button>
       
        
        </div>
        <div className='header__social'>
            <div className='leftwit'></div>
        <AiOutlineTwitter onClick={() => {
    window.location.href = 'https://twitter.com/DeadHabitsNFT';
  }}className='twitleft' size={35} />
        <SiDiscord onClick={() => {
    window.location.href = 'https://discord.gg/hwBmQm2x75';
  }} className='discright' size={35}/>
        </div>
        
    </div>
  )
}

export default Header