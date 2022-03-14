import React from "react";
import Header from "./Header";
import "../Styles/Home.css";

function Home() {
  return (
    <div className="container">
      <Header />
      <div className="body">
        <div className="copy-one">
          <p>There may come a time</p>
          <p>where you feel the need to face something</p>
          <p>vast, immense, and unforgiving</p>
          <p>in spite of all rational thoughts you think to yourself.</p>
        </div>
        <div className="copy-two">
          <p>If that time is now,</p>
          <p>we hope that we can help.</p>
        </div>
      </div>
    </div>
  );
}
export default Home;
