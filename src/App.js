import React from 'react'
import Aside from './Components/Aside'
import Filter from './Components/Filter'
import Navbar from './Components/Navbar'
import Product from './Components/Product'
import ProductRow from './Components/ProductRow'
import { Routes,Route } from 'react-router-dom'
import PanierButton from './Components/PanierButton'
export default function App() {
  return (
    <>
    <div></div>
   
    <Navbar/>
    <Routes>
      <Route exact path = '/' element = {<Product/>} />
      <Route exact path = '/panierbutton' element = {<PanierButton/>}/>
      <Route exact path = '/productrow' element = {<ProductRow/>} />

    </Routes>
    </>
  )
}
