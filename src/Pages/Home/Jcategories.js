import React from 'react';
import img1 from '../../assets/c1.png'
import img2 from '../../assets/c2.png'
import img3 from '../../assets/c3.png'
import img4 from '../../assets/c4.png'
import img5 from '../../assets/c5.png'
import img6 from '../../assets/c6.png'
import img7 from '../../assets/c7.png'
import img8 from '../../assets/c8.png'
import InternshipCard from './InternshipCard';

import { BsArrowRight } from 'react-icons/bs';
const Internship = () => {
    const InfoCards=[

{
    id:1,
    name:'Part-time',
    image:img1

},
{
    id:2,
    name:'Engineering',
    image:img2

},
{
    id:3,
    name:'NGO',
    image:img3

},

{
    id:4,
    name:'Business',
    image:img4

},
{
    id:5,
    name:'Design',
    image:img5

},
{
    id:6,
    name:'Science',
    image:img6

},
{
    id:7,
    name:'Media',
    image:img7

},
{
    id:8,
    name:'Humanities',
    image:img8

}

    ]


    
    return (
     <div className='mt-8 m-8'>

          <h2 className='text-center mb-12 text-2xl'>Popular cities</h2>
           <div className='grid lg:grid-cols-8 md:grid-cols-4 grid-cols-2 gap-4 ml-3 mr-3'>
            {
                InfoCards.map(card => <InternshipCard key={card.key}
                card={card}>

                </InternshipCard>)
            }
        </div>
        <div className='flex flex-row justify-center text-center'>
            <h2 className='text-xl text-cyan-600'>View all Jobs</h2>
            <h2 className='flex items-center pl-2 pt-1 text-cyan-600 text-xl'><BsArrowRight/></h2>
        </div>
     </div>
    );
};

export default Internship;