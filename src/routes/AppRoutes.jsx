import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Home />} />
      <Route path="/skills" element={<Home />} />
      <Route path="/education" element={<Home />} />
      <Route path="/certifications" element={<Home />} />
      <Route path="/contact" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}
