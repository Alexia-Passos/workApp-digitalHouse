//react
import { Link } from 'react-router-dom'
import React from 'react'
//comp
import '../../styleCss/footer.css'
import {FiFacebook , FiInstagram , FiTwitter , FiLinkedin} from 'react-icons/fi'

export default function Footer() {
    return (
        <div className='footerStyle'>
            <div className='footerSection'>
                <h3>Políticas da Empresa</h3>
                <div className='footerContent'>
                  <Link to='privacidade' className='footerText'>Privacidades de dados</Link>
                  <Link to='seguranca' className='footerText'>Segurança ao prestado de Serviço</Link>
                </div>
            </div>
            <div className='footerSection'>
                <h3>Nossas Redes Sociais</h3>
                <div className='footerLastContent'>
                  <Link to='https://www.facebook.com/campaign/landing.php?&campaign_id=1661784632&extra_1=s%7Cc%7C320269324047%7Ce%7Cfacebook%7C&placement=&creative=320269324047&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D1661784632%26adgroupid%3D63686352403%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-541132862%26loc_physical_ms%3D1001727%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjwqeWKBhBFEiwABo_XBq6z7e_1aG-Gdkw2FReA0onDPGvpSnFM0L3fKdtLKOdtcEuh_H3iixoCAvMQAvD_BwE' className='footerIcons'><FiFacebook/></Link>
                  <Link to='https://www.instagram.com/' className='footerIcons'><FiInstagram/></Link>
                  <Link to='https://twitter.com/twitterbrasil' className='footerIcons'><FiTwitter/></Link>
                  <Link to='https://br.linkedin.com/' className='footerIcons'><FiLinkedin/></Link>
                </div>
            </div>
        </div>
    )
}