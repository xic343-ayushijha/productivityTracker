import React, { useEffect, useState } from "react";

function Visual() {
  const [commit, setCommit] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.github.com/repos/xic343-ayushijha/productivityTracker/commits"
    )
      .then((res) => res.json())
      .then((data) => {
        return setCommit(data[0]);
      });
  }, []);
  return (
    <>
      <p>author name : {commit?.author?.login}</p>
      <p>commit msg : {commit?.commit?.message}</p>
      <p>commit date : {commit?.commit?.committer.date}</p>
      <p>commits</p>
    </>
  );
}

export default Visual;
