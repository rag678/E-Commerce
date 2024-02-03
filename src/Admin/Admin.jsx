import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Box, CssBaseline, List, ListItem, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import CreateProductForm from './Component/CreateProductForm';
import { CustomersTable } from './Component/CustomersTable';
import AdminDashboard from './Component/Dashboard';
import OrdersTable from './Component/OrdersTable';
import ProductsTable from './Component/ProductsTable';

const menu = [
  {name:"Dashboard",path:"/admin",icon:<DashboardIcon/>},
  {name:"Products",path:"/admin/products",icon:<DashboardIcon/>},
  {name:"Customer",path:"/admin/customers",icon:<DashboardIcon/>},
  {name:"Orders",path:"/admin/orders",icon:<DashboardIcon/>},
  {name:"AddProduct",path:"/admin/products/create",icon:<DashboardIcon/>}
]

const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible,setSideBarVisible] = useState(false);
  const navigate = useNavigate();


  const drawer = (
    <Box 
    sx={{
      overflow:"auto",
      display:"flex",
      flexDirection:"column",
      justifyContent:"space-between",
      height:"100%"
    }}
    >
      {/* {isLargeScreen && <Toolbar/>} */}
      <List>
        {menu.map((item,index)=> <ListItem key={item.name} disablePadding onClick={()=>navigate(item.path)}>
          <ListItemButton>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText>
              {item.name}
            </ListItemText>

          </ListItemButton>
        </ListItem>)}
      </List>
      <List>
        <ListItem disablePadding onClick={()=>navigate('/admin/profile')}>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon/>
            </ListItemIcon>
            <ListItemText>
              Account
            </ListItemText>

          </ListItemButton>
        </ListItem>
      </List>

    </Box>
  )

  return (
    <div>
      
      <div className='flex h-[100vh]'>
        <CssBaseline/>

        <div
        className='w-[15%] border border-r-gray-300 h-full fixed shadow-lg shadow-gray-600' 
          variant='permanent'
          sx={{
            height:"100vh",
            width:240,
            flexShrink:0
          }}
          // anchor={anchor}
          // open={state[anchor]}
          // onClose={toggleDrawer(anchor, false)}
        >
          {drawer}
        </div>

        <div className='w-[85%] ml-[15%]'>

          <Routes>

          <Route path='/' element={<AdminDashboard/>}></Route>
          <Route path='/products' element={<ProductsTable/>}></Route>
          <Route path='/customers' element={<CustomersTable/>}></Route>
          <Route path='/orders' element={<OrdersTable/>}></Route>
          <Route path='/products/create' element={<CreateProductForm/>}></Route>

          </Routes>

        </div>


      </div>

    </div>
  )
}

export default Admin