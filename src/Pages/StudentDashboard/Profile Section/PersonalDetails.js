import React from "react";
import { Link } from "react-router-dom";

const PersonalDetails = () => {
  return (
    <div className="flex justify-center items-center pt-8">
      <div className="flex flex-col p-6 rounded-md sm:p-10 bg-white text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Personal details</h1>
        </div>
        <form
          onSubmit=""
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid border p-6 rounded-md sm:p-10 border-gray-200"
        >
          <div className="space-y-4">
            <div className="flex w-full ">
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
                  Last Name<span>(Optional)</span>
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

            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                required
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email Here"
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
            <fieldset className="w-full space-y-1 dark:text-gray-100">
              <label for="files" className="block text-sm font-medium">
                Upload picture
              </label>
              <div className="flex">
                <input
                  type="file"
                  name="files"
                  id="files"
                  className="px-8 py-12 border-2 border-dashed rounded-md"
                />
              </div>
            </fieldset>
            <select className="select border border-gray-300 w-full text-gray-500">
              <option disabled selected className="text-gray-500">
                Select
              </option>
              <option className="text-gray-500">Male</option>
              <option className="text-gray-500">Female</option>
            </select>
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
          <div>
            <h2>Location</h2>
            <p>Please enter the location where you currently live</p>
            <input
              required
              type="text"
              name="email"
              id="email"
              placeholder="Current city"
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-info text-gray-900"
              data-temp-mail-org="0"
            />
          </div>
          <div>
            <h2>Second location (Optional)</h2>
            <p>
              If you study in one location (say Bristol) but are from a
              different location (Say Oxford), fill this to be considered for
              opportunities in both
            </p>
            <input
              required
              type="text"
              name="email"
              id="email"
              placeholder="Second city"
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-info text-gray-900"
              data-temp-mail-org="0"
            />
          </div>
          <div className="text-right mr-0">
            
         <Link to='/preference'>
               <button className="w-1/4">
              <label
                htmlFor="signin-modal"
                className="px-8 py-3 font-semibold rounded-md bg-info hover:bg-sky-600 text-center w-full  hover:text-white text-gray-100 mr-0"
                type="submit"
              >
                Save and Next
              </label>
            </button>
         </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalDetails;
