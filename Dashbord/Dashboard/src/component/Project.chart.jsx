import { } from 'react-chartjs-2'
import { ProjectData } from './Data'
import { Line } from 'react-chartjs-2'
import { useState } from 'react'
import { Chart as ChartJS } from 'chart.js/auto'

const ProjectChart = () => {

  const [porjectChartData, setPorjectChartData] = useState({
    labels: ProjectData.map((data) => data.year),
    datasets: [{
      label: 'Project Done',
      data: ProjectData.map((data) => data.project),
    }]
  });

  return <Line data={porjectChartData} />
}

export default ProjectChart
