import React, {Component} from 'react'
import './App.css'
import {Route, Routes, NavLink} from 'react-router-dom';
import About from './About/About';
import Cars from './Cars/Cars';
import CarDetail from './CarDetail/CarDetail';
import NotFound from './NotFound/NotFound';

class App extends Component {
  state = {
    isLoggedIn: false
  }

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

        <div style={{textAlign: 'center'}}>
          <h3>Logged in: {this.state.isLoggedIn ? 'TRUE' : 'FALSE'}</h3>
          <button onClick={() => this.setState({isLoggedIn: true})}>Log in</button>
        </div>
        
        <Routes>
            <Route path="/" exact element={<h1 style={{textAlign: 'center'}}>Home page</h1>} />
            { this.state.isLoggedIn ? <Route path="/about" exact element={<About />} /> : null }
            <Route path="/cars" exact element={<Cars />} />
            <Route path="/cars/:name" exact element={<CarDetail />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
  
      </div>
    );
  }
}

export default App
