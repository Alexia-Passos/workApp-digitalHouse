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
  const [works, setWorks] = useState([])
  const id = useParams()

  useEffect(() => {
    axios.get(`http://localhost:3000/works`)
    .then(res => {
      console.log(res)
      setWorks(res.data)
    }).catch(err => {
      console.log(err)
    })  
  },[])

  function filterCategory(el){
    works.filter(work => work.categoryId == `${id}`
  )}
  return (
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
      <div className='menuBarIcons'><Link to='/tecnologia/10' className='menuLink' onClick={ () => filterCategory(10)}><FiAtSign size='35'/> <p>Tecnologia</p> </Link></div>
      <div className='menuBarLast'></div>
    </div>
  )
}