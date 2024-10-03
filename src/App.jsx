import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Services from './components/Services';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import HomeScreen from './screen/HomeScreen';

const App = () => {
  return (
    <div className="flex overflow-hidden flex-col items-center bg-white">
      <HomeScreen />
    </div>
  );
};

export default App;
