// @flow
import React, {Component} from 'react';
import onClickOutside from 'react-onclickoutside';

import {Button} from '../Button/Button';

type Props = {
  /** Button content */
  children: Node,
  /** React class, allow to customize the button */
  className: string,
  /** Tells if the modal should be opened or not */
  open: boolean,
  /** Callback fired when the modal is closed */
  onClose: ?() => void
};

/**
  Component based on native dialog
*/
class Modal extends Component {
  static defaultProps = {
    className: '',
    open: false
  };

  props: Props;

  dialog;

  componentDidMount() {
    this.dialog.onclose = () => {
      if (this.props.onClose) {
        this.props.onClose();
      }
    };
  }

  handleClickOutside = () => {
    if (this.props.onClose && this.props.open) {
      this.props.onClose();
    }
  };
  componentWillUpdate = nextProps => {
    if (nextProps.open && !this.props.open) {
      this.dialog.showModal();
    }
  };
  render() {
    return (
      <div>
        <dialog
          className="mdl-dialog"
          ref={ref => {
            this.dialog = ref;
          }}
        >
          <h3 className="mdl-dialog__title">Title</h3>
          <div className="mdl-dialog__content">
            {this.props.children}
          </div>
          <div className="mdl-dialog__actions">
            <Button type="flat" onClick={this.props.onClose}>Close</Button>
            <Button type="flat">Disabled action</Button>
          </div>
        </dialog>
      </div>
    );
  }
}

export default onClickOutside(Modal);
