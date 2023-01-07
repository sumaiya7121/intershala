import React from 'react';
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import img5 from '../../assets/img5.png'
import img6 from '../../assets/img6.png'
import img7 from '../../assets/img7.png'
import img8 from '../../assets/img8.png'
import InternshipCard from './InternshipCard';


const Internship = () => {


    const InfoCards=[

{
    id:1,
    name:'Work from home',
    image:img1

},
{
    id:2,
    name:'Manchester',
    image:img2

},
{
    id:3,
    name:'Oxford',
    image:img3

},

{
    id:4,
    name:'Bristol',
    image:img4

},
{
    id:5,
    name:'Edinburgh',
    image:img5

},
{
    id:6,
    name:'Sheffield',
    image:img6

},
{
    id:7,
    name:'Birmingham',
    image:img7

},
{
    id:8,
    name:'Cambridge ',
    image:img8

}

    ]


    
    return (
     <div className='mt-8 m-8'>
        <div className='lg:flex md:flex md:justify-center justify-center mb-6'>
           <div className='text-center '>
             <h2 className='text-3xl font-bold mb-2'>Internships</h2>
            <p >Apply to 10,000+ internships for free</p>
           </div>
        
        </div>
          <h2 className='text-center mb-12 text-2xl'>Popular cities</h2>
           <div className='grid lg:grid-cols-8 md:grid-cols-4 grid-cols-2 gap-4 ml-3 mr-3'>
            {
                InfoCards.map(card => <InternshipCard key={card.key}
                card={card}
               >

                </InternshipCard>)
            }
        </div>
     </div>
    );
};

export default Internship;