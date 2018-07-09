import React, { Component } from 'react';

class TodoItem extends Component {
  render() {                
    return (
      <tr>
        <td>{this.props.todo.text}</td>
        <td>{this.props.todo._owner.name}</td>
        <td><button onClick={this.props.onDelete}>Delete</button></td>
      </tr>
    );
  }
}

export default TodoItem;
