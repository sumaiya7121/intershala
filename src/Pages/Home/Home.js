import React from 'react';
import Internship from './Internship';
import Categories from './Categories';
import Search from './Search';

import Jobs from './Jobs'
import Jcatagories from './Jcategories'
import SwipperBanner from './SwipperBanner';

const Home = () => {
    return (
        <div>
        
            <Search></Search>
            <SwipperBanner></SwipperBanner>
            <Internship></Internship>
            <Categories></Categories>
           
            <Jobs></Jobs>
            <Jcatagories></Jcatagories>
        
            
        </div>
    );
};

export default Home;