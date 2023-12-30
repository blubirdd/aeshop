import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Navbar from './components/layouts/Navbar';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

import Home from './pages/Home';
import Category from './pages/Category';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
function App() {

  //PrelineUI reinitialization helper
  const location = useLocation();

  useEffect(() => {
    import('preline/preline');
  }, []);

  useEffect(() => {
    // @ts-ignore
    HSStaticMethods.autoInit();
  }, [location.pathname]);


  return (
    <>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/toys" element={<Category category="Toys" />} />
        <Route path="/historical" element={<Category category="Historical" />} />
        <Route path="/art" element={<Category category="Art" />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productID" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
