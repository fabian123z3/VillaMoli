import LandingPage from './pages/LandingPage'
import CarniceroDeBolsillo from './pages/CarniceroDeBolsillo'

function App() {
  const isCarnicero = typeof window !== 'undefined' && window.location.pathname.includes('carnicerodebolsillo')

  if (isCarnicero) {
    return <CarniceroDeBolsillo />
  }

  return <LandingPage />
}

export default App
