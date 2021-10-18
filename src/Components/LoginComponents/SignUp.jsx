
import React, { useState } from 'react'
import Select from 'react-select'
import { useForm } from 'react-hook-form'
import '../../styleCss/signup.css'
import Menubar from '../HomeComponents/MenuBar'
import { FiFacebook, FiInstagram, FiLinkedin, FiStar } from 'react-icons/fi'
import axios from 'axios'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const validation = yup.object().shape({
  firstName: yup.string().required('Conteúdo obrigatório!'),
  lastName: yup.string().required('Conteúdo obrigatório!'),
  cpf: yup.string().required('Conteúdo obrigatório!'),
  email: yup.string().required('Conteúdo obrigatório!'),
  password: yup.string().required('Conteúdo obrigatório!'),
  cep: yup.string().required('Conteúdo obrigatório!'),
  city: yup.string().required('Conteúdo obrigatório!'),
  uf: yup.string().required('Conteúdo obrigatório!'),
  workName: yup.string().required('Conteúdo obrigatório!'),
  description: yup.string().required('Conteúdo obrigatório!'),
})

export default function SignUp() {

  //states
  const [signupStep, setSignupStep] = useState(true)
  const [sucessStep, setSucessStep] = useState(false)
  const [workingUser, setWorkingUser] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(validation) })

  function handleWorkingUser() {
    setSignupStep(false)
    setWorkingUser(true)
  }

  function handleSucess() {
    setWorkingUser(false);
    setSucessStep(true);
  }

  //users POST
  const addPostUser = data => axios.post("http://localhost:3000/users", data)
  // const addPostUser = data => axios.post("https://workapp-be.herokuapp.com/users", data)
    .then(() => {
      console.log()
    }).catch(err => {
      console.log(err)
    })

  // const addPostUser = data => axios.post("http://localhost:3000/users/registration", data)
  //   .then(() => {
  //       console.log()
  //     }).catch(err => {
  //       console.log(err)
  //     })
  // }

  //works POST
 const addPostWorks = data => axios.post("http://localhost:3000/works", data)
 // const addPostWorks = data => axios.post("https://workapp-be.herokuapp.com/works", data)
   .then(res => {
     console.log("Deu bom: works")
   }).catch(err => {
     console.log("Deu ruim")
   }, handleSucess())
  
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
          <form onSubmit={handleSubmit(addPostUser())} className='signUp' action='/users' method='POST'>
            <h2 className='titleData'>Dados Pessoais</h2>
            <label htmlFor='firstName'>Nome</label>
            <input className='signupInput'
              type='text'
              name='firstName'
              id='firstName'
              {...register('firstName')}>
            </input>
            <p className='error'>{errors.firstName?.message}</p>
            <label htmlFor='lastName'>Sobrenome</label>
            <input className='signupInput'
              type='text'
              name='lastName'
              id='lastName'
              {...register('lastName')}>
            </input>
            <p className='error'>{errors.lastName?.message}</p>
            <label htmlFor='cpf'>CPF</label>
            <input className='signupInput'
              type='text'
              name='cpf'
              id='cpf'
              {...register('cpf')}>
            </input>
            <p className='error'>{errors.cpf?.message}</p>
            <label htmlFor='email'>E-mail</label>
            <input className='signupInput'
              type='text'
              name='email'
              id='email'
              {...register('email')}>
            </input>
            <p className='error'>{errors.email?.message}</p>
            <label htmlFor='password'>Senha</label>
            <input className='signupInput'
              type='password'
              name='password'
              id='password'
              {...register('password')}>
            </input>
            <p className='error'>{errors.password?.message}</p>
            <h2 className='titleData'>Dados de Endereço</h2>
            <label htmlFor='cep'>CEP</label>
            <input className='signupInput'
              type='text'
              name='cep'
              id='cep'
              {...register('cep')}>
            </input>
            <p className='error'>{errors.cep?.message}</p>
            <label htmlFor='city'>Cidade</label>
            <input className='signupInput'
              type='text'
              name='city'
              id='city'
              {...register('city')}>
            </input>
            <p className='error'>{errors.city?.message}</p>
            <label htmlFor='uf'>Estado</label>
            <input className='signupInput'
              type='text'
              name='uf'
              id='uf'
              {...register('uf')}>
            </input>
            <p className='error'>{errors.uf?.message}</p>
            <button className='signupButton' type='submit'>Cadastrar Usuário</button>
            <button className='workingUserButton' type='button' onClick={() => handleWorkingUser()}>Cadastrar um Serviço</button>
          </form>
        </>
      }
      {workingUser &&
        <form onSubmit={handleSubmit(addPostWorks)} className='signUp' action='/users' method='POST'>
          <h2 className='titleData'>Dados Profissionais</h2>
          <label htmlFor='category'>Categoria</label>
          <Select className='perfilInputSelect'
            name='category'
            id='category'
            options={options}
            {...register('category')}>
          </Select>
          <p className='error'>{errors.category?.message}</p>
          <label htmlFor='workName'>Profissão</label>
          <input className='signupInput'
            type='text'
            name='workName'
            id='workName'
            {...register('workName')}>
          </input>
          <p className='error'>{errors.workName?.message}</p>
          <label htmlFor='description'>Descrição</label>
          <input className='signupInput'
            type='text'
            name='description'
            id='description'
            {...register('description')}>
          </input>
          <p className='error'>{errors.description?.message}</p>
          <label htmlFor='status'>Status</label>
          <div className='radioContainer'>
            <div className='radioStatus'>
              <input className='signupInput statusInputRadio'
                type='radio'
                name='status'
                id='status'
                checked
                {...register('status')}>
              </input>
              <label htmlFor='status'>Disponível</label>
            </div>
            <div className='radioStatus'>
              <input className='signupInput statusInputRadio'
                type='radio'
                name='status'
                id='status'
                {...register('status')}>
              </input>
              <label htmlFor='status'>Indisponível</label>
              <p className='error'>{errors.status?.message}</p>
            </div>
          </div>
          <label htmlFor='whatsapp'>WhatsApp Comercial</label>
          <input className='signupInput'
            type='text'
            name='whatsapp'
            id='whatsapp'
            {...register('whatsapp')}>
          </input>
          <p className='error'>{errors.whatsapp?.message}</p>
          <label>Adicione uma foto para seu perfil</label>
          <input className='plusFile'
            type='file'
            name='profile'
            accept='.png'
            {...register('profile')}>
          </input>
          <p className='error'>{errors.profile?.message}</p>
          <label>Apresente Seus Trabalhos</label>
          <input className='plusFile'
            type='file'
            name='workingPic'
            accept='.png'
            multiple
            {...register('workingPic')}>
          </input>
          <p className='error'>{errors.workingPic?.message}</p>
          <div className='socialMidia'>
            <FiFacebook size='25' className='stepProgressIcon' />
            <input className='signupInput social'
              type='text'
              name='facebook'
              {...register('facebook')}>
            </input>
            <p className='error'>{errors.facebook?.message}</p>
          </div>
          <div className='socialMidia'>
            <FiInstagram size='25' className='stepProgressIcon' />
            <input className='signupInput social'
              type='text'
              name='instagram'
              {...register('instagram')}>
            </input>
            <p className='error'>{errors.instagram?.message}</p>
          </div>
          <div className='socialMidia'>
            <FiLinkedin size='25' className='stepProgressIcon' />
            <input className='signupInput social'
              type='text'
              name='linkedin'
              {...register('linkedin')}>
            </input>
            <p className='error'>{errors.linkedin?.message}</p>
          </div>
          <button className='signupButton'
            type='submit'
          >Finalizar</button>
        </form>
      }
      {sucessStep &&
        <div className='signUp'>
          <h3>Cadastro realizado com Sucesso!</h3>
          <FiStar size='25' className='stepProgressIcon' />
        </div>
      }
      {/* <div className='signUpFooter'>
        <p className='signupInfo'>Termos de uso</p>
        <p className='signupInfo'>Política de Privacidade</p>
        <p className='signupInfo'>Ajuda</p>
      </div> */}
    </div>
  )
}
