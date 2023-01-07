import React from "react";

const Preference = () => {
  return (
    <div className="flex justify-center items-center pt-8">
      <div className="flex flex-col p-6 rounded-md sm:p-10 bg-white text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Set your preference</h1>
        </div>
        <form
          onSubmit=""
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid border p-6 rounded-md sm:p-10 border-gray-200"
        >
          <div className="space-y-4">
            <label className="block mb-2 text-sm  ">Currently looking for</label>
            <select className="select w-full border border-gray-300 text-gray-500 ">
              <option>Internship</option>
              <option>Job</option>
            </select>
          </div>
          <div>
            <div className="flex items-center">
              <input type="checkbox" className="checkbox mr-2 checkbox-info" />
              <label>In Office</label>
            </div>
            <div className="flex items-center mt-2">
              <input type="checkbox" className="checkbox mr-2 checkbox-info" />
              <label>Remote</label>
            </div>
          </div>
           <div className="mr-2 w-full">
                <label htmlFor="email" className="block mb-2 text-sm ">
                  Field of interest
                </label>
                <div className="">
                    <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Select your 1st preference"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 mb-2 focus:outline-info  text-gray-900"
                  data-temp-mail-org="0"
                />
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Select your 1st preference"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 mb-2 focus:outline-info  text-gray-900"
                  data-temp-mail-org="0"
                />
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Select your 1st preference"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-info  text-gray-900"
                  data-temp-mail-org="0"
                />
                </div>
              </div>
               <div className="text-right mr-0">
            
        
               <button className="w-1/4">
              <label
                htmlFor="signin-modal"
                className="px-8 py-3 font-semibold rounded-md bg-info hover:bg-sky-600 text-center w-full  hover:text-white text-gray-100 mr-0"
                type="submit"
              >
                Save
              </label>
            </button>
    
          </div>
        </form>
      </div>
    </div>
  );
};

export default Preference;
