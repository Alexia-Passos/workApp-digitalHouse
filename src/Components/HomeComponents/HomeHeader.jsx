//react
import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
//comp
import '../../styleCss/homeheader.css'
import { FiBell } from 'react-icons/fi'
//img
import user from '../../img/user.jpeg'
//dep
import axios from 'axios'

const device = (/Mobi/.test(navigator.userAgent))

export default function HomeHeader() {
    const logged = true

    const [users, setUsers] = useState([])

    useEffect(() => {
      axios.get(`https://workapp-be.herokuapp.com/users:id`)
      .then(res => {
        console.log(res)
        setUsers(res.data)
      }).catch(err => {
        console.log(err)
      })  
    },[])
  
    
    return (
      <>
        {logged === false &&
          <div div className='ContentLogged'>
                <Link to='perfil' className='headerIcons'>< FiBell size='20'/> </Link>
                <Link to={{pathname:`perfil/${users.userId}`}} id='perfil'> <img  alt='jobPic' className='loginPic' src={ user }/></Link>
          </div>
        }
        {logged === true &&
          <div className='homeHeaderContent'>
              <div className='loginBar'>
                <h6 className='loginDescription'> { device ? " " : "Prestador de Serviço, já tem um cadastro? "}</h6>
                <Link className='loginBtn' to='/login'><button className='loginBtn'>Faça seu login!</button></Link>
                <Link to='/cadastro' className='loginBtn'><button className='loginBtn'>Crie uma conta</button></Link>
              </div>
          </div>
        }
      </>
    )
}