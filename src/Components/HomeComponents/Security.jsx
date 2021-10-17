import React from 'react'
import '../../styleCss/home.css'
import HomeHeader from './HomeHeader'
import Footer from './Footer'
import MenuBar from './MenuBar'

export default function Security() {
    return (
      <>
        <HomeHeader/>
        <MenuBar/>
        <div className='container'>
          <h1>Segurança dos Prestadores de Serviços</h1>
          <p className='homeInfo'>Lorem ipsum dolor sit amet. Est laborum ipsam aut mollitia sapiente et officiis aliquam hic dolore provident est dolorem nulla quia repellendus qui voluptate nulla. Et nihil quae sit provident doloremque aut quas officia non dolor repellat et dolorum labore ut impedit consequuntur est pariatur iusto! Et quia ducimus cum unde suscipit ex accusamus optio.
            Non dolore vitae et quis ratione qui tempora fuga qui quae dolore sit velit velit. Quo ipsam earum At magnam ipsam est temporibus nostrum et autem vitae a sunt iusto et vitae praesentium! In facere veniam ad consequatur adipisci et debitis autem.
            Quo quidem numquam est minus voluptatem eos dolore quibusdam. Sed perspiciatis galisum aut corporis voluptas sit illum odit eum quas suscipit? Est voluptatum vitae et rerum reprehenderit id dolorum velit eum doloribus quia qui facere nisi.</p>
        </div>
        <Footer/>
      </>
        
    )
}