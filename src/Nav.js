import React from "react";
import Logo from "./images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";
export default function Nav() {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <div className="nav-wrapper">
        <div>
          <div>
            <img src={Logo} />
          </div>
          <div>
            {/* <img src="https://img.icons8.com/material-sharp/1x/menu.png" /> */}
          </div>

          <div>
            <li>
              <Link to="/">Home</Link>
            </li>
            <a href="#about">About</a>
            <Link to="/latest">Latest</Link>
            <li>
              <a href="#contact">
                <span className="contactLink">Contact Us</span> <span>👋</span>
              </a>
            </li>
          </div>
          {/* <div></div> */}
        </div>
        <div>
          <button>
            <a href="#book">Connect</a>
          </button>
          <Link style={{ marginLeft: "10px" }} to="write">
            <a>Write</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
