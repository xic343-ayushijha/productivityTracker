import React, { useEffect, useState } from "react";
import "./Commits.css";

function Commits() {
  const [commit, setCommit] = useState(null);
  const [msg, setMsg] = useState([]);
  let commitData;
  useEffect(() => {
    fetch(
      "https://api.github.com/repos/xic343-ayushijha/productivityTracker/commits"
    )
      .then((res) => res.json())
      .then((data) => {
        commitData = data.map((elt) => elt.commit.message);
        setMsg(commitData);
        return setCommit(data[0]);
      });
  }, []);
  let list = msg?.map((elt) => <li>{elt}</li>);
  return (
    <>
      <div className="commit-wrapper">
        <p>
          <b>author name : </b>
          {commit?.author?.login}
        </p>
        <p>
          <b>Latest commit msg : </b>
          {commit?.commit?.message}
        </p>
        <p>
          <b>Latest commit date : </b>
          {commit?.commit?.committer.date}
        </p>
        <p style={{ textAlign: "center" }}>
          <b>Commit messages: </b>
        </p>
      </div>
      <ul className="list">{list}</ul>
    </>
  );
}

export default Commits;
