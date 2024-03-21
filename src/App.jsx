import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Categories from './pages/Categories';
import Header from './components/Header';
import './App.css'

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}
