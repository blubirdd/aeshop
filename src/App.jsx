import React, { useEffect, useContext  } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/layouts/Navbar';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Notification from './components/others/Notification';
import { ShopContext } from './context/ShopContext';

import Home from './pages/Home';
import Category from './pages/Category';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
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

    //intiaizlie aos
    useEffect(() => {
      AOS.init();
    }, []);
  

  const { notifications, removeNotification } = useContext(ShopContext);

  return (
    <>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toys" element={<Category category="Toys" />} />
        <Route path="/historical" element={<Category category="Historical" />} />
        <Route path="/art" element={<Category category="Art" />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productID" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />

      <div className="notification-container fixed bottom-4 right-4 space-y-2">
        {notifications.map((message, index) => (
          <Notification key={index} id={index} message={message} removeNotification={removeNotification} />
        ))}
      </div>
{/* 
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes> */}

    </>
  )
}

export default App
