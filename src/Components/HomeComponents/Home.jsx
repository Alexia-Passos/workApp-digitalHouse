import React from 'react'
import Card from './Card'
import '../../styleCss/home.css'
import HomeHeader from './HomeHeader'
import Footer from './Footer'
import MenuBar from './MenuBar'
import Carousel , { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

export default function Home() {
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
                numberOfSlides: 2
                }
              },
            ]}
          >
            <img src={"https://brainhubeu.github.io/react-carousel/static/starry-night-39eed0a107ddb6c9f980eb3081a8bdd3.jpg"} />
            <img src={"https://brainhubeu.github.io/react-carousel/static/scream-ee207a05c1e6fed03aafa156cc511abe.jpg"} />
            <img src={"https://brainhubeu.github.io/react-carousel/static/mona-7a1ceae9bdb8c43272eb101c091c5408.jpg"} />
            <img src={"https://brainhubeu.github.io/react-carousel/static/starry-night-39eed0a107ddb6c9f980eb3081a8bdd3.jpg"} />
          </Carousel>
        </div>
        <Footer/>
      </>
        
    )
}