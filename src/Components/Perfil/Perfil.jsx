import React, { Component } from 'react'
import Select from 'react-select'
import '../../styleCss/perfil.css'
import { FiFacebook, FiInstagram, FiLinkedin, FiStar } from 'react-icons/fi'
import axios from 'axios'
import Footer from '../HomeComponents/Footer'
import HomeHeader from '../HomeComponents/HomeHeader'
import PerfilInfo from './PerfilInfo'


class Perfil extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      cpf: '', 
      email: '',
      password: '',
      cep: '',
      city: '',
      uf: '',
      category: '',
      workName: '',
      description: '',
      status: true,
      whatsapp: null,
      profile: '',
      workingPic: '',
      facebook: '',
      instagram: '',
      linkedin: '',
      editStep: true,
      perfilStep: false,
      sucessStep:false
    }
  }

  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:3000/works/registration', this.state)
    .then( response => {
      console.log(response)
    })
    .catch( error => {
      console.log(error)
    })
  }  

  handleFirstStep = (step) => {
    switch(step){
      case 'edit':
        this.setState({perfilStep:false});
        this.setState({editStep:true});
        break
    default:
      this.setState({perfilStep:true});
    }
  }

  render(){
    const {  firstName, lastName, cpf,  email, password, cep, city, uf, category, workName, 
    description, status, whatsapp, profile, workingPic, facebook, instagram, linkedin, editStep, perfilStep, sucessStep}  = this.state

    const options = [
      { value: "workId", label: 'Assistência' },
      { value: "workId", label: 'Administrativos' },
      { value: "workId", label: 'Artesanais' },
      { value: "workId", label: 'Consultoria' },
      { value: "workId", label: 'Domésticos' },
      { value: "workId", label: 'Educação' },
      { value: "workId", label: 'Estética' },
      { value: "workId", label: 'Manutenção' },
      { value: "workId", label: 'Saúde' },
      { value: "workId", label: 'Tecnologia' }
    ]
    return (
      <>
      <HomeHeader/>
      <div className='perfilContainer'>
        {perfilStep &&
          <PerfilInfo/>
        }
        {editStep && 
          <form onSubmit={this.submitHandler} className='perfil' action='/users' method='POST'>
            <h2>Dados Pessoais</h2>
            <label htmlFor='firstName'>Nome</label>
            <input className='perfilInput' 
              type='text' 
              name='firstName' 
              id='firstName'
              value={firstName}
              onChange={this.changeHandler}>
            </input>
            <label htmlFor='lastName'>Sobrenome</label>
            <input className='perfilInput' 
              type='text'  
              name='lastName'
              id='lastName'
              value={lastName}
              onChange={this.changeHandler}>
            </input>
            <label htmlFor='cpf'>CPF</label>
            <input className='perfilInput' 
              type='text' 
              name='cpf' 
              id='cpf'
              value={cpf}
              maxLength= {11}
              onChange={this.changeHandler}>
            </input>
            <label htmlFor='email'>E-mail</label>
            <input className='perfilInput' 
              type='text'  
              name='email' 
              id='email'
              value={email}
              onChange={this.changeHandler}>
            </input>
            <label htmlFor='password'>Senha</label>
            <input className='perfilInput' 
              type='password'
              name='password' 
              id='password'
              value={password}
              onChange={this.changeHandler}>
            </input>
            <h2>Dados de Endereço</h2>
            <label htmlFor='cep'>CEP</label>
            <input className='perfilInput' 
              type='text' 
              name='cep' 
              id='cep'
              maxLength= {6}
              value={cep}
              onChange={this.changeHandler}>
            </input>
            <label htmlFor='city'>Cidade</label>
            <input className='perfilInput' 
              type='text' 
              name='city' 
              id='city'
              value={city}
              onChange={this.changeHandler}>
            </input>
            <label htmlFor='uf'>Estado</label>
            <input className='perfilInput' 
              type='text' 
              name='uf' 
              id='uf'
              value={uf}
              onChange={this.changeHandler}>
            </input>
            <h2>Dados Profissionais</h2>
            <label htmlFor='category'>Categoria</label>
            <Select className='perfilInputSelect' 
              name='category' 
              id='category'
              id='category'
              options={options} 
              value={options}
              onChange={this.changeHandler}>
            </Select>
            <label htmlFor='workName'>Profissão</label>
            <input className='perfilInput' 
              type='text' 
              name='workName' 
              id='workName'
              value={workName}
              onChange={this.changeHandler}>
              </input>
            <label htmlFor='description'>Descrição</label>
            <input className='perfilInput' 
              type='text' 
              name='description' 
              id='description'
              value={description}
              onChange={this.changeHandler}>
            </input>
            <label htmlFor='status'>Status</label>
            <div className='radioContainer'>
              <div className='radioStatus'>
                <input className='perfilInput statusInputRadio' 
                  type='radio'  
                  name='status' 
                  id='status' 
                  value={true}
                  checked
                  onChange={this.changeHandler}>
                </input>
                <label htmlFor='status'>Disponível</label>
              </div>
              <div className='radioStatus'>
                <input className='perfilInput statusInputRadio' 
                  type='radio'  
                  name='status' 
                  id='status' 
                  value={false} 
                  onChange={this.changeHandler}>
                </input> 
                <label htmlFor='status'>Indisponível</label>
              </div>
            </div>
            <label htmlFor='whatsapp'>WhatsApp Comercial</label>
            <input className='perfilInput' 
              type='text'   
              name='whatsapp' 
              id='whatsapp'
              maxLength= {12}
              value={whatsapp}
              onChange={this.changeHandler}>
            </input>
            <label>Adicione uma foto para seu perfil</label>
            <input className='plusFile'
              type='file'   
              name='profile' 
              accept='.png' 
              value={profile} 
              onChange={this.changeHandler}>
            </input>
            <label>Apresente Seus Trabalhos</label>
            <input className='plusFile' 
              type='file' 
              name='workingPic' 
              accept='.png' 
              value={workingPic}
              multiple
              onChange={this.changeHandler}>
            </input>
            <div className='socialMidia'>
              <FiFacebook size='25' className='stepProgressIcon'/>
              <input className='perfilInput social' 
                type='text' 
                name='facebook' 
                value={facebook} 
                onChange={this.changeHandler}>
              </input>
            </div>
            <div className='socialMidia'>
              <FiInstagram size='25' className='stepProgressIcon'/>
              <input className='perfilInput social' 
                type='text' 
                name='instagram' 
                value={instagram}
                onChange={this.changeHandler}>
              </input>
            </div>
            <div className='socialMidia'>
              <FiLinkedin size='25' className='stepProgressIcon'/>
              <input className='perfilInput social' 
                type='text' 
                name='linkedin'
                value={linkedin}
                onChange={this.changeHandler}>
              </input>
            </div>
            <button className='perfilButton'
              type='submit'
              >Salvar Edição</button>   
          </form>
        }
        {sucessStep && 
          <div className='perfil'>
          <h3>Edição dos dados realizada com sucesso!</h3>
          <FiStar size='25' className='stepProgressIcon'/>
        </div>
        }
      </div> 
       {/* <Footer/> */}
      </>
  )
  }   
}

export default Perfil
// if ($("#image")[0].files.length > 2) {
//   alert("You can select only 2 images");
// } else {
//   $("#imageUploadForm").submit();
// }