import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbaar from './Components/Navbaar'
import Product from './Pages/Product'
import AddProduct from './Pages/Addproduct'
import Editpage from './Pages/Editpage'

function AllRoutes() {
  return (
    <>
    <Navbaar/>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<Product />} />
            <Route path='/addproduct' element={<AddProduct />} />
            <Route path='/edit/:id' element={<Editpage />} />
        </Routes>
    </>
  ) 
}

export default AllRoutes