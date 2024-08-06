import Banner from './components/Banner'
import Tag from './components/Tag'
import { GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Banner />
      <div className="Container">
        <Tag size="small">Destaque da semana</Tag>
      </div>
    </>
  )
}

export default App
