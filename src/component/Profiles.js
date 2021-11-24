import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router";

const Profiles = () => {

  return (
    <div>
      <h3>유저 목록:</h3>
      <ul>
        <li>
          <NavLink
            to="/profiles/velopert"
            style={{ background: "black", color: "white" }}
          >
            velopert
          </NavLink>
          <Link to="velopert">velopert</Link>
        </li>
        <li>
          <NavLink
            to="/profiles/gildong"
            style={{ background: "black", color: "white" }}
          >
            gildong
          </NavLink>
          <Link to="gildong">gildong</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Profiles;
