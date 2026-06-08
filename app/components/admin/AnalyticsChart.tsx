"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", users: 20 },
  { day: "Tue", users: 35 },
  { day: "Wed", users: 25 },
  { day: "Thu", users: 50 },
  { day: "Fri", users: 40 },
  { day: "Sat", users: 60 },
  { day: "Sun", users: 80 },
];

export default function AnalyticsChart() {
  return (
    <div className="bg-white rounded-2xl shadow p-6 h-[400px]">
      <h2 className="text-lg font-semibold mb-4">
        Platform Activity
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="users"
            stroke="#4f46e5"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}