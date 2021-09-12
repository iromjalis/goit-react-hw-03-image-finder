import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Modal.styles';

class Modal extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Modal will mount');
  }

  componentDidMount = () => {
    console.log('Modal mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Modal will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Modal will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Modal did update');
  }

  componentWillUnmount = () => {
    console.log('Modal will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="ModalWrapper">
        Test content
      </div>
    );
  }
}

Modal.propTypes = {
  // bla: PropTypes.string,
};

Modal.defaultProps = {
  // bla: 'test',
};

export default Modal;
