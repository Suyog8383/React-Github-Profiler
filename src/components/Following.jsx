import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Following() {
  const { follos } = useParams();

  const [following, setFollowing] = useState([]);
  useEffect(() => {
    if (!follos) return;

    fetch(`https://api.github.com/users/${follos}/following`)
      .then((data) => data.json())
      .then((data) => {
        setFollowing(data);
      });
  }, [follos]);

  const styleGrid = {
    display: "grid",
    gridTemplateColumns: "auto auto auto ",
    padding: "0 50px",
  };
  const styleGrid2 = {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    border: "1px solid rgba(0, 0, 0, 0.8)",
    padding: "20px",
    fontSize: "30px",
    textAlign: "center",
  };
  const styleLi = {
    width: "150px",
    height: "150px",
  };
  return (
    <div>
      <h2 style={{ fontFamily: "Lato, sans-serif" }}>Following</h2>
      <div className="grid-container" style={styleGrid}>
        {following.map((item, index) => {
          return (
            <div key={index} className="grid-item" style={styleGrid2}>
              <img style={styleLi} src={item.avatar_url} alt="" />
              <p>{item.login}</p>
              <Link to={`/profiles/${item.login}`}>View</Link>
            </div>
          );
        })}
      </div>

      <Link to={`/profiles/${follos}`}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default Following;
