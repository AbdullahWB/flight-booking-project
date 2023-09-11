import React from "react";
import { RiRefundFill } from "react-icons/ri";
import { SlOptionsVertical } from "react-icons/sl";

const PendingRefundAmount = () => {
  return (
    <div className="bg-white shadow-md p-7 rounded-lg flex justify-between items-center">
      <div className="flex items-center gap-6">
        <div className="border-[#42C2FF] border-4 bg-[rgba(66,195,255,0.37)] w-16 h-16 rounded-full justify-center items-center flex">
          <RiRefundFill className="text-white text-4xl font-bold" />
        </div>
        <div>
          <h1 className="lg:text-xl font-light text-gray-900">
            Pending Refund Amount
          </h1>
          <p className="text-gray-900 lg:text-2xl text-xl font-semibold mt-2">
            100$
          </p>
        </div>
      </div>
      <div>
        <button>
          <SlOptionsVertical className="text-gray-400 text-xl font-bold mt-1" />
        </button>
      </div>
    </div>
  );
};

export default PendingRefundAmount;
