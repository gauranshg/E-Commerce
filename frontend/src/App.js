
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { ShopCat } from './Pages/ShopCat';
import { Product } from './Pages/Product';
import { ShopPage } from './Pages/ShopPage';
import { Cart } from './Pages/Cart';
import { Login } from './Pages/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ShopPage/>}/>
        <Route path='/men' element={<ShopCat category="men"/>}/>
        <Route path='/women' element={<ShopCat category="women"/>}/>
        <Route path='/kids' element={<ShopCat category="kids"/>}/>
        <Route path='/products' element={<Product/>}>
          <Route path=':productid' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
