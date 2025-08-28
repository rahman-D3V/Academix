"use client";
import Image from "next/image";
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Total",
    count: 106,
    fill: "#E5E7EB", // light gray instead of white for visibility
  },
  {
    name: "Girls",
    count: 53,
    fill: "#FAE27C",
  },
  {
    name: "Boys",
    count: 53,
    fill: "#3B82F6", // Tailwind sky-blue
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/moreDark.png" alt="more" width={20} height={20} />
      </div>

      {/* CHART */}
      <div className="relative w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>

        {/* Center Icon */}
        <Image
          src="/maleFemale.png"
          alt="gender icon"
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* BOTTOM */}
      <div className="flex justify-center gap-16 mt-4">
        <div className="flex flex-col gap-1 items-center">
          <div className="w-5 h-5 bg-blue-500 rounded-full" />
          <h1 className="font-bold">697</h1>
          <h2 className="text-xs text-gray-400">Boys (26%)</h2>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <div className="w-5 h-5 bg-yellow-400 rounded-full" />
          <h1 className="font-bold">765</h1>
          <h2 className="text-xs text-gray-400">Girls (74%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
