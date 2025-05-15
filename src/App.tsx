import './App.css'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import AboutSection from './components/About/AboutSection'
import FeaturesSection from './components/Features/FeaturesSection'
import PricingSection from './components/PricingSection'
import FinalCTASection from './components/FinalCTASection/FinalCTASection'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="landing-page">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <PricingSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
