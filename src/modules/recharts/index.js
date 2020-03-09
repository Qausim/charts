import React from "react";
import LineChart from "../../components/LineChart";
import PieChart from "../../components/PieChart";
import { smallerData, biggerData } from "../../constants";
import AreaChart from "../../components/AreaChart";
import BarChart from "../../components/BarChart";

const Recharts = () => {
  const wrapperStyle = {
    width: "600px",
    height: "600px"
  };

  return (
    <div className="recharts-wrapper">
      <h2>Recharts</h2>
      <div className="charts-grid">
        <LineChart
          {...{
            wrapperStyle,
            xLabel: "name",
            fontSize: "14px",
            data: biggerData,
            dataKeys: ["uv", "pv"],
            strokes: ["#ff0000", "#00ff00"],
            xPadding: { left: 20, right: 20 }
            // margin: {
            //   top: 20,
            //   right: 10,
            //   left: 10,
            //   bottom: 20
            // },
          }}
        />
        <PieChart
          {...{
            wrapperStyle,
            data: smallerData,
            colors: ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]
          }}
        />
        <AreaChart
          {...{
            wrapperStyle,
            xLabel: "name",
            data: biggerData,
            dataKeys: ["uv", "pv", "amt"],
            fills: ["#8884d8", "#8884d8", "#82ca9d"],
            strokes: ["#8884d8", "#82ca9d", "#82ca9d"],
            // margin: {
            //   top: 20, right: 10, bottom: 20, left: 10
            // },
            xPadding: { left: 5, right: 5 }
          }}
        />
        <BarChart
          {...{
            wrapperStyle,
            xLabel: "name",
            data: biggerData,
            dataKeys: ["pv", "uv"],
            backgrounds: ["none", "#eee"],
            fills: ["#8884d8", "#82ca9d"]
          }}
        />
      </div>
    </div>
  );
};

export default Recharts;
