import React from 'react'
import { Routes, BrowserRouter, Route } from 'react-router'
import HomePage from './pages/HomePage'
import AddExpensePage from './pages/AddExpensePage'
import EditExpensePage from './pages/EditExpensePage'


function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='add' element={<AddExpensePage />} />
        <Route path='edit/:id' element={<EditExpensePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
