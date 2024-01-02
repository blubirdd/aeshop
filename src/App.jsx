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

import artifactsBanner from '/banners/artifactsBanner.jpg'
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
    AOS.init();
  }, []);


  const { notifications, removeNotification } = useContext(ShopContext);

  return (
    <>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <div className="max-w-7xl mx-auto">
        <Routes>
          <Route path="/historical" element={<Category category="Historical Artifacts" description="Embark on a journey through time with our captivating historical artifacts. Each piece carries a unique story, connecting you to the fascinating tales of the past." banner={artifactsBanner} />} />
          <Route path="/toys" element={<Category category="Toys and Games" description="Rediscover the joy of play with our diverse Toys and Games collection. From modern board games to timeless classics, find entertainment that sparks laughter and fun for every age." banner={toysBanner} />} />
          <Route path="/art" element={<Category category="Artworks" description="Transform your space with our stunning artworks. From vibrant contemporary prints to timeless paintings, find pieces that speak to your style and elevate your surroundings." banner={artBanner} />} />
          <Route path="/collectibles" element={<Category category="Collectibles" description="Explore the extraordinary in our diverse collectibles collection. Discover unique items that add character and charm to your life." banner={collectiblesBanner} />} />
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
      </div>
    </>
  )
}

export default App
