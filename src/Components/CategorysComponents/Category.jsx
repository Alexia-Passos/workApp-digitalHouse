import React from 'react'
import Card from '../HomeComponents/Card'
import '../../styleCss/home.css'
import Footer from '../HomeComponents/Footer'
import HomeHeader from '../HomeComponents/HomeHeader'
import MenuBar from '../HomeComponents/MenuBar'

export default function Category() {
  return (
    <>
      <HomeHeader/>
      <MenuBar/>
      <div className='cardCategory'>
        <h1>Encontre um Serviço</h1>
        <Card/>
      </div>
      <Footer/>
    </>
  )
}