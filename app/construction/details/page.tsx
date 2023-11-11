
import React from "react";
import Link from "next/link";
import { CustomButton } from "@/app/components"; 

const Details = () => {
  return (
    <div className="hero flex justify-center items-center ">
      <div className="flex flex-col justify-center items-center  pt-36 padding-x pb-36">
        <h1 className="hero__title">Still, there is nothing.</h1>
        <Link href="/" className="rounded-full border-2 ">
        <CustomButton title="Go Back" btnType="button" containerStyles="text-primary-blue rounded-full bg-white min-w-[130px] "/>
            </Link>
      </div>
    </div>
  );
};

export default Details;
