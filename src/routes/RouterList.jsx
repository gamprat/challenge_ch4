import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { DetailMovie } from '../pages/DetailMovie'

export const RouterList = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage></HomePage>}></Route>
            <Route path='/DetailMovie/:id' element={<DetailMovie></DetailMovie>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
