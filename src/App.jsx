import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import AddTaskPage from './pages/AddTaskPage.jsx'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-task" element={<AddTaskPage />} />

    </Routes>
  )
}

export default App
