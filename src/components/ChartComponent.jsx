import React from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
} from "recharts";
import CustomToolTip from "./CustomToolTip";

const ChartComponent = ({ data }) => {
  return (
    <div className="pt-[28px] pr-[51px] pb-[10px]">
      <ResponsiveContainer width={839} height={343}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4B40EE" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis domain={[20000, 80000]} tickCount={8} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip content={<CustomToolTip />} />

          <Area
            type="monotone"
            dataKey="value"
            stroke="#4B40EE"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorValue)"
            dot={false}
            strokeLinecap="round"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartComponent;
