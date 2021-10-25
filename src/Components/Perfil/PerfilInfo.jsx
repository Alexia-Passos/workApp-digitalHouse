import React, { Component } from 'react'
import axios from 'axios'
import '../../styleCss/perfilInfo.css'
import Menubar from '../HomeComponents/MenuBar'
import user from '../../img/user.jpeg'
import { FiFacebook, FiInstagram } from 'react-icons/fi'
import history from '../../History';

class PerfilInfo extends Component {
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
      category: '',
      workName: '',
      description: '',
      status: true,
      profile: '',
      workingPic: '',
      facebook: '',
      instagram: '',
      userId: null,
      userPerfil: true,
      editPerfil: false,
      workingUser: false

    }
  }
 
  componentDidMount() {
    if (localStorage.getItem("userId")) {
      this.getUserData(localStorage.getItem("userId"))
    } else {
      history.push('/')
    }
  }

  getUserData = (userId) => {
    axios({
      method: 'GET',
      url: `https://workapp-be.herokuapp.com/users/id?id=${userId}`
    })
      .then(res => {
        this.setState({
          userId: res.data.userId,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          cpf: res.data.cpf,
          whatsapp: res.data.whatsapp,
          instagram: res.data.instagram,
          facebook: res.data.facebook,
          profilefoto: res.data.profilefoto,
          email: res.data.email,
          password: res.data.password,
          cep: res.data.cep,
          city: res.data.city,
          uf: res.data.uf
        }, this.getWorkData(userId))
      })
  }

  getWorkData = (userId) => {
    axios({
      method: 'GET',
      url: `https://workapp-be.herokuapp.com/works/id?id=${userId}`
    })
      .then(res => {
        this.setState({
          userId: res.data.userId,
          workName: res.data.workName,
          category: res.data.category,
          description: res.data.description,
          profile: res.data.profile,
        })
      })
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
      "userId": this.state.userId,
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
      method: 'PUT',
      url: `https://workapp-be.herokuapp.com/users/change/id?id=${this.state.userId}`,
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
      method: 'PUT',
      url: `https://workapp-be.herokuapp.com/works/change/id?id=${this.state.userId}`,
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

  editUserData = event => {
    this.setState({
      userPerfil: false,
      editPerfil: true
    })
  }

  editWorkData = event => {
    this.setState({
      userPerfil: false,
      workingUser: true
    })
  }

  deleteData = (event, userId) => {
    event.preventDefault();

    axios({
      method: 'DELETE',
      url: `https://workapp-be.herokuapp.com/users/delete/id?id=${userId}`,
    })
      .then(res => {
        axios({
          method: 'DELETE',
          url: `https://workapp-be.herokuapp.com/works/delete/id?id=${userId}`,
        })
          .then(res2 => {
            localStorage.removeItem('userId')
            window.location.href = '/'
          })
      })
  }

  render() {
    const { firstName, lastName, cpf, whatsapp, instagram, facebook, email, password, cep, city, uf,
      category, workName, description, profile, userPerfil, editPerfil, workingUser, workingPic } = this.state

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
      <>
        <Menubar />
        {userPerfil &&
          <div className='perfilUserInfo'>
            <h2>Dados Pessoais</h2>
            <img className='perfiInfoProfile' alt='profile' src={user}></img>
            <p className='perfilInfo'>Nome: {firstName + '  ' + lastName}</p>
            <p className='perfilInfo'>CPF:{cpf}</p>
            <p className='perfilInfo'>Email:{email}</p>
            <h2>Dados de Endereço</h2>
            <p className='perfilInfo'>CEP:{cep}</p>
            <p className='perfilInfo'>Cidade:{city}</p>
            <p className='perfilInfo'>Estado:{uf}</p>
            <h2>Dados profissionais</h2>
            <p className='perfilInfo'>Categoria:{category.value}</p>
            <p className='perfilInfo'>Profissão:{workName}</p>
            <p className='perfilInfo'>Descrição:{description}</p>
            <p className='perfilInfo'>Whatsapp:{whatsapp}</p>
            <p className='perfilInfo'> Facebook: {'  ' + facebook}</p>
            <p className='perfilInfo'>Instagram: {'  ' + instagram}</p> 
            <button className='editPerfilButton' type='button' onClick={event => this.editUserData(event)}>Editar dados pessoais</button>
            <button className='editPerfilButton' type='button' onClick={event => this.editWorkData(event)}>Editar dados profissionais</button>
            <button className='deletePerfilButton' type='button' onClick={event => this.deleteData(event, this.state.userId)}>Deletar Usuário</button>
          </div>
        }
        {editPerfil &&
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
                return <option key= {item.value} value={item.value}>{item.label}</option>
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
      </>
    )
  }
}

export default PerfilInfo;