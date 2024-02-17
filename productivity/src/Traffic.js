import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
// used doughnut chart

export function Traffic() {
  const [commit, setCommit] = useState([]);
  let trafficData;
  useEffect(() => {
    fetch("https://api.github.com/repos/xic343-ayushijha/shop-cart/pulls")
      .then((res) => res.json())
      .then((data) => {
        trafficData = data.map((elt) => elt.number);
        return setCommit(trafficData);
      });
  }, []);

  const data = {
    labels: [
      "Red",
      "Blue",
      "Yellow",
      "Green",
      "Purple",
      "Orange",
      "Pink",
      "Indigo",
    ],
    datasets: [
      {
        label: "# of Votes",
        // data: [12, 19, 3, 5, 2, 3],
        data: [10, 9, 6, 7, 8, 5, 4, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(227, 61, 148, 0.2)",
          "rgba(75, 0, 130, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(227, 61, 148, 1)",
          "rgba(75, 0, 130, 1)",
        ],
        borderWidth: 1,
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
          <Doughnut data={data} />
        </div>
      </div>
    </>
  );
}
