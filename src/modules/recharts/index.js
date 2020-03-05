import React from "react";
import LineChart from "../../components/LineChart";
import PieChart from "../../components/PieChart";

const Recharts = () => {
  const data = new Array(5).fill(0).map(() => ({
    name: "Page A",
    uv: Math.random() * 400,
    pv: Math.random() * 2400,
    amt: Math.random() * 2400
  }));
  "abcdefghij"
    .slice(0, data.length)
    .split("")
    .forEach((name, ind) => {
      data[ind].name = "PAGE " + name.toUpperCase();
    });

  return (
    <div className="recharts-wrapper">
      <h2>Recharts</h2>
      <div className="charts-grid">
        <LineChart
          {...{
            data,
            xLabel: "name",
            fontSize: "14px",
            dataKeys: ["uv", "pv"],
            strokes: ["#ff0000", "#00ff00"],
            xPadding: { left: 20, right: 20 },
            // margin: {
            //   top: 20,
            //   right: 10,
            //   left: 10,
            //   bottom: 20
            // },
            wrapperStyle: {
              width: "300px",
              height: "300px"
            }
          }}
        />
        <PieChart
          {...{
            wrapperStyle: {
              width: "300px",
              height: "300px"
            },
            colors: ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]
          }}
        />
      </div>
    </div>
  );
};

export default Recharts;
