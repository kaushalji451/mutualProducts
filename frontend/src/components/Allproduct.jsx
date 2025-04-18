import React from "react";
import { Link } from "react-router-dom";
const Allproduct = ({name,title,description,id}) => {
  return (
    <>
      <Link
        to={name}
        className="flex max-md:flex-col max-md:gap-5 border-t text-[#995c56] min-lg:py-10 py-6 cursor-pointer"
      >
        <div className=" flex items-center max-md:w-full  w-1/2 max-sm:gap-2 gap-6">
          <div className="flex items-center justify-between">
            <p className="font-semibold">{id}.</p>
          </div>
          <h1 className="w-full font-semibold max-sm:text-2xl text-3xl">
            {title}
          </h1>
        </div>
        <div className=" flex items-center max-md:w-full w-2/3 justify-between px-6">
          <p className="">{description}</p>
        </div>
      </Link>
    </>
  );
};

export default Allproduct;
