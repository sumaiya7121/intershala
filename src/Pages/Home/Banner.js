import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/img-01.png';


const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={img} className="rounded-lg lg:w-1/2" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Fresher Jobs!</h1>
                    <p className="py-6">Apply to premium fresher jobs for free or get an premium internship.</p>
                    <Link to='/signup'><button className='btn btn-info'>Getting Started</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;