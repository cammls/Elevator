import React, { Component } from 'react';
import ElevatorWrapper from  './Elevator';
import './Panel.css';

class CallButton extends React.Component {
  render() {
    console.log(this.props.elevator)
    var className = 'callbutton' + (this.props.elevator ? ' highlighted' : '');
    return(
    <button className={className} onClick={() => this.props.onClick()}>
    {this.props.floor}
    </button>
  );
  }
}

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
  renderCallButton(i) {
    return <CallButton floor={i} onClick={() => this.props.funcOnclick(i)} elevator={this.props.funcCheck(i)}/>;
  }
  render() {
    return (
      <div className="panel">
      <div>
         {this.renderCallButton(0)}
         {this.renderCallButton(1)}
         {this.renderCallButton(2)}
         {this.renderCallButton(3)}
         {this.renderCallButton(4)}
         {this.renderCallButton(5)}
         {this.renderCallButton(6)}
         {this.renderCallButton(7)}
         {this.renderCallButton(8)}
         {this.renderCallButton(9)}
         </div>
          <OpenClose />
          <UpDown />
      </div>
    );
  }
}
export default Panel;
