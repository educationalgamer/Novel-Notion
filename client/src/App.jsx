import {Outlet} from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <div className=' relative'>   
    <Navbar/>
    <div className='min-h-screen'>
    <Outlet/>
    </div>
     </div>
    </>
  )
}

export default App
