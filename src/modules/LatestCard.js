import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./LatestCard.css";

export default function LatestCard({ blog }) {
  const functionconMili = (mSecVal) => {
    return new Date(mSecVal).toDateString();
  };
  return (
    <div className="latest-card">
      <Link to={`/blog/${blog.heading}`}>
        <div className="latest-card-image">
          <img src={blog?.image} alt="Latest update" />
        </div>
        <div className="latest-card-details">
          <h3 className="latest-card-title">{blog?.heading && blog.heading}</h3>
          <p className="latest-card-subtitle">
            {blog?.subHeading && blog.subHeading}
          </p>
          <p className="latest-card-time">
            Date : {blog?.time && functionconMili(blog.time)}
          </p>
        </div>
      </Link>
    </div>
  );
}
