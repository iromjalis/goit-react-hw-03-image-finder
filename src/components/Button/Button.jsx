import React, { PureComponent } from "react";
// import PropTypes from 'prop-types';
// import { Test } from './Button.styles';

class Button extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  render() {
    return <button className="ButtonWrapper">Load more...</button>;
  }
}

Button.propTypes = {
  // bla: PropTypes.string,
};

Button.defaultProps = {
  // bla: 'test',
};

export default Button;
