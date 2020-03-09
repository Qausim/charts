import React, { memo } from "react";
import {
  AreaChart as Chart,
  ResponsiveContainer,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import CustomizedAxisTick from "../CustomizedAxisTick";

const AreaChart = ({
  data,
  fills,
  xLabel,
  margin,
  strokes,
  xPadding,
  dataKeys,
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
        <Chart
          {...{
            data,
            margin
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            height={60}
            dataKey={xLabel}
            tick={CustomizedAxisTick}
            padding={xPadding}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          {dataKeys.map((dataKey, index) => (
            <Area
              type="monotone"
              {...{
                dataKey,
                key: index,
                // stackId: 1,
                fill: fills[index],
                stroke: strokes[index]
              }}
            />
          ))}
        </Chart>
      </ResponsiveContainer>
    </div>
  );
};

export default memo(AreaChart);
