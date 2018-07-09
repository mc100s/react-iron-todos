import React, { Component } from 'react';
import api from '../api';
import TodoItem from './TodoItem';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }
  componentDidMount(){
    api.getTodos().then(todos => {
      this.setState({
        todos
      })
    })
  }
  render() {                
    return (
      <div className="Home">
        <h2>Home</h2>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Owner</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map((todo,i) => {
              return (<TodoItem key= {todo._id} todo={todo}/>)
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;
