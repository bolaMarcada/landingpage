import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from 'react-icons/fa';

import logo from '../../assets/images/logo.png';

import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.brandSection}>
            <img src={logo} alt="Bola Marcada" className={styles.logo} />
            <p className={styles.tagline}>Quem marca, joga. Quem joga, volta.</p>
            <div className={styles.socialIcons}>
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
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div className={styles.linksGrid}>
            <div className={styles.linkSection}>
              <h3>Menu</h3>
              <ul>
                <li>
                  <a href="/">
                    <span>Início</span>
                  </a>
                </li>
                <li>
                  <a href="#servicos">
                    <span>Serviços</span>
                  </a>
                </li>
                <li>
                  <a href="#sobre">
                    <span>Sobre nós</span>
                  </a>
                </li>
                <li>
                  <a href="#contato">
                    <span>Contato</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.linkSection}>
              <h3>Contato</h3>
              <ul>
                <li>
                  <a href="mailto:contato@bolamarcada.com">
                    <FaEnvelope />
                    <span>contato@bolamarcada.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+5500000000000">
                    <FaPhone />
                    <span>(00) 0000-0000</span>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp />
                    <span>(00) 0000-0000</span>
                  </a>
                </li>
                <li>
                  <a href="#localizacao">
                    <FaMapMarkerAlt />
                    <span>São Paulo, SP</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.footerBottom}>
          <p>© {currentYear} Bola Marcada - Todos os direitos reservados</p>
          <div className={styles.legalLinks}>
            <a href="/privacidade">Privacidade</a>
            <a href="/termos">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
