import React, { Component } from 'react';
import axios from 'axios';

class LogList extends React.Component {
  render() {
    var logs = this.props.logs.map(function(log) {
              if (log.currentFloor){
             return <div key={log._id}>{log.currentFloor} -> {log.targetFloor}</div>;
           }
         });
         return <div>{logs}</div>;
  }
}

class Logs extends React.Component {
  constructor(props) {
 super(props);
 this.state = { logs: [] };
 this.loadLogsFromServer = this.loadLogsFromServer.bind(this);
 }
 loadLogsFromServer() {
 axios.get('http://localhost:3001/api/logs')
 .then(res => {
 this.setState({ logs: res.data });
 })
 }
 componentDidMount() {
 this.loadLogsFromServer();
  setInterval(this.loadLogsFromServer, 2000);
 }
  render() {
    //  console.log(this.state.logs)
    return (
      <div className="logs">
      <h2>Elevator logs:</h2>
      <LogList logs={ this.state.logs }/>
      </div>
    );
  }
}

export default Logs;
