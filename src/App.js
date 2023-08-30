import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard, Home, Login } from './pages';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>

  )
}
