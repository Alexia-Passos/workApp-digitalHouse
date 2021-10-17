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

export default function HomeHeader() {
    const logged = true

    const [users, setUsers] = useState([])

    useEffect(() => {
      axios.get(`http://localhost:3000/users/:id`)
      .then(res => {
        console.log(res)
        setUsers(res.data)
      }).catch(err => {
        console.log(err)
      })  
    },[])
  
    
    return (
      <>
        {logged === true &&
          <div div className='ContentLogged'>
                <Link to='perfil' className='headerIcons'>< FiBell size='20'/> </Link>
                <Link to={{pathname:`perfil/${users.userId}`}} id='perfil'> <img  alt='jobPic' className='loginPic' src={ user }/></Link>
          </div>
        }
        {logged === false &&
          <div className='homeHeaderContent'>
              <div className='loginBar'>
                <h6 className='loginDescription'> Prestador de Serviço, já tem um cadastro? </h6>
                <button className='loginBtn'>Faça seu login!</button>
                <h6 className='loginDescription'> Ou </h6>
                <button className='loginBtn'>Crie uma conta</button>
              </div>
          </div>
        }
      </>
    )
}