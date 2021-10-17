//react
import React from 'react'
import { Link } from 'react-router-dom'
//com
import '../../styleCss/login.css'

export default function LoginMenu() {
  return (
    <div className='loginContainer'>
        <div className='loginHeader'>
          <Link to='assistencia' className='menuLink'>Assistência</Link>
          <Link to='administrativo' className='menuLink'>Administrativos</Link>
          <Link to='artesanais' className='menuLink'>Artesanais</Link>
          <Link to='consultoria' className='menuLink'>Consultoria</Link>
          <Link to='domestico' className='menuLink'>Domésticos</Link>
          <Link to='educacao' className='menuLink'>Educação</Link>
          <Link to='estetica' className='menuLink'>Estética</Link>
          <Link to='manutencao' className='menuLink'>Manutenção</Link>
          <Link to='saude' className='menuLink'>Saúde</Link>
          <Link to='tecnologia' className='menuLink'>Tecnologia</Link>
        </div>
    </div>  
    )
}