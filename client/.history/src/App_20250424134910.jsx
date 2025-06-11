import './app.css'
import Gallery from './components/gallery/Gallery.jsx'
import LeftBar from './components/leftBar/LeftBar.jsx'
import TopBar from './components/topBar/TopBar.jsx'

const App = () => {
  return (
    <div>
      <LeftBar />
      <div className="content">
        <TopBar />
        <Gallery/>
      </div>
    </div>
  )
}

export default App