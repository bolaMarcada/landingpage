import { useEffect, useState } from 'react';

import avatar from '../../assets/images/avatar-removebg.png';

import styles from './AboutSection.module.css';

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
    <section className={styles.about} id="sobre">
      <div className={`${styles['about-container']} ${isVisible ? styles['fade-in'] : ''}`}>
        <div className={styles['about-header']}>
          <h2 className={styles['about-title']}>Quem somos nós?</h2>
          <div className={styles['about-divider']}></div>
        </div>

        <div className={styles['about-content']}>
          <div className={styles['about-text']}>
            <p className={styles['about-paragraph']}>
              A gente sabe que marcar jogo com os amigos nem sempre é fácil. Campo, horário, time,
              pagamento... tudo isso dá trabalho. O BolaMarcada nasceu pra resolver isso. Somos
              apaixonados por futebol e tecnologia, e queremos simplificar a vida de quem joga e de
              quem gerencia os campos.
            </p>
            <p className={styles['about-paragraph']}>
              Construímos uma solução pensando no dono da quadra e no boleiro. Um sistema fácil,
              bonito e direto ao ponto.
            </p>

            <div className={styles['about-highlights']}>
              <div className={styles['highlight-item']}>
                <span className={styles['highlight-icon']}>✅</span>
                <span className={styles['highlight-text']}>Foco total em campos society</span>
              </div>
              <div className={styles['highlight-item']}>
                <span className={styles['highlight-icon']}>✅</span>
                <span className={styles['highlight-text']}>Feito por quem entende de futebol</span>
              </div>
              <div className={styles['highlight-item']}>
                <span className={styles['highlight-icon']}>✅</span>
                <span className={styles['highlight-text']}>
                  Tecnologia de verdade, sem complicação
                </span>
              </div>
              <div className={styles['highlight-item']}>
                <span className={styles['highlight-icon']}>✅</span>
                <span className={styles['highlight-text']}>
                  Design leve, pensado pra todo mundo usar
                </span>
              </div>
            </div>
          </div>

          <div className={styles['about-image']}>
            <div className={styles['image-decoration']}></div>
            <img src={avatar} alt="Mascote do BolaMarcada" className={styles['mascot-image']} />
          </div>
        </div>

        <div className={styles['about-metrics']}>
          <div className={styles['metric-card']}>
            <div className={styles['metric-icon']}>🏟️</div>
            <div className={styles['metric-number']} data-count="1200">
              +1.200
            </div>
            <div className={styles['metric-description']}>Horários marcados por mês</div>
          </div>

          <div className={styles['metric-card']}>
            <div className={styles['metric-icon']}>📱</div>
            <div className={styles['metric-number']} data-count="800">
              +800
            </div>
            <div className={styles['metric-description']}>Jogadores ativos</div>
          </div>

          <div className={styles['metric-card']}>
            <div className={styles['metric-icon']}>🧑‍💼</div>
            <div className={styles['metric-number']} data-count="150">
              +150
            </div>
            <div className={styles['metric-description']}>Quadras gerenciadas</div>
          </div>

          <div className={styles['metric-card']}>
            <div className={styles['metric-icon']}>⚽</div>
            <div className={styles['metric-number']} data-count="3500">
              +3.500
            </div>
            <div className={styles['metric-description']}>Partidas organizadas</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
