import React, {Component} from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom';
import About from './About/About';
import Cars from './Cars/Cars';

class App extends Component {
  render() {

    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </nav>

        <hr/>

        <Routes>
            <Route path="/about" exact element={<h1>About page</h1>} />
        </Routes>
        

        <About />
        <Cars />
      </div>
    );
  }
}

export default App
