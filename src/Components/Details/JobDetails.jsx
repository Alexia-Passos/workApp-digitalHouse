//react
import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
//comp
import '../../styleCss/jobsDetails.css'
import HomeHeader from '../HomeComponents/HomeHeader'
import Footer from '../HomeComponents/Footer'
import MenuBar from '../HomeComponents/MenuBar'
//dep
import axios from 'axios'
import {FiFacebook , FiInstagram , FiLinkedin} from 'react-icons/fi'

const dados = [
  {
    photoLink: "https://images.everydayhealth.com/images/cs-prevent-as-back-pain-working-from-home-1440x810.jpg?w=1110",
  }
]

export default function Home() {
  const [users, setUsers] = useState([])
  const [works, setWorks] = useState([])

  useEffect(() => {
    axios.get(`https://workapp-be.herokuapp.com/users`)
    .then(res => {
      console.log(res)
      setUsers(res.data)
    }).catch(err => {
      console.log(err)
    })  
  },[])
  
  useEffect(() => {
    axios.get(`https://workapp-be.herokuapp.com/works`)
    .then(res => {
      console.log(res)
      setWorks(res.data)
    }).catch(err => {
      console.log(err)
    })  
  },[])
  console.log(works, 'teste')
  return (
    <>
      <HomeHeader/>
      <MenuBar/>
        <div className='detailContainer'>  
            <div>
              <h2 className='detailInfo'>Categoria - {works.CategoryName}</h2>
              <h4 className='detailInfo'>{users.firstName + '  ' + users.lastName}</h4>
              <p className='detailInfo'>{works.workName}</p>
              <p className='detailInfo'>{works.likeAccount}  Pessoas curtiram esse trabalho</p>
              <Link className='avaliation'>Entre em contato</Link>
                <p className='detailInfo'><FiFacebook/>{'  ' + users.facebook}</p>
                <p className='detailInfo'><FiInstagram/>{'  ' + users.instagram}</p>
            </div>
          <div className='detailContent'>
            <img  alt='jobPic' className='imgJob' src={dados[0].photoLink}></img>
          </div> 
        </div> 
      <Footer/>
  </> 
  )
}