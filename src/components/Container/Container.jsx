import React from "react";
import PropTypes from "prop-types";
import css from "./Container.module.css";
import { Fragment } from "react";

const Container = ({ children }) => (
  <Fragment className={css.Container}>{children}</Fragment>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
