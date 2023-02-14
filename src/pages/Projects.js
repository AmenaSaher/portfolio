import React from 'react'
import './projects.css'
import proj from '../images/proj.png';
import proj1 from '../images/proj1.png';
import proj2 from '../images/proj2.png';
import proj3 from '../images/proj3.png';
import { Navbar } from '../components/Navbar';
import CardsData from '../components/CardsData';
import html from '../images/html.png'
import css from '../images/css.png'
import js from '../images/js.png'
import react from '../images/react.png'
import tailwind from '../images/tailwind.png'

export default function Cards() {
    return (
        <>
        <Navbar/>
        <div className='proj' id='cards'>
          <h1 className='h1'>PROJECTS</h1>
            <div className='cardss'>
              <CardsData
                header="Yu-Gi-Oh! Cards Searcher"
                img={proj}
                text="A website developed to find the official Yu-Gi-Oh! cards, filter them, and sort
                them. The API used is Yu-Gi-Oh! API by YGOPRODECK."
                html={html}
                css={css}
                js={js}
                react={react}
                source="https://github.com/AmenaSaher/Yu-Gi-Oh-Cards-Searcher"
                link="https://yu-gi-oh-cards-search.netlify.app/"
              />
              <CardsData
                header="Amiibo Finder"
                img={proj1}
                text="A web page to search for amiibos (Nintendo's line of toys-to-life figurines), designed using Tailwind CSS and fetching data from AmiiboAPI."
                html={html}
                css={css}
                js={js}
                react={react}
                tailwind={tailwind}
                source="https://github.com/AmenaSaher/Amiibo-Finder"
                link="https://find-your-amiibo.netlify.app/"
              />
              <CardsData
                header="E-Commerce landing page"
                img={proj2}
                text="Fully responsive ecommerce website, built using HTML, CSS, JavaScript, ReactJS, and styled-components.
                I am working on adding a functioning cart to this project next."
                html={html}
                css={css}
                js={js}
                react={react}
                source="https://github.com/AmenaSaher/static-ecommerce-website"
                link="https://shopaholic-ecommerce.netlify.app/"
              />
              <CardsData
                header="Personal Website"
                img={proj3}
                text="A personal portfolio website, that you're viewing right now, all the illustrations are designed by me."
                html={html}
                css={css}
                js={js}
                react={react}
                tailwind={null}
                source="https://github.com/AmenaSaher/portfolio"
                link="https://amena-saher.com"
              />
        </div>
    </div>
</>
    )
}
