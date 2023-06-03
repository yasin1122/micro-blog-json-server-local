import BlogDetails from './BlogDetails'
import Create from './Create'
import Home from './Home'
import Navbar from './Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFound from './NotFound'

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Routes>
            <Route
              path='/'
              element={<Home />}></Route>
            <Route
              path='/create'
              element={<Create />}></Route>
            <Route
              path='/blogs/:id'
              element={<BlogDetails />}></Route>
            <Route
              path='*'
              element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
