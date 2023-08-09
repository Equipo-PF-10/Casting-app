import React from "react";
import { Line } from "react-chartjs-2";

export const Companies_Plan = (props) => {
  return (
    <div>
      <h4 style={{ textAlign: "center" }}>SUSCRIPCIONES POR MES</h4>
      <Line
        data={props.chartData}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            x: {
                ticks: {
                    display: true
                }
            },
            y: {
              ticks: {
                precision:0
              }
            }
          },
          plugins: {
            title: {
              display: true,
              text: "Vista mensual de las compañías suscritas a un plan."
            },
            legend: {
              display: true
            }
          }
        }}
      />
    </div>
  );
}