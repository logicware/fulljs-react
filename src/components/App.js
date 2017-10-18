import React from 'react';

import Header from './Header';
import List from './List';

const color = Math.random() > 0.5 ? 'green' : 'blue';

import API from '../api';
const api = new API();

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = { headerMessage: 'To-Do List', data: this.props.initialTasks };
  }

  handleClick(id) {
    //console.log("Task Clicked");
    api.toggleTask(id)
      .then((tasks) => {
        //console.log(tasks);
        this.setState({data: tasks});
      }).catch((err) => {
        console.log(err);
      });

/*
    let clone = this.state.data.slice(0);
    clone.forEach((todo) => {
      if (todo._id === id) {
       todo.isDone = !todo.isDone;
      }
    });
    this.setState({data: clone });
*/
  }


  componentDidMount() {
    console.log('Component Mounted!');
    api.getAllTasks()
      .then((tasks) => {
        //console.log(tasks);
        this.setState({data: tasks});
      }).catch((err) => {
        console.log(err);
      });
  }

  componentWillUnmount() {
    console.log('Component will be Un-mounted!');
  }

  render() {
    return (
      <div className="text-left">
        <Header color={color} message={this.state.headerMessage} />
        <List data={this.state.data}
              onClick={this.handleClick.bind(this)} />
      </div>
    );
  }
}

export default App;