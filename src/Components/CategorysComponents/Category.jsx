//react
import React, { useEffect , useState } from 'react'
//comp
import Card from '../HomeComponents/Card'
import '../../styleCss/home.css'
import Footer from '../HomeComponents/Footer'
import HomeHeader from '../HomeComponents/HomeHeader'
import MenuBar from '../HomeComponents/MenuBar'
//dep
import axios from 'axios'

function Category(props) {
  const categoryProps = props.categoryPropsId

  //state
  const [works, setWorks] = useState([])

  //GET users
  useEffect(() => {
    axios.get(`https://workapp-be.herokuapp.com/works`)
      .then(res => {
        console.log(res)
        setWorks(res.data)
      }).catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <>
      <HomeHeader />
      <MenuBar />
      <h1>Encontre um Serviço</h1>
      <div className='cardCategory'>
        {/* {works.forEach(el => {
          if (el.category.id == categoryProps) {
            return <Card />
          }
        })} */}
        <Card/>
      </div>
      <Footer />
    </>
  )
}
export default Category