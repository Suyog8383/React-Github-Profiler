import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FrontPage() {
  const [userName, setUserName] = useState("");

  const onChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  const logoStyle = {
    height: "100px",
    width: "100px",
  };
  const box = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "400px",
    width: "400px",
    border: "2px solid",
    padding: "12px",
    borderRadius: "15px",
    backgroundColor: "white",
  };
  return (
    <>
      <div style={box}>
        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111425.png" style={logoStyle} alt="" />
        <h3>GitHub Profiler</h3>
        <div className="ui input focus">
          <input
            type="text"
            value={userName}
            onChange={onChangeHandler}
            placeholder="Search users..."
            style={{ height: "42px", width: "240px", fontSize: "x-large" }}
          />
          <br />
          <br />
          <Link to={`/profiles/${userName}`}>
            <button className="btn btn-success" type="submit">
              Submit
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default FrontPage;
