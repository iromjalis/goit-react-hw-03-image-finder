import React from "react";
import PropTypes from "prop-types";
import css from "./Container.module.css";

const Container = ({ children }) => (
  <div className={css.Container}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
