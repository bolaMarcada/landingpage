import { useEffect, useState } from 'react';

import avatar from '../../assets/images/avatar-removebg.png';

import styles from './FeaturesSection.module.css';

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const featuresSection = document.getElementById('recursos');
      if (featuresSection) {
        const rect = featuresSection.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const features = [
    {
      icon: '🗓️',
      title: 'Agendamento Online',
      description: 'Seus horários sempre organizados e fáceis de visualizar',
    },
    {
      icon: '💰',
      title: 'Controle Financeiro',
      description: 'Veja ganhos por dia, semana e mês com clareza total',
    },
    {
      icon: '📱',
      title: 'App para jogadores',
      description: 'Jogadores podem reservar direto do celular, sem complicações',
    },
    {
      icon: '📊',
      title: 'Relatórios Inteligentes',
      description: 'Acompanhe desempenho e lotação em tempo real',
    },
    {
      icon: '🧾',
      title: 'Gestão de Pagamentos',
      description: 'Pix, crédito ou presencial: você escolhe como receber',
    },
    {
      icon: '🔔',
      title: 'Lembretes e Notificações',
      description: 'Alertas para pagamentos, reservas e confirmações de jogos',
    },
  ];

  return (
    <section className={styles.features} id="recursos">
      <div className={styles['field-background']}></div>
      <div className={styles['center-circle']}></div>
      <div className={`${styles['features-container']} ${isVisible ? styles['fade-in'] : ''}`}>
        <div className={styles['features-header']}>
          <div className={styles['midfield-line']}></div>
          <h2 className={styles['features-title']}>
            Chega de papel, planilha e grupo no WhatsApp pra marcar jogo.
          </h2>
          <p className={styles['features-subtitle']}>
            Do agendamento ao pagamento, tudo no seu controle. Fácil, rápido e com a cara do
            futebol.
          </p>
          <div className={styles['features-divider']}></div>
        </div>

        <div className={styles['features-grid']}>
          {features.map((feature, index) => (
            <div className={styles['feature-card']} key={index}>
              <div className={styles['feature-icon-container']}>
                <span className={styles['feature-icon']}>{feature.icon}</span>
              </div>
              <h3 className={styles['feature-title']}>{feature.title}</h3>
              <p className={styles['feature-description']}>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className={styles['features-illustration']}>
          <div className={styles['illustration-decoration']}></div>
          <div className={styles['mascot-speech-bubble']}>
            <p>Veja como é fácil gerenciar seu campo!</p>
          </div>
          <img src={avatar} alt="Mascote do BolaMarcada" className={styles['mascot-image']} />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
