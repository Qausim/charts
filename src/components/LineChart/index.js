import React from "react";
import {
  Line,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  LineChart as Chart
} from "recharts";
import CustomizedAxisTick from "../CustomizedAxisTick";

const LineChart = ({
  data,
  margin,
  xLabel,
  strokes,
  dataKeys,
  fontSize,
  xPadding,
  wrapperStyle,
  wrapperClassName
}) => {
  return (
    <div
      className={`parent-wrapper${
        wrapperClassName ? ` ${wrapperClassName}` : ""
      }`}
      style={wrapperStyle}
    >
      <ResponsiveContainer>
        <Chart {...{ data, fontSize, margin }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey={xLabel}
            padding={xPadding}
            tick={CustomizedAxisTick}
            height={60}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          {dataKeys.map((dataKey, index) => (
            <Line
              stroke={strokes[index]}
              type="monotone"
              dataKey={dataKey}
              key={index}
            />
          ))}
        </Chart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;
