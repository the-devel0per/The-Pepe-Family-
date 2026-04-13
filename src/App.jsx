import './index.css'
import Navbar from './components/Navbar'
import HeroCarousel from './components/HeroCarousel'
import FamilyTree from './components/FamilyTree'
import KidsSection from './components/KidsSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-pepe-dark text-white">
      <Navbar />
      <main>
        <HeroCarousel />
        <FamilyTree />
        <KidsSection />
      </main>
      <Footer />
    </div>
  )
}
