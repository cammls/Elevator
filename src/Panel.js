import React, { Component } from 'react';
import Building, {Button, Board} from './Building';
import './Panel.css';

class OpenClose extends React.Component {
  render() {
    return (
      <div>
      open/close
      </div>
    );
  }
}
class UpDown extends React.Component {
  render() {
    return (
      <div>
      up/down
      </div>
    );
  }
}
class Panel extends React.Component {
  renderButton(i) {
    return <Button floor={i} onClick={() => Board.handleClick(i)}/>;
  }
  render() {
    return (
      <div className="panel">
         {this.renderButton(0)}
         {this.renderButton(1)}
          <OpenClose />
          <UpDown />
      </div>
    );
  }
}
export default Panel;
