import React, { Component } from "react";
// import PropTypes from "prop-types";
//import { Test } from './Searchbar.styles';

class Searchbar extends Component {
  state = {
    query: "",
  };
  handleChange = (e) => {
    this.setState({ query: e.currentTarget.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);

    this.setState({ query: "" });
  };
  render() {
    const { onSubmit, onChange, value } = this.props;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            value={this.state.query}
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  // bla: PropTypes.string,
};

Searchbar.defaultProps = {
  // bla: 'test',
};

export default Searchbar;
