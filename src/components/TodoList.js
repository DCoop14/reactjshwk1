import React, { Component } from 'react'

export default class TodoList extends Component {
  constructor() {
    super();
    //initial state
    this.state = {
      todos: []
    }
   }
  
  
  
  
  render() {
    return (
    <div>
        {this.state.todos.map(() =>{
          return(
        <div class = "container m-5">
            <h3>Todo List</h3>
            <br></br>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Add Task</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="enter new task"/>
            </div>
                <button type='submit' class="btn btn-outline-info">Add</button>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                </div>
          )
        })}
    {this.props.TodoList}
    </div>
    )
  }
}
