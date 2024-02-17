import React, { useEffect, useState } from "react";

function Commits() {
  const [pr, setPr] = useState(null);
  let length;

  useEffect(() => {
    fetch("https://api.github.com/repos/xic343-ayushijha/shop-cart/pulls")
      .then((res) => res.json())
      .then((data) => {
        length=data.length;
        return setPr(data[0]);
      });
  }, []);
  return (
    <>
      <p>No. of PR: {length}</p>
      <p>pull request date : {pr?.updated_at}</p>
      <p>pr</p>
    </>
  );
}

export default Commits;
