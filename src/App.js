import logo from './logo.svg';
import './App.css';
import NavBar from './Component/NavBar';
import Home from './Component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetails from './Component/ProductDetails';
import Cart from './Component/Cart';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { reducers } from './Redux/reducer/Index';
import thunk from 'redux-thunk';

function App() {
  const store = createStore(reducers,applyMiddleware(thunk))
  return (
      
    <div className="App">
      <Provider store={store}>
      
      <BrowserRouter>
      <NavBar/>
      <Routes>
     
      <Route path="/" element={<Home/>}/>
      <Route path="/productDetails/:id" element={<ProductDetails/>} />
      <Route path="/cart" element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
      
    </Provider>
      
    </div>
    
  );
}

export default App;
