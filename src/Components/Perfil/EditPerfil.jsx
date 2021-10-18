
import React , {useEffect, useState} from 'react'
import Select from 'react-select'
import { useForm } from 'react-hook-form'
import '../../styleCss/signup.css'
import whiteLogo from '../../img/whiteLogo.png'
import HomeHeader from '../HomeComponents/HomeHeader'
import PerfilInfo from './PerfilInfo'
import { FiFacebook, FiInstagram, FiLinkedin, FiStar} from 'react-icons/fi'
import axios from 'axios'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useParams } from 'react-router'

const validation = yup.object().shape({
  firstName: yup.string().required('Conteúdo obrigatório'),
  lastName: yup.string().required('Conteúdo obrigatório'),
  cpf: yup.string().required('Conteúdo obrigatório'),
  email: yup.string().required('Conteúdo obrigatório'),
  password: yup.string().required('Conteúdo obrigatório'),
  cep: yup.string().required('Conteúdo obrigatório'),
  city: yup.string().required('Conteúdo obrigatório'),
  uf: yup.string().required('Conteúdo obrigatório'),
  // categoy: yup.string().required('Conteúdo obrigatório'),
  workName: yup.string().required('Conteúdo obrigatório'),
  description: yup.string().required('Conteúdo obrigatório'),
  status: yup.string().required('Conteúdo obrigatório'),
  whatsapp: yup.string().required('Conteúdo obrigatório'),
  profile: yup.string().required('Conteúdo obrigatório'),
  facebook: yup.string().required('Conteúdo obrigatório'),
  instagram: yup.string().required('Conteúdo obrigatório'),
})

