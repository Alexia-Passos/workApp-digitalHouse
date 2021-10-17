//react
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
//comp
import '../../styleCss/card.css'
//dep
import axios from 'axios'
import { FiThumbsUp } from 'react-icons/fi'

const dados = [
  {
      photoLink: "https://www.aihr.com/wp-content/uploads/working-from-home-background-and-featured-image.png",
  }
]

export default function Card() {
  const [works, setWorks] = useState([])
  
  useEffect(() => {
    axios.get(`http://localhost:3000/works/`)
    .then(res => {
      console.log(res)
      setWorks(res.data)
    }).catch(err => {
      console.log(err)
    })  
  },[])

  console.log(works.userId, "to aqui")

  function filterCard(event){
    works.filter(work => work.userId == event.target
  )}

  return( 
    <div className='cardsContainer'>  
      {works.map((work, index) => {
        return (
          <Link  onClick={() => filterCard(`${work.userId ? work.userId : ""}`)} to={ work.userId ? `detalhes/${work.userId}` : ""} key={index} className='cardsContent' >
            <h6 className='category'>{work.workName}</h6>
            <img  alt='jobPic' className='imgCard' src={dados[0].photoLink}></img>
            <div className='nest'>
              <div>{work.user.firstName + '  ' + work.user.lastName}</div>
              <div>{work.like.likeAccount} <FiThumbsUp size='15'/></div>
            </div>
          </Link>
        )
      })}
    </div> 
  )
}

//className='avaliation' onClick={() => setLikesCounter(counter + 1)}>{work.like.likeAccount}  
//  const [counter, setLikesCounter] = useState(0)