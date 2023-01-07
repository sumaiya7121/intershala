import React, { useEffect, useState } from 'react';
import InternshipCard from './InternshipsCard';
import { FiFilter } from 'react-icons/fi';
import FilterSearch from './FilterSearch';

const Internships = () => {
  const [categories, setCategories]= useState([]);
  useEffect(()=>{
    fetch('http://localhost:8000/internship')
    .then(res=>res.json())
    .then(data=>setCategories(data))
  },[])

    return (
        <div className='md:flex justify-center gap-10 px-6 md:px-10 lg:px-20'>
           <div>
             <div className='mt-6 grid '>
              <div className='flex items-center justify-center mb-4'>
                 <h2 className='text-2xl text-blue-500'> <FiFilter></FiFilter></h2>
                  <h2 className='text-2xl'>Filters</h2>
              </div>
                <FilterSearch></FilterSearch>
            
            </div>
           </div>
           <div className='flex-1 mt-5 mb-5'>
         {
          categories.map(category=><InternshipCard key={category._id}
          category={category}></InternshipCard>)
         }

           </div>
          

            </div>
      
    );
};

export default Internships;