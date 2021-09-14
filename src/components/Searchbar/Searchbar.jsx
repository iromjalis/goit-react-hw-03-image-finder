import React, { PureComponent } from "react";
// import PropTypes from 'prop-types';
// import { Test } from './Searchbar.styles';

class Searchbar extends PureComponent {
  state = { query: "" };

  onChange = (e) => {
    console.log(e.target.value);
    this.setState({ query: e.target.value });
    this.props.onSubmit(this.state.query);
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state.query);
  };
  render() {
    const { query } = this.state;

    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            value={query}
            type="text"
            autoComplete="off"
            placeholder="Search images and photos"
            onChange={this.onChange}
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
