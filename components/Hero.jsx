import React from "react";
import { Link } from "react-scroll";

const Hero = ({ heading, message, btnName, linkTo }) => {
  return (
    <section className="full-screen relative">
      <div className="overlay"></div>
      <div className=" space-y-5 text-white z-10 relative md:ml-32 mx-10">
        <h1 className="main-heading">{heading}</h1>
        <p className=" text-lg">{message}</p>
        <Link className="block" to={linkTo} smooth duration={500} offset={-20}>
          <button className="btn">{btnName}</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
