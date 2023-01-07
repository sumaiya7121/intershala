import React from 'react';
import Header from '../../assets/Header.png';
import HeaderImage from '../../assets/HeaderImage.jpg'
import RegistrationEmployee from '../../Pages/Login/RegistrationEmployee';

const HeaderSection = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100 mb-0 ">
	<div className="container flex flex-col-reverse justify-center p-6 mx-auto sm:py-12 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 items-b">
			<img  src={Header}  alt=''/>
		</div>
		<div className="flex flex-col p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left items-end">
		<div>
            <form>
                <div>
                    <RegistrationEmployee></RegistrationEmployee>
                </div>
            </form>
        </div>
		</div>
	</div>
</section>
    );
};

export default HeaderSection;


