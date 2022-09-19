import React, { Component } from 'react'
import Charities from './Charities'
import Home from './Home'
import Nav from './Nav'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Contributions from './Contributions'
import TodoList from './components/TodoList'
import Login from './Login'
import SignUp from './SignUp'
import CreatePost from './CreatePost'

export default class App extends Component {
  constructor () {
    super();
    this.state = {
      user: {},
      location: {},
      contributions: 20,
      name: "Dara's" 
    }
  }

  logMeIn = (user) => {
    this.setState({
      user: user
    })
  }
  

  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />

          
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/charities' element={<Charities />}/>
            <Route path='/contributions' element={<Contributions contributions={this.state.contributions} />}/>
            <Route path='/todolist' element={<TodoList todolist={this.state.todolist} />}/>
            <Route path='/login' element={<Login logMeIn={this.logMeIn}/>}/>
            <Route path='/signup' element={<SignUp />}/>
            <Route path='/posts/create' element={<CreatePost user={this.state.user} />}/>

          </Routes>

          
          

          

        </div>
      </BrowserRouter>
    )
  }
}
