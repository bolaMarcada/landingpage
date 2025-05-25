import { motion } from 'framer-motion';
import { FaCalendarAlt, FaChartLine } from 'react-icons/fa';

import CTAImg from '../../assets/images/CTA-ilustration-1.png';

import styles from './FinalCTASection.module.css';

const FinalCTASection = () => {
  return (
    <section className={styles['final-cta-section']} id="contato">
      <div className={styles['final-cta-container']}>
        {/* Elementos decorativos dinâmicos */}
        <div className={styles['dynamic-elements']}>
          <motion.div
            className={`${styles['floating-ball']} ${styles['ball-1']}`}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className={`${styles['floating-ball']} ${styles['ball-2']}`}
            animate={{
              y: [0, 20, 0],
              rotate: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          />
          <motion.div
            className={`${styles['field-line']} ${styles['line-horizontal']}`}
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          />
          <motion.div
            className={`${styles['field-line']} ${styles['line-vertical']}`}
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
          />
          <motion.div
            className={styles['field-circle']}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </div>

        {/* ILUSTRAÇÃO INTERATIVA */}
        <div className={styles['final-cta-image']}>
          <div className={styles['image-wrapper']}>
            <img
              src={CTAImg}
              alt="Gestão completa para quadras esportivas"
              className={styles['final-cta-avatar']}
            />
            <div className={styles['image-decoration']}></div>
          </div>
        </div>

        {/* CONTEÚDO E CTAs */}
        <motion.div
          className={styles['final-cta-content']}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Gestão completa para seu espaço esportivo
          </motion.span>

          <h2 className={styles['final-cta-title']}>
            Seu <span className={styles['gradient-text']}>campo</span> ou sua{' '}
            <span className={styles['gradient-text']}>resenha</span> não podem esperar.
          </h2>

          <p className={styles['final-cta-description']}>
            Transforme sua quadra em um negócio lucrativo e ofereça a melhor experiência para seus
            clientes. Agendamentos online, pagamentos garantidos e menos faltas.
          </p>

          <div className={styles['final-cta-buttons']}>
            <motion.a
              href="/cadastro-dono"
              className={`${styles['final-cta-button']} ${styles.primary}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaChartLine className={styles['button-icon']} />
              Cadastrar campo
            </motion.a>
            <motion.a
              href="/cadastro-jogador"
              className={`${styles['final-cta-button']} ${styles.secondary}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCalendarAlt className={styles['button-icon']} />
              Marcar jogo
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
