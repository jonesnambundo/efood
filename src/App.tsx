import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalCss } from './styles'
import Home from './components/pages/Home'
import Restaurantes from './components/pages/Restaurantes'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes" element={<Restaurantes />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
    </BrowserRouter>
  )
}

export default App
