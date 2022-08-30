import React, { Component } from 'react'
import Charities from './Charities'
import Home from './Home'
import Nav from './Nav'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Contributions from './Contributions'

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

  addToContributions = () => {
    this.setState({contributions: this.state.contributions + 10})

 
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
          </Routes>

          {this.state.name}
          <button class="btn btn-outline-dark bg-info " onClick={this.addToContributions}>Contributions</button>

          {this.state.contributions}
          

        </div>
      </BrowserRouter>
    )
  }
}
