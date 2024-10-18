import React from 'react';
import HomeSlider from '../../assets/components/HomeSlider/HomeSlider';
import Categories from '../../assets/components/Categories/Categories';
import OurWork from '../../assets/components/OurWork/OurWork';
import OurProduct from '../../assets/components/OurProduct/OurProduct';

const Homepage = () => {
  return (
    <div className="Homepage">
      <HomeSlider />
      <Categories />
      <OurProduct />
      <OurWork />
      
    </div>
  );
};

export default Homepage;
