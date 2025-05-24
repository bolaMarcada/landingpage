import { useEffect, useState } from 'react';

import avatar from '../../assets/images/avatar-removebg.png';
import logo from '../../assets/images/brand.png';
import CTAButton from '../CTAButton/CTAButton';

import styles from './HeroSection.module.css';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClick = () => {
    console.log('Botão CTA clicado');
  };

  return (
    <section className={styles.hero} id="inicio">
      <div className={styles['hero-background']}>
        <div className={styles['field-lines']}>
          <div className={`${styles['field-line']} ${styles['line-horizontal']}`}></div>
          <div className={`${styles['field-line']} ${styles['line-horizontal']}`}></div>
          <div className={`${styles['field-line']} ${styles['line-vertical']}`}></div>
          <div className={styles['field-circle']}></div>
        </div>
        <div className={styles['hero-shapes']}>
          <div className={`${styles.shape} ${styles['shape-1']}`}></div>
          <div className={`${styles.shape} ${styles['shape-2']}`}></div>
          <div className={`${styles.shape} ${styles['shape-3']}`}></div>
        </div>
      </div>

      <div className={`${styles['hero-container']} ${isVisible ? styles.visible : ''}`}>
        <div className={styles['hero-logo-container']}>
          <img
            src={logo}
            alt="Logotipo Bola Marcada"
            className={`${styles['logo-image']} ${styles['fade-in']}`}
          />
        </div>

        <div className={styles['hero-content-wrapper']}>
          <div className={styles['hero-left']}>
            <h1 className={`${styles['hero-slogan']} ${styles['slide-up']}`}>
              <span className={styles.highlight}>Quem marca,</span> joga.
              <br />
              <span className={styles.highlight}>Quem joga,</span> volta.
            </h1>
            <p className={`${styles['hero-subtitle']} ${styles['slide-up-delayed']}`}>
              Deixa a tabela com a gente. Você só precisa marcar o gol.
            </p>
            <div className={`${styles['hero-cta']} ${styles['slide-up-delayed-2']}`}>
              <CTAButton text="Quero testar grátis" onClick={handleClick} />
              <span className={styles['cta-hint']}>Comece agora, sem cartão</span>
            </div>
          </div>

          <div className={styles['hero-right']}>
            <div className={`${styles['mascot-container']} ${styles['float-animation']}`}>
              <div className={styles['mascot-glow']}></div>
              <img src={avatar} alt="Mascote Bola Marcada" className={styles['mascot-image']} />
            </div>
            <div className={styles['decorative-elements']}>
              <div className={styles['ball-element']}></div>
              <div className={styles['net-element']}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
