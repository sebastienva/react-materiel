// @flow
import React, { Component } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import Ink from 'react-ink';

import Button from '../Button/Button';

type Props = {
  /** Button content */
  children: Node,
  /** React class, allow to customize the button */
  className: string,
}

/**
  todo
*/
class Card extends Component {

  static defaultProps = {
    className: '',
  };

  props: Props;

  render() {
    return (
      <div className="mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">Welcome</h2>
        </div>
        <div className="mdl-card__supporting-text">
          {this.props.children}
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            Ok
          </a>
        </div>
        <div className="mdl-card__menu">
          <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
            <i className="material-icons">share</i>
          </button>
          <Ink style={{borderRadius: '50%', cursor: 'pointer'}}/>
        </div>
      </div>
    );
  }
}

export default Card;
