// @flow
import React, { Component } from 'react';

import { Dropdown, DropdownItem, DropdownContent, Button} from '../../../src';

type State = {
    page: number,
}

class DropdownDemo extends Component {

  state: State;

  constructor(props: Object) {
    super(props);

    this.state = {
      page: 1,
    };
  }

  handleTest1 = () => {
    alert('Test 1');
  }

  handleTest2 = () => {
    alert('Test 2');
  }

  render() {
    return (
      <div>
        <Dropdown>
          <Button><i className="material-icons left">class</i>Dropdown</Button>
          <DropdownContent>
            <DropdownItem onClick={this.handleTest1}>
              <i className="material-icons left">drafts</i>Test 1
            </DropdownItem>
            <DropdownItem onClick={this.handleTest2}>
              <i className="material-icons left">mail</i>Test 2
            </DropdownItem>
          </DropdownContent>
        </Dropdown>
      </div>
    );
  }
}

export default DropdownDemo;
