import './FeaturesSection.css';
import { useEffect, useState } from 'react';

import avatar from '../../assets/images/avatar-removebg.png';

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
    <section className="features" id="recursos">
      <div className="field-background"></div>
      <div className="center-circle"></div>
      <div className={`features-container ${isVisible ? 'fade-in' : ''}`}>
        <div className="features-header">
          <div className="midfield-line"></div>
          <h2 className="features-title">
            Chega de papel, planilha e grupo no WhatsApp pra marcar jogo.
          </h2>
          <p className="features-subtitle">
            Do agendamento ao pagamento, tudo no seu controle. Fácil, rápido e com a cara do
            futebol.
          </p>
          <div className="features-divider"></div>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-container">
                <div className="feature-icon">{feature.icon}</div>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="features-illustration">
          <div className="illustration-decoration"></div>
          <div className="mascot-speech-bubble">
            <p>Veja como é fácil gerenciar seu campo!</p>
          </div>
          <img src={avatar} alt="Mascote do BolaMarcada" className="mascot-image" />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
