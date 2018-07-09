import React, { Component } from 'react';
import api from '../api';

class TodoCreator extends React.Component {



  render(){
    return(
      <form onSubmit={this.props.onAdd}>
      <input onChange={this.props.onChange} value={this.props.newTodoText} type="text" name="creatorText"/>
      <input type="submit" value="Add"/>
      </form>
    )
  }
}

export default TodoCreator;
