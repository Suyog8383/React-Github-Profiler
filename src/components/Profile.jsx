import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ErrorHandle from "./ErrorHandle";

function Profile() {
  const { id } = useParams();

  const [profiles, setProfiles] = useState([]);
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    if (!id) {
      return;
    } else {
      fetch(`https://api.github.com/users/${id}`)
        .then((data) => data.json())
        .then((data) => {
          setProfiles(data);
        });

      fetch(`https://api.github.com/users/${id}/repos`)
        .then((data) => data.json())
        .then((data) => {
          setRepos(data);
        });
    }
  }, [id]);

  const styleLi = {
    width: "150px",
    height: "150px",
    borderRadius: "70px",
  };

  const styleGrid = {
    display: "grid",
    gridTemplateColumns: "auto auto",
    padding: "0 50px",
  };
  const styleGrid2 = {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    border: "1px solid rgba(0, 0, 0, 0.8)",
    padding: "20px",
    fontSize: "30px",
    textAlign: "center",
  };
  const styleGrid3 = {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    border: "1px solid rgba(0, 0, 0, 0.8)",
    padding: "38px 0",
    fontSize: "30px",
    textAlign: "center",
  };
  const headGrid = {
    display: "grid",
    gridTemplateColumns: "auto auto",

    padding: "0 50px",
  };

  const logoStyle2 = {
    height: "35px",
    width: "35px",
  };
  const styleLi2 = {
    height: "50px",
    width: "50px",
  };
  return (
    <div>
      <div>
        <h3 style={{ fontFamily: "Lato, sans-serif", padding: " 10px 0" }}>
          Hey, {profiles.login}
        </h3>
        <div className="grid-container" style={headGrid}>
          <div className="grid-item" style={styleGrid2}>
            <img style={styleLi} src={profiles.avatar_url} alt="" />
            <br />
            <span>{profiles.name}</span> <br />
            <span>{profiles.location}</span>
            <hr />
            <button className="btn btn-danger">
              <Link style={{ color: "white" }} to={"/"}>
                Sign out
              </Link>
            </button>
          </div>
          <div className="grid-item" style={styleGrid3}>
            <p>{profiles.bio}</p>
            <hr />
            <h5>
              <Link to={`/followers/${id}`}>{profiles.followers} </Link>
              Followers
            </h5>
            <h5>
              <Link to={`/following/${id}`}>{profiles.following} </Link>
              Following
            </h5>
          </div>
        </div>

        <h3 style={{ fontFamily: "Lato, sans-serif", padding: " 10px 0" }}>
          Repository List
        </h3>
        <div className="grid-container" style={styleGrid}>
          {repos.map((item, index) => {
            return (
              <div key={index} className="grid-item" style={styleGrid2}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1379/1379905.png"
                  alt=""
                  style={styleLi2}
                />
                <hr />
                <Link
                  style={{ color: "red", textDecoration: "none" }}
                  to={`/reposDetail/${id}/${item.name}`}
                >
                  <p style={{ fontSize: "smaller" }}>{item.name}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Profile;
