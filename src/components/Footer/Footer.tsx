import './Footer.css'
import logo from '../../assets/images/logo.png'
import { FaInstagram, FaTwitter, FaFacebookF, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer id="contato">
      <div className="footer-container">
        <div className="footer-brand">
          <img src={logo} alt="Bola Marcada" className="footer-logo" />
          <p className="slogan">Quem marca, joga. Quem joga, volta.</p>
        </div>
        
        <div className="footer-links">
          <div className="links-column">
            <h4>Navegação</h4>
            <ul>
              <li><a href="/">Início</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#sobre">Sobre nós</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>
          
          <div className="links-column">
            <h4>Contato</h4>
            <p>Email: contato@bolamarcada.com</p>
            <p>Telefone: (00) 0000-0000</p>
            <p>WhatsApp: (00) 0000-0000</p>
          </div>
        </div>
        
        <div className="social-media">
          <h4>Siga-nos</h4>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© {currentYear} Bola Marcada - Todos os direitos reservados</p>
        <div className="footer-legal">
          <a href="/privacidade">Política de Privacidade</a>
          <a href="/termos">Termos de Uso</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer 