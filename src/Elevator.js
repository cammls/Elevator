import React, { Component } from 'react';
import Building from './Building';
import Panel from './Panel';
import './Elevator.css';

class ElevatorWrapper extends React.Component {
  constructor(props) {

    super(props);
    this.state = { currentFloor: 3,
                  targetFloor: 3};
  }
  // componentDidMount() {
  //   console.log(this)
  // }
  handleClick(i) {
    this.setState({ targetFloor: i }, function(){
        //  console.log(this.state.targetFloor)
    });

  }
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
      <Panel funcOnclick={this.handleClick.bind(this)} funcCheck={this.checkElevator.bind(this)}/>
      </div>
    );
  }

}

export default ElevatorWrapper;
