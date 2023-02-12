import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function RepoDetail() {
  const { ids, follos } = useParams();

  const [reposDetail, setReposDetail] = useState([]);
  useEffect(() => {
    if (!ids) return;

    fetch(`https://api.github.com/repos/${ids}/${follos}`)
      .then((data) => data.json())
      .then((data) => {
        setReposDetail(data);
        console.log("@SN ", data);
      });
  }, [ids, follos]);

  const styleGrid = {
    display: "grid",
    gridTemplateColumns: "auto ",
    padding: "10px",
  };
  const styleGrid2 = {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    border: "1px solid rgba(0, 0, 0, 0.8)",
    padding: "20px",
    fontSize: "30px",
    textAlign: "center",
  };
  const colRd = {
    color: "red",
  };

  return (
    <div>
      <h2 style={{ fontFamily: "Lato, sans-serif" }}>Repository Details</h2>
      <div className="grid-container" style={styleGrid}>
        <div className="grid-item" style={styleGrid2}>
          <span>
            Repository Name<p style={colRd}>{reposDetail.name}</p>
          </span>
          <span>
            Repository Default-Branch
            <p style={colRd}>{reposDetail.default_branch}</p>
          </span>
          <span>
            Repository Id<p style={colRd}>{reposDetail.id}</p>
          </span>
        </div>
      </div>
      <Link to={`/profiles/${ids}`}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default RepoDetail;
