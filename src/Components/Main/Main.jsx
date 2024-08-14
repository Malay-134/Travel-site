import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./main.css";
import img from "../../Assets/image.jpg";
import img1 from "../../Assets/image1.jpg";
import img2 from "../../Assets/image2.jpg";
import img3 from "../../Assets/image3.jpg";
import img4 from "../../Assets/image4.jpg";
import img5 from "../../Assets/image5.jpg";
import img6 from "../../Assets/image6.jpg";
import img7 from "../../Assets/image7.jpg";
import img8 from "../../Assets/image8.jpg";
import { GrLocation } from "react-icons/gr";
import { HiOutlineClipboardCheck } from "react-icons/hi";

const Data = [
  {
    id: 1,
    imgSrc: img,
    title: "Santorini",
    location: "Greek Islands",
    grade: "CULTURAL RELAX",
    fees: "$600",
    description:
      "Santorini is known for its stunning sunsets, whitewashed buildings with blue-domed roofs, and dramatic cliffside views over the Aegean Sea.",
  },
  {
    id: 2,
    imgSrc: img1,
    title: "Kyoto",
    location: "Japan",
    grade: "CULTURAL RELAX",
    fees: "$500",
    description:
      "Kyoto is famous for its traditional temples, picturesque gardens, imperial palaces, and the stunning Arashiyama bamboo forest.",
  },
  {
    id: 3,
    imgSrc: img2,
    title: "Cape Town",
    location: "South Africa",
    grade: "CULTURAL RELAX",
    fees: "$400",
    description:
      "Cape Town offers a vibrant mix of natural beauty with Table Mountain, pristine beaches, rich cultural heritage, and excellent wine regions.",
  },
  {
    id: 4,
    imgSrc: img3,
    title: "New York City",
    location: "USA",
    grade: "CULTURAL RELAX",
    fees: "$550",
    description:
      "New York City is a global metropolis known for its iconic landmarks like Times Square, Central Park, Broadway shows, and diverse culinary scene.",
  },
  {
    id: 5,
    imgSrc: img4,
    title: "Queenstown",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$600",
    description:
      "Queenstown is an adventure capital with stunning alpine scenery, thrilling activities like bungee jumping and skiing, and picturesque Lake Wakatipu.",
  },
  {
    id: 6,
    imgSrc: img5,
    title: "Marrakech",
    location: "Morocco",
    grade: "CULTURAL RELAX",
    fees: "$500",
    description:
      "Marrakech delights with its vibrant souks, historic medina, stunning palaces like Bahia Palace, and the bustling Jemaa el-Fnaa square.",
  },
  {
    id: 7,
    imgSrc: img6,
    title: "Rio de Janeiro",
    location: "Brazil",
    grade: "CULTURAL RELAX",
    fees: "$500",
    description:
      "Rio de Janeiro captivates with its iconic Christ the Redeemer statue, Copacabana and Ipanema beaches, vibrant Carnival celebrations, and lively samba scene.",
  },
  {
    id: 8,
    imgSrc: img7,
    title: "Dubrovnik",
    location: "Europe",
    grade: "CULTURAL RELAX",
    fees: "$400",
    description:
      "Dubrovnik is a medieval walled city on the Adriatic Sea, famous for its well-preserved historic buildings, stunning coastal views, and Game of Thrones filming locations.",
  },
  {
    id: 9,
    imgSrc: img8,
    title: "Bora Bora",
    location: "French Polynesia",
    grade: "CULTURAL RELAX",
    fees: "$500",
    description:
      "Bora Bora is a tropical paradise with turquoise lagoons, overwater bungalows, vibrant coral reefs, and a serene atmosphere perfect for romantic getaways.",
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most Visited Destinations
        </h3>
      </div>
      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, location, title, fees, grade, description }) => {
            return (
              <div data-aos="fade-up" className="singleDestination" key={id}>
                <div className="imageDiv">
                  <img src={imgSrc} alt={title} />
                </div>
                <div className="cardInfo">
                  <h4 className="title">{title}</h4>
                  <span className="continent flex">
                    <GrLocation className="icon" />
                    <span className="name">{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS
                    <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
