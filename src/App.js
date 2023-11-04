 

import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Shop from './Pages/Shop.js';
import LogininSignUp from './Pages/LoginSignUp.js';
import Favorites from './Pages/Favorites.js';
import Cart from './Pages/Cart.js';

function App() {
  return (
   <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Shop />}/>
        <Route path='/login' element={<LogininSignUp />}/>
        <Route path='/favorites' element={<Favorites />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
   </>
  );
}

export default App;
