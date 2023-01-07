import React from 'react';
import CoursesCard from './CoursesCard';
import course from '../../assets/course1.jpg'

const Courses = () => {
const cardInfo = [
    {
        id:1,
        name:'Full Stack Development Course',
        description:'With guaranteed internship',
        time:'6-month course',
        price:'Highest stippend offered',
        opportunities:'1.o8 Lac+ job/internship opportunities',
        image:course
    },
    {
        id:2,
        name:'Full Stack Development Course',
        description:'With guaranteed internship',
        time:'6-month course',
        price:'Highest stippend offered',
        opportunities:'1.o8 Lac+ job/internship opportunities',
         image:course
    },
    {
        id:3,
        name:'Full Stack Development Course',
        description:'With guaranteed internship',
        time:'6-month course',
        price:'Highest stippend offered',
        opportunities:'1.o8 Lac+ job/internship opportunities',
         image:course
    },
    {
        id:4,
        name:'Full Stack Development Course',
        description:'With guaranteed internship',
        time:'6-month course',
        price:'Highest stippend offered',
        opportunities:'1.o8 Lac+ job/internship opportunities',
         image:course
    },
    {
        id:5,
        name:'Full Stack Development Course',
        description:'With guaranteed internship',
        time:'6-month course',
        price:'Highest stippend offered',
        opportunities:'1.o8 Lac+ job/internship opportunities',
         image:course
    },
    {
        id:6,
        name:'Full Stack Development Course',
        description:'With guaranteed internship',
        time:'6-month course',
        price:'Highest stippend offered',
        opportunities:'1.o8 Lac+ job/internship opportunities',
        image:course

    }
    
]

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
            {
cardInfo.map(card=> <CoursesCard
key={card.id}
card={card}
>

</CoursesCard>)

            }
            
        </div>
    );
};

export default Courses;