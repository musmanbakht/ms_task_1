import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample data
const data = [
  { year: 2018, mining: 15, chemical: 10 },
  { year: 2019, mining: 22, chemical: 18 },
  { year: 2020, mining: 30, chemical: 25 },
  { year: 2021, mining: 45, chemical: 32 },
  { year: 2022, mining: 38, chemical: 40 },
  { year: 2023, mining: 50, chemical: 47 },
  { year: 2024, mining: 65, chemical: 58 },
];

export default function PublicationsChart() {
  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
      <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full max-w-full flex-grow flex-1">
            <h6 className="uppercase text-gray-500 mb-1 text-xs font-semibold">
              Overview
            </h6>
            <h2 className="text-gray-800 text-xl font-semibold">
              Publications Over Time
            </h2>
          </div>
        </div>
      </div>
      <div className="p-4 flex-auto">
        {/* Chart fills its parent */}
        <div className="relative h-350-px">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="mining"
                stroke="#8884d8"
                strokeWidth={3}
                dot={{ r: 4 }}
                name="Mining Institute"
              />
              <Line
                type="monotone"
                dataKey="chemical"
                stroke="#82ca9d"
                strokeWidth={3}
                dot={{ r: 4 }}
                name="Chemical & Metallurgical Eng."
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
