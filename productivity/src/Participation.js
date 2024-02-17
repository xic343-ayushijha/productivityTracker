import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bubble } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);
//used bubble chart

export function Participation() {
  const [commit1, setCommit1] = useState([]);
  const [commit2, setCommit2] = useState([]);
  let trafficData1, trafficData2;
  useEffect(() => {
    fetch(
      "https://api.github.com/repos/xic343-ayushijha/shop-cart/stats/contributors"
    )
      .then((res) => res.json())
      .then((data) => {
        trafficData1 = data[0]?.weeks.slice(0, 10).map((elt) => elt);
        trafficData2 = data[0]?.weeks.slice(10, 20).map((elt) => elt);
        setCommit2(trafficData2);
        setCommit1(trafficData1);
      });
  }, []);

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  const list1 = [
    { x: 29, y: 66, r: 16, z: 20 },
    { x: -63, y: -58, r: 9, z: 50 },
    { x: 84, y: -81, r: 7 },
    { x: -14, y: 40, r: 7 },
    { x: -5, y: -90, r: 19 },
    { x: -15, y: 5, r: 20 },
    { x: 84, y: 74, r: 20 },
    { x: -79, y: 51, r: 9 },
    { x: -83, y: 76, r: 18 },
    { x: -89, y: -83, r: 7 },
  ];
  const list2 = [
    { x: -39, y: -99, r: 14, z: 10 },
    { x: 40, y: -29, r: 13, z: 30 },
    { x: 97, y: -73, r: 13 },
    { x: -49, y: 86, r: 5 },
    { x: 60, y: 23, r: 16 },
    { x: 92, y: -6, r: 9 },
    { x: -96, y: 47, r: 11 },
    { x: -22, y: 85, r: 10 },
    { x: -51, y: 100, r: 6 },
    { x: -86, y: -52, r: 6 },
  ];

  const data = {
    datasets: [
      {
        label: "Red dataset",
        data: list1,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Blue dataset",
        data: list2,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <>
      <div className="section-wrapper">
        <p className="chart-info">
          Participating in a discussion You can converse with the community and
          maintainers in a forum within the repository for a project on GitHub.
          Who can use this feature People with read access to a repository can
          participate in discussions and polls in the repository. People with
          read access to the source repository for organization discussions can
          participate in discussions and polls in that organization.
        </p>
        <div className="chart-wrapper">
          <Bubble options={options} data={data} />
        </div>
      </div>
    </>
  );
}
