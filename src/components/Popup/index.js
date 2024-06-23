import "./index.css";
import { TfiClose } from "react-icons/tfi";
import { PiArrowFatRight } from "react-icons/pi";

const Popup = ({ togglePopup, setTogglePopup }) => {
  const onClickCloseToggleButton = () => {
    setTogglePopup((preState) => !preState);
  };
  const closePopup = () => {
    setTogglePopup((preState) => !preState);
  };
  const togglePopupCard = togglePopup ? "card" : "hide-card";
  return (
    <div className={togglePopupCard}>
      <div className="close-icon-button-container">
        <TfiClose className="close-button" onClick={onClickCloseToggleButton} />
      </div>
      <div className="card-image-container">
        <img
          src="https://res.cloudinary.com/da52fiag8/image/upload/v1718973945/Frame_16_lj3yau.png"
          alt="crackers-image-1"
          className="card-image"
        />
        <div className="sub-card-container">
          <img
            src="https://res.cloudinary.com/da52fiag8/image/upload/v1718973945/Frame_16_lj3yau.png"
            className="sub-horizontal-card-image"
            alt="crackers-img-2"
          />
          <img
            src="https://res.cloudinary.com/da52fiag8/image/upload/v1718973942/Frame_69_exdauw.png"
            className="horizontal-card-image"
            alt="crackers-img-3"
          />
          <img
            src="https://res.cloudinary.com/da52fiag8/image/upload/v1718973942/Frame_69_exdauw.png"
            className="horizontal-card-image"
            alt="crackers-img-4"
          />
          <img
            src="https://res.cloudinary.com/da52fiag8/image/upload/v1718973942/Frame_69_exdauw.png"
            className="horizontal-card-image"
            alt="crackers-img-5"
          />
        </div>
      </div>

      <div className="card-content">
        <div className="pop-up-card-heading-close-container">
          <h2 className="top-pop-up-card-heading">Raju Rassibomb</h2>

          <TfiClose className="close-icon" onClick={closePopup} />
        </div>
        <hr className="dotted-hr-line" />
        <span className="mrp">MRP:</span>
        <br />
        <p className="mrp-text">Raju's Dreams/-</p>
        <span className="product-description">Product Description:</span>
        <br />{" "}
        <p>
          This product packs an extra punch, thanks to the liberal blood, sweat,
          and tears of a young boy.
        </p>
        <hr className="dotted-hr-line" />
        <span className="product-description">Product Contents:</span>
        <ul className="list-style">
          <li>
            <PiArrowFatRight className="arrow-icon" />
            10 hand-hurting pieces of rassi bombs
          </li>
          <li>
            <PiArrowFatRight className="arrow-icon" />
            Jilled with great pain
          </li>
          <li>
            <PiArrowFatRight className="arrow-icon" />
            Raju's hopes
          </li>
        </ul>
        <hr className="dotted-hr-line" />
        <span className="shipping-time">Shipping Time:</span>
        <p>Before Raju understands that his dreams do not matter.</p>
        <button className="choose-button">Choose Now</button>
      </div>
    </div>
  );
};

export default Popup;
