import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Followers() {
  const { follo } = useParams();

  const [followers, setFollowers] = useState([]);
  useEffect(() => {
    if (!follo) return;

    fetch(`https://api.github.com/users/${follo}/followers`)
      .then((data) => data.json())
      .then((data) => {
        setFollowers(data);
      });
  }, [follo]);

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
      <h2 style={{ fontFamily: "Lato, sans-serif" }}>Followers</h2>
      <div className="grid-container" style={styleGrid}>
        {followers.map((item, index) => {
          return (
            <div key={index} className="grid-item" style={styleGrid2}>
              <img style={styleLi} src={item.avatar_url} alt="" />
              <p>{item.login}</p>
              <Link to={`/profiles/${item.login}`}>View</Link>
            </div>
          );
        })}
      </div>

      <Link to={`/profiles/${follo}`}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default Followers;
