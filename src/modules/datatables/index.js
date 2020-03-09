import React from "react";
import DataTable from "../../components/DataTable";

const DataTables = () => {
  return (
    <div className="victory-wrapper">
      <h2>Data Tables</h2>
      <div className="charts-grid">
        <DataTable
          {...{
            headings: ["a", "b", "c"],
            data: [
              { a: 2, b: 3, c: 0 },
              { a: 0, b: 2, c: 1 },
              { a: 1, b: 7, c: 6 }
            ]
          }}
        />
      </div>
    </div>
  );
};

export default DataTables;
