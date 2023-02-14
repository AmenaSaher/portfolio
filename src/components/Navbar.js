import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo2.png'
import menu from '../images/menu.png'
import close_icon from '../images/close.png'
import logo1 from '../images/logo.gif'

import './navbar.css'

export const Navbar = () => {

  const [toggleMenu,setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState
  (window.innerWidth)
  const [close,setClose] = useState(true)
  const toggleNav = () =>{
    setToggleMenu(!toggleMenu)
    setClose(!close)
  }
  useEffect(()=>{
    const changeWidth = () =>{
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize',changeWidth)
  },[])


  return (
    <nav className='nav'>
      <Link to='/'>
      <div>
      <img className='static logo' src={logo} alt='logo'/>
      </div>
      </Link>
      <img className='active logo' src={logo1} alt='logo'/>
      {(toggleMenu || screenWidth > 760)&& (
      <div className='nav_container'>
      <Link to='/about' className='nav_items'>
      about me
      </Link>
      <Link to='/projects' className='nav_items'>
      projects
      </Link>
      <Link to='/contact' className='nav_items' >
      contact me
      </Link>
      </div>
      )
      }
      <img onClick={toggleNav} src={toggleMenu ? `${close_icon}` : `${menu}`} className="menu" alt="menu"/>
    </nav>
  )
}
