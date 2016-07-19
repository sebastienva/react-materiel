// @flow
import React, { Component } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

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
      <div className="card">
        <div className="card-content">
          <span className="card-title">Card Title</span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div className="card-action">
          <Button type="flat"><Link to="button">This is a link</Link></Button>
          <Button type="flat">This is a link</Button>
        </div>
      </div>
    );
  }
}

export default Card;
