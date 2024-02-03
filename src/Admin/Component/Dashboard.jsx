import { Grid } from '@mui/material'
import React from 'react'
import OrdersTableView from '../View/OrderTableView'
import ProductsTableView from '../View/ProductTableView'
import Achivement from './Achivement'
import MonthlyOverView from './MonthlyOverView'

const AdminDashboard = () => {
  return (
    <div className='p-10'>
      <Grid container spacing={3}>

        <Grid item xs={12} md={4}>
          <div className='shadow-lg shadow-gray-600'>
            <Achivement />
          </div>

        </Grid>
        <Grid item xs={12} md={8}>
          <div className='shadow-lg shadow-gray-600'>
            <MonthlyOverView />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className='shadow-lg shadow-gray-600'>
            <OrdersTableView />
          </div>

        </Grid>
        <Grid item xs={12} md={6}>
          <div className='shadow-lg shadow-gray-600'>
            <ProductsTableView />
          </div>

        </Grid>

      </Grid>
    </div>
  )
}

export default AdminDashboard