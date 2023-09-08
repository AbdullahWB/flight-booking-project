import React from 'react';
import { HiReceiptRefund } from 'react-icons/hi';
import { SlOptionsVertical } from 'react-icons/sl';

const TotalRefund = () => {
    return (
        <div className='bg-white shadow-md p-7 rounded-lg flex justify-between items-center'>
            <div className='flex items-center gap-10'>
                <div className='border-[#CD6688] border-4 bg-[rgba(205,102,136,0.36)] w-16 h-16 rounded-full justify-center items-center flex'>
                    <HiReceiptRefund className='text-white text-4xl font-bold' />
                </div>
                <div>
                    <h1 className='lg:text-2xl font-light text-gray-600'>Total Refund Ticket</h1>
                    <p className='text-[#96a3c4] lg:text-3xl text-xl font-semibold mt-4'>10 times</p>
                </div>
            </div>
            <div>
                <button>
                    <SlOptionsVertical className='text-gray-400 text-xl font-bold mt-1' />
                </button>
            </div>
        </div>
    );
};

export default TotalRefund;