import React, { Component } from 'react';

class CompleteHeader extends Component {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default CompleteHeader;
