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
    <div class="commit-wrapper">
    <p>author name : {commit?.author?.login}</p>
      <p>commit msg : {commit?.commit?.message}</p>
      <p>commit date : {commit?.commit?.committer.date}</p>
      <p>commit msg</p>
    </div>

      <ul className="list">{list}</ul>
    </>
  );
}

export default Commits;
