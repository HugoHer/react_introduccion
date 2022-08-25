import React from "react";
import { useState, useEffect } from 'react';

function Card(props){

  const[name, updateName]= useState (props.name)

  useEffect (() => {
    console.log(name)
  })
  
  function changeName (){
    updateName (name.toLowerCase())
  }
    
  return (
    <div onClick={changeName} className="container">
      <div className="card">
        <div className="tarjeta">
      <img className="tarjeta__imagen"
        src={props.background}
        alt={props.name}
      />
      <img className="tarjeta__imagen-background"
        src={props.icon}
        alt={props.name}
        />
      
      <h3> {props.name}</h3>
      <h3>totalQuizzes: {props.totalQuizzes}</h3>
      <h3>users: {props.users}</h3>
      <h3>id: {props.id}</h3>
      <h3>level : {props.level}</h3>
      <h3>companyCode: {props.companyCode}</h3>
      <h3> bootcamp : {props.bootcamp}</h3>
      </div>
      </div>
    </div>
  )
}
export default Card;