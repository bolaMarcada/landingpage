import './AboutSection.css'
import { useEffect, useState } from 'react'

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('sobre');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        if (rect.top <= windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verificar visibilidade inicial
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="about" id="sobre">
      <div className={`about-container ${isVisible ? 'fade-in' : ''}`}>
        <div className="about-header">
          <h2 className="about-title">Quem somos nós?</h2>
          <div className="about-divider"></div>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
              A gente sabe que marcar jogo com os amigos nem sempre é fácil. Campo, horário, time, pagamento... tudo isso dá trabalho. O BolaMarcada nasceu pra resolver isso. Somos apaixonados por futebol e tecnologia, e queremos simplificar a vida de quem joga e de quem gerencia os campos.
            </p>
            <p className="about-paragraph">
              Construímos uma solução pensando no dono da quadra e no boleiro. Um sistema fácil, bonito e direto ao ponto.
            </p>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">✅</span>
                <span className="highlight-text">Foco total em campos society</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">✅</span>
                <span className="highlight-text">Feito por quem entende de futebol</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">✅</span>
                <span className="highlight-text">Tecnologia de verdade, sem complicação</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">✅</span>
                <span className="highlight-text">Design leve, pensado pra todo mundo usar</span>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-decoration"></div>
            <img 
              src="/src/assets/images/avatar-removebg.png" 
              alt="Mascote do BolaMarcada" 
              className="mascot-image"
            />
          </div>
        </div>
        
        <div className="about-metrics">
          <div className="metric-card">
            <div className="metric-icon">🏟️</div>
            <div className="metric-number" data-count="1200">+1.200</div>
            <div className="metric-description">Horários marcados por mês</div>
          </div>
          
          <div className="metric-card">
            <div className="metric-icon">📱</div>
            <div className="metric-number" data-count="800">+800</div>
            <div className="metric-description">Jogadores ativos</div>
          </div>
          
          <div className="metric-card">
            <div className="metric-icon">🧑‍💼</div>
            <div className="metric-number" data-count="150">+150</div>
            <div className="metric-description">Quadras gerenciadas</div>
          </div>
          
          <div className="metric-card">
            <div className="metric-icon">⚽</div>
            <div className="metric-number" data-count="3500">+3.500</div>
            <div className="metric-description">Partidas organizadas</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection 