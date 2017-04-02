import React, { Component } from 'react';
import ElevatorWrapper from  './Elevator';
import './Building.css';


class Square extends React.Component {

  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}

class Elevator extends React.Component {

  render() {
    var elevator = "";
    if(this.props.elevator)
    {
      elevator =(<img src="https://d30y9cdsu7xlg0.cloudfront.net/png/19176-200.png" height="64" width="64"/>)
    }
    return (
      <button className="square">
      {elevator}
      </button>
    );
  }
}

export class Button extends React.Component {

  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()} >
      <img src="http://www.freeiconspng.com/uploads/push-button-icon-png-2.png" height="64" width="64"/>
      </button>
    );
  }
}

export class Board extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { currentFloor: 3,
  //                 targetFloor: 3};
  // }
  // handleClick(i) {
  //   this.setState({ targetFloor: i }, function(){
  //        console.log(this.state.targetFloor)
  //   });
  //
  // }
  // checkElevator(i){
  //   // console.log("target:"+this.state.targetFloor+" current:"+this.state.currentFloor)
  //   if (this.state.targetFloor == i )
  //   {
  //     this.state.currentFloor= i;
  //     return true
  //   }
  //   else {
  //     return false
  //   }
  // }

  renderSquare(i) {
    return <Square value={i}/>;
  }
  renderButton(i) {
     return <Button floor={i} onClick={() => this.props.funcOnclick(i)}/>;
  }
  renderElevator(i) {
    return <Elevator floor={i} elevator={this.props.funcCheck(i)}/>;
  }
  render() {
    return (
      <div>
      <div className="board-row">
        {this.renderSquare(9)}
        {this.renderElevator(9)}
        {this.renderButton(9)}
      </div>
      <div className="board-row">
        {this.renderSquare(8)}
        {this.renderElevator(8)}
        {this.renderButton(8)}
      </div>
      <div className="board-row">
        {this.renderSquare(7)}
        {this.renderElevator(7)}
        {this.renderButton(7)}
      </div>
      <div className="board-row">
        {this.renderSquare(6)}
        {this.renderElevator(6)}
        {this.renderButton(6)}
      </div>
        <div className="board-row">
          {this.renderSquare(5)}
          {this.renderElevator(5)}
          {this.renderButton(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(4)}
          {this.renderElevator(4)}
          {this.renderButton(4)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderElevator(3)}
          {this.renderButton(3)}
        </div>
        <div className="board-row">
          {this.renderSquare(2)}
          {this.renderElevator(2)}
          {this.renderButton(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(1)}
          {this.renderElevator(1)}
          {this.renderButton(1)}
        </div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderElevator(0)}
          {this.renderButton(0)}
        </div>
      </div>
    );
  }
}

class Building extends React.Component {
  render() {
    return (
      <div className="building">>
          <Board funcOnclick={this.props.funcOnclick} funcCheck={this.props.funcCheck} />
      </div>
    );
  }
}

export default Building;
