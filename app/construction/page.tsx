import React from "react";
import Link from "next/link";
import { CustomButton } from "../components";
const Construction = () => {
  return (
    <div className="hero flex justify-center items-center ">
      <div className="flex flex-col justify-center items-center  pt-36 padding-x pb-36">
        <h1 className="hero__title">Page under construction...</h1>
        <Link href="/construction/details" className="rounded-full border-2 ">
        <CustomButton title="Details" btnType="button" containerStyles="text-primary-blue rounded-full bg-white min-w-[130px] "/>
            </Link>
      </div>
    </div>
  );
};

export default Construction;
