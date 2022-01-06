import PropTypes from "prop-types"; //ako vekje sakame da pravime Prop Types
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ title, onAdd, showAdd }) => {
  // const Header = (props) => {  1
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {/* If showAdd is true, show 'Close', else show "Add" */}
      {location.pathname === "/" && (
        <Button //if loc.path is equal to /, show button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
      {/* <h1>{props.title}</h1> 1*/}
    </header>
  );
};

//This is the default props
//Ako imame drug prop vo App, toj ke go zamenit ovaj prop
Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//CSS in JS
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",  //ova ovde, namesto gore vo style, kaj h1, so double {{}}
// };

export default Header;
