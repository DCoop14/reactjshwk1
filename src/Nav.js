import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          
          <a className="navbar-brand fst-italic fw-bold" href="/">CareNow</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/charities">Charities</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contributions">Contributions</Link>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

