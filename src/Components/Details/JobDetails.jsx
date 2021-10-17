import React, { useState, useEffect} from 'react'
import axios from 'axios'
import '../../styleCss/jobsDetails.css'
import HomeHeader from '../HomeComponents/HomeHeader'
import Footer from '../HomeComponents/Footer'
import MenuBar from '../HomeComponents/MenuBar'
import { Link } from 'react-router-dom'
import {FiFacebook , FiInstagram , FiLinkedin} from 'react-icons/fi'

const dados = [
  {
      photoLink: "https://images.everydayhealth.com/images/cs-prevent-as-back-pain-working-from-home-1440x810.jpg?w=1110",
      fullName: "Abreu Da Silva",
      profession: "Professor - inglês",
      rating: 67,
      phoneNumber: 11999999999,
      category: "Educação",
      facebook: "https://www.facebook.com/campaign/landing.php?&campaign_id=1661784632&extra_1=s%7Cc%7C320269324047%7Ce%7Cfacebook%7C&placement=&creative=320269324047&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D1661784632%26adgroupid%3D63686352403%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-541132862%26loc_physical_ms%3D1001727%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjwqeWKBhBFEiwABo_XBq6z7e_1aG-Gdkw2FReA0onDPGvpSnFM0L3fKdtLKOdtcEuh_H3iixoCAvMQAvD_BwE",
      instagram: "https://www.instagram.com/",
      linkedin: "https://twitter.com/twitterbrasil",
      twitter: "https://br.linkedin.com/"
  }
]

export default function Home() {
  const [users, setUsers] = useState([])
  const [works, setWorks] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/users')
    .then(res => {
      console.log(res)
      setUsers(res.data)
    }).catch(err => {
      console.log(err)
    })  
  },[])
  
  useEffect(() => {
    axios.get('http://localhost:3000/works')
    .then(res => {
      console.log(res)
      setWorks(res.data)
    }).catch(err => {
      console.log(err)
    })  
  },[])

  return (
    <>
      <HomeHeader/>
      <MenuBar/>
        <div className='detailContainer'>  
          {works.map(work => (
            <div>
              <h2 className='detailInfo'>Categoria - {work.category.categoryName}</h2>
              <h4 className='detailInfo'>{work.user.firstName + '  ' + work.user.lastName}</h4>
              <p className='detailInfo'>{work.workName}</p>
              <p className='detailInfo'>{work.like.likeAccount}  Pessoas curtiram esse trabalho</p>
              <Link className='avaliation'>Entre em contato</Link>
                <p className='detailInfo'><FiFacebook/>{'  ' + work.user.facebook}</p>
                <p className='detailInfo'><FiInstagram/>{'  ' + work.user.instagram}</p>
                <p className='detailInfo'><FiLinkedin/> {'  NÃOESQUECE'}</p>
            </div>
          ))}
          <div className='detailContent'>
            <img  alt='jobPic' className='imgJob' src={dados[0].photoLink}></img>
            <img  alt='jobPic' className='imgJob' src={dados[0].photoLink}></img>
            <img  alt='jobPic' className='imgJob' src={dados[0].photoLink}></img>
            <img  alt='jobPic' className='imgJob' src={dados[0].photoLink}></img>
            <img  alt='jobPic' className='imgJob' src={dados[0].photoLink}></img>
          </div>
        </div> 
      <Footer/>
  </> 
  )
}