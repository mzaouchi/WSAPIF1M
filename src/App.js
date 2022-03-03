
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import ListUsers from './Components/ListUsers';
import NavbarUser from './Components/NavbarUser';
import PrivateRoute from './Components/PrivateRoute';
import User from './Components/User';

function App() {
  const [auth,setAuth] = useState(false)
  return (
    <div>
        <NavbarUser auth={auth} setAuth={setAuth}/>

       <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/users' element={<PrivateRoute auth={auth}><ListUsers/></PrivateRoute>}/>
            <Route path='/users/:id' element={<PrivateRoute auth={auth}><User/></PrivateRoute>}/>
       </Routes>
    </div>
  );
}

export default App;
