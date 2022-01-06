import PropTypes from "prop-types";

//v.1
// const Button = () => {
//   return <button className="btn">Add</button>;
// };

//v.2
// gi staveme Props-ojte ovde
const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
