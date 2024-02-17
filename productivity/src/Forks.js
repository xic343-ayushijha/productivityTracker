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
        data: commit.map((elt) => elt),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <>
      <div className="section-wrapper">
        <p className="chart-info">
          da justo. Donec odio eros, tincidunt eget Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Proin porttitor purus quis mauris commodo
          condimentum. Vestibulum facilisis consectetur mi ut sagittis. Cras
          fermentum, nunc eu porttitor vulputate, neque quam hendrerit sapien, a
          malesuada lacus lacus eget arcu. Suspendisse consequat vestibulum
          malesuada. Etiam fermentum semper leo, sit amet interdum sem pretium
          com morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Aenean quis rhoncus elit, vel gravida justo. Donec odio eros,
          tincidunt eget ultricies bibendum, euismod a enim. Nulla ac risus
          vitae orci volutpat sodales. Proin tempus feugiat sagittis. Phasellus
          interdum ultrices elit, a posuere massa convallis non. Quisque urna
          ligula, dictum et mauris vitae, bibendum feugiat lorem.
        </p>
        <div className="chart-wrapper">
          <Line options={options} data={data} />
        </div>
      </div>
    </>
  );
}
