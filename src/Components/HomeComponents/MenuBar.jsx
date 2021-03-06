//react
import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
//comp
import '../../styleCss/menuBar.css'
//dep
import axios from 'axios'
import { FiTool, FiActivity, FiFileText, FiEdit, FiAward, FiAtSign, FiHome, FiScissors, FiPocket, FiHeart } from 'react-icons/fi'

const device = (/Mobi/.test(navigator.userAgent))

export default function Home() {
  //state
  const [works, setWorks] = useState([])

  //GET users
  useEffect(() => {
    axios.get(`https://workapp-be.herokuapp.com/works/:id`)
      .then(res => {
        console.log(res)
        setWorks(res.data)
      }).catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <>
      {device && 
        <div className='menuBarColor'>
          <div className='menuBarIcons'></div>
          <div className='menuBarIcons'><Link to='/assistencia' className='menuLink'>< FiPocket size='20' /></Link></div>
          <div className='menuBarIcons'><Link to='/administrativos' className='menuLink' ><FiFileText size='20' /></Link></div>
          <div className='menuBarIcons'><Link to='/artesanais' className='menuLink' ><FiScissors size='20' /></Link></div>
          <div className='menuBarIcons'><Link to='/consultoria' className='menuLink'><FiAward size='20' /> </Link></div>
          <div className='menuBarIcons'><Link to='/domesticos' className='menuLink'><FiHome size='20' /></Link></div>
          <div className='menuBarIcons'><Link to='/educacao' className='menuLink'><FiEdit size='20' /></Link></div>
          <div className='menuBarIcons'><Link to='/estetica' className='menuLink'>< FiHeart size='20' /></Link></div>
          <div className='menuBarIcons'><Link to='/manutencao' className='menuLink'><FiTool size='20' /></Link></div>
          <div className='menuBarIcons'><Link to='/saude' className='menuLink'><FiActivity size='20' /></Link></div>
          <div className='menuBarIcons'><Link to='/tecnologia' className='menuLink'><FiAtSign size='20' /></Link></div>
          <div className='menuBarLast'></div>
        </div>
      }
      {!device &&
        <div className='menuBarColor'>
          <div className='menuBarIcons'></div>
          <div className='menuBarIcons'><Link to='/assistencia' className='menuLink'>< FiPocket size='35' /> <p> Assist??ncia </p> </Link></div>
          <div className='menuBarIcons'><Link to='/administrativos' className='menuLink' ><FiFileText size='35' /> <p> Administrativos</p> </Link></div>
          <div className='menuBarIcons'><Link to='/artesanais' className='menuLink' ><FiScissors size='35' /> <p> Artesanais</p> </Link></div>
          <div className='menuBarIcons'><Link to='/consultoria' className='menuLink'><FiAward size='35' /> <p>Consultoria</p> </Link></div>
          <div className='menuBarIcons'><Link to='/domesticos' className='menuLink'><FiHome size='35' /> <p> Dom??sticos</p> </Link></div>
          <div className='menuBarIcons'><Link to='/educacao' className='menuLink'><FiEdit size='35' /> <p>Educa????o</p> </Link></div>
          <div className='menuBarIcons'><Link to='/estetica' className='menuLink'>< FiHeart size='35' /> <p>Est??tica</p> </Link></div>
          <div className='menuBarIcons'><Link to='/manutencao' className='menuLink'><FiTool size='35' /> <p>Manuten????o</p></Link></div>
          <div className='menuBarIcons'><Link to='/saude' className='menuLink'><FiActivity size='35' /> <p>Sa??de</p> </Link></div>
          <div className='menuBarIcons'><Link to='/tecnologia' className='menuLink'><FiAtSign size='35' /> <p>Tecnologia</p> </Link></div>
          <div className='menuBarLast'></div>
        </div>
      }

    </>

  )
}