import React, { useState, useEffect } from "react";

import { Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);

  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    try {
      await logout();
      history.push("/login");
    } catch {
      console.log("Failed to log out");
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div>
        <img
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
        />
      </div>

      {/* <img
        className="nav_avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt="Netflix Logo"
      /> */}
      <div className="nav_avatar">
        <div className="btn w-30 ">
          <Button variant="outline-primary" onClick={handleLogout}>
            Log Out
          </Button>
        </div>
        <strong className="btn " variant="outline-primary">
          <Button variant="outline-primary">
            Email:
            {currentUser.email}
          </Button>
        </strong>
        <Link to="/update-profile" className="btn">
          <Button variant="outline-primary">Update Profile</Button>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
