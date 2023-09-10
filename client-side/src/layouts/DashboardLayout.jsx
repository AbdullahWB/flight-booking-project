import { Outlet } from 'react-router-dom'
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import TopNav from '../Dashboard/DashboardShared/TopNav/TopNav';
import { useState } from 'react';
import Loading from '../Loading/Loading';
import useAuth from '../hooks/useAuth';

const DashboardLayout = () => {
  const { loading } = useAuth()
  console.log(loading);
  const [isActive, setActive] = useState('false')
  // const [isLoading, setLoading] = useState(false)
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }

  return (
    <>
      {
        loading ? (
          <Loading />
        ) : (
          <div className='relative min-h-screen md:flex'>
            <Sidebar
              isActive={isActive}
            />
            <div className='flex-1 md:ml-64 bg-[#fffafa]'>
              <TopNav
                handleToggle={handleToggle}
              />
              <div className='p-5'>
                <Outlet />
              </div>
            </div>
          </div>
        )
      }
    </>
  );
};

export default DashboardLayout;
