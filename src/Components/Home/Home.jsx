import React, { useEffect } from "react";
import "./home.css";
import video1 from "../../Assets/Video_1.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { FaTripadvisor } from "react-icons/fa";
import { TbApps } from "react-icons/tb";
import { BsListTask } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video1} muted autoPlay loop type="video/mp4"></video>
      <div className="homeContainer container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            our packages
          </span>
          <h1 data-aos="fade-up" className="homeTitle">
            Search Your Holiday
          </h1>
        </div>
        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlfor="city">Search Your Destination:</label>
            <div className="input flex">
              <input type="text" placeholder="Enter name here..." />
              <GrLocation className="icon" />
            </div>
          </div>

          <div className="dateInput">
            <label htmlfor="date">Select Your Date</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="priceInput">
            <div className="lable_total flex">
              <label htmlfor="price">Max price:</label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>
          <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span>More filters</span>
          </div>
        </div>
        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="leftIcon">
            <FiFacebook className="icon" />
            <AiOutlineInstagram className="icon" />
            <FaTripadvisor className="icon" />
          </div>
          <div className="rightIcon">
            <BsListTask className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
