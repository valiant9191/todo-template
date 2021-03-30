import React, { Component } from 'react'

import './App.css'

class App extends Component {
  state = {
    todo: '',
    listOfTodos: [],
  }

  onInputChange = (event) => {
    this.setState({
      todo: event.target.value
    })
  }
  deleteTask=(indexTodo)=>{
    let newListofTodo=this.state.listOfTodos;
    newListofTodo.splice(indexTodo,1)
    this.setState({
      listOfTodos:newListofTodo
    })
    
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let newTodo = this.state.listOfTodos
    newTodo.push(this.state.todo)
    this.setState({
      listOfTodos: newTodo,
      todo: ''
      // listOfTodos:[...this.state.listOfTodos, this.state.todo]
    })
  }



  render() {
    return (
      <div className="App">
        <div className="conteiner">
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.todo}
            onChange={this.onInputChange}
            placeholder="write a task" />
          <button>Add task to do</button>
        </form>
        <div>
          {this.state.listOfTodos.length > 0
            ? this.state.listOfTodos.map((item, index) => (
              <p key={index}>{index+1}. {item} <button onClick={()=>this.deleteTask(index)}>done </button></p>

            ))
            : <p>feel free to add new tasks</p>
          }
        </div>
        </div>
      </div>
    )
  }
}


export default App