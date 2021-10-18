//react
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
//comp
import '../../styleCss/card.css'
//dep
import axios from 'axios'
import { FiThumbsUp } from 'react-icons/fi'
import Carousel , { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const dados = [
  {
    photoLink: "https://www.aihr.com/wp-content/uploads/working-from-home-background-and-featured-image.png",
  }
]

export default function Card() {
  const [works, setWorks] = useState([])

  useEffect(() => {
    // axios.get(`http://localhost:3000/works/`)
    axios.get(`https://workapp-be.herokuapp.com/works/`)
      .then(res => {
        console.log(res)
        setWorks(res.data)
      }).catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className='cardsContainer'>
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
          <Link to='/detalhes' className='cardsContent' >
          <h6 className='category'>teste</h6>
          <img alt='jobPic' className='imgCard' src={dados[0].photoLink}></img>
          <div className='nest'>
            <div>nome</div>
            <div>2 <FiThumbsUp size='15' /></div>
          </div>
        </Link>

        <Link to='/detalhes' className='cardsContent' >
          <h6 className='category'>teste</h6>
          <img alt='jobPic' className='imgCard' src={dados[0].photoLink}></img>
          <div className='nest'>
            <div>nome</div>
            <div>2 <FiThumbsUp size='15' /></div>
          </div>
        </Link>

        <Link to='/detalhes' className='cardsContent' >
          <h6 className='category'>teste</h6>
          <img alt='jobPic' className='imgCard' src={dados[0].photoLink}></img>
          <div className='nest'>
            <div>nome</div>
            <div>2 <FiThumbsUp size='15' /></div>
          </div>
        </Link>

        <Link to='/detalhes' className='cardsContent' >
          <h6 className='category'>teste</h6>
          <img alt='jobPic' className='imgCard' src={dados[0].photoLink}></img>
          <div className='nest'>
            <div>nome</div>
            <div>2 <FiThumbsUp size='15' /></div>
          </div>
        </Link>

        <Link to='/detalhes' className='cardsContent' >
          <h6 className='category'>teste</h6>
          <img alt='jobPic' className='imgCard' src={dados[0].photoLink}></img>
          <div className='nest'>
            <div>nome</div>
            <div>2 <FiThumbsUp size='15' /></div>
          </div>
        </Link>
        </Carousel>
        

    </div>
  )
}
