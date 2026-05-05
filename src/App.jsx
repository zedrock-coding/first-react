import { useState } from 'react';
import HeroSection from './components/hero-section.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroSection />
    </>
  )
}

export default App
