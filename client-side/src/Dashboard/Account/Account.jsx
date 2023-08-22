import React from 'react';
import useAuth from '../../hooks/useAuth';

const Account = () => {
    const { user } = useAuth()
    return (
        <div>
            <div className='bg-white p-5 rounded-xl'>
                <h1 className='text-[22px] font-semibold text-gray-900 capitalize'><span className='text-[24px] font-bold'>{user?.displayName}</span>'s AirBliss Account</h1>
            </div>
            <div className='grid grid-cols-3 gap-8 mt-8'>
                <div className='bg-white col-span-1 py-[50px] px-[30px] rounded-xl'>
                    <div>
                        <img
                            src={
                                user?.photoURL
                                    ? user?.photoURL
                                    : "https://i.ibb.co/Ws1r9fp/images.png"
                            }
                            alt={user.displayName}
                            className='w-[200px] h-[200px] rounded-full mx-auto'
                        />
                        <h1 className='text-[32px] font-semibold text-gray-900 capitalize mt-9 text-center'>{user?.displayName}</h1>
                    </div>
                    <div className='mt-12 px-[20px]'>
                        <h1 className='text-2xl font-medium text-[#333]'>About</h1>
                        <p className='text-[#999] mt-2'>Hello I am Dr. Johirul Islam Nishat a Teacher in Job Task E-learning Platform. I love to study with all my Team and professors.</p>
                    </div>
                    <div className='grid grid-cols-2 px-[20px] mt-12'>
                        <div>
                            <h1 className='text-2xl font-medium text-[#333]'>Age</h1>
                            <p className='text-[#999] mt-2'>17</p>
                        </div>
                        <div>
                            <h1 className='text-2xl font-medium text-[#333]'>Gender</h1>
                            <p className='text-[#999] mt-2'>Male</p>
                        </div>
                    </div>
                    <div className='mt-12 px-[20px]'>
                        <h1 className='text-2xl font-medium text-[#333]'>Date Of Birth</h1>
                        <p className='text-[#999] mt-2'>02/05/2006</p>
                    </div>
                </div>
                <div className='bg-white col-span-2 py-[50px] px-[30px] rounded-xl'>hello</div>
            </div>
        </div>
    );
};

export default Account;