import React from 'react'
import '../../styleCss/homeheader.css'
import { FiBell } from 'react-icons/fi'
import user from '../../img/user.jpeg'
import { Link } from 'react-router-dom'

export default function HomeHeader() {
    const logged = true
    return (
      <>
        {logged === true &&
          <div div className='ContentLogged'>
                <Link to='perfil' className='headerIcons'>< FiBell size='20'/> </Link>
                <Link to='perfil' id='perfil'> <img  alt='jobPic' className='loginPic' src={ user }/></Link>
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