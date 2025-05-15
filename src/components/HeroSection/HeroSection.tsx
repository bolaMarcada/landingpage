import CTAButton from '../CTAButton/CTAButton'
import './HeroSection.css'
import { useEffect, useState } from 'react'

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleClick = () => {
    console.log('Botão CTA clicado')
  }

  return (
    <section className="hero" id="inicio">
      <div className="hero-background">
        <div className="field-lines">
          <div className="field-line line-horizontal"></div>
          <div className="field-line line-horizontal"></div>
          <div className="field-line line-vertical"></div>
          <div className="field-circle"></div>
        </div>
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className={`hero-container ${isVisible ? 'visible' : ''}`}>
        <div className="hero-logo-container">
          <img src="/src/assets/images/brand.PNG" alt="Logotipo Bola Marcada" className="logo-image fade-in" />
        </div>

        <div className="hero-content-wrapper">
          <div className="hero-left">
            <h1 className="hero-slogan slide-up">
              <span className="highlight">Quem marca,</span> joga.<br />
              <span className="highlight">Quem joga,</span> volta.
            </h1>
            <p className="hero-subtitle slide-up-delayed">
              Deixa a tabela com a gente. Você só precisa marcar o gol.
            </p>
            <div className="hero-cta slide-up-delayed-2">
              <CTAButton text="Quero testar grátis" onClick={handleClick} />
              <span className="cta-hint">Comece agora, sem cartão</span>
            </div>
          </div>
          
          <div className="hero-right">
            <div className="mascot-container float-animation">
              <div className="mascot-glow"></div>
              <img 
                src="/src/assets/images/avatar-removebg.png" 
                alt="Mascote Bola Marcada" 
                className="mascot-image" 
              />
            </div>
            <div className="decorative-elements">
              <div className="ball-element"></div>
              <div className="net-element"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 