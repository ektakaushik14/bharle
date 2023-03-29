import React, { useEffect, useState } from "react";
import LatestCard from "../modules/LatestCard";
import "./latest.css";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

export default function Latest() {
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    check();
  }, []);
  const check = async () => {
    const querySnapshot = await getDocs(
      query(collection(db, "blogs"), orderBy("time", "desc"))
    );
    const blog = [];
    querySnapshot.forEach((doc) => {
      blog.push(doc.data());
      if (blog.length === querySnapshot.size) {
        setBlogData(blog);
      }
    });
  };

  return (
    <div className="latest-container">
      <div className="latest-header">Welcome to FormBharlo</div>
      <div className="latest-description">
        With FormBharlo you can stay updated with the latest exam updates like
        JEE or NEET. We provide timely information about exam forms, dates, and
        other important details to help you prepare better.
      </div>
      <div className="latest-cards">
        {blogData && blogData.map((blog) => <LatestCard blog={blog} />)}
      </div>
    </div>
  );
}
