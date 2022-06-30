import "./backdrop.scss";

const Backdrop = ({ show, toggleClick }) => {
  return show && <div className="backdrop" onClick={toggleClick}></div>;
};

export default Backdrop;
