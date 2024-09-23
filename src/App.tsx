import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Banner from './components/Header'
import Tag from './components/Tag'
import { GlobalCss } from './styles'
import ProductList from './components/ProductList'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Banner />
        <ProductList title={''} />
      </>
    )
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
