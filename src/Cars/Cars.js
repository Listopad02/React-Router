import React, {Component} from 'react';
import Car from './Car/Car';
import {NavLink} from 'react-router-dom';

export default class Cars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [
        { name: "Ford", year: 2018 },
        { name: "Audi", year: 2016 },
        { name: "Mazda", year: 2010 }
      ]
    }
  }

  render() {
    return (
      <div style={{
        width: 400,
        margin: 'auto',
        paddingTop: '20px',
        textAlign: 'center'
      }}>
        <NavLink to="/" style={{
          border: '1px solid #ccc',
          borderRadius: '5px',
          textDecoration: 'none',
          color: 'black',
          padding: '3px',
          marginBottom: '5px'
        }}>Go to home page</NavLink>
        <hr />
        {this.state.cars.map((car, index) => {
          return (
            <Car
              key={index}
              name={car.name}
              year={car.year}
            />
          )
        })}
      </div>
    )
  }
}