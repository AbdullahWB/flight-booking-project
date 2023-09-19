import React, { useState } from 'react';
import TableReschedule from './TableReschedule';
import { useSelector } from 'react-redux';
import logo from "../../../assets/icon/airblissBlack.png";

const Reschedule = () => {
    const [isActive, setIsActive] = useState("allflight");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [flightRef, setFlightRef] = useState("");

    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const allBookingData = useSelector((state) => state.userBookingInfo.allBookings);
    const AllReschedule = allBookingData?.filter(booking => booking?.residualStatus != null)
    const Confirmed = AllReschedule?.filter(booking => booking?.residualStatus === "approved")
    const Denied = AllReschedule?.filter(booking => booking?.residualStatus === "denied")
    console.log(AllReschedule);

    const myFlight = AllReschedule?.find(
        (flight) => flight?.bookingReference === flightRef
    );
    console.log(myFlight);

    const paidAmount = myFlight?.flight?.fareSummary?.total;
    const deductedAmount = Math.round(myFlight?.flight?.fareSummary?.total * 0.3);
    const refundAmount = paidAmount - deductedAmount;

    const handleTabClick = (tab) => {
        setIsActive(tab);
    };

    return (
        <div className="lg:mt-10">
            <section className="bg-white p-4 shadow-md mt-5 flex md:flex-row flex-col  md:items-center md:mx-7 md:space-x-4">
                <div className="mb-2 md:mb-0">
                    <h1 className="font-semibold ">Apply Reschedule: </h1>
                </div>
                <div className="flex gap-1 rounded font-medium text-gray-600 text-sm">
                    <div
                        onClick={() => handleTabClick("allflight")}
                        className={`px-4 py-2 cursor-pointer flex items-center gap-1 ${isActive === "allflight"
                            ? "border-t-2 bg-cyan-50 border-cyan-400"
                            : ""
                            }`}
                    >
                        All Flight
                    </div>
                    <div
                        onClick={() => handleTabClick("confirm")}
                        className={`px-4 py-2 cursor-pointer flex items-center gap-1 ${isActive === "confirm"
                            ? "border-t-2 bg-cyan-50 border-cyan-400"
                            : ""
                            }`}
                    >
                        Confirm Reschedule
                    </div>
                    <div
                        onClick={() => handleTabClick("cancel")}
                        className={`px-4 py-2 cursor-pointer flex items-center gap-1 ${isActive === "cancel"
                            ? "border-t-2 bg-cyan-50 border-cyan-400"
                            : ""
                            }`}
                    >
                        Cancel Reschedule
                    </div>
                </div>
            </section>

            {isActive === "allflight" && (
                <TableReschedule
                    AllReschedule={AllReschedule}
                    openModal={openModal}
                    setFlightRef={setFlightRef}
                    status="Residual Status"
                />
            )}

            {isActive === "cancel" && (
                <TableReschedule
                    AllReschedule={Denied}
                    // openModal={openModal}
                    // setFlightRef={setFlightRef}
                    status="cancel status"
                />
            )}

            {isActive === "confirm" && (
                <TableReschedule
                    AllReschedule={Confirmed}
                    // openModal={openModal}
                    // setFlightRef={setFlightRef}
                    status="confirm status"
                />
            )}

            {isModalOpen && (
                <div
                    className={`fixed inset-0 flex items-center justify-center z-40 ${isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                        } transition-opacity duration-300 `}
                >
                    <div className=" bg-black/20 min-h-screen w-full flex justify-center items-center">
                        {/* Modal content */}
                        <div className="bg-white w-10/12 max-w-2xl max-h-[95vh] md:max-h-[100vh] overflow-y-scroll md:overflow-auto rounded-lg shadow-lg p-6">
                            <div className="flex lg:flex-row flex-col gap-2 md:gap-5 lg:gap-10 items-center mb-5">
                                <img className="w-24" src={logo} alt="Website Logo" />
                                <h2 className="text-lg text-center md:text-left md:text-xl font-semibold">
                                    Flight Reschedule Requisition
                                </h2>
                            </div>
                            <hr />
                            <div className="flex gap-5 md:gap-10 items-center my-2">
                                <div>
                                    <h2 className="text-md font-semibold">Booking Date:</h2>
                                    <p className="text-sm">
                                        {myFlight?.bookingDateTime.split(" ")[0]}
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-md font-semibold">Traveler:</h2>
                                    <p className="text-sm">
                                        {myFlight?.user?.title} {myFlight?.user?.first_name}{" "}
                                        {myFlight?.user?.last_name}
                                    </p>
                                </div>
                            </div>
                            <hr />

                            <div className="mb-2 mt-5">
                                <h2 className="text-md font-semibold">Flight Details</h2>
                                <hr />
                                <div className="md:flex gap-5 items-center text-sm">
                                    <div className="flex md:flex-col  gap-2 md:gap-0 items-center md:items-start md:justify-start mt-2 md:mt-0 ">
                                        <h2 className="font-semibold">Airline</h2>
                                        <p>{myFlight?.flight?.airline}</p>
                                    </div>
                                    <div className="flex md:flex-col  gap-2 md:gap-0 items-center md:items-start md:justify-start mt-2 md:mt-0">
                                        <h2 className="font-semibold">Route</h2>
                                        <p>
                                            {myFlight?.flight?.departureCity} to{" "}
                                            {myFlight?.flight?.arrivalCity}
                                        </p>
                                    </div>
                                    <div className="flex md:flex-col  gap-2 md:gap-0 items-center md:items-start md:justify-start mt-2 md:mt-0">
                                        <h2 className="font-semibold">Departure Date</h2>
                                        <p>
                                            {myFlight?.flight?.departureDate}{" "}
                                            {myFlight?.flight?.departureTime}
                                        </p>
                                    </div>
                                    <div className="flex md:flex-col  gap-2 md:gap-0 items-center md:items-start md:justify-start mt-2 md:mt-0">
                                        <h2 className=" font-semibold">Arrival Date</h2>
                                        <p>
                                            {myFlight?.flight?.arrivalDate}{" "}
                                            {myFlight?.flight?.arrivalTime}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5">
                                <h2 className="text-md font-semibold">
                                    Cancelation and Refund
                                </h2>
                                <hr />
                                <div className="grid grid-cols-2 mt-2 text-sm">
                                    <p>Your paid amount for this flight</p>
                                    <p>= {paidAmount} BDT</p>
                                </div>
                                <div className="grid grid-cols-2 mt-2 md:mt-0 text-sm">
                                    <p>Deducted 30% cancelation fee</p>
                                    <p>= {deductedAmount} BDT</p>
                                </div>
                                <div className="w-3/4">
                                    <hr />
                                </div>
                                <div className="grid grid-cols-2 mt-2 md:mt-0 text-sm">
                                    <p>Total refund amount</p>
                                    <p>= {refundAmount} BDT</p>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <hr />
                                <h2 className="text-md font-semibold">
                                    Fill the Selected Item
                                </h2>
                                {/* End of form fields */}
                                <div className="flex justify-end mt-2 sm:mt-5 tracking-wide">
                                    <div
                                        onClick={closeModal}
                                        className="mr-2 sm:mr-4 py-1 px-4 rounded-md border-none bg-red-500 hover:bg-red-600 cursor-pointer  transition duration-150 text-white"
                                    >
                                        Close
                                    </div>
                                    <button
                                        type="submit"
                                        className={`bg-cyan-500 text-white py-1 px-4 rounded-md border-none hover:bg-cyan-600 transition duration-150`}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Reschedule;