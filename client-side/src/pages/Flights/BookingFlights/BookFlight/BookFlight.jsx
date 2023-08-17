import React, { useEffect, useState } from "react";
import FlightDetails from "../FlightDetails/FlightDetails";
import FlightSummery from "../FlightSummery/FlightSummery";
import FareRuls from "../FareRuls/FareRuls";
import ShortingFlight from "../../ShortingFlight/ShortingFlight";
import { GrPrevious, GrNext } from "react-icons/gr";

const BookFlight = () => {
  const [activeCard, setActiveCard] = useState(true);
  const [visibleDetails, setVisibleDetails] = useState(false);
  const [showFlightDetails, setShowFlightDetails] = useState(false);
  const [showFlightSummary, setShowFlightSummary] = useState(false);
  const [showFareRules, setShowFareRules] = useState(false);
  const [selectedButton, setSelectedButton] = useState("cheapest");
  const [flightData, setFlightData] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [singleFlightDetails, setsingleFlightDetails] = useState({});

  useEffect(() => {
    fetch("booking.json")
      .then((res) => res.json())
      .then((data) => setFlightData(data));
  }, []);

  const sortByTicketPrice = () => {
    const sortedData = [...flightData];
    if (sortOrder === "asc") {
      sortedData.sort(
        (a, b) => a.flight_details.ticket_price - b.flight_details.ticket_price
      );
      setSortOrder("desc");
    } else {
      sortedData.sort(
        (a, b) => b.flight_details.ticket_price - a.flight_details.ticket_price
      );
      setSortOrder("asc");
    }
    setFlightData(sortedData);
  };

  const handleButtonClick = (buttonType) => {
    setSelectedButton(buttonType);
    sortByTicketPrice();
  };

  const handelVisible = (singleDataFlight) => {
    setVisibleDetails(!visibleDetails);
    setShowFlightDetails(true);
    setShowFlightDetails(true);
    setShowFlightSummary(false);
    setShowFareRules(false);
    setsingleFlightDetails(singleDataFlight);
  };

  const handleFlightDetailsClick = () => {
    setShowFlightDetails(true);
    setShowFlightSummary(false);
    setShowFareRules(false);
  };

  const handleFlightSummaryClick = () => {
    setShowFlightDetails(false);
    setShowFlightSummary(true);
    setShowFareRules(false);
  };

  const handleFareRulesClick = () => {
    setShowFlightDetails(false);
    setShowFlightSummary(false);
    setShowFareRules(true);
  };

  return (
    <section className="mb-16">
      {/* Filter Card */}
      <ShortingFlight />
      <section>
        <div className="flex w-full p-5 mt-10 rounded-md justify-between shadow-md">
          <button
            className={`p-4 text-left flex-grow py-2 px-3 pe-5 mb-0 border-0 ${
              selectedButton === "cheapest"
                ? "bg-gray-100 text-white"
                : "text-white"
            }`}
            onClick={() => handleButtonClick("cheapest")}
          >
            <h1 className="text-[18px] font-semibold mb-2 text-gray-900">
              Cheapest
            </h1>
            <p className="text-[14px] text-[#7c8db0]">
              To get the cheapest available flights
            </p>
          </button>
          <div className="border self-stretch mx-5"></div>
          <button
            className={`p-4 text-left flex-grow py-2 px-3 pe-5 mb-0 border-0 ${
              selectedButton === "shortest"
                ? "bg-gray-100 text-white"
                : "text-white"
            }`}
            onClick={() => handleButtonClick("shortest")}
          >
            <h1 className="text-[18px] font-semibold mb-2 text-gray-900">
              Shortest
            </h1>
            <p className="text-[14px] text-[#7c8db0]">
              To get the shortest available flights
            </p>
          </button>
        </div>
      </section>

      {/* Flight Details Card  Container*/}
      <section className=" mt-6">
        {/* Card Design */}

        {flightData?.map((singleFlight) => (
          <section
            key={singleFlight?._id}
            className="shadow-md rounded-md pl-6 pr-6 pt-8 pb-8"
          >
            <div className=" grid grid-cols-3 lg:grid-cols-6 items-center gap-5 ">
              <div>
                <img
                  className="h-12 w-12"
                  src={singleFlight?.flight?.flight_image}
                  alt=""
                />
                <div>
                  <p className="text-gray-400">
                    <small>{singleFlight?.flight?.flight_name}</small>
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-gray-400 text-[13px]">Depart</h4>
                <h2 className="mt-2 text-[15px]">
                  <strong>
                    {singleFlight?.flight_details?.departure?.time}
                  </strong>
                </h2>
                <p className="-mt-1 pr-2">
                  <small>{singleFlight?.flight?.travel_date}</small>
                </p>
                <h3 className="mt-2 text-[13px]">
                  {singleFlight?.flight_details?.departure?.airport_address}
                </h3>
              </div>

              <div align="center" className="space-y-1 pl-2 pr-2">
                <p className="text-gray-400 text-[14px]">
                  {singleFlight?.flight_details?.travel_duration}
                </p>
                <img
                  style={{
                    WebkitFilter: "grayscale(100%)",
                    filter: "grayscale(100%)",
                  }}
                  src="https://flightexpert.com/assets/img/non-stop-shape.png"
                  alt=""
                />
                <p>
                  <small>Non Stop</small>
                </p>
              </div>

              <div>
                <h4 className="text-gray-400 text-[13px]">Arrive</h4>
                <h2 className="mt-2 text-[15px]">
                  <strong>
                    {" "}
                    {singleFlight?.flight_details?.arrival?.time}
                  </strong>
                </h2>
                <p className="-mt-1 pr-2">
                  <small>{singleFlight?.flight_details?.arrival?.date}</small>
                </p>
                <h3 className="mt-2 text-[13px]">
                  {singleFlight?.flight_details?.arrival?.airport_address}
                </h3>
              </div>

              <div>
                <h4 className="text-gray-400 text-[13px]">Prise</h4>
                <h2 className="mt-2 text-[15px]">
                  <strong>{singleFlight?.fare_summary?.ticket_price}</strong>
                </h2>
              </div>

              <div align="center">
                <button className="p-3 bg-cyan-600 hover:bg-white hover:border-2 hover:border-cyan-600 text-white rounded-md">
                  Book Now
                </button>
              </div>
            </div>

            {/* View Details Section */}
            <div className="flex justify-between items-center mt-8">
              <p>
                <small>Partially Refundable</small>
              </p>
              <p
                onClick={() => handelVisible(singleFlight)}
                className="hover:cursor-pointer link-hover"
              >
                <small>
                  {visibleDetails
                    ? "Hide Flight Details"
                    : "View Flight Details"}
                </small>
              </p>
            </div>

            {/* View Details Card Section */}

            {visibleDetails && (
              <section className="mt-6 ">
                <hr />
                <section className="flex justify-start items-center mt-5 text-[12px]">
                  <p
                    onClick={handleFlightDetailsClick}
                    className={`border-2 p-2 rounded-md cursor-pointer ${
                      showFlightDetails ? "bg-cyan-600 text-white" : ""
                    }`}
                  >
                    Flight Details
                  </p>
                  <p
                    onClick={handleFlightSummaryClick}
                    className={`border-2 p-2 rounded-md cursor-pointer ${
                      showFlightSummary ? "bg-cyan-600 text-white" : ""
                    }`}
                  >
                    Fare Summary
                  </p>
                  <p
                    onClick={handleFareRulesClick}
                    className={`border-2 p-2 rounded-md cursor-pointer ${
                      showFareRules ? "bg-cyan-600 text-white" : ""
                    }`}
                  >
                    Fare Rules
                  </p>
                </section>

                {showFlightDetails && (
                  <FlightDetails flightFullDetails={singleFlightDetails} />
                )}
                {showFlightSummary && (
                  <FlightSummery
                    flightFullDetails={singleFlightDetails?.fare_summary}
                  />
                )}
                {showFareRules && (
                  <FareRuls flightFullDetails={singleFlightDetails} />
                )}
              </section>
            )}
          </section>
        ))}

        {/* Paination Button Section */}
        <section className="mt-12 flex justify-end items-center">
          <button className="border-[1px] p-2 rounded-l-md">
            <GrPrevious size={20} />
          </button>
          <h3 className="pl-3 pr-3 pt-[6px] pb-[6px] border-[1px]">1</h3>
          <h3 className="pl-3 pr-3 pt-[6px] pb-[6px] border-[1px]">2</h3>
          <h3 className="pl-3 pr-3 pt-[6px] pb-[6px] border-[1px]">3</h3>
          <button className="border-[1px] p-2 rounded-r-md">
            <GrNext size={20} />
          </button>
        </section>
      </section>
    </section>
  );
};

export default BookFlight;
