import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

const Details = () => {
  return (
    <div className="border border-gray-300 m-16 rounded p-10 text-gray-700">
      <div>
        <div className="flex justify-evenly">
          <h2>EDUCATION</h2>
         <div className="flex justify-evenly"> 
         <div >
            <h2 className="font-semibold ">Lorem ipsum dolor sit</h2>
            <p>Lorem ipsum dolor sitipsumipsum</p>
            <p>Consectetur adipiscing</p>
            <p>Dec 2022 Dec 2022</p>


          </div>
            <div className="flex text-blue-500 text-xl">
              <h2 className="mr-3 ">
                <FiEdit2></FiEdit2>
              </h2>
              <h2>
                <AiOutlineDelete></AiOutlineDelete>
              </h2>
            </div>
        </div></div>
      </div>
  
    
     <hr className="border border-bottom border-gray-400 mt-3"></hr>












      <div className="mb-3">
        <div>
          <h2>EDUCATION</h2>
        </div>
        <div>
          <div className="flex justify-between text-lg">
            <h2 className="font-semibold ">Lorem ipsum dolor sit</h2>
            <div className="flex text-blue-500">
              <h2 className="mr-3 ">
                <FiEdit2></FiEdit2>
              </h2>
              <h2>
                <AiOutlineDelete></AiOutlineDelete>
              </h2>
            </div>
          </div>
          <p>Lorem ipsum dolor sitipsumipsum</p>
          <p>Consectetur adipiscing</p>
          <p>Dec 2022 Dec 2022</p>
        </div>
        <div className="mb-3">
          <div className="flex justify-between text-lg">
            <h2 className="font-semibold ">Lorem ipsum dolor sit</h2>
            <div className="flex text-blue-500">
              <h2 className="mr-3 ">
                <FiEdit2></FiEdit2>
              </h2>
              <h2>
                <AiOutlineDelete></AiOutlineDelete>
              </h2>
            </div>
          </div>
          <p>Lorem ipsum dolor sitipsumipsum</p>
          <p>Consectetur adipiscing</p>
          <p>Dec 2022 Dec 2022</p>
        </div>
        <div className="mb-3">
          <div className="flex justify-between text-lg">
            <h2 className="font-semibold ">Lorem ipsum dolor sit</h2>
            <div className="flex text-blue-500">
              <h2 className="mr-3 ">
                <FiEdit2></FiEdit2>
              </h2>
              <h2>
                <AiOutlineDelete></AiOutlineDelete>
              </h2>
            </div>
          </div>
          <p>Lorem ipsum dolor sitipsumipsum</p>
          <p>Consectetur adipiscing</p>
          <p>Dec 2022 Dec 2022</p>
        </div>
        <div className="flex items-center text-lg text-blue-500 mb-2">
          <h2 className="mr-1">
            <AiOutlinePlus></AiOutlinePlus>
          </h2>
          <h2>Add education</h2>
        </div>
      </div>
      <hr className="border border-bottom border-gray-400 mt-3"></hr>

      <div className="mb-3 mt-3">
        <div className="flex justify-between text-lg">
          <h2 className="font-semibold ">Lorem ipsum dolor sit</h2>
          <div className="flex text-blue-500">
            <h2 className="mr-3 ">
              <FiEdit2></FiEdit2>
            </h2>
            <h2>
              <AiOutlineDelete></AiOutlineDelete>
            </h2>
          </div>
        </div>
        <p>Lorem ipsum dolor sitipsumipsum</p>
        <p>Consectetur adipiscing</p>
        <p>Dec 2022 Dec 2022</p>
      </div>
      <div className="flex items-center text-lg text-blue-500 mb-2">
        <h2 className="mr-1">
          <AiOutlinePlus></AiOutlinePlus>
        </h2>
        <h2>Add job</h2>
      </div>
      <hr className="border border-bottom border-gray-400 mt-3"></hr>

      <div className="mb-3 mt-3">
        <div className="flex justify-between text-lg">
          <h2 className="font-semibold ">Lorem ipsum dolor sit</h2>
          <div className="flex text-blue-500">
            <h2 className="mr-3 ">
              <FiEdit2></FiEdit2>
            </h2>
            <h2>
              <AiOutlineDelete></AiOutlineDelete>
            </h2>
          </div>
        </div>
        <p>Lorem ipsum dolor sitipsumipsum</p>
        <p>Consectetur adipiscing</p>
        <p>Dec 2022 Dec 2022</p>
      </div>
      <div className="flex items-center text-lg text-blue-500 mb-2">
        <h2 className="mr-1">
          <AiOutlinePlus></AiOutlinePlus>
        </h2>
        <h2>Add academic project</h2>
      </div>
      <hr className="border border-bottom border-gray-400 mt-3"></hr>

      <div className="mb-3 mt-3">
        <div>
          <div className="flex">
            <div>
              <h2>Skills</h2>
            </div>
            <div>
              <div className="flex justify-between text-lg">
                <h2 className="font-semibold ">Lorem ipsum dolor sit</h2>
                <div className="flex text-blue-500">
                  <h2 className="mr-3 ">
                    <FiEdit2></FiEdit2>
                  </h2>
                  <h2>
                    <AiOutlineDelete></AiOutlineDelete>
                  </h2>
                </div>
              </div>
              <p>Lorem ipsum dolor sitipsumipsum</p>
              <p>Consectetur adipiscing</p>
              <p>Dec 2022 Dec 2022</p>
            </div>
            <div className="flex items-center text-lg text-blue-500 mb-2">
              <h2 className="mr-1">
                <AiOutlinePlus></AiOutlinePlus>
              </h2>
              <h2>Add portfolio/previous work</h2>
            </div>
          </div>
        </div>
      </div>
      <hr className="border border-bottom border-gray-400 mt-3"></hr>

      <div className="flex items-center lg:justify-between lg:flex-row md:flex-row flex-col mt-3 text-lg ">
        <h2>Skills</h2>

        <div className="flex items-center">
          <h2 className="font-semibold  mr-24">Lorem ipsum dolor sit</h2>
          <div className="flex items-center text-blue-500">
            <FiEdit2 className="mr-3"></FiEdit2>
            <AiOutlineDelete></AiOutlineDelete>
          </div>
        </div>
        <div className="flex items-center">
          <h2 className="font-semibold  mr-24">Lorem ipsum dolor sit</h2>
          <div className="flex items-center text-blue-500">
            <FiEdit2 className="mr-3"></FiEdit2>
            <AiOutlineDelete></AiOutlineDelete>
          </div>
        </div>
      </div>

      <hr className="border border-bottom border-gray-400 mt-3"></hr>
    </div>
  );
};

export default Details;
