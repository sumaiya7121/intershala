import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineLineChart } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { BsShare } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";
import { BsHouseDoor } from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";
import { MdHourglassEmpty } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";

const InternshipCard = ({ category }) => {
  const {
    _id,
    internshipname,
    Companyname,
    location,
    ctc,
    posted,
    description,
    about,
    specification,
    eligibility,
    salary,
    openings,
  } = category;
  return (
    <div>
      <div className="card w-full mb-5 bg-base-100 shadow-xl">

        <div className="card-body">
       <div className="flex justify-center items-center mb-12">
           <h2 className="text-2xl text-gray-800 ">10 total jobs</h2>
          <h2 className="text-xl"><IoIosArrowDropdown></IoIosArrowDropdown></h2>
       </div>
          <div className="flex justify-between">
            <div className="flex justify-between">
              <div className="border flex border-gray-300 rounded-md justify-between items-center pl-3 pr-3 pt-1 pb-1 mr-2">
                <span className="text-2xl pr-2 text-blue-500">
                  <AiOutlineLineChart></AiOutlineLineChart>
                </span>
                <span className="text-lg">Actively hiring</span>
              </div>
              <div className="border border-blue-500 flex justify-between items-center pl-3 pr-3 pt-1 pb-1 bg-blue-50 rounded-md ">
                <span className="text-2xl pr-2 text-blue-500">
                  <MdVerified></MdVerified>
                </span>
                <span className="text-lg">Actively hiring</span>
              </div>
            </div>
            <div className="flex justify-center items-center text-2xl text-blue-500 pr-2">
              <h2 className="pr-2">
                <CiBookmark></CiBookmark>
              </h2>
              <h2>
                <BsShare></BsShare>
              </h2>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-700">
                {internshipname}
              </h2>
              <p className="text-md text-gray-700">{Companyname}</p>
            </div>
            <div>
              <p className="text-2xl">logo</p>
            </div>
          </div>
          <div className="flex items-center text-gray-600 mt-3">
            <h2 className="text-md">
              <BsHouseDoor></BsHouseDoor>
            </h2>
            <h2 className="ml-2">Work from home</h2>
          </div>

          <div className="flex mt-3">
            <div>
              <div className="flex items-center mr-8 text-gray-500">
                <h2 className="text-lg pr-2">
                  <AiOutlineFieldTime></AiOutlineFieldTime>
                </h2>
                <h2>Start Date</h2>
              </div>
              <h2 className="text-gray-600">Immediately</h2>
            </div>
            <div >
              <div className="flex items-center mr-8 text-gray-500">
                <h2 className="text-lg pr-2">
                  <MdHourglassEmpty></MdHourglassEmpty>
                </h2>
                <h2>Applied by</h2>
              </div>
              <h2 className="text-gray-600">29 Jan’ 23</h2>
            </div>
            <div>
              <div className="flex items-center mr-8 text-gray-500">
          
                <h2  className="text-lg pr-2">
                  <FaRegMoneyBillAlt></FaRegMoneyBillAlt>
                </h2>
                <h2>CTC</h2>
              </div>
              <h2 className="text-gray-600">$ 7 - 15 LPA</h2>
            </div>
          </div>

          <div className="flex mt-3">
            <div className="bg-gray-200 pl-2 pr-2 rounded-md mr-3 flex items-center">
              <h2> <AiOutlineFieldTime></AiOutlineFieldTime></h2>
            <h2>3 days ago</h2>
            </div>
            <div  className="bg-gray-200 pl-2 pr-2 rounded-md mr-3 flex items-center">
              <h2>
                Fresher Job
              </h2>
            </div>
          </div>

            <div className="divider"></div> 

          <div className="card-actions justify-end">
            <Link to={`/internship/${_id}`}>
              <button className="btn btn-outline btn-info">View details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipCard;
