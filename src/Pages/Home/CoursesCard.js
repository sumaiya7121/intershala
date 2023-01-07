import React from 'react';

const CoursesCard = ({card}) => {
    const {name, description, time, opportunities,price, image} =card
    return (
       <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
	<img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
	<div className="mt-6 mb-2">
		<span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">{name}</span>
		<h2 className="text-xl font-semibold tracking-wide">{description}</h2>
	</div>
	<div>
        <div>
            <p>{opportunities}</p>
        </div>
        <div>
            <p>{time}</p>
        </div>
          <div>
            <p>{price}</p>
        </div>
    </div>
   
</div>
    );
};

export default CoursesCard;