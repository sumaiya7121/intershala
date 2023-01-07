import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { AiOutlineSearch } from "react-icons/ai";

export default function ComboBox() {
  return (
    <div className="lg:flex lg:justify-center hidden md:hidden">
      <div className="m-10">
        <h1 className="pb-2">Location</h1>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          className="bg-white input-info"
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="select" />}
        />
      </div>
      <div className="m-10">
        <h1 className="pb-2">Category</h1>
        <Autocomplete
          className="bg-white"
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="select" />}
        />
      </div>
      <div className="m-10 flex">
        <div>
          <h1 className="pb-2">Location</h1>
          <div className="flex">
            
            <input
              type="text"
              placeholder="What are you looking for?"
              className="border-2 border-gray-300 w-96 h-14 pl-4 input-info hover:border-gray-700 rounded-l-lg"
            />
           <div className="bg-blue-500 w-12 rounded-r-lg"> <AiOutlineSearch className="h-8 w-8 text-white mt-3 ml-2 pl-2 border-1 m"></AiOutlineSearch></div>
          </div>
        </div>
        <div className=" "></div>
      </div>
    </div>
  );
}

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
];
