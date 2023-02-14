import React from 'react'
import gif from '../images/lineart2.gif'
import Cards from './Cards'
import Contact from './Contact'
import './homepage.css'
import { Navbar } from './Navbar'

export default function Homepage() {
    return (
    <div className='homepage'>
        <div className='home'>
        <Navbar/>
        <div className='wrapper'>
            <div className='main-text'>
                <h1 className='name-text'>Hi, I'm Amena</h1>
                <h3 className='desc-text'>I like creating websites</h3>
            </div>
            <img className='img' src={gif} alt='main-gif'/>
        </div>
        </div>
       <Cards/>
       <Contact/>
    </div>
    ) 
}
