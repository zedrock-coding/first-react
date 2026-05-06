import { useState } from 'react';
import HeroSection from './components/hero-section.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className = 'grid-cols-1 gap-4'>
      <HeroSection />
      <section className='flex flex-no-wrap align-item-center justify-content-center bg-gray-100 dark:bg-gray-800 py-6 mt-8 rounded-lg shadow-md'>
        <canvas className='max-w-4xl min-h-128 px-4 py-8'>

        </canvas>
      </section>
    </div>
  )
}

export default App
