import ServiceCard from './ServiceCard'
import './ServicesSection.css'

const ServicesSection = () => {
  const services = [
    {
      title: "Agendamento",
      description: "Marque suas partidas e gerencie horários com facilidade."
    },
    {
      title: "Estatísticas",
      description: "Acompanhe o desempenho dos jogadores e times."
    },
    {
      title: "Comunidade",
      description: "Conecte-se com outros jogadores e times da sua região."
    }
  ]

  return (
    <section className="services" id="servicos">
      <h2>Nossos Serviços</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  )
}

export default ServicesSection 