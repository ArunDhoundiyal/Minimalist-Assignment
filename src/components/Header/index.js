import "./index.css";

const Header = ({ setTogglePopup }) => {
  const onClickTogglePopup = () => {
    setTogglePopup((preState) => !preState);
  };
  return (
    <div className="Header-container">
      <div className="navbar-container">
        <div>
          <img
            src="https://res.cloudinary.com/da52fiag8/image/upload/v1719044016/Frame_1_jqhxpp.png"
            alt="frame-img"
            className="header-img"
          />
        </div>
      </div>
      <div className="header-text-container">
        <h1 className="header-heading">The choice is yours.</h1>
        <h1 className="header-heading">Because they don't have one.</h1>
        <button className="header-button" onClick={onClickTogglePopup}>
          QUICK VIEW
        </button>
      </div>
    </div>
  );
};

export default Header;
