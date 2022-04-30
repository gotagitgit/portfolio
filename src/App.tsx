import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Education } from './components/Education'
import { Home } from './components/Home'
import './assets/sass/main.scss'
import { Header } from './components/Header'

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </BrowserRouter>
  )
}
