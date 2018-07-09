import React, { Component } from 'react';
import api from '../api';

class TodoItem extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     todos: []
  //   }
  // }
  // componentDidMount(){
  //   api.getTodos().then(todos => {
  //     this.setState({
  //       todos
  //     })
  //   })
  // }
  render() {                
    return (
      <tr>
        <td>{this.props.todo.text}</td>
        <td>{this.props.todo._owner.name}</td>
        <td><button>Delete</button></td>
      </tr>
    );
  }
}

export default TodoItem;
