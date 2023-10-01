import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Chart } from 'chart.js/auto';

function Chartjsviz() {
  // eslint-disable-next-line no-unused-vars
  const [budgetData, setBudgetData] = useState([]);
  const chartRef = useRef(null);
  const chartInstance = useRef(null); // Reference to the Chart.js instance

  useEffect(() => {
    // Fetch data from the API
    axios.get('http://localhost:4000/budget')
      .then((response) => {
        const data = response.data.modifiedBudget;
        setBudgetData(data);
        createPieChart(data);
      })
      .catch((error) => {
        console.error('Error fetching data from API:', error);
      });
  }, []);

  const createPieChart = (data) => {


    if (chartInstance.current) {
        chartInstance.current.destroy(); // Destroy the existing chart
      }

    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: data.map((item) => item.title),
          datasets: [
            {
              data: data.map((item) => item.budget),
              backgroundColor: [
                '#C70039', //red
                '#FFC300', //yellow
                '#16E738', //green
                '#339EFF', //blue
                '#C416E7', //purple
                '#FF5733', //orange
                '#ABB2B9' //grey
              ],
            },
          ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
          },
      });
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Week 06 ChartJS Visualization</h1>
      <p>
         <canvas ref={chartRef}  width={400} height={400}></canvas>
      </p>
    </div>
  );
}
export default Chartjsviz;