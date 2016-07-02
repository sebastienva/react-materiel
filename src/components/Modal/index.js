import React, { Component, PropTypes } from 'react';

import './styles.css';

export default class Modal extends Component {

  render() {

    return (
      <div className="bg-modal">
        <div className="modal-container">
          <div className="close" onClick={this.props.close}></div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
