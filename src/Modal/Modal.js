// @flow
import React, { Component } from 'react';
import classNames from 'classnames';

type Props = {
  /** Button content */
  children: Node,
  /** React class, allow to customize the button */
  className: string,
  /** Tells if the modal should be opened or not */
  open: boolean,
  /** Callback fired when the modal is closed */
  onClose: ?() => void,
}

/**
  todo
*/
class Modal extends Component {

  static defaultProps = {
    className: '',
    open: false,
  };

  props: Props;

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (e: any) => {
    if (e.keyCode === 27 && this.props.onClose && this.props.open) {
      this.props.onClose();
    }
  }

  render() {
    let modal = '';

    if (this.props.open) {
      modal = (<div>
        <div className="modal open">
          <div className="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div className="modal-footer">
            <a className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
          </div>
        </div>
        <div
          className="lean-overlay"
          style={{ zIndex: 1002, display: 'block', opacity: 0.5 }}
          onClick={this.props.onClose}
        ></div>
      </div>);
    }

    return (
      <div>
        {modal}
      </div>
    );
  }
}

export default Modal;
