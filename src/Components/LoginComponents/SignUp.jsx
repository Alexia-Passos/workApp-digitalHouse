
import React, { Component } from 'react'
import Select from 'react-select'
import '../../styleCss/signup.css'
import Menubar from '../HomeComponents/MenuBar'
import { FiFacebook, FiInstagram, FiLinkedin, FiStar } from 'react-icons/fi'
import axios from 'axios'

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      cpf: null,
      whatsapp: null,
      instagram: '',
      facebook: '',
      profilefoto: '',
      email: '',
      password: '',
      cep: null,
      city: '',
      uf: '',
      categoryName: '',
      categoryId: null,
      workName: '',
      signupStep: true,
      workingUser: false,
      category: '',
      workName: '',
      description: '',
      status: true,
      profile: '',
      workingPic: '',
      facebook: '',
      instagram: '',
      linkedin: '',
      sucessStep: false,
      userId: null
    }
  }

  handleInput = (event, field) => {
    this.setState({ [field]: event.target.value })
    setTimeout(() => {
      console.log(this.state[field]);
    }, 500);
  }

  handleUsersSubmit = async (event, isWorkForm) => {

    event.preventDefault();
    const usersState =
    {
      "firstName": this.state.firstName,
      "lastName": this.state.lastName,
      "cpf": this.state.cpf,
      "whatsapp": this.state.whatsapp,
      "instagram": this.state.instagram,
      "facebook": this.state.facebook,
      "profilefoto": this.state.profilefoto,
      "email": this.state.email,
      "password": this.state.password,
      "cep": this.state.cep,
      "city": this.state.city,
      "uf": this.state.uf,
    }

    await axios({
      method: 'POST',
      url: "https://workapp-be.herokuapp.com/users/registration",
      data: usersState,
    })
      .then(res => {
        console.log(res)
        return (
          this.setState({
            userId: res.data.id,
            signupStep: false,
            sucessStep: isWorkForm ? false : true,
            workingUser: isWorkForm ? true : false
          })
        )
      })
      .catch(error => console.log('error', error));
  }

  handleWorkssSubmit = async (event) => {

    event.preventDefault();
    const worksState =
    {
      "userId": this.state.userId,
      "workName": this.state.workName,
      "category": this.state.category,
      "description": this.state.description,
      "profile": this.state.profile,
    }

    await axios({
      method: 'POST',
      url: "https://workapp-be.herokuapp.com/works/registration",
      data: worksState,
    })
      .then(res => {
        console.log(res)
        return (
          this.setState({
            workingUser: false,
            sucessStep: true,
          })
        )
      })
      .catch(error => console.log('error', error));
  }

  render() {
    const { firstName, lastName, cpf, whatsapp, instagram, facebook, email, password, cep, city, uf, categoryName, categoryId, signupStep,
      workingUser, category, workName, description, profile, workingPic, sucessStep } = this.state

    const options = [
      { value: "1", label: 'Assistência' },
      { value: "2", label: 'Administrativos' },
      { value: "3", label: 'Artesanais' },
      { value: "4", label: 'Consultoria' },
      { value: "5", label: 'Domésticos' },
      { value: "6", label: 'Educação' },
      { value: "7", label: 'Estética' },
      { value: "8", label: 'Manutenção' },
      { value: "9", label: 'Saúde' },
      { value: "10", label: 'Tecnologia' }
    ]
    return (
      <div className='signUpContainer'>
        <Menubar />
        {signupStep &&
          <>
            <form className='signUp'>
              <h2 className='titleData'>Dados Pessoais</h2>
              <label htmlFor='firstName'>Nome</label>
              <input className='signupInput'
                type='text'
                name='firstName'
                id='firstName'
                value={firstName}
                onChange={(event) => this.handleInput(event, 'firstName')}
              />
              <label htmlFor='lastName'>Sobrenome</label>
              <input className='signupInput'
                type='text'
                name='lastName'
                id='lastName'
                value={lastName}
                onChange={(event) => this.handleInput(event, 'lastName')}
              />
              <label htmlFor='cpf'>CPF</label>
              <input className='signupInput'
                type='text'
                name='cpf'
                id='cpf'
                value={cpf}
                onChange={(event) => this.handleInput(event, 'cpf')}
              />
              <label htmlFor='email'>E-mail</label>
              <input className='signupInput'
                type='text'
                name='email'
                id='email'
                value={email}
                onChange={(event) => this.handleInput(event, 'email')}
              />
              <label htmlFor='password'>Senha</label>
              <input className='signupInput'
                type='password'
                name='password'
                id='password'
                value={password}
                onChange={(event) => this.handleInput(event, 'password')}
              />
              <label htmlFor='whatsapp'>WhatsApp</label>
              <input className='signupInput'
                type='text'
                name='whatsapp'
                id='whatsapp'
                value={whatsapp}
                onChange={(event) => this.handleInput(event, 'whatsapp')}
              />
            <label htmlFor='facebook'>Facebook</label>
            <div className='socialMidia'>
              <FiFacebook size='25' className='stepProgressIcon' />
              <input className='signupInput social'
                type='text'
                name='facebook'
                value={facebook}
                onChange={(event) => this.handleInput(event, 'facebook')}
              />
            </div>
            <label htmlFor='instagram'>Instagram</label>
            <div className='socialMidia'>
              <FiInstagram size='25' className='stepProgressIcon' />
              <input className='signupInput social'
                type='text'
                name='instagram'
                value={instagram}
                onChange={(event) => this.handleInput(event, 'instagram')}
              />
            </div>
              <h2 className='titleData'>Dados de Endereço</h2>
              <label htmlFor='cep'>CEP</label>
              <input className='signupInput'
                type='text'
                name='cep'
                id='cep'
                value={cep}
                onChange={(event) => this.handleInput(event, 'cep')}
              />
              <label htmlFor='city'>Cidade</label>
              <input className='signupInput'
                type='text'
                name='city'
                id='city'
                value={city}
                onChange={(event) => this.handleInput(event, 'city')}
              />
              <label htmlFor='uf'>Estado</label>
              <input className='signupInput'
                type='text'
                name='uf'
                id='uf'
                value={uf}
                onChange={(event) => this.handleInput(event, 'uf')}
              />
              <button className='signupButton' onClick={(event) => this.handleUsersSubmit(event)} type='submit'>Cadastrar Usuário</button>
              <button className='workingUserButton' type='button' onClick={(event) => this.handleUsersSubmit(event, true)}>Cadastrar um Serviço</button>
            </form>
          </>
        }
        {workingUser &&
          <form className='signUp'>
            <h2 className='titleData'>Dados Profissionais</h2>
            <label htmlFor='category'>Categoria</label>
            <select className='perfilInputSelect'
              name='category'
              id='category'
              value={category.value}
              onChange={(event) => this.handleInput(event, 'category')}>
              {options.map(item => {
                return <option value={item.value}>{item.label}</option>
              })}
            </select>
            <label htmlFor='workName'>Profissão</label>
            <input className='signupInput'
              type='text'
              name='workName'
              id='workName'
              value={workName}
              onChange={(event) => this.handleInput(event, 'workName')}
            />
            <label htmlFor='description'>Descrição</label>
            <input className='signupInput'
              type='text'
              name='description'
              id='description'
              value={description}
              onChange={(event) => this.handleInput(event, 'description')}
            />
            <label>Adicione uma foto para seu perfil</label>
            <input className='plusFile'
              type='file'
              name='profile'
              accept='.png'
              value={profile}
              onChange={(event) => this.handleInput(event, 'profile')}
            />
            <label>Apresente Seus Trabalhos</label>
            <input className='plusFile'
              type='file'
              name='workingPic'
              accept='.png'
              multiple
              value={workingPic}
              onChange={(event) => this.handleInput(event, 'workingPic')}
            />
            <button className='signupButton' type='submit' onClick={event => this.handleWorkssSubmit(event)}>Finalizar</button>
          </form>
        }
        {sucessStep &&
          <div className='signUp'>
            <h3>Cadastro realizado com Sucesso!</h3>
            <FiStar size='25' className='stepProgressIcon' />
          </div>
        }
      </div>
    )
  }
}
export default SignUp