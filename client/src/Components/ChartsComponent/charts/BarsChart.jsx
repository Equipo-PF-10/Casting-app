import React from "react";
import { Bar } from "react-chartjs-2";

export const BarsChart = (props) => {
  return (
    <div>
      <h4 style={{ textAlign: "center" }}>Bar Chart</h4>
      <Bar
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
};