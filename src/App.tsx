import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes
} from 'react-router-dom'
import Tag from './components/Tag'
import { GlobalCss } from './styles'
import Home from './components/pages/Home'
import Restaurantes from './components/pages/Restaurantes'
import Header from './components/Header'
import Footer from './components/Footer'

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
      <div className="container"></div>
      <Rotas />
    </BrowserRouter>
  )
}

export default App
