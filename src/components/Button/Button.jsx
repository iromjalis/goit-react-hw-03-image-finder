import React from "react";
// import PropTypes from "prop-types";
//import { Test } from './Button.styles';

// window.scrollTo({
//   top: document.documentElement.scrollHeight,
//   behavior: "smooth",
// });

const Button = ({ onClick }) => (
  <div className="ButtonWrapper">
    <button type="button" onClick={onClick}>
      Load more
    </button>
  </div>
);

Button.propTypes = {
  // bla: PropTypes.string,
};

Button.defaultProps = {
  // bla: 'test',
};

export default Button;
