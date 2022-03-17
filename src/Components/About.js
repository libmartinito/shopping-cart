import React from "react";
import Header from "./Header";
import "../Styles/About.css";

function About({ selectedProducts }) {
  return (
    <div className="container">
      <Header selectedProducts={selectedProducts} />
      <div className="about-body">
        <div className="about__part-one">
          <div className="about__copy">
            <div className="copy__wrapper">
              <p>We have helped equip people</p>
              <p>facing celeste mountain since 2018.</p>
            </div>
            <div className="copy__wrapper">
              <p>From having something to prove to</p>
              <p>trying to get to know a part of yourself,</p>
              <p>we have something for every intent.</p>
            </div>
            <div className="copy__wrapper">
              <p>We care deeply about your progress.</p>
              <p>Hit us up if you find yourself at rock bottom.</p>
              <p>Hit us up even if you killed it hard.</p>
              <p>We will bake you a pie.</p>
            </div>
          </div>
          <img
            src="./Images/avatar.png"
            alt="avatar"
            className="about__avatar"
          />
        </div>
        <img
          src="./Images/pie.png"
          alt="groufie with a strawberry pie"
          className="about__group-pic"
        />
      </div>
    </div>
  );
}

export default About;
