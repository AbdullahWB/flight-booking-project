import React, { useEffect, useState } from 'react';
import UseAxiosSecure from '../hooks/UseAxiosSecure';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Loading/Loading';

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation();
    const [users, setUsers] = useState([]);
    const [axiosSecure] = UseAxiosSecure();
    const [isLoadingData, setIsLoadingData] = useState(true); // Add loading state

    useEffect(() => {
        axiosSecure
            .get("/users")
            .then((response) => {
                setUsers(response?.data);
                setIsLoadingData(false); // Data has arrived, set loading to false
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setIsLoadingData(false); // Handle error and set loading to false
            });
    }, [axiosSecure]);

    const currentUser = users.find((userData) => userData?.email === user?.email);
    console.log(currentUser);

    const isAdmin = currentUser?.role === "admin";

    if (loading || isLoadingData) { // Display loading when loading or fetching data
        return <Loading />
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;
