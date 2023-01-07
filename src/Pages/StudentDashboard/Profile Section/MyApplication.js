import React from 'react';


const MyApplication = () => {
    return (
        <div>
       <div className="overflow-x-auto ">
  <table className="lg:table w-full hidden">

    <thead>
      <tr>
        <th>COMPANY</th>
        <th>PROFILE</th>
        <th>APPLIED ON</th>
        <th>APPLICATION STATUS</th>
        <th>REVIEW APPLICATION</th>
      </tr>
    </thead>
    <tbody>

      <tr className="hover">
        <th>HELLO</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
        <td>Purple</td>
      </tr>

    </tbody>
 ,  </table>
</div>
<div className='lg:hidden flex flex-row'>
<div className="card w-full ml-4 mr-4 mt-4 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Company Name</h2>
    <p>Position</p>
    <div className="card-actions flex justify-between">
      <h2>Not selected </h2>
      <h2> 140 applicants </h2>
      <h2>Applied on 20 Dec'22</h2>
    </div>
  </div>
</div>  
</div>
  
        </div>
    );
};

export default MyApplication;