import React, { useEffect, useContext } from 'react';
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
import NotFound from './pages/NotFound';

import techBanner from '/banners/techBanner2.jpg'
import toysBanner from '/banners/toysBanner.jpg'
import artBanner from '/banners/artBanner.jpg'
import collectiblesBanner from '/banners/collectiblesBanner.jpg'
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
    AOS.init({
      disable: function() {
        var maxWidth = 720;
        return window.innerWidth < maxWidth;
      }
    });
  }, []);


  const { notifications, removeNotification } = useContext(ShopContext);

  return (
    <>
      <Navbar />
      <Header />
      <div className="max-w-7xl mx-auto">
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/tech" element={<Category category="Tech & Gadgets" description="Explore cutting-edge and collectible tech treasures. From vintage gadgets to limited edition releases, discover modern marvels that redefine innovation." banner={techBanner} />} />
          <Route path="/toys" element={<Category category="Toys and Games" description="Rediscover the joy of play with our diverse Toys and Games collection. From modern board games to timeless classics, find entertainment that sparks laughter and fun for every age." banner={toysBanner} />} />
          <Route path="/art" element={<Category category="Artworks" description="Transform your space with our stunning artworks. From vibrant contemporary prints to timeless paintings, find pieces that speak to your style and elevate your surroundings." banner={artBanner} />} />
          <Route path="/collectibles" element={<Category category="Collectibles" description="Explore the extraordinary in our diverse collectibles collection. Discover unique items that add character and charm to your life." banner={collectiblesBanner} />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productName" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer />
        <div className="notification-container fixed pointer-events-none bottom-4 right-4 space-y-2">
          {notifications.map((message, index) => (
            <Notification key={index} id={index} message={message} removeNotification={removeNotification} />
          ))}
        </div>
        {/* 
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes> */}
      </div>
    </>
  )
}

export default App
