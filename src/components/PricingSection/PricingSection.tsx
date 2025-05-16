import React from 'react';

import { motion } from 'framer-motion';
import { FaCalendarAlt, FaChartLine, FaUsers, FaCreditCard, FaHeadset } from 'react-icons/fa';
import { MdSportsSoccer, MdShield } from 'react-icons/md';
import './PricingSection.css';

interface PricingPlan {
  name: string;
  icon: React.ReactNode;
  price: string;
  description: string;
  tag: string;
  features: {
    icon: React.ReactNode;
    text: string;
  }[];
  isPopular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Início de Jogo',
    icon: <MdSportsSoccer className="card-icon" />,
    price: 'R$ 149/mês',
    description: 'Perfeito para quem está começando a gestão da primeira quadra',
    tag: 'Ideal para 1 campo',
    features: [
      {
        icon: <FaCalendarAlt />,
        text: 'Agenda online e controle de horários',
      },
      {
        icon: <FaUsers />,
        text: 'Gestão de até 100 clientes e times',
      },
      {
        icon: <FaChartLine />,
        text: 'Relatórios básicos de receita',
      },
      {
        icon: <MdShield />,
        text: 'Até 2 usuários com permissões',
      },
      {
        icon: <FaCreditCard />,
        text: 'Integração com PIX e cartão',
      },
    ],
  },
  {
    name: 'Jogo Corrido',
    icon: <FaChartLine className="card-icon" />,
    price: 'R$ 299/mês',
    description: 'Solução completa para quadras em crescimento',
    tag: 'Até 3 campos',
    features: [
      {
        icon: <FaCalendarAlt />,
        text: 'Agenda multi-quadras e gestão de conflitos',
      },
      {
        icon: <FaUsers />,
        text: 'Gestão ilimitada de clientes e times',
      },
      {
        icon: <FaChartLine />,
        text: 'Relatórios avançados de desempenho',
      },
      {
        icon: <MdShield />,
        text: 'Até 5 usuários com permissões',
      },
      {
        icon: <FaCreditCard />,
        text: 'Integração com múltiplas formas de pagamento',
      },
      {
        icon: <FaHeadset />,
        text: 'Suporte prioritário por WhatsApp',
      },
    ],
    isPopular: true,
  },
  {
    name: 'Virada de Placar',
    icon: <FaUsers className="card-icon" />,
    price: 'R$ 499/mês',
    description: 'Gestão completa para complexos esportivos',
    tag: 'Multiunidade',
    features: [
      {
        icon: <FaCalendarAlt />,
        text: 'Sistema de agendamento em rede',
      },
      {
        icon: <FaUsers />,
        text: 'Gestão centralizada de todas as unidades',
      },
      {
        icon: <FaChartLine />,
        text: 'Relatórios consolidados e personalizados',
      },
      {
        icon: <MdShield />,
        text: 'Usuários ilimitados com permissões',
      },
      {
        icon: <FaCreditCard />,
        text: 'Integração com sistemas de gestão',
      },
      {
        icon: <FaHeadset />,
        text: 'Gerente de conta dedicado',
      },
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="pricing-section" id="precos">
      <div className="pricing-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pricing-header"
        >
          <h2 className="pricing-title">Planos sob medida para sua quadra</h2>
          <p className="pricing-description">Desde a primeira pelada até o calendário lotado</p>
        </motion.div>

        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`pricing-card ${plan.isPopular ? 'popular' : ''}`}
            >
              {plan.isPopular && <div className="popular-badge">Mais Popular</div>}

              <div className="card-header">
                {plan.icon}
                <h3 className="card-title">{plan.name}</h3>
              </div>

              <div className="card-tag">{plan.tag}</div>

              <div className="card-description">{plan.description}</div>

              <div className="card-price">{plan.price}</div>

              <ul className="features-list">
                {plan.features.map((feature, i) => (
                  <li key={i} className="feature-item">
                    <div className="feature-icon">{feature.icon}</div>
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>

              <button className="cta-button">Quero esse plano</button>

              <div className="card-glow" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
