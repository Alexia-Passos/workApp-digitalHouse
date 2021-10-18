//react
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
//comp
import '../../styleCss/menuBar.css'
//dep
import axios from 'axios'
import { FiTool, FiActivity, FiFileText, FiEdit , FiAward , FiAtSign , FiHome , FiScissors , FiPocket , FiHeart} from 'react-icons/fi'

export default function Home() {
  //state
  const [works, setWorks] = useState([])
  const id = useParams()

  //GET users
  useEffect(() => {
    axios.get(`http://localhost:3000/users/:id`)
    // axios.get(`https://workapp-be.herokuapp.com/users/:id`)
    .then(res => {
      console.log(res)
      setWorks(res.data)
    }).catch(err => {
      console.log(err)
    })  
  },[])

  function filterCategory(el){
    works.filter(work => work.categoryId === `${el}`
  )}
  return (
    <>
      <div className='menuBarColor'>
        <div className='menuBarIcons'></div>
        <div className='menuBarIcons'><Link to='/assistencia' className='menuLink' onClick={ () => filterCategory(1)}>< FiPocket size='35'/> <p> Assistência </p> </Link></div>
        <div className='menuBarIcons'><Link to='/administrativos' className='menuLink' onClick={ () => filterCategory(2)}><FiFileText size='35'/> <p> Administrativos</p> </Link></div>
        <div className='menuBarIcons'><Link to='/artesanais' className='menuLink' onClick={ () => filterCategory(3)}><FiScissors size='35'/> <p> Artesanais</p> </Link></div>
        <div className='menuBarIcons'><Link to='/consultoria' className='menuLink' onClick={ () => filterCategory(4)}><FiAward size='35'/> <p>Consultoria</p> </Link></div>
        <div className='menuBarIcons'><Link to='/domesticos' className='menuLink' onClick={ () => filterCategory(5)}><FiHome size='35'/> <p> Domésticos</p> </Link></div>
        <div className='menuBarIcons'><Link to='/educacao' className='menuLink' onClick={ () => filterCategory(6)}><FiEdit size='35'/> <p>Educação</p> </Link></div>
        <div className='menuBarIcons'><Link to='/estetica' className='menuLink' onClick={ () => filterCategory(7)}>< FiHeart size='35'/> <p>Estética</p> </Link></div>
        <div className='menuBarIcons'><Link to='/manutencao' className='menuLink' onClick={ () => filterCategory(8)}><FiTool size='35'/> <p>Manutenção</p></Link></div>
        <div className='menuBarIcons'><Link to='/saude' className='menuLink' onClick={ () => filterCategory(9)}><FiActivity size='35'/> <p>Saúde</p> </Link></div>
        <div className='menuBarIcons'><Link to='/tecnologia' className='menuLink' onClick={ () => filterCategory(10)}><FiAtSign size='35'/> <p>Tecnologia</p> </Link></div>
        <div className='menuBarLast'></div>
      </div>
      {/* {isMobile == false &&
        <ul className='menuBarColor'>
         <li className='mobileMenuBarIcons'></li>
         <li className='mobileMenuBarIcons'><Link to='/assistencia' className='mobileMenuLink' onClick={ () => filterCategory(1)}>< FiPocket size='35'/> <p> Assistência </p> </Link></li>
         <li className='mobileMenuBarIcons'><Link to='/administrativos' className='mobileMenuLink' onClick={ () => filterCategory(2)}><FiFileText size='35'/> <p> Administrativos</p> </Link></li>
         <li className='mobileMenuBarIcons'><Link to='/artesanais' className='mobileMenuLink' onClick={ () => filterCategory(3)}><FiScissors size='35'/> <p> Artesanais</p> </Link></li>
         <li className='mobileMenuBarIcons'><Link to='/consultoria' className='mobileMenuLink' onClick={ () => filterCategory(4)}><FiAward size='35'/> <p>Consultoria</p> </Link></li>
         <li className='mobileMenuBarIcons'><Link to='/domesticos' className='mobileMenuLink' onClick={ () => filterCategory(5)}><FiHome size='35'/> <p> Domésticos</p> </Link></li>
         <li className='mobileMenuBarIcons'><Link to='/educacao' className='mobileMenuLink' onClick={ () => filterCategory(6)}><FiEdit size='35'/> <p>Educação</p> </Link></li>
         <li className='mobileMenuBarIcons'><Link to='/estetica' className='mobileMenuLink' onClick={ () => filterCategory(7)}>< FiHeart size='35'/> <p>Estética</p> </Link></li>
         <li className='mobileMenuBarIcons'><Link to='/manutencao' className='mobileMenuLink' onClick={ () => filterCategory(8)}><FiTool size='35'/> <p>Manutenção</p></Link></li>
         <li className='mobileMenuBarIcons'><Link to='/saude' className='mobileMenuLink' onClick={ () => filterCategory(9)}><FiActivity size='35'/> <p>Saúde</p> </Link></li>
         <li className='mobileMenuBarIcons'><Link to='/tecnologia' className='mobileMenuLink' onClick={ () => filterCategory(10)}><FiAtSign size='35'/> <p>Tecnologia</p> </Link></li>
         <li className='menuBarLast'></li>
        </ul>
      } */}
    </>

  )
}