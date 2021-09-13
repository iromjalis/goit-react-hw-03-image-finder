import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
// import { Test } from './Modal.styles';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal');
class Modal extends PureComponent {
  state = {};

  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        console.log('close modal');
      }
    });
  }

  render() {
    return createPortal(
      <div className="Overlay">
        <div className="Modal">
          {this.props.children}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
            alt="No available"
            width="350"
          />
        </div>
      </div>,
      modalRoot,
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
