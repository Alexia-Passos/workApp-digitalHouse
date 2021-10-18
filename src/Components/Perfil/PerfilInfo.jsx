import React, { useState, useEffect} from 'react'
import axios from 'axios'
import '../../styleCss/perfilInfo.css'
import user from '../../img/user.jpeg'
// import {FiFacebook , FiInstagram , FiLinkedin} from 'react-icons/fi'
import { useParams } from 'react-router'

const dados = [
  {
      photoLink: "https://images.everydayhealth.com/images/cs-prevent-as-back-pain-working-from-home-1440x810.jpg?w=1110",
      fullName: "Abreu Da Silva",
      profession: "Professor - inglês",
      rating: 67,
      phoneNumber: 11999999999,
      category: "Educação",
      facebook: "https://www.facebook.com/campaign/landing.php?&campaign_id=1661784632&extra_1=s%7Cc%7C320269324047%7Ce%7Cfacebook%7C&placement=&creative=320269324047&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D1661784632%26adgroupid%3D63686352403%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-541132862%26loc_physical_ms%3D1001727%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjwqeWKBhBFEiwABo_XBq6z7e_1aG-Gdkw2FReA0onDPGvpSnFM0L3fKdtLKOdtcEuh_H3iixoCAvMQAvD_BwE",
      instagram: "https://www.instagram.com/",
      linkedin: "https://twitter.com/twitterbrasil",
      twitter: "https://br.linkedin.com/"
  }
]

export default function PerfilInfo() {
  const [users, setUsers] = useState([])
  const [works, setworks] = useState([])
  const [editUser, setEditUser] = useState([])
  const id = useParams()

  useEffect(() => {
    axios.get(`https://workapp-be.herokuapp.com/users/${id}`)
    .then(res => {
      console.log(res)
      setUsers(res.data)
    }).catch(err => {
      console.log(err)
    })  
  },[])
  
  useEffect(() => {
    axios.get(`https://workapp-be.herokuapp.com/works${id}`)
    .then(res => {
      console.log(res)
      setworks(res.data)
    }).catch(err => {
      console.log(err)
    })  
  },[])

  function deleteUser(){
    axios.delete(`https://workapp-be.herokuapp.com/works/delete${id}`)
      .then(res => {
        console.log(res)
        setworks(res.data)
      }).catch(err => {
        console.log(err)
      })  
  }

  function editUserTrigger(id){
    setEditUser(true)
  }
  console.log(users, works, editUser)
  return (
    <div className='perfilInfo'>  
      <h2>Dados Pessoais</h2>
      <img  className='perfiInfoProfile' alt='profile' src={ user }/>
      {/* <p className='perfilInfo'><b>Nome:</b>{user.firstName + '  ' + user.lastName}</p>
      <p className='perfilInfo'><b>CPF:</b>{user.cpf}</p>
      <p className='perfilInfo'><b>Email:</b>{user.email}</p>
      <h2>Dados de Endereço</h2>
      <p className='perfilInfo'><b>CEP:</b>{user.address.cep}</p>
      <p className='perfilInfo'><b>Cidade:</b>{user.address.city}</p>
      <p className='perfilInfo'><b>Estado:</b>{user.address.uf}</p>
      <h2>Dados de Endereço</h2>
      <p className='perfilInfo'><b>Categoria:</b>{work.category.categoryName}</p>
      <p className='perfilInfo'><b>Profissão:</b>{work.workName}</p>
      <p className='perfilInfo'><b>Descrição:</b>{work.description}</p>
      <p className='perfilInfo'><b>Status:</b>{work.status}</p>
      <p className='perfilInfo'><b>Whatsapp profissional:</b>{work.whatsapp}</p>
      <p className='perfilInfo'><b>Curtidas:</b>{work.like.likeAccount}  Pessoas curtiram seu trabalho</p>
      <p className='perfilInfo'><FiFacebook/>{'  ' + work.user.facebook}</p>
      <p className='perfilInfo'><FiInstagram/>{'  ' + work.user.instagram}</p>
      <p className='perfilInfo'><FiLinkedin/> {'  NÃOESQUECE'}</p> */}
      <div className='perfilInfoContent'>
        <img  alt='perfilInfoPic' className='imgPerfilInfo' src={dados[0].photoLink}></img>
        <img  alt='perfilInfoPic' className='imgPerfilInfo' src={dados[0].photoLink}></img>
        <img  alt='perfilInfoPic' className='imgPerfilInfo' src={dados[0].photoLink}></img>
        <img  alt='perfilInfoPic' className='imgPerfilInfo' src={dados[0].photoLink}></img>
        <img  alt='perfilInfoPic' className='imgPerfilInfo' src={dados[0].photoLink}></img>
      </div> 
      <button className='editPerfilButton' type='button' onClick={ () => editUserTrigger(id)}>Editar Usuário</button>
      <button className='deletePerfilButton' type='button' onClick={ () => deleteUser(id)}>Deletar Usuário</button> 
    </div> 
  )
}

{/* <div className='perfilInfo'>  
      <h2>Dados Pessoais</h2>
      <img className='perfiInfoProfile' alt='profile'></img>
      <p className='perfilInfo'><b>Nome:</b>{user.firstName + '  ' + user.lastName}</p>
      <p className='perfilInfo'><b>CPF:</b>{user.cpf}</p>
      <p className='perfilInfo'><b>Email:</b>{user.email}</p>
      <h2>Dados de Endereço</h2>
      <p className='perfilInfo'><b>CEP:</b>{user.address.cep}</p>
      <p className='perfilInfo'><b>Cidade:</b>{user.address.city}</p>
      <p className='perfilInfo'><b>Estado:</b>{user.address.uf}</p>
      <h2>Dados de Endereço</h2>
      <p className='perfilInfo'><b>Categoria:</b>{work.category.categoryName}</p>
      <p className='perfilInfo'><b>Profissão:</b>{work.workName}</p>
      <p className='perfilInfo'><b>Descrição:</b>{work.description}</p>
      <p className='perfilInfo'><b>Status:</b>{work.status}</p>
      <p className='perfilInfo'><b>Whatsapp profissional:</b>{work.whatsapp}</p>
      <p className='perfilInfo'><b>Curtidas:</b>{work.like.likeAccount}  Pessoas curtiram seu trabalho</p>
      <p className='perfilInfo'><FiFacebook/>{'  ' + work.user.facebook}</p>
      <p className='perfilInfo'><FiInstagram/>{'  ' + work.user.instagram}</p>
      <p className='perfilInfo'><FiLinkedin/> {'  NÃOESQUECE'}</p>
      <div className='perfilInfoContent'>
        <img  alt='perfilInfoPic' className='imgperfilInfo' src={dados[0].photoLink}></img>
        <img  alt='perfilInfoPic' className='imgperfilInfo' src={dados[0].photoLink}></img>
        <img  alt='perfilInfoPic' className='imgperfilInfo' src={dados[0].photoLink}></img>
        <img  alt='perfilInfoPic' className='imgperfilInfo' src={dados[0].photoLink}></img>
        <img  alt='perfilInfoPic' className='imgperfilInfo' src={dados[0].photoLink}></img>
      </div> 
      <button className='editPerfilButton' type='button'>Editar Usuário</button>
      <button className='deletePerfilButton' type='button'>Deletar Usuário</button> 
    </div>  */}