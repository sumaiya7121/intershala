import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
const FilterSearch = () => {
  return (
    <div className="form-control w-full max-w-xs border p-6 shadow-lg ">
      <div>
        
        <label className="label">
          <span className="label-text text-lg">Category</span>
        </label>
        <input
          type="text"
          placeholder="e.g. Marketing"
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text text-lg">Location</span>
        </label>
        <input
          type="text"
          placeholder="e.g. Oxford"
          className="input input-bordered w-full max-w-xs"
        />
        <div className="form-control">
          <label className="label cursor-pointer">
            <input type="checkbox" className="checkbox" />
            <span className="label-text">Work From Home</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input type="checkbox" className="checkbox" />
            <span className="label-text">Fresher job</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input type="checkbox" className="checkbox" />
            <span className="label-text">Show only 3LPA+</span>
          </label>
        </div>
        <div className="form-control ">
          <label className="label cursor-pointer">
            <input type="checkbox" className="checkbox" />
            <span className="label-text">
              Include all internships matching filters
            </span>
          </label>
        </div>
      </div>
      <div>
        <h2 className="text-right font-semibold text-blue-500 text-md">Clear All</h2>
      </div>
      <div className="divider">OR</div>
       <div className="flex">
        <div>
          <h1 className="pb-2">Location</h1>
          <div className="flex">
            
            <input
              type="text"
              placeholder="What are you looking for?"
              className="border-2 border-gray-300 w-56 h-14 pl-4 input-info hover:border-gray-700 rounded-l-lg"
            />
           <div className="bg-blue-500 w-12 rounded-r-lg"> <AiOutlineSearch className="h-8 w-8 text-white mt-3 ml-2 pl-2 border-1 m"></AiOutlineSearch></div>
          </div>
        </div>
        <div className=" "></div>
      </div>
    </div>
  );
};

export default FilterSearch;
