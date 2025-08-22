import React, { useMemo } from "react";
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
const colors = [
"#8884d8", // purple
"#82ca9d", // green
"#ff7300", // orange
"#00c49f", // teal
"#ff0000", // red
"#a83279", // magenta
"#005f73", // deep teal
"#ffb703", // yellow-orange
];

export default function PublicationsChart({
  publicationCountPerMonth,
  highlightDepartment = "School of Mining Engineering", // NEW PROP
}) {
  // Transform API response → chart format
  const chartData = useMemo(() => {
    const grouped = {};
    console.log("pub counttttttt", publicationCountPerMonth);

    publicationCountPerMonth.forEach((item) => {
      const month = item.month.slice(0, 7); // YYYY-MM
      if (!grouped[month]) {
        grouped[month] = { month };
      }
      grouped[month][item.name] = Number(item.publicationCount);
    });

    return Object.values(grouped);
  }, [publicationCountPerMonth]);

  const departments = [
    ...new Set(publicationCountPerMonth.map((item) => item.name)),
  ];

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
      <div className="rounded-t mb-0 px-2 py-3 bg-transparent">
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
        <div className="relative h-350-px">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              {departments.map((dept, index) => {
                const isHighlighted = dept === highlightDepartment;
                return (
                  <Line
                    key={dept}
                    type="monotone"
                    dataKey={dept}
                    name={dept}
                    strokeWidth={isHighlighted ? 4 : 3}
                    strokeOpacity={isHighlighted ? 1 : 0.5}
                    dot={isHighlighted ? { r: 5 } : { r: 1 }}
                    stroke={colors[index % colors.length]}
                  />
                );
              })}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}


