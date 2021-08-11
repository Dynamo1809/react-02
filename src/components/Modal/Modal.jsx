import {Component} from 'react';
import {createPortal} from 'react-dom';
import './Modal.scss';

const modalRoot = document.querySelector('#modal-root')

export class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount')
    window.addEventListener('keydown', this.handleKeyDown);
  };

  componentWillUnmount() {
    console.log('Modal componentWillUnmount')
    window.removeEventListener('keydown', this.handleKeyDown);
  };

  handleKeyDown = e => {
    if(e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if(e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal( 
    <div className="Modal__backdrop" onClick={this.handleBackdropClick}>
      <div className="Modal__content">{this.props.children}</div>
    </div>, modalRoot,)
  };
};
