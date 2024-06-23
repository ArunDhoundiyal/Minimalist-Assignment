import { FaInstagram } from "react-icons/fa";
import { RiYoutubeFill } from "react-icons/ri";
import { TiSocialTwitter } from "react-icons/ti";
import { RiFacebookFill } from "react-icons/ri";
import { LiaLinkedinIn } from "react-icons/lia";
import "./index.css";

const Footer = () => {
  return (
    <div className="Footer-container">
      <img
        src="https://res.cloudinary.com/da52fiag8/image/upload/v1718991655/Frame_65-removebg-preview_hcaex9.png"
        alt="footer-img"
        className="footer-img"
      />
      <div className="social-media-container">
        <p className="follow-us-text">Follow us on</p>
        <div className="icon-container">
          <div className="social-media-icon-container">
            <FaInstagram className="social-media-icon" />
          </div>
          <div className="social-media-icon-container">
            <RiYoutubeFill className="social-media-icon" />
          </div>
          <div className="social-media-icon-container">
            <TiSocialTwitter className="social-media-icon" />
          </div>
          <div className="social-media-icon-container">
            <RiFacebookFill className="social-media-icon" />
          </div>
          <div className="social-media-icon-container">
            <LiaLinkedinIn className="social-media-icon" />
          </div>
        </div>
      </div>
      <img
        src="https://res.cloudinary.com/da52fiag8/image/upload/v1718991655/Frame_65-removebg-preview_hcaex9.png"
        alt="footer-img"
        className="footer-img"
      />
    </div>
  );
};

export default Footer;
