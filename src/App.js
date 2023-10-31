import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import './App.css'
import ResponsiveAppBar from "./Components/ResponsiveAppBar"
import Home from "./Home"

function App() {
  return (
    <div className="App-wrapper">
      <ResponsiveAppBar pages={['Resume', 'Links']}/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

function NotFound() {
  return <h2>404 Not Found</h2>
}

export default App
