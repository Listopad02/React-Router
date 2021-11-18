import React, {Component} from 'react'
import './App.css'
import {Route, Routes, NavLink} from 'react-router-dom';
import About from './About/About';
import Cars from './Cars/Cars';
import CarDetail from './CarDetail/CarDetail';

class App extends Component {
  render() {

    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/" exact>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" exact>About</NavLink>
            </li>
            <li>
              <NavLink to="/cars" exact>Cars</NavLink>
            </li>
          </ul>
        </nav>

        <hr/>

        <Routes>
            <Route path="/" exact element={<h1 style={{textAlign: 'center'}}>Home page</h1>} />
            <Route path="/about" exact element={<About />} />
            <Route path="/cars" exact element={<Cars />} />
            <Route path="/cars/:name" exact element={<CarDetail />} />
        </Routes>
  
      </div>
    );
  }
}

export default App
