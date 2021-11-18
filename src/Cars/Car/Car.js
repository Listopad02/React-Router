import React from 'react';
import './Car.css';
import { useHistory } from "react-router";

const Car = props => {
  const history = useHistory();
  return (
      <div className={'Car'}
           onClick={props.history.push('/cars/' + props.name.toLowerCase())}>
        <h3>Сar name: {props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
      </div>
  )
}

export default Car;