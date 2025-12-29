import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Curriculum } from './components/Curriculum';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-university-cream text-gray-900 font-serif selection:bg-university-gold selection:text-university-blue">
      <Hero />
      <Philosophy />
      <Curriculum />
      <Footer />
    </div>
  )
}

export default App
