import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import "./Contributor.css";

ChartJS.register(ArcElement, Tooltip, Legend);

// used Pie chart

export function Contributor() {
  const [commit, setCommit] = useState([]);
  const [contributor, setContributor] = useState([]);
  let trafficData;
  const headers = {
    Authorization:
      "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",
  };
  useEffect(() => {
    fetch(
      "https://api.github.com/repos/xic343-ayushijha/shop-cart/stats/contributors"
    )
      .then((res) => res.json())
      .then((data) => {
        setContributor(data[0]);
      });
    fetch("https://api.github.com/repos/xic343-ayushijha/shop-cart/pulls")
      .then((res) => res.json())
      .then((data) => {
        trafficData = data.map((elt) => elt.number);
        return setCommit(trafficData);
      });
  }, []);
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: commit,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="section-wrapper">
        <p className="chart-info">
          <p className="author">Contributor: {contributor?.author?.login}</p>
          <img className="author-img" src={contributor?.author?.avatar_url} />
          <p>
            Contributors. Git (in a git repository) identifies authors and
            committers by email address. Github users can associate email
            addresses with their accounts. When a user's set of email addresses
            is found in the commit history of a github repo, github marks that
            user as a contributor.1
          </p>
        </p>
        <div className="chart-wrapper">
          <Pie className="pie" data={data} />
        </div>
      </div>
    </>
  );
}
