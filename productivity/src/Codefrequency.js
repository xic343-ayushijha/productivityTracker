import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

//used Bar chart

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function Codefrequency() {
  const [commit1, setCommit1] = useState([]);
  const [commit2, setCommit2] = useState([]);
  let trafficData1, trafficData2;
  useEffect(() => {
    fetch("https://api.github.com/repos/xic343-ayushijha/shop-cart/pulls")
      .then((res) => res.json())
      .then((data) => {
        trafficData1 = data?.map((elt) => elt.number);
        trafficData2 = data?.map((elt) => elt.number * 2);
        setCommit2(trafficData2);
        setCommit1(trafficData1);
      });
  }, []);

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
  ];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: commit1?.map((elt) => elt),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: commit2?.map((elt) => elt),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <>
      <div className="code-frquency section-wrapper">
        <p className="chart-info">
          Analyzing changes to a repository's content You can see the changes to
          the content of a repository by analyzing the repository's commits,
          commit frequency, and content additions and deletions.
        </p>
        <div className="chart-wrapper">
          <Bar options={options} data={data} />
        </div>
      </div>
    </>
  );
}
