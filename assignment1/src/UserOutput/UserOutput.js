import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
  return (
    <div className="user" style={props.userStyle}>
      <p> { props.name } </p>
      <p> { props.age } </p>
      <p> { props.children } </p>
    </div>  
  )
}

export default UserOutput;
