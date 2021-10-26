//react
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//comp
import '../../styleCss/card.css'
//dep
import axios from 'axios'
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const dados = [{photoLink: "https://www.aihr.com/wp-content/uploads/working-from-home-background-and-featured-image.png"}]

const device = (/Mobi/.test(navigator.userAgent))

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      categoryName: '',
      categoryId: null,
      category: '',
      workName: '',
      profile: '',
      userId: null,

    }
  }

  getWorkData = () => {
    axios({
      method: 'GET',
      url: `https://workapp-be.herokuapp.com/works`
    })
      .then(res => {
        this.setState({
          userId: res.data.userId,
          workName: res.data.workName,
          categoryName: res.data.categoryName,
          profile: res.data.profile,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
        })
      })
  }

  render() {
    const { firstName, lastName, category, workName } = this.state

    const isMobile = device === true ? 1 : 3
    return (
      <div className='cardsContainer'>
        <Carousel
          plugins={[
            'infinite',
            'arrows',
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: isMobile
              }
            },
          ]}
        >
           <Link to='/detalhes' className='cardsContent' >
             <h6 className='category'>{category}</h6>
             <img alt='jobPic' className='imgCard' src={dados[0].photoLink}></img>
             <div className='nest'>
               <div>{firstName + " " + lastName}</div>
               <div>{workName}</div>
             </div>
           </Link>
           <Link to='/detalhes' className='cardsContent' >
             <h6 className='category'>{category}</h6>
             <img alt='jobPic' className='imgCard' src={dados[0].photoLink}></img>
             <div className='nest'>
               <div>{firstName + " " + lastName}</div>
               <div>{workName}</div>
             </div>
           </Link>
           <Link to='/detalhes' className='cardsContent' >
             <h6 className='category'>{category}</h6>
             <img alt='jobPic' className='imgCard' src={dados[0].photoLink}></img>
             <div className='nest'>
               <div>{firstName + " " + lastName}</div>
               <div>{workName}</div>
             </div>
           </Link>
           <Link to='/detalhes' className='cardsContent' >
             <h6 className='category'>{category}</h6>
             <img alt='jobPic' className='imgCard' src={dados[0].photoLink}></img>
             <div className='nest'>
               <div>{firstName + " " + lastName}</div>
               <div>{workName}</div>
             </div>
           </Link>
           
        </Carousel>
      </div>
    )
  }
}
export default Card