// @flow
import React, { Component } from 'react';

import { Modal, Button } from '../../../src';

type State = {
  open1: boolean;
}

class ModalDemo extends Component {

  state: State;

  constructor(props: Object) {
    super(props);

    this.state = {
      open1: false,
    };
  }

  handleOpen1 = () => {
    this.setState({ open1: true });
  }

  handleClose1 = () => {
    this.setState({ open1: false});
  }

  render() {
    return (
      <div>
        <h3>Simple card</h3>

        <Button onClick={this.handleOpen1}>Modal</Button>
        <Modal open={this.state.open1} onClose={this.handleClose1}>
          test
        </Modal>
      </div>
    );
  }
}

export default ModalDemo;
