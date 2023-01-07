import React from 'react';

const InternshipCard = ({card}) => {
    const {name,image} = card;
    return (
        <div className="max-w-xs p-6 rounded-md hover:shadow-md flex flex-col justify-center items-center">
	<img src={image} alt="" className="object-cover object-center w-24 frounded-md dark:bg-gray-500" />
	<div className="mt-6 mb-2">
		<h2 className="text-sm font-semibold tracking-wide">{name}</h2>
	</div>
	
</div>
    );
};

export default InternshipCard;