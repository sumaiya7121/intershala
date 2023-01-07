import React from "react";
import { toast } from "react-hot-toast";

const ApplyModal = () => {
  const handleModal = (e) => {
    e.preventDefault();
    const form = e.target;
    const coverletter = form.coverletter.value;
    const available = form.available.value;

    const application = {
      coverletter,
      available,
    };

    fetch("http://localhost:8000/apply", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(application),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Application submitted");
      });
  };

  return (
    <>
      <input type="checkbox" id="apply-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="apply-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleModal}>
            <p className="py-4 text-xl font-semibold">Cover Letter</p>
            <textarea
              name="coverletter"
              className="textarea textarea-bordered w-full"
              placeholder="Write your cover letter here"
            ></textarea>
            <h2 className="text-xl font-semibold mt-4">Your Availability</h2>
     
            <div>
              {" "}
              <select
                name="available"
                className="select select-bordered w-full mb-3"
              >
                <option disabled selected>
                  Select your availability
                </option>
                <option>I am available for 3 months</option>
                <option>I am available for 6 months</option>
                <option>I am available for 2 months</option>
                <option>I am not available for 6 months</option>
              </select>
            </div>
            <button className="btn btn-info">
              <input className="w-full input-bordered" type="submit"></input>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ApplyModal;