export default function EditPerfil () { 
  const id = useParams()
  const [EditPerfilStep , setEditPerfilStep] = useState(true)
  const [sucessStep , setSucessStep] = useState(false)
  const [perfilStep , setPerfilStep] = useState(false)

  const {register, handleSubmit, formState: {errors}, reset} = useForm({resolver: yupResolver(validation)})
  const addPut = data => axios.put(`https://workapp-be.herokuapp.com/works/${id}`, data)
  .then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  }, handleRenderComp('condition'))  

  function handleRenderComp(condition){
    switch('condition'){
      case 'EditPerfil':
        setPerfilStep(false);
        setEditPerfilStep(true);
        break;
      case 'sendSucess':
        setEditPerfilStep(false);
        setSucessStep(true);
        break;
      default:
        setPerfilStep(true);
    }
  }

  useEffect(() => {
    axios.get(`http://localhost:3000/users/:id`)
    // axios.get(`https://workapp-be.herokuapp.com/users/:id`)
    .then(res => {
      console.log(res)
      reset(res.data)
    }).catch(err => {
      console.log(err)
    })  
  },[])

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
    <div className='signupContainer'>
      <HomeHeader/>
      {perfilStep &&
        <PerfilInfo/>
      }
      {EditPerfilStep && 
        <>
          <img  alt='logo' className='logoImg' src={whiteLogo}></img>
          <form onSubmit={handleSubmit(addPut)} className='signUp' action='/users' method='POST'>
            <h2>Dados Pessoais</h2>
            <label htmlFor='firstName'>Nome</label>
            <input className='signupInput' 
              type='text' 
              name='firstName' 
              id='firstName'
              {... register('firstName')}>
            </input>
            <p className='error'>{errors.firstName?.message}</p>
            <label htmlFor='lastName'>Sobrenome</label>
            <input className='signupInput' 
              type='text'  
              name='lastName'
              id='lastName'
              {... register('lastName')}>
            </input>
            <p className='error'>{errors.lastName?.message}</p>
            <label htmlFor='cpf'>CPF</label>
            <input className='signupInput' 
              type='text' 
              name='cpf' 
              id='cpf'
              {... register('cpf')}>
              </input>
              <p className='error'>{errors.cpf?.message}</p>
            <label htmlFor='email'>E-mail</label>
            <input className='signupInput' 
              type='text'  
              name='email' 
              id='email'
              {... register('email')}>
              </input>
              <p className='error'>{errors.email?.message}</p>
            <label htmlFor='password'>Senha</label>
            <input className='signupInput' 
              type='password'
              name='password' 
              id='password'
              {... register('password')}>
              </input>
              <p className='error'>{errors.password?.message}</p>
            <h2>Dados de Endereço</h2>
            <label htmlFor='cep'>CEP</label>
            <input className='signupInput' 
              type='text' 
              name='cep' 
              id='cep'
              {... register('cep')}>
              </input>
              <p className='error'>{errors.cep?.message}</p>
            <label htmlFor='city'>Cidade</label>
            <input className='signupInput' 
              type='text' 
              name='city' 
              id='city'
              {... register('city')}>
              </input>
              <p className='error'>{errors.city?.message}</p>
            <label htmlFor='uf'>Estado</label>
            <input className='signupInput' 
              type='text' 
              name='uf' 
              id='uf'
              {... register('uf')}>
              </input>
              <p className='error'>{errors.uf?.message}</p>
            <h2>Dados Profissionais</h2>
            <label htmlFor='category'>Categoria</label>
            <Select className='perfilInputSelect' 
              name='category' 
              id='category'
              options={options} 
              {... register('category')}>
            </Select>
            <p className='error'>{errors.category?.message}</p>
            <label htmlFor='workName'>Profissão</label>
            <input className='signupInput' 
              type='text' 
              name='workName' 
              id='workName'
              {... register('workName')}>
              </input>
              <p className='error'>{errors.workName?.message}</p>
            <label htmlFor='description'>Descrição</label>
            <input className='signupInput' 
              type='text' 
              name='description' 
              id='description'
              {... register('description')}>
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
                  {... register('status')}>
                </input>
                <label htmlFor='status'>Disponível</label>
              </div>
              <div className='radioStatus'>
                <input className='signupInput statusInputRadio' 
                  type='radio'  
                  name='status' 
                  id='status' 
                  {... register('status')}>
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
              {... register('whatsapp')}>
              </input>
              <p className='error'>{errors.whatsapp?.message}</p>
            <label>Adicione uma foto para seu perfil</label>
            <input className='plusFile'
              type='file'   
              name='profile' 
              accept='.png' 
              {... register('profile')}>
              </input>
              <p className='error'>{errors.profile?.message}</p>
            <label>Apresente Seus Trabalhos</label>
            <input className='plusFile' 
              type='file' 
              name='workingPic' 
              accept='.png' 
              multiple
              {... register('workingPic')}>
              </input>
              <p className='error'>{errors.workingPic?.message}</p>
            <div className='socialMidia'>
              <FiFacebook size='25' className='stepProgressIcon'/>
              <input className='signupInput social' 
                type='text' 
                name='facebook' 
                {... register('facebook')}>
                </input>
                <p className='error'>{errors.facebook?.message}</p>
            </div>
            <div className='socialMidia'>
              <FiInstagram size='25' className='stepProgressIcon'/>
              <input className='signupInput social' 
                type='text' 
                name='instagram' 
                {... register('instagram')}>
                </input>
                <p className='error'>{errors.instagram?.message}</p>
            </div>
            <div className='socialMidia'>
              <FiLinkedin size='25' className='stepProgressIcon'/>
              <input className='signupInput social' 
                type='text' 
                name='linkedin'
                {... register('linkedin')}>
                </input>
                <p className='error'>{errors.linkedin?.message}</p>
            </div>
            <button className='signupButton'
              type='submit'
              >Finalizar</button>   
          </form>
        </>
      }
      {sucessStep && 
        <div className='signUp'>
        <h3>Cadastro realizado com Sucesso!</h3>
        <FiStar size='25' className='stepProgressIcon'/>
      </div>
      }
      <div className='signUpFooter'>
        <p className='signupInfo'>Termos de uso</p>
        <p className='signupInfo'>Política de Privacidade</p>
        <p className='signupInfo'>Ajuda</p>
      </div>
    </div> 
  )  
}


