import './css/App.css'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import Favourites from './pages/Favourites'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <div>
      <Navbar/>
      <main className='main-content'>
        <Routes>
          <Route path='/' element={< Home/>}/>
          <Route path='/favourites' element={< Favourites/>}/>
        </Routes>
      </main>
    </div>
    </>
  )
}

export default App
