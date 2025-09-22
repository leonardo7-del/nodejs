import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ProductDetailPage from './pages/ProductDetailPage'
import CategoriesPage from './pages/CategoriesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import './App.css'
import './styles/App.css'
import './styles/Navbar.css'
import './styles/ProductCard.css'
import './styles/ProductList.css'
import './styles/ProductDetail.css'
import './styles/HomePage.css'
import './styles/CategoriesPage.css'
import './styles/AboutPage.css'
import './styles/ContactPage.css'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; 2023 Mi Tienda Online. Todos los derechos reservados.</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
