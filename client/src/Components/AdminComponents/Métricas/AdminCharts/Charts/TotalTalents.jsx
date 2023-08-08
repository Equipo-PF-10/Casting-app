import React from "react";
import { Doughnut } from "react-chartjs-2";

export const TotalTalents = (props) => {
    return (
        <div>
            <h4 style={{ textAlign: "center" }}>Talentos</h4>
            <Doughnut
                data={props.chartData}
                options={{
                    responsive: true,
                    // maintainAspectRatio: true,
                    plugins: {
                        title: {
                        display: false,
                        text: "This is a test title."
                        }
                    }
                }}
            />
        </div>
    );
};