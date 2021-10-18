//react
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
//comp
import Card from '../HomeComponents/Card'
import '../../styleCss/home.css'
import Footer from '../HomeComponents/Footer'
import HomeHeader from '../HomeComponents/HomeHeader'
import MenuBar from '../HomeComponents/MenuBar'
//dep
import axios from 'axios'

export default function Category() {
  const [works, setWorks] = useState([])
  const id = useParams()

  useEffect(() => {
    axios.get(`http://localhost:3000/works${id}`)
    // axios.get(`https://workapp-be.herokuapp.com/works${id}`)
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
      <h1>Encontre um Serviço</h1>
      <div className='cardCategory'>
          <Card/>
      </div>
      <Footer/>
    </>
  )
}