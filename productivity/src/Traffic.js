import React, { useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
// used doughnut chart

let trafficData;

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange","Pink","Indigo"],
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

export function Traffic() {

  useEffect(() => {
    fetch(
      "https://api.github.com/repos/xic343-ayushijha/shop-cart/pulls"
    )
      .then((res) => res.json())
      .then((data) => {
        let a= [12, 19, 3, 5, 2, 3];
        console.log(a);
        trafficData = data.map(elt=>elt.number);
        console.log(trafficData,"commits");
      });
  }, []);
  return <Doughnut data={data} />;
}
