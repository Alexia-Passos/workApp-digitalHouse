import React from 'react'
import '../../styleCss/menuBar.css'
import { FiTool, FiActivity, FiFileText, FiEdit , FiAward , FiAtSign , FiHome , FiScissors , FiPocket , FiHeart} from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='menuBarColor'>
      <div className='menuBarIcons'></div>
      <div className='menuBarIcons'><Link to='/assistencia' className='menuLink'>< FiPocket size='35'/> <p> Assistência </p> </Link></div>
      <div className='menuBarIcons'><Link to='/administrativos' className='menuLink'><FiFileText size='35'/> <p> Administrativos</p> </Link></div>
      <div className='menuBarIcons'><Link to='/artesanais' className='menuLink'><FiScissors size='35'/> <p> Artesanais</p> </Link></div>
      <div className='menuBarIcons'><Link to='/consultoria' className='menuLink'><FiAward size='35'/> <p>Consultoria</p> </Link></div>
      <div className='menuBarIcons'><Link to='/domesticos' className='menuLink'><FiHome size='35'/> <p> Domésticos</p> </Link></div>
      <div className='menuBarIcons'><Link to='/educacao' className='menuLink'><FiEdit size='35'/> <p>Educação</p> </Link></div>
      <div className='menuBarIcons'><Link to='/estetica' className='menuLink'>< FiHeart size='35'/> <p>Estética</p> </Link></div>
      <div className='menuBarIcons'><Link to='/manutencao' className='menuLink'><FiTool size='35'/> <p>Manutenção</p></Link></div>
      <div className='menuBarIcons'><Link to='/saude' className='menuLink'><FiActivity size='35'/> <p>Saúde</p> </Link></div>
      <div className='menuBarIcons'><Link to='/tecnologia' className='menuLink'><FiAtSign size='35'/> <p>Tecnologia</p> </Link></div>
      <div className='menuBarLast'></div>
    </div>
  )
}