import React, { memo } from "react";
import {
  BarChart as Chart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import CustomizedAxisTick from "../CustomizedAxisTick";

const BarChart = ({
  data,
  xLabel,
  dataKeys,
  fills,
  backgrounds,
  margin,
  wrapperClassName,
  wrapperStyle
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
          data={data}
          {...{
            data,
            margin
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xLabel} tick={CustomizedAxisTick} height={60} />
          <YAxis />
          <Tooltip />
          <Legend />
          {dataKeys.map((dataKey, index) => {
            return (
              <Bar
                {...{
                  dataKey,
                  key: index,
                  background: { fill: backgrounds[index] },
                  fill: fills[index]
                }}
              />
            );
          })}
        </Chart>
      </ResponsiveContainer>
    </div>
  );
};

export default memo(BarChart);
