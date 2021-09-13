import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
// import { Test } from './Loader.styles';

class Loader extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return <div className="LoaderWrapper">Loader</div>;
  }
}

Loader.propTypes = {
  // bla: PropTypes.string,
};

Loader.defaultProps = {
  // bla: 'test',
};

export default Loader;
