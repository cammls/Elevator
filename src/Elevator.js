import React, { Component } from 'react';
import Building from './Building';
import Panel from './Panel';
import './Elevator.css';

class ElevatorWrapper extends React.Component {
  constructor(props) {

    super(props);
    this.state = { currentFloor: 3,
                  targetFloor: 3,
                  doorStatus: true,
                  isMoving: false,
                  movingUp: false};
  }
  // componentDidMount() {
  //   console.log(this)
  // }
  handleClick(i) {
    var that = this;
    this.setState({ doorStatus: false, isMoving:true})
    if (this.state.currentFloor < i) {
      this.setState({movingUp: true})
    }
    setTimeout(function(){
      that.setState({ targetFloor: i, doorStatus: true, isMoving:false });
    }, 1000)}


  checkElevator(i){
    if (this.state.targetFloor == i )
    {
      this.state.currentFloor= i;
      return true
    }
    else {
      return false
    }
  }

  render() {
    return (
      <div>
      <Building funcOnclick={this.handleClick.bind(this)} funcCheck={this.checkElevator.bind(this)} />
      <Panel funcOnclick={this.handleClick.bind(this)} funcCheck={this.checkElevator.bind(this)} state={this.state}/>
      </div>
    );
  }

}

export default ElevatorWrapper;
