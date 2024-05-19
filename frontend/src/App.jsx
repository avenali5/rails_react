import './App.css'
import AppRoutes from './components/AppRoutes'
import NavBar from './components/NavBar'
import {BrowserRouter as Router} from "react-router-dom"

function App() {

  return (
    <Router>
      <div className="app">
        <NavBar />
        <AppRoutes />
      </div>
    </Router>
  )
}

export default App
