import logo from '../../assets/images/logo.png'
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Bola Marcada" className="logo" />
      </div>
      <nav>
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header 