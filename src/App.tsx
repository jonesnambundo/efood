import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Tag from './components/Tag'
import { GlobalCss } from './styles'
import Home from './components/pages/Home'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <RouterProvider router={rotas} />
      <div className="container">
        <Tag size="small">Destaque da semana</Tag>
      </div>
    </>
  )
}

export default App
