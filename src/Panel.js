import React, { Component } from 'react';
import ElevatorWrapper from  './Elevator';
import updown from './updown.jpg';
import up from './up.png';
import down from './down.png';
import './Panel.css';

class CallButton extends React.Component {
  render() {
    var className = 'callbutton' + (this.props.elevator ? ' highlighted' : '');
    return(
    <button className={className} onClick={() => this.props.onClick()}>
    {this.props.floor}
    </button>
  );
  }
}

class UpDown extends React.Component {
  render() {
       var icon ="";        // (<img src={updown} height="80" width="70"/>);
      if (this.props.state.isMoving)
      {
        if(this.props.state.movingUp){
          icon= (<img src={up} height="80" width="70"/>);
        }
        else {
            icon= (<img src={down} height="80" width="70"/>);
        }
      }
      else {
        icon = (<img src={updown} height="80" width="70"/>);
      }
    return (
      <div className="updown">
      {icon}
      </div>
    );
  }
}
class OpenClose extends React.Component {
  render() {
      var status = (this.props.state.doorStatus ? 'Opened' : 'Closed');
      var className = 'openclose '+(this.props.state.doorStatus ? 'open' : 'close')
    return (
      <div className={className}>
      {status}
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
          <OpenClose state={this.props.state}/>
          <UpDown state={this.props.state}/>
      </div>
    );
  }
}
export default Panel;
