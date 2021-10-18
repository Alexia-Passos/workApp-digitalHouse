//react
import React from 'react'
import { useState, useEffect } from 'react';
//comp
import '../../styleCss/home.css'
import HomeHeader from './HomeHeader'
import Footer from './Footer'
import MenuBar from './MenuBar'
//dep
import axios from 'axios'
import Carousel , { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
//img
import enginner  from '../../img/eng.png'
import coach from '../../img/edfis.png'
import psycho from '../../img/psico.png'
import tech  from '../../img/tech.png'


export default function Home() {
  const [works, setWorks] = useState([])

  useEffect(() => {
    axios.get(`https://workapp-be.herokuapp.com/works`)
    .then(res => {
      console.log(res)
      setWorks(res.data)
    }).catch(err => {
      console.log(err)
    })  
  },[])
  console.log(works)
  
  return (
    <>
      <HomeHeader/>
      <MenuBar/>
      <div className='container'>
        <h1>Encontre serviços de forma descomplicada!</h1>
        <p className='homeInfo'>Nossos prestadores de serviço aguardam seu contato para consultar um orçamento.</p>
        <Carousel
          plugins={[
            'infinite',
            'arrows',
            {
              resolve: slidesToShowPlugin,
              options: {
              numberOfSlides: 3
              }
            },
          ]}
        >
          <img className='carouselImg' alt='carousel' src={enginner} />
          <img className='carouselImg' alt='carousel' src={coach} />
          <img className='carouselImg' alt='carousel' src={tech} />
          <img className='carouselImg' alt='carousel' src={psycho} />
        </Carousel>
      </div>
      <Footer/>
    </>
      
  )
}