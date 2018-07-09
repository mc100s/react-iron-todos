import React, { Component } from 'react';
import api from '../api';
import TodoItem from './TodoItem';
import TodoCreator from './TodoCreator';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      newTodoText: "Enter Todo",
    }
  }
  componentDidMount(){
    api.getTodos().then(todos => {
      this.setState({
        todos
      })
    })
  }

  handleAdd(e){
    e.preventDefault();
    let todos = this.state.todos.slice()

    this.setState({
      todos: [
        ...this.state.todos, 
        {
          text: this.state.newTodoText, 
          _owner: api.loadUser()
        }
      ],
      newTodoText: ''
    })

    api.addTodos({
      text: this.state.newTodoText, 
    })
    .then(data => {
      this.setState({
        todos: [
          ...todos, 
          {...data.todo, _owner: api.loadUser()}
        ],
      })
    })
    
  }

  handleChange(e){
    this.setState({
      newTodoText: e.target.value
    })
  }

  handleDelete(id) {
    api.deleteTodos(id)
    .then(data => console.log(data))

    this.setState({
      todos: this.state.todos.filter(todo => todo._id !== id)
    })
  }

  render() {                
    return (
      <div className="Home">
        {api.isLoggedIn() && <TodoCreator 
          onAdd={this.handleAdd.bind(this)}
          onChange={this.handleChange.bind(this)} 
          newTodoText={this.state.newTodoText}
        />}
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
              return (<TodoItem key={i} todo={todo} onDelete={()=>this.handleDelete(todo._id)}/>)
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;
