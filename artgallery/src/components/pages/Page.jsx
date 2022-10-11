import React from "react";
import "./Page.css";
import { Post } from "../posts/Post";

const Page = () => (
  <div>
    <div className="header">
      Hand Drawn
    </div>
    <div className="post-section-division">
      <div className="post-section">
        <Post classname="post"/>
        <Post classname="post"/>
        <Post classname="post"/>
        <Post classname="post"/>
        <Post classname="post"/>
        <Post classname="post"/>
        <Post classname="post"/>
        <Post classname="post"/>
      </div>
    </div>
  </div>
);

export default Page;
