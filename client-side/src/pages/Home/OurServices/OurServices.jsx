import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";

const OurServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section>
      <SectionTitle sectionTitle="Our Services" />
      <div className="grid grid-cols-2 text-gray-500">
        <p>
          Explore seamless travel with our flight, hotel, car, and cruise
          booking services. Effortlessly tailor your journey for a memorable,
          personalized experience. Your dream adventure starts here..
        </p>
        <button className="ml-auto bg-cyan-700 hover:bg-cyan-600 hover:tracking-wide px-5 rounded-full h-[45px] text-white font-semibold">
          View All
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex items-center gap-5 w-full bg-white shadow-md py-2 text-gray-500"
          >
            <div className="h-[120px] md:h-[180px] w-1/2">
              <img
                className="h-full w-full p-2 image-full"
                src={service.image}
                alt=""
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-lg md:text-xl font-semibold mb-2">
                {service.title}
              </h2>
              <p className="mb-2">{service.details}</p>
              <button className="ml-auto bg-cyan-700 hover:bg-cyan-600 hover:tracking-wide px-5 rounded-full h-[38px] text-white font-semibold">
                See All
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
