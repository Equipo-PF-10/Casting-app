import React from "react";
import { Line } from "react-chartjs-2";

export const LineChart = (props) => {
  return (
    <div>
      <h4 style={{ textAlign: "center" }}>Line Chart</h4>
      <Line
        data={props.chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "This is a test title"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
}