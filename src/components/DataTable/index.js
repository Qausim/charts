import React, { memo } from "react";

import "./index.css";

const DataTable = ({
  data: datalist,
  headings,
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
      <table>
        <thead>
          <tr>
            {headings.map((heading, index) => (
              <th key={index}>{heading}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {datalist.map(data => {
            return (
              <tr>
                {headings.map((heading, index) => (
                  <td key={index}>{data[heading]}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default memo(DataTable);
