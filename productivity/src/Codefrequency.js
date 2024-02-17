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
          <Bar options={options} data={data} />
        </div>
      </div>
    </>
  );
}
