import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import EditorJS from "@editorjs/editorjs";
import "./blog.css";

export default function Blog() {
  const navigation = useParams();
  const [blogData, setBlogData] = useState([]);
  const [html, setHtml] = useState("");

  useEffect(() => {
    check();
  }, []);

  const check = async () => {
    const querySnapshot = await getDocs(collection(db, "blogs"));
    const blog = [];
    querySnapshot.forEach((doc) => {
      if (doc.data().heading === navigation.id) {
        blog.push(doc.data());
        setBlogData(blog);
      }
    });
  };

  useEffect(() => {
    if (blogData.length > 0) {
      const editorJS = new EditorJS({
        holder: "editorjs",
        readOnly: true, // set to true to prevent editing the output
        data: { ...blogData[0]?.outputData }, // set the outputData as the initial data for the EditorJS instance
      });
    }
  }, [blogData]);
  const functionconMili = (mSecVal) => {
    return new Date(mSecVal).toDateString();
  };
  return (
    <div className="editorBlog">
      <div className="blogImg">
        <img src={blogData[0]?.image} alt="" />
      </div>
      <div className="blogHeading">{blogData[0]?.heading}</div>
      <div className="blogtime">{functionconMili(blogData[0]?.time)}</div>
      <div className="blogSubHeading">{blogData[0]?.subHeading}</div>
      <div id="editorjs"></div>

      <Link state={{ activeTab: "book" }} to="/">
        <button className="bookReg">Book Your Registration At Home</button>
      </Link>
    </div>
  );
}
