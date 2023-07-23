import styles from './ChartsComponent.module.css';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { BarsData } from "./utils/BarsData.js";
import { PieData } from "./utils/PieData.js";
import { LineData } from "./utils/LineData.js";
import { BarsChart } from "./charts/BarsChart.jsx"
import { PieChart } from "./charts/PieChart.jsx"
import { LineChart } from "./charts/LineChart.jsx"

Chart.register(CategoryScale);

const ChartsComponent = () => {
  
    const [barsData, setBarsData] = useState({
                labels: BarsData.map((data) => data.label), 
                datasets: [
                  {
                    label: "Test Data ",
                    data: BarsData.map((data) => data.testData),
                    backgroundColor: [
                        "#7E7193",
                        "#ecf0f1",
                    ],
                    borderColor: "#00c9a7",
                    borderWidth: 0
                  }
                ]
    });

    const [pieData, setPieData] = useState({
        labels: PieData.map((data) => data.label), 
        datasets: [
          {
            label: "Test Data ",
            data: PieData.map((data) => data.testData),
            backgroundColor: [
              "#7E7193",
              "#ecf0f1",
            ],
            borderColor: "#00c9a7",
            borderWidth: 6
          }
        ]
    });

    const [lineData, setLineData] = useState({
        labels: LineData.map((data) => data.label), 
        datasets: [
        {
            label: "Test Data ",
            data: LineData.map((data) => data.testData),
            backgroundColor: [
                "#7E7193",
            ],
            borderColor: "white",
            borderWidth: 3
        }
        ]
    });
  
    return (
    <div class className={styles.container}>
        <div className={styles.chart}>
        <BarsChart chartData={barsData}/>
        </div>
        <div className={styles.pieChart}>
        <PieChart chartData={pieData}/>
        </div>
        <div className={styles.chart}>
        <LineChart chartData={lineData}/>
        </div>
    </div>
  );
};

export default ChartsComponent;