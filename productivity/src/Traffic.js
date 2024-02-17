import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./Traffic.css";

ChartJS.register(ArcElement, Tooltip, Legend);
// used doughnut chart

export function Traffic() {
  const [traffic, setTraffic] = useState([]);
  const [commitCount, setCommitCount] = useState([]);
  let trafficData, count;
  useEffect(() => {
    fetch(
      "https://api.github.com/repos/xic343-ayushijha/productivityTracker/commits"
    )
      .then((res) => res.json())
      .then((data) => {
        trafficData = data.map((elt) => elt.commit.comment_count);
        setTraffic(trafficData);
        count = trafficData.filter((elt) => elt !== 0);
        setCommitCount(count.length);
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
        data: traffic,
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
        <div className="content-wrapper">
        <p className="chart-info">No of commits with comment : {commitCount}
        <br />
        <br />
        <br />
        Viewing traffic to a repository Anyone with push access to a
          repository can view its traffic, including full clones (not fetches),
          visitors from the past 14 days, referring sites, and popular content
          in the traffic graph.</p>
        </div>
        <div className="chart-wrapper">
          <Doughnut data={data} />
        </div>
      </div>
    </>
  );
}
