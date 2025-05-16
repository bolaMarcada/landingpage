import { useState, useEffect } from 'react';

import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

import logo from '../../assets/images/brand.png';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      // Efeito de scroll para o header
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Detectar seção ativa
      const sections = ['inicio', 'sobre', 'recursos', 'precos', 'contato'];
      let currentSection = activeSection;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, activeSection]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevenir rolagem quando o menu móvel está aberto
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const handleLinkClick = (section: string, e?: React.MouseEvent<HTMLAnchorElement>) => {
    if (e) e.preventDefault();

    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
    setActiveSection(section);

    // Implementação do scroll suave
    const element = document.getElementById(section);
    if (element) {
      // Aplica o scroll suave
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="header-content">
        <div className="logo-container">
          <a href="#inicio" onClick={e => handleLinkClick('inicio', e)}>
            <img src={logo} alt="Bola Marcada" className="logo" />
            <span className="brand-name">
              Bola<strong>Marcada</strong>
            </span>
          </a>
        </div>

        <div
          className={`mobile-menu-button ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={isMenuOpen ? 'active' : ''}>
          <ul className="nav-links">
            <li>
              <a
                href="#inicio"
                onClick={e => handleLinkClick('inicio', e)}
                className={activeSection === 'inicio' ? 'active' : ''}
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#sobre"
                onClick={e => handleLinkClick('sobre', e)}
                className={activeSection === 'sobre' ? 'active' : ''}
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#recursos"
                onClick={e => handleLinkClick('recursos', e)}
                className={activeSection === 'recursos' ? 'active' : ''}
              >
                Recursos
              </a>
            </li>
            <li>
              <a
                href="#precos"
                onClick={e => handleLinkClick('precos', e)}
                className={activeSection === 'precos' ? 'active' : ''}
              >
                Preços
              </a>
            </li>
          </ul>

          <div className="social-links">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a href="mailto:contato@bolamarcada.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>

          <a
            href="#contato"
            onClick={e => handleLinkClick('contato', e)}
            className={`contact-button ${activeSection === 'contato' ? 'active' : ''}`}
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
