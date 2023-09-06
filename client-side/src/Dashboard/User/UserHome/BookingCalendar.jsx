import React from 'react';
import { SlOptionsVertical } from 'react-icons/sl';

const BookingCalendar = () => {
    return (
        <div className='bg-white shadow-md p-6 rounded-lg'>
            <div className='flex justify-between mb-10'>
                <h1 className='text-2xl font-light text-gray-600'>Booking Calendar</h1>
                <button>
                    <SlOptionsVertical className='text-gray-400 text-xl font-bold mt-1' />
                </button>
            </div>
        </div>
    );
};

export default BookingCalendar;