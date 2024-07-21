import { Bar } from 'react-chartjs-2'
import { userData } from './Data'
import { useState } from 'react'
import { Chart as ChartJS } from 'chart.js/auto'

const UserChart = () => {
  const [chartData, setChartData] = useState({
    labels: userData.map((data) => data.year),
    datasets: [
      {
        label: "Gained User",
        data: userData.map((data) => data.userGain),
      },
      {
        label: "Lossed User",
        data: userData.map((data) => data.userLose),
      },
    ]
  });
  return <Bar data={chartData} />
}

export default UserChart
