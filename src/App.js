import React, {Component} from 'react'
import './App.css'
import {Route, Routes, NavLink} from 'react-router-dom';
import About from './About/About';
import Cars from './Cars/Cars';

class App extends Component {
  render() {

    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/cars">Cars</NavLink>
            </li>
          </ul>
        </nav>

        <hr/>

        <Routes>
            <Route path="/" exact element={<h1>Home page</h1>} />
            <Route path="/about" exact element={<About />} />
            <Route path="/cars" exact element={<Cars />} />
        </Routes>
  
      </div>
    );
  }
}

export default App
