import './FinalCTASection.css'
import CTAImg from '../../assets/images/CTA-ilustration-1.png'
import { motion } from 'framer-motion'
import { FaCalendarAlt, FaChartLine, FaCheckCircle, FaUsers } from 'react-icons/fa'
import { useState } from 'react'

const FinalCTASection = () => {
  const [isHovered, setIsHovered] = useState(false)

  const features = [
    { icon: <FaCalendarAlt />, text: "Agendamentos simplificados" },
    { icon: <FaUsers />, text: "Menos faltas, mais jogos" },
    { icon: <FaCheckCircle />, text: "Pagamentos garantidos" }
  ]

  return (
    <section className="final-cta-section">
      <div className="final-cta-container">
        {/* Elementos decorativos dinâmicos */}
        <div className="dynamic-elements">
          <motion.div 
            className="floating-ball ball-1"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="floating-ball ball-2"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -15, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
          <motion.div 
            className="field-line line-horizontal"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          />
          <motion.div 
            className="field-line line-vertical"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
          />
          <motion.div 
            className="field-circle"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </div>

        {/* CONTEÚDO E CTAs */}
        <motion.div 
          className="final-cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="badge"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Gestão completa para seu espaço esportivo
          </motion.span>

          <h2 className="final-cta-title">
            Seu <span className="gradient-text">campo</span> ou sua <span className="gradient-text">resenha</span> não podem esperar.
          </h2>
          
          <p className="final-cta-description">
            Transforme sua quadra em um negócio lucrativo e ofereça a melhor experiência para seus clientes. 
            Agendamentos online, pagamentos garantidos e menos faltas.
          </p>

          <motion.div 
            className="features-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <span>{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <div className="final-cta-buttons">
            <motion.a 
              href="/cadastro-dono"
              className="final-cta-button primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaChartLine className="button-icon" />
              Cadastrar campo
            </motion.a>
            <motion.a 
              href="/cadastro-jogador"
              className="final-cta-button secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCalendarAlt className="button-icon" />
              Marcar jogo
            </motion.a>
          </div>
        </motion.div>

        {/* ILUSTRAÇÃO INTERATIVA */}
        <motion.div 
          className="final-cta-image"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <motion.div 
            className="image-container"
            animate={isHovered ? { 
              rotateY: [0, 5, 0, -5, 0],
              transition: { duration: 5, repeat: Infinity }
            } : {}}
          >
            <motion.div 
              className="stats-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="stats-icon">
                <FaChartLine />
              </div>
              <div className="stats-content">
                <span className="stats-value">+30%</span>
                <span className="stats-label">Ocupação média</span>
              </div>
            </motion.div>

            <img 
              src={CTAImg}
              alt="Gestão completa para quadras esportivas"
              className="final-cta-avatar"
            />
            
            <motion.div 
              className="image-decoration"
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            
            <motion.div 
              className="users-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <div className="users-icon">
                <FaUsers />
              </div>
              <div className="users-content">
                <span className="users-value">-45%</span>
                <span className="users-label">Faltas nos jogos</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FinalCTASection 