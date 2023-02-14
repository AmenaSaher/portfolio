import React from 'react'
import './cards.css'


function CardsData(props) {
  return (
    <>
    <div className="card mb-3">
      <h3 className="card-header">{props.header}</h3>
      <img className="image" src={props.img} alt='projectimage'/>
      <div className="card-body">
        <p className="card-text">{props.text}</p>
        <img className="icons-img" src={props.html} alt="html" title='html'/>
        <img className="icons-img" src={props.css} alt="css" title='css'/>
        <img className="icons-img" src={props.js} alt="javascript" title='javascript'/>
        <img className="icons-img" src={props.react} alt="react" title='react js'/>
        <img className="icons-img" src={props.tailwind} alt="" title='tailwind'/>
      </div>
      <div className="card-body">
        <a href={props.source} className="card-link" target="_blank" rel="noopener noreferrer">Source Code </a>
        <a href={props.link} className="card-link" target="_blank" rel="noopener noreferrer">View Deployment</a>
      </div>
    </div>
    </>
  )
}

export default CardsData