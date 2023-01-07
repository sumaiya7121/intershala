import React from "react";
import { useLoaderData } from "react-router-dom";
import ApplyModal from "./Apply/ApplyModal";
import { AiOutlineLineChart } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { BsShare } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";
import { BsHouseDoor } from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";
import { MdHourglassEmpty } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";

const InternshipDetails = () => {
  const internship = useLoaderData();

  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl mt-5">
        <h2 className="text-center font-semibold text-gray-700 text-xl">
          Remote Pre sales Consultant Job at Idea Usher
        </h2>
        <div className="card-body border border-gray-300 m-6 mr-20 ml-20 rounded-md shadow-md">
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
                {internship.internshipname}
              </h2>
              <p className="text-md text-gray-700">{internship.Companyname}</p>
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
            <div>
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
                <h2 className="text-lg pr-2">
                  <FaRegMoneyBillAlt></FaRegMoneyBillAlt>
                </h2>
                <h2>CTC</h2>
              </div>
              <h2 className="text-gray-600">$ 7 - 15 LPA</h2>
            </div>
          </div>

          <div className="flex mt-3">
            <div className="bg-gray-200 pl-2 pr-2 rounded-md mr-3 flex items-center">
              <h2>
                {" "}
                <AiOutlineFieldTime></AiOutlineFieldTime>
              </h2>
              <h2>3 days ago</h2>
            </div>
            <div className="bg-gray-200 pl-2 pr-2 rounded-md mr-3 flex items-center">
              <h2>Fresher Job</h2>
            </div>
          </div>

          <div className="divider"></div>

          <div>
            <h2  className="text-lg mb-1 mt-3 font-semibold text-gray-700">About Idea Usher</h2>
            <p className="text-blue-600 mb-1">www.ideausher.com</p>
            <p>
              Idea Usher is a leading software development and digital marketing
              agency headquartered in Chandigarh and offices in the US, Canada,
              the UK, and Australia. We work with entrepreneurs and help
              businesses gain sustainable competitive advantages through
              effective implementation of technology. We provide services in
              Mobile App Development, ERP Development, and Blockchain
              Development.<br></br> As an organization, we want to work with
              enthusiastic and initiated people who are passionate about
              technology and developing products that solve problems.
            </p>
          </div>
        <div className="border border-gray-200 rounded-md mt-4 p-8">
          <h2 className="text-lg mb-2 text-gray-700 font-semibold">Activity on Internshala</h2>

            <div className="flex items-center">
            <div className="flex items-center mr-6 text-lg text-gray-700">
<AiOutlineCalendar></AiOutlineCalendar>
<h2>Hiring since December 2017</h2>

            </div>
            <div className="flex items-center mr-6 text-lg text-gray-700">
<AiOutlineCalendar></AiOutlineCalendar>
<h2>Hiring since December 2017</h2>

            </div>
            <div className="flex items-center mr-6 text-lg text-gray-700">
<AiOutlineCalendar></AiOutlineCalendar>
<h2>Hiring since December 2017</h2>

            </div>
          </div>

        </div>

        <div>
          <h2  className="text-lg mb-3 mt-3 font-semibold text-gray-700">About the job</h2>
          <p className="mt-3 mb-3 text-gray-700">Key responsibilities</p>
<h2 className="text-gray-700">          1. Talk to leads, understand their requirements, and tell them about the company s offerings and how we can help the client/
prospect<br></br> 2.Prepare cost proposals and interactive presentations for the prospec<br></br>
3. Present the solution to the client and attempt to onboard her with the company<br></br>
4. Create follow up campaigns for the lead<br></br>
5. Work with an understanding of the customers perspective<br></br>
6. Establish and develop positive business with every lead<br></br> 7.Present, promote, and sell products/services using solid arguments to existing and prospective customer<br></br>
8. Work using technical understanding to build customer relationship<br></br>
9.Reach out to customer leads through cold calling or online meetings with a client<br></br>
10. Work and learn tips and tricks of sales to become a pro in IT sale<br></br>
11. Work with an understanding of the software territory/market s potential and status report</h2>
          <p className="mt-3 mb-1 text-gray-700"> Requirements:</p>
<h2 className="text-gray-700">          1. Talk to leads, understand their requirements, and tell them about the company s offerings and how we can help the client/
prospect<br></br> 2.Prepare cost proposals and interactive presentations for the prospec<br></br>
3. Present the solution to the client and attempt to onboard her with the company<br></br>
4. Create follow up campaigns for the lead<br></br>
5. Work with an understanding of the customers perspective<br></br>
6. Establish and develop positive business with every lead<br></br> 7.Present, promote, and sell products/services using solid arguments to existing and prospective customer</h2>
        </div>

        <div>
          <h2 className="text-lg mb-3 mt-3 font-semibold text-gray-700">Skill(s) required</h2>
          <div className="flex mr-6">
            <h2 className="mr-6">English Proficiency (Spoken)</h2>
            <h2>English Proficiency (Written)</h2>
          </div>
        </div>

        <div>
          <h2  className="text-lg mb-3 mt-3 font-semibold text-gray-700">Salary</h2>
          <h2>Annual CTC: 7 15 LPA</h2>
          <h2>Annual CTC: 7 15 LPA</h2>
          <h2>1. Fixed component: 85%</h2>
          <h2>2. Variable component: 10%</h2>
          <h2>3. Other incentives: 5%</h2>
        </div>

<div>
  <div  className="text-lg mb-3 mt-3 font-semibold text-gray-700">Number of openings</div>
  <p>2</p>
</div>
          
        </div>
<div className="card-actions justify-center mb-10">
            <label htmlFor="apply-modal" className="btn bg-blue-600 hover:bg-blue-500 w-2/4 text-white">
              Apply Now
            </label>
            <ApplyModal></ApplyModal>
          </div>

      </div>
    </div>
  );
};

export default InternshipDetails;
