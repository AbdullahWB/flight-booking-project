import React from "react";
import { SlOptionsVertical } from "react-icons/sl";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const BookingChart = () => {
  return (
    <div className="bg-white shadow-md lg:p-6 p-2 rounded-lg">
      <div className="flex justify-between mb-10">
        <h1 className="lg:text-2xl font-light text-gray-900">Booking Chart</h1>
        <button>
          <SlOptionsVertical className="text-gray-400 text-xl font-bold mt-1" />
        </button>
      </div>
      <ResponsiveContainer className="-ml-4" width="100%" height={350}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#70cfc9" />
          <Bar dataKey="uv" fill="#5daad6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BookingChart;
