import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

const ChartComponent = () => {
  const chartRef = useRef();

  useEffect(() => {
    // Crea el gráfico una vez que el componente esté montado
    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar', // Cambia el tipo de gráfico según tus necesidades (bar, line, pie, etc.)
      data: {
        labels: ['Label 1', 'Label 2', 'Label 3'], // Etiquetas del eje X
        datasets: [
          {
            label: 'Datos del gráfico', // Etiqueta de la leyenda
            data: [10, 20, 30], // Datos del gráfico
            backgroundColor: ['red', 'blue', 'green'], // Colores de las barras (puedes personalizarlos)
          },
        ],
      },
    });

    // Importante: Limpia el gráfico al desmontar el componente para evitar problemas de memoria
    return () => myChart.destroy();
  }, []);

  return (
    <div>
      <canvas ref={chartRef} width="200" height="100"></canvas>
    </div>
  );
};

export default ChartComponent;