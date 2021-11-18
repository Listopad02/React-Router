import React from 'react';
import './Car.css';
import {useNavigate} from "react-router";

const Car = props => {
  const navigation = useNavigate();
  
  return (
    <div className={'Car'}
         onClick={() => navigation('/cars/' + props.name.toLowerCase())}>
      <h3>Сar name: {props.name}</h3>
      <p>Year: <strong>{props.year}</strong></p>
    </div>
  )
}

export default Car;