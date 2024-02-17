import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

//used Line chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export function Forks() {
  const [commit, setCommit] = useState([]);
  let trafficData;
  useEffect(() => {
    fetch("https://api.github.com/repos/xic343-ayushijha/shop-cart/pulls")
      .then((res) => res.json())
      .then((data) => {
        trafficData = data?.map((elt) => elt.number);
        setCommit(trafficData);
      });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };
  
  const labels = ["January", "February", "March", "April", "May", "June", "July","August"];
  
   const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Dataset 2",
        data: commit.map((elt) => elt),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  

  return <Line options={options} data={data} />;
}
