import React from 'react'
import Card from './Card'
import '../../styleCss/home.css'
import HomeHeader from './HomeHeader'
import Footer from './Footer'
import MenuBar from './MenuBar'

export default function Home() {
    return (
      <>
        <HomeHeader/>
        <MenuBar/>
        <div className='container'>
          <h1>Encontre serviços de forma descomplicada!</h1>
          <p className='homeInfo'>Nossos prestadores de serviço aguardam seu contato para consultar um orçamento.</p>
          <Card/>
        </div>
        <Footer/>
      </>
        
    )
}