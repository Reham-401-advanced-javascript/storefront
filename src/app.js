import React from 'react';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Categories from './components/category.js';
import Products from './components/product.js';
import './app.scss';
function App() {
  return (
    <>
      

      <Header />
      <Categories />
      <Products />
      <Footer />
      

    </>
  );
}

export default App;
