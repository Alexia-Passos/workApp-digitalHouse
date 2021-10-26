//react
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//comp
import '../../styleCss/jobsDetails.css'
import HomeHeader from '../HomeComponents/HomeHeader'
import Footer from '../HomeComponents/Footer'
import MenuBar from '../HomeComponents/MenuBar'
//dep
import axios from 'axios'
import { FiFacebook, FiInstagram } from 'react-icons/fi'
import history from '../../History';

const dados = [
  {
    photoLink: "https://images.everydayhealth.com/images/cs-prevent-as-back-pain-working-from-home-1440x810.jpg?w=1110",
  }
]
class JobDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      whatsapp: null,
      instagram: '',
      facebook: '',
      profilefoto: '',
      categoryName: '',
      categoryId: null,
      workName: '',
      description: '',
      profile: '',
      facebook: '',
      instagram: '',
      userId: null
    }
  }

  componentDidMount() {
    if (localStorage.getItem("userId")) {
      this.getUserData(localStorage.getItem("userId"))
    } else {
      history.push('/')
    }
  }

  getUserData = (userId) => {
    axios({
      method: 'GET',
      url: `https://workapp-be.herokuapp.com/users/id?id=${userId}`
    })
      .then(res => {
        this.setState({
          userId: res.data.userId,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          whatsapp: res.data.whatsapp,
          instagram: res.data.instagram,
          facebook: res.data.facebook,
          profilefoto: res.data.profilefoto,
        }, this.getWorkData(userId))
      })
  }

  getWorkData = (userId) => {
    axios({
      method: 'GET',
      url: `https://workapp-be.herokuapp.com/works/id?id=${userId}`
    })
      .then(res => {
        this.setState({
          userId: res.data.userId,
          workName: res.data.workName,
          category: res.data.category,
          description: res.data.description,
          profile: res.data.profile,
        })
      })
  }

  render() {
    const { firstName, lastName, whatsapp, instagram, facebook, categoryName,  workName, description} = this.state

    return (
      <>
        <HomeHeader />
        <MenuBar />
        <div className='detailContainer'>
          <div>
            <h2 className='detailInfo'>Categoria - {categoryName}</h2>
            <h4 className='detailInfo'>{firstName + '  ' + lastName}</h4>
            <p className='detailInfo'>{workName}</p>
            <p className='detailInfo'>{description}</p>
            <Link className='avaliation'>Entre em contato {whatsapp}</Link>
            <p className='detailInfo'><FiFacebook />{'  ' + facebook}</p>
            <p className='detailInfo'><FiInstagram />{'  ' + instagram}</p>
          </div>
          <div className='detailContent'>
            <img alt='jobPic' className='imgJob' src={dados[0].photoLink}></img>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}
export default JobDetails