import { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Popup from "../Popup";
import "./index.css";
const Home = () => {
  const [togglePopup, setTogglePopup] = useState(false);
  console.log(togglePopup);
  return (
    <div className="Home-bg-container">
      <Popup togglePopup={togglePopup} setTogglePopup={setTogglePopup} />
      <Header setTogglePopup={setTogglePopup} />
      <div className="about-container">
        <h1 className="hr-line">About</h1>
        <div className="about-description">
          <img
            src="https://res.cloudinary.com/da52fiag8/image/upload/v1719048875/Frame_k3cckc.png"
            alt="crackers-img"
            className="crackers-img"
          />
          <div className="description-container">
            <p className="description">
              Our products are crafted exclusively from the dreams and screams
              of young kids who wanted to show their mastery in their chosen
              fields, but were directed towards a factory for daily wages. Each
              cracker bursts brighter than their lost smiles, and can be heard
              louder than their cries for miles.but them, burst them, brag about
              them.{" "}
            </p>
            <p className="about-choice-text">
              The choice is yours. Because they don't have one.
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/da52fiag8/image/upload/v1719048875/Frame_k3cckc.png"
            alt="crackers-img"
            className="crackers-img"
          />
        </div>
      </div>
      <div className="our-products-container">
        <h1 className="hr-line">Our products</h1>
        <div className="quick-view-container">
          <div className="product-img-container">
            <img
              src="https://res.cloudinary.com/da52fiag8/image/upload/v1718973945/Frame_16_lj3yau.png"
              alt="product-img"
              className="product-img"
            />
            <div className="text-button-container">
              <span className="bomb-name">Raju Rassibomb</span>
              <button className="quick-view-button">QUICK VIEW</button>
            </div>
          </div>
          <div className="product-img-container">
            <img
              src="https://res.cloudinary.com/da52fiag8/image/upload/v1718973945/Frame_16_lj3yau.png"
              alt="product-img"
              className="product-img"
            />
            <div className="text-button-container">
              <span className="bomb-name">Ladiyon ki Rani Chani</span>
              <button className="quick-view-button">QUICK VIEW</button>
            </div>
          </div>
        </div>
      </div>
      <div className="hr-container">
        <hr size="8" color="#ff6500" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

// https://minimalist-assignment-fawn.vercel.app/
