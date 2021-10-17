import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../../styleCss/card.css'
import { FiThumbsUp } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const dados = [
  {
      photoLink: "https://www.aihr.com/wp-content/uploads/working-from-home-background-and-featured-image.png",
  }
]

export default function Card() {
  const [counter, setLikesCounter] = useState(0)
  const [works, setWorks] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3000/works/:id`)
    .then(res => {
      console.log(res)
      setWorks(res.data)
    }).catch(err => {
      console.log(err)
    })  
  },[])

  return( 
    <div className='cardsContainer'>  
      {works.map((work, index) => {
        return (
          <Link  to='detalhes' key={index} className='cardsContent'>
            <h6 className='category'>{work.workName}</h6>
            <img  alt='jobPic' className='imgCard' src={dados[0].photoLink}></img>
            <div className='nest'>
              <div>{work.user.firstName + '  ' + work.user.lastName}</div>
              <button className='avaliation' onClick={() => setLikesCounter(counter + 1)}>{work.like.likeAccount}  < FiThumbsUp size='15'/></button>
            </div>
          </Link>
        )
      })}
    </div> 
  )
}