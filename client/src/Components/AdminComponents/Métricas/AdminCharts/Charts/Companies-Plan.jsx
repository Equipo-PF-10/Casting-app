import React from "react";
import { Line } from "react-chartjs-2";

export const Companies_Plan = (props) => {
  return (
    <div>
      <h4 style={{ textAlign: "center" }}>Suscripciones por Mes</h4>
      <Line
        data={props.chartData}
        options={{
          responsive: true,
          maintainAspectRatio: true,
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