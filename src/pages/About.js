import React from 'react'
import { Navbar } from '../components/Navbar'
import './about.css'
import html from '../images/html.png'
import css from '../images/css.png'
import js from '../images/js.png'
import react from '../images/react.png'
import git from '../images/git.png'
import tailwind from '../images/tailwind.png'
import bootstrap from '../images/bootstrap.png'
import figma from '../images/figma.png'
import python from '../images/python.png'
import sass from '../images/sass.png'
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'
import twitter from '../images/twitter.png'
import pdf from '../images/Amena Saher Resume.pdf'



export default function About() {
  return (
    <div>
        <Navbar/>
        <div className='div-about'>
        <h3 className='title'>[1]</h3>
        <h4 className='title'>ABOUT</h4>
        <hr/>
        <p className='para-1'> 
          Hello! I'm Amena, a self taught <mark>front-end developer</mark> from India. 
          I am currently pursuing my undergrad.</p>
        <p className='para'>
            I became intrigued by web design and development 2 years
            ago when I saw how much creative potential it offers. 
            I have been putting my ideas to use since then.</p>
        <p className='para'>
          I primarily use <mark>HTML, CSS, JavaScript, and React Js</mark> in my work
          but I've been expanding my knowledge by enrolling in a MERN stack 
          program and a UX design course so I can create better user experiences. 
          </p>
          <p className='para'>
          I would love to work with a company that's as passionate as me in creating 
          web and user experiences and where I can expand my knowledge and contribute my ideas.
          </p>
        <p className='para'>
          When I'm not busy centering a div, I enjoy drawing, reading, writing, playing video games and 
          trying to be funny (when I'm not).</p>
        <br/>
        <p className='para' style={{cursor: "pointer"}}><mark><a href={pdf} download="Amena Saher Resume.pdf">Download Resume</a></mark></p>
        <br/>
        <h4 className='title'>[2]</h4>
        <h4 className='title'>SKILLS</h4>
        <hr/>
        <div className='skills'>
          <img src={html} alt="html" title='html'/>
          <img src={css} alt="css" title='css'/>
          <img src={js} alt="js" title='javascript'/>
          <img src={react} alt="react" title='react js'/>
          <img src={git} alt="git" title='git'/>
          <img src={tailwind} alt="tailwind" title='tailwind'/>
          <img src={bootstrap} alt="bootstrap" title='bootstrap'/>
          <img src={figma} alt="figma" title='figma'/>
          <img src={python} alt="python" title='python'/>
          <img src={sass} alt="sass" title='sass'/>
        </div>
        <br/>
        <br/>
        <h4 className='title'>[3]</h4>
        <h4 className='title'>OTHER LINKS</h4>
        <hr/>
        <div className='social_links'>
        <a href="https://www.linkedin.com/in/amena-saher/"><img src={linkedin} alt="linkedin"/></a>
        <a href="https://github.com/AmenaSaher"><img src={github} alt="github"/></a>
        <a href="https://twitter.com/Amena__Saher"><img src={twitter} alt="twitter"/></a>
        </div>
</div>
    </div>
  )
}
