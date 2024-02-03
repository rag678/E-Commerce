import { Route, Routes } from 'react-router-dom';
import './App.css';
import CustomerRouters from './Routers/CustomerRouters';
import AdminRouters from './Routers/AdminRouters';
// import { Home } from '@mui/icons-material';

function App() {
  return (
    <div className="">

      <Routes>
          <Route path='/*' element={<CustomerRouters/>}></Route>
          <Route path='/admin/*' element={<AdminRouters/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
