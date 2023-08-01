import React from "react";
import "./homestyle.css";
import { Link } from "react-router-dom";
import team from "./img/team.png";
export default function Home() {
  return (
    <div className="home">
      <div>
        <div>
          <h3>BEST ONLINE STORE OF THE YEAR</h3>
          <h1>We don't do fashion, we are fashion</h1>
          <Link to="/products">Shop Now</Link>
        </div>
        <img src={team} alt="" />
      </div>
    </div>
  );
}
