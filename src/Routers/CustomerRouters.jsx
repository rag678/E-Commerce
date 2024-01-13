import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/Pages/HomePage/HomePage'
import Cart from '../customer/components/Cart/Cart'
import Navigation from '../customer/components/navigation/Navigation'
import Footer from '../customer/components/Footer/Footer'
import Product from '../customer/components/Product/Product'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Order from '../customer/components/Order/Order'
import Checkout from '../customer/components/Checkout/Checkout'
import OrderDetails from '../customer/components/Order/OrderDetails'

const CustomerRouters = () => {
  return (
    <div>
        <div>
        <Navigation/>
        </div>
        <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/login' element={<HomePage/>}></Route>
            <Route path='/register' element={<HomePage/>}></Route>
            <Route path='/Cart' element={<Cart/>}></Route>
            <Route path='/:lavelOne/:lavelTwo/:lavelThre' element={<Product/>}></Route>
            <Route path='/Product/:ProductId' element={<ProductDetails/>}></Route>
            <Route path='/Checkout' element={<Checkout/>}></Route>
            <Route path='/account/order' element={<Order/>}></Route>
            <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>

        {/* <Order/> */}
        {/* <OrderDetails/> */}
        </Routes>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default CustomerRouters