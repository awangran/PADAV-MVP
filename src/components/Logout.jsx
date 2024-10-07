import React from "react";
import { Link } from "react-router-dom";

const Logout = () => {
  const style = {
    position: "absolute",
    top: 0,
    right: 0,
    margin: "30px",
  };
  return (
    <div style={style}>
      <Link to="/">
        <i
          className="fa-solid fa-arrow-right-from-bracket"
          style={{ color: "#060D15", fontSize: "25px" }}
        ></i>
      </Link>
    </div>
  );
};

export default Logout;
