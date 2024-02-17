import React, { useEffect, useState } from "react";
import "./Pullrequest.css";

function Commits() {
  const [pr, setPr] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/repos/xic343-ayushijha/shop-cart/pulls")
      .then((res) => res.json())
      .then((data) => {
        setPr(data);
      });
  }, []);
  let list = pr?.map((elt) => {
    return (
      <li key={elt.id}>
        <p>
          <b>Assignee: </b>
          {elt?.assignee?.login}
        </p>
        <p>
          <b>Reviewer: </b> {elt.requested_reviewers[0]?.login}
        </p>
        <p>
          <b>Updated at: </b> {elt.updated_at}
        </p>
        <p>
          <b>url: </b> {elt.url}
        </p>
      </li>
    );
  });
  return (
    <>
          <p><b>No. of PR:</b> {pr?.length}</p>
      <ol>{list}</ol>

    </>
  );
}

export default Commits;
