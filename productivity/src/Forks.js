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
import "./Forks.css";

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
  const [fork, setFork] = useState([]);
  const [forkData, setForkData] = useState([]);
  let trafficData;
  useEffect(() => {
    fetch(
      "https://api.github.com/repos/AnkitSharma-007/angular-i18n-localization/forks"
    )
      .then((res) => res.json())
      .then((data) => {
        trafficData = data?.map((elt) => elt.size);
        setForkData(data[0]);
        setFork(trafficData);
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

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Dataset 2",
        data: fork.map((elt) => elt),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <>
      <div className="section-wrapper">
        <div className="chart-info">
          <p>
            No of forks: <span className="chart-data">{fork.length}</span>{" "}
          </p>
          <p>
            Repository name :{" "}
            <span className="chart-data">{forkData.name} </span>{" "}
          </p>
          <p>
            A fork is a new repository that shares code and visibility settings
            with the original “upstream” repository. Forks are often used to
            iterate on ideas or changes before they are proposed back to the
            upstream repository, such as in open source projects or when a user
            does not have write access to the upstream repository. For more
            information, see "Working with forks."
          </p>
        </div>
        <div className="chart-wrapper">
          <Line options={options} data={data} />
        </div>
      </div>
    </>
  );
}
