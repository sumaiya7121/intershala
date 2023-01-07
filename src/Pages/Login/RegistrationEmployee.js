import React from 'react';
import { Link } from 'react-router-dom';

const RegistrationEmployee = () => {
    return (
       <div className="flex justify-center items-center pt-8 mt-0 mb-0 w-full">
      <div className="flex flex-col p-6 rounded-md sm:p-10 bg-white text-gray-900">
        <div className="mb-8 text-center">
          <h1 className=" text-4xl font-bold">Personal details</h1>
        </div>
        <form
          onSubmit=""
          noValidate=""
          action=""
          className="borderrounded-md sm:p-10 border-gray-200"
        >
          <div className="space-y-4">
    
            <div>
              <label htmlFor="email" className=" mb-2 text-sm">
                Official Email Id
              </label>
              <input
                required
                type="email"
                name="email"
                id="email"
                placeholder="name@company_name.com"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-info text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
                <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-info text-gray-900"
              />
            </div>
                <div className="flex ">
              <div className="mr-2 w-1/2">
                <label htmlFor="email" className="block mb-2 text-sm ">
                  First Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="John"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-info  text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="email" className="block mb-2 text-sm">
                  Last Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Doe"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-info  text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
            </div>

          </div>

          <div>
            <h2>Mobile number</h2>
            <div className="flex">
              <input
                type="text"
                name="number"
                id="number"
                required
                placeholder="+91"
                className="w-1/4 px-3 py-2 border rounded-md border-gray-300 focus:outline-info text-gray-900 mr-2"
              />
              <input
                type="text"
                name="number"
                id="number"
                required
                placeholder="Enter your 10 digit mobile number"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-info text-gray-900"
              />
            </div>
          </div>
          
            
               <button className="w-full">
              <label
                htmlFor="signin-modal"
                className="px-8 py-3 font-semibold rounded-md bg-info hover:bg-sky-600 text-center w-full  hover:text-white text-gray-100 mr-0"
                type="submit"
              >
                sign up
              </label>
            </button>
       
          
        </form>
      </div>
    </div>
    );
};

export default RegistrationEmployee;