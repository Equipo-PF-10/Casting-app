import React from "react";
import { Bar } from "react-chartjs-2";

export const Companies_Posts = (props) => {
  return (
    <div>
      <h4 style={{ textAlign: "center" }}>Eventos por Compañía</h4>
      <Bar
        data={props.chartData}
        options={{
          scales: {
            x: {
                ticks: {
                    display: false
                }
            }
          },
          plugins: {
            title: {
              display: true,
              text: "Número total de eventos por compañía registrada."
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