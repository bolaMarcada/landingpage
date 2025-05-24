import { FaInstagram, FaTwitter, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

import logo from '../../assets/images/logo.png';

import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato">
      <div className={styles['footer-container']}>
        <div className={styles['footer-brand']}>
          <img src={logo} alt="Bola Marcada" className={styles['footer-logo']} />
          <p className={styles.slogan}>Quem marca, joga. Quem joga, volta.</p>
        </div>

        <div className={styles['footer-links']}>
          <div className={styles['links-column']}>
            <h4>Navegação</h4>
            <ul>
              <li>
                <a href="/">Início</a>
              </li>
              <li>
                <a href="#servicos">Serviços</a>
              </li>
              <li>
                <a href="#sobre">Sobre nós</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </div>

          <div className={styles['links-column']}>
            <h4>Contato</h4>
            <p>Email: contato@bolamarcada.com</p>
            <p>Telefone: (00) 0000-0000</p>
            <p>WhatsApp: (00) 0000-0000</p>
          </div>
        </div>

        <div className={styles['social-media']}>
          <h4>Siga-nos</h4>
          <div className={styles['social-icons']}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className={styles['footer-bottom']}>
        <p>© {currentYear} Bola Marcada - Todos os direitos reservados</p>
        <div className={styles['footer-legal']}>
          <a href="/privacidade">Política de Privacidade</a>
          <a href="/termos">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
